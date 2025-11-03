import { useState, useEffect } from 'react';

interface Comment {
  id: string;
  text: string;
  author: string; // device id
  authorName?: string; // short name
  timestamp: number;
}

interface ArticleData {
  likes: number;
  likedBy: string[];
  comments: Comment[];
}

const STORAGE_KEY = 'articleData';
const DISPLAY_NAME_KEY = 'displayName';

// Get a persistent device ID from localStorage
const getDeviceId = (): string => {
  const deviceIdKey = 'deviceId';
  let deviceId = localStorage.getItem(deviceIdKey);
  
  if (!deviceId) {
    deviceId = `device_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem(deviceIdKey, deviceId);
  }
  
  return deviceId;
};

const getDisplayName = (): string | null => {
  return localStorage.getItem(DISPLAY_NAME_KEY);
};

const setDisplayName = (name: string) => {
  localStorage.setItem(DISPLAY_NAME_KEY, name);
};

export const useArticleData = (articleSlug: string) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [deviceId] = useState(() => getDeviceId());
  const [displayName, setDisplayNameState] = useState<string | null>(() => getDisplayName());

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const allArticlesData = JSON.parse(storedData);
        const articleData: ArticleData = allArticlesData[articleSlug] || { likes: 0, likedBy: [], comments: [] };
        
        setLikes(articleData.likes || 0);
        setIsLiked(articleData.likedBy?.includes(deviceId) || false);
        setComments(articleData.comments || []);
      }
    } catch (error) {
      console.error('Error loading article data:', error);
    }
  }, [articleSlug, deviceId]);

  // Save data to localStorage
  const saveData = (data: ArticleData) => {
    try {
      const existingData = localStorage.getItem(STORAGE_KEY);
      const allArticlesData = existingData ? JSON.parse(existingData) : {};
      allArticlesData[articleSlug] = data;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allArticlesData));
    } catch (error) {
      console.error('Error saving article data:', error);
    }
  };

  const ensureDisplayName = () => {
    let name = getDisplayName();
    if (!name) {
      name = window.prompt('Enter your short name (shown on comments):')?.trim() || '';
      if (name) {
        setDisplayName(name);
        setDisplayNameState(name);
      }
    }
    return name || null;
  };

  const handleLike = () => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    const allArticlesData = storedData ? JSON.parse(storedData) : {};
    const articleData: ArticleData = allArticlesData[articleSlug] || { likes: 0, likedBy: [], comments: [] };
    
    const likedBy = articleData.likedBy || [];
    const isCurrentlyLiked = likedBy.includes(deviceId);
    
    let newLikes: number;
    let newLikedBy: string[];
    
    if (isCurrentlyLiked) {
      // Unlike: decrease likes and remove device from likedBy
      newLikes = Math.max(0, likes - 1);
      newLikedBy = likedBy.filter((id: string) => id !== deviceId);
      setIsLiked(false);
    } else {
      // Like: increase likes and add device to likedBy
      newLikes = likes + 1;
      newLikedBy = [...likedBy, deviceId];
      setIsLiked(true);
    }
    
    setLikes(newLikes);
    
    // Save to localStorage
    const updatedData: ArticleData = {
      ...articleData,
      likes: newLikes,
      likedBy: newLikedBy
    };
    saveData(updatedData);
  };

  const handleSubmitComment = (commentText: string) => {
    if (commentText.trim()) {
      const name = displayName || ensureDisplayName();
      if (!name) return false;

      const newComment: Comment = {
        id: `comment_${Date.now()}_${Math.random()}`,
        text: commentText,
        author: deviceId,
        authorName: name,
        timestamp: Date.now()
      };
      
      const storedData = localStorage.getItem(STORAGE_KEY);
      const allArticlesData = storedData ? JSON.parse(storedData) : {};
      const articleData: ArticleData = allArticlesData[articleSlug] || { likes: 0, likedBy: [], comments: [] };
      
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      
      // Save to localStorage
      const updatedData: ArticleData = {
        ...articleData,
        comments: updatedComments
      };
      saveData(updatedData);
      
      return true;
    }
    return false;
  };

  const handleDeleteComment = (commentId: string) => {
    const comment = comments.find(c => c.id === commentId);
    
    // Only allow deletion if user is the author
    if (comment && comment.author === deviceId) {
      const updatedComments = comments.filter(c => c.id !== commentId);
      setComments(updatedComments);
      
      // Save to localStorage
      const storedData = localStorage.getItem(STORAGE_KEY);
      const allArticlesData = storedData ? JSON.parse(storedData) : {};
      const articleData: ArticleData = allArticlesData[articleSlug] || { likes: 0, likedBy: [], comments: [] };
      
      const updatedData: ArticleData = {
        ...articleData,
        comments: updatedComments
      };
      saveData(updatedData);
      
      return true;
    }
    return false;
  };

  const canDeleteComment = (commentId: string) => {
    const comment = comments.find(c => c.id === commentId);
    return comment && comment.author === deviceId;
  };

  const setUserDisplayName = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setDisplayName(trimmed);
    setDisplayNameState(trimmed);
  };

  return {
    likes,
    isLiked,
    comments,
    displayName,
    setUserDisplayName,
    handleLike,
    handleSubmitComment,
    handleDeleteComment,
    canDeleteComment
  };
};
