import { ArrowLeft, Calendar, Clock, Heart, Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useArticleData } from "@/hooks/useArticleData";

const Dermatillomania = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const { likes, isLiked, comments, handleLike, handleSubmitComment, handleDeleteComment, canDeleteComment } = useArticleData('dermatillomania');

  const onSubmitComment = () => {
    if (handleSubmitComment(comment)) {
      setComment("");
    }
  };

  const onDeleteComment = (commentId: string) => {
    handleDeleteComment(commentId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Articles
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>October 18, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>2 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dermatillomania Decoded: The Brain Chemistry Behind Skin Picking
          </h1>
          
          <div className="flex items-center gap-2">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Neuroscience
            </span>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Today, we're going under the lens to explore the brain chemistry, emotional roots, and structural changes that make skin picking such a difficult disorder to break.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Skin picking disorder, also called dermatillomania or excoriation disorder, is when a person feels a strong urge to pick at their skin. Target areas are often around the face, fingers, or arms and sometimes it leads to bleeding, scars or post-inflammatory hyperpigmentation. It sounds like a repetitive habit that's rather painful but if that's the case, then why is it so relieving and so difficult to get rid of? There's a lot more going on under the surface, especially in the brain.
          </p>

          <div className="relative mb-6">
            {/* Image positioned on the left side */}
            <div className="float-left mr-6 mb-4 w-48">
              <img 
                src="/nucleus_accumbens.png" 
                alt="MRI scan showing the nucleus accumbens region of the brain"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-xs text-gray-500 text-center mt-1 italic">
                Nucleus Accumbens
              </p>
            </div>
            
            {/* 2nd paragraph text that flows around the image */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Let's start there. The brain has different regions that all work together to help us manage emotions, control our impulses, and respond to rewards (like things that feel good or relieve stress). One such part, called the <strong>nucleus accumbens (NAc)</strong>, helps us feel motivation or pleasure when we anticipate something rewarding like eating a favorite food or finishing a task via the release of dopamine. In people with dermatillomania, the NAc doesn't respond as strongly when a reward is expected but once the person picks their skin, a strong dopamine release gets triggered causing instant gratification or relief. In other words, the brain doesn't build up much excitement about anything before picking—but it lights up intensely during or after.
            </p>
            
            {/* Clear floats */}
            <div className="clear-both"></div>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            But where does this begin and what causes it? Before an episode, many people experience anxiety, stress, sadness, boredom, or frustration. Picking becomes a way to release that pressure. When the act of picking reduces those uncomfortable emotions, the brain remembers that relief—and so the cycle repeats. This is called negative reinforcement: the action takes away a negative feeling hence it becomes more likely to happen again, creating a vicious cycle.
          </p>

          <div className="relative mb-6">
            {/* Images positioned on the right side */}
            <div className="float-right ml-6 mb-4 w-48">
              <div className="space-y-4">
                <div>
                  <img 
                    src="/MRI_orbitofrontal_cortex.png" 
                    alt="MRI scan showing the orbitofrontal cortex region of the brain"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <p className="text-xs text-gray-500 text-center mt-1 italic">
                    Orbitofrontal Cortex
                  </p>
                </div>
                <div>
                  <img 
                    src="/MRI_anterior_cingulate_cortex.png" 
                    alt="MRI scan showing the anterior cingulate cortex region of the brain"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <p className="text-xs text-gray-500 text-center mt-1 italic">
                    Anterior Cingulate Cortex
                  </p>
                </div>
              </div>
            </div>
            
            {/* 4th paragraph text that flows around images */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Other important areas of the brain that help with self-control and decision-making like the anterior cingulate cortex and orbitofrontal cortex stop communicating properly. Think of these regions as internal brakes that help us stop or resist an urge. In people with dermatillomania, these "brake systems" are weakened or disorganized, making it much harder to stop once the urge begins, even if the person truly wants to.
            </p>
            
            {/* 5th paragraph that can wrap around the images */}
            <p className="text-lg text-gray-700 leading-relaxed">
              In the short term, skin picking provides a sense of relief, but is usually followed by regret, embarrassment, or guilt which is often the reason why many avoid talking about it or seeking help. Over time, repeated picking can damage the skin and make one feel isolated or ashamed due to changes in their looks and their supposed lack of control. The brain becomes more "wired" to use picking as a way to cope with emotions, making it even harder to break free.
            </p>
            
            {/* Clear floats */}
            <div className="clear-both"></div>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Due to the lack of prevalancy compared to other psychiatric conditions such as depression, schizophrenia, and OCD, dermatillomania is under-researched—even though it often coexists with these conditions. But understanding the hidden processes behind it and asking "why?" is the first step towards realization, healing and change.
          </p>
        </article>

        {/* Like Button */}
        <div className="flex items-center gap-2 mt-12 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500' : ''}`} />
            <span>{likes}</span>
          </Button>
        </div>

        {/* Comments Section */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Comments</h3>
          <p className="text-sm text-gray-600 mb-6">Share your thoughts, suggestions, or questions below!</p>
          
          <div className="space-y-4">
            {/* Comment Input */}
            <div className="flex gap-2">
              <Textarea
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1"
                rows={3}
              />
              <Button 
                onClick={onSubmitComment}
                disabled={!comment.trim()}
                className="self-end"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            {/* Comments List */}
            {comments.length > 0 && (
              <div className="space-y-3 mt-6">
                {comments.map((commentItem) => (
                  <div key={commentItem.id} className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-start justify-between group hover:bg-gray-100 transition-colors">
                    <p className="text-gray-700 text-sm mr-3 flex-1 leading-relaxed">{commentItem.text}</p>
                    {canDeleteComment(commentItem.id) && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => onDeleteComment(commentItem.id)}
                        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
                        aria-label="Delete comment"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dermatillomania; 