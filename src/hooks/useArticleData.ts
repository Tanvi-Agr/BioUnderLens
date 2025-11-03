import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

interface Comment {
  id: string;
  text: string;
  author: string; // device id
  authorName?: string; // short name
  timestamp: number;
}

const DISPLAY_NAME_KEY = 'displayName';
const DEVICE_ID_KEY = 'deviceId';

const getDeviceId = (): string => {
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  if (!deviceId) {
    deviceId = `device_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }
  return deviceId;
};

const getDisplayName = (): string | null => localStorage.getItem(DISPLAY_NAME_KEY);
const setDisplayName = (name: string) => localStorage.setItem(DISPLAY_NAME_KEY, name);

export const useArticleData = (articleSlug: string) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [deviceId] = useState(() => getDeviceId());
  const [displayName, setDisplayNameState] = useState<string | null>(() => getDisplayName());

  const refresh = useCallback(async () => {
    // Likes: count and device status
    const { count: likeCount } = await supabase
      .from('likes_per_device')
      .select('*', { count: 'exact', head: true })
      .eq('article_id', articleSlug);

    setLikes(likeCount || 0);

    const { data: deviceLike } = await supabase
      .from('likes_per_device')
      .select('device_id')
      .eq('article_id', articleSlug)
      .eq('device_id', deviceId)
      .maybeSingle();

    setIsLiked(!!deviceLike);

    // Comments list
    const { data: rows } = await supabase
      .from('comments')
      .select('id, device_id, author_name, text, created_at')
      .eq('article_id', articleSlug)
      .order('created_at', { ascending: true });

    const mapped: Comment[] = (rows || []).map((r: any) => ({
      id: r.id,
      text: r.text,
      author: r.device_id,
      authorName: r.author_name,
      timestamp: r.created_at ? new Date(r.created_at).getTime() : Date.now(),
    }));
    setComments(mapped);
  }, [articleSlug, deviceId]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const ensureDisplayName = (): string | null => {
    let name = getDisplayName();
    if (!name) {
      name = window.prompt('Enter your short name to show on comments (or leave blank for Anonymous):')?.trim() || '';
      if (name) {
        setDisplayName(name);
        setDisplayNameState(name);
      }
    }
    return name || 'Anonymous';
  };

  const handleLike = async () => {
    if (isLiked) {
      // Unlike: remove device row
      await supabase
        .from('likes_per_device')
        .delete()
        .eq('article_id', articleSlug)
        .eq('device_id', deviceId);
    } else {
      // Like: add device row (idempotent upsert by unique constraint)
      await supabase
        .from('likes_per_device')
        .upsert({ article_id: articleSlug, device_id: deviceId }, { onConflict: 'article_id,device_id' });
    }
    await refresh();
  };

  const handleSubmitComment = async (commentText: string) => {
    if (!commentText.trim()) return false;
    const name = ensureDisplayName();

    await supabase.from('comments').insert({
      article_id: articleSlug,
      device_id: deviceId,
      author_name: name || 'Anonymous',
      text: commentText.trim(),
    });

    await refresh();
    return true;
  };

  const handleDeleteComment = async (commentId: string) => {
    // Only allow deletion for comments by this device
    const target = comments.find(c => c.id === commentId);
    if (!target || target.author !== deviceId) return false;

    await supabase
      .from('comments')
      .delete()
      .eq('id', commentId)
      .eq('device_id', deviceId);

    await refresh();
    return true;
  };

  const canDeleteComment = (commentId: string) => {
    const c = comments.find(c => c.id === commentId);
    return !!c && c.author === deviceId;
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
    canDeleteComment,
  };
};
