import { ArrowLeft, Calendar, Clock, Heart, Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useArticleData } from "@/hooks/useArticleData";

const Mitochondria = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const { likes, isLiked, comments, handleLike, handleSubmitComment, handleDeleteComment, canDeleteComment } = useArticleData('mitochondria');

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
              <span>October 25, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>3 min read</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Powerhouse Myth: Why Mitochondria Are More Than Energy Factories
          </h1>
          
          <div className="flex items-center gap-2">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Cell Biology
            </span>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            "Mitochondria is the powerhouse of the cell" I'm sure all of us have heard this statement hundreds of times, maybe even learnt about ATP production that fuels all cellular activities. But is that it?
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            With a diameter of only 0.5–1 μm, mitochondria are not only responsible for about 90% of the energy that cells need to function, but also for cell death, immune defense, cell growth and differentiation, essential cellular signaling, and it even plays a small part in aging. These equally important functions are often forgotten about because of the blinding spotlight on mitochondria being portrayed as energy factories, so, with this article I hope to explore 3 other significant functions, highlighting why mitochondria are so much more than just the "powerhouse of the cell".
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Apoptosis</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Apoptosis, or programmed cell death, is an essential process for the erasure of "faulty" cells. When a cell's life span ends, it becomes irreparably damaged, it malfunctions, or becomes dangerous due to DNA mutations (as seen in precancerous cells), our multitalented star, mitochondria, triggers the cell's self-destruct mode by releasing the poision, <strong>cytochrome c</strong>. Cytochrome c is a molecule that activates a family of enzymes known as caspases which then orchestrate the controlled dismantling of the cell. Acting like molecular scissors, these caspases cut up the cell's structural and regulatory proteins, hence shrinking it and gradually dividing it into several membrane bound apoptotic bodies which are cleared later by immune cells. If it weren't for mitochondria releasing cytochrome c, this crucial process would never be initiated.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Cellular signaling</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Under stress, whether it is from environmental changes or infections, cells depend on their trusty mitochondria to send out chemical signals that help in adaptation and change. By influencing the balance between two molecules <strong>NAD+</strong> and <strong>NADH</strong> (2 forms of the coenzyme NAD - nicotinamide adenine dinucleotide), mitochondria controls the cell's rate of energy production, helping control gene expression and whether the cell should keep growing, slow down, or activate protective pathways. NAD+ and NADH are the cell's fuel gauge where in NAD+ is the "empty" form and NADH is the "charged" form. The ratio between the two is the cell's metabolic thermostat - high NAD+ levels ramp up energy production, activate enzymes which repair damaged DNA and enhance cell resilience, while risen NADH levels indicate energy abundance hence prompting slow energy generation and switch the focus to growth and biosynthesis. In this way, the NAD⁺/NADH balance doesn't just measure energy — it decides how the cell lives, works, and survives under stress.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Immune Defense</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The mitochondria's very own DNA (<strong>mtDNA</strong>), left over from their bacterial ancestry, plays a key role in setting off alarms to alert the immune system of danger due to their resemblance to bacterial DNA. In response to cellular stress or viral infections, mtDNA can leak out of the organelle which is immediately recognized by the enzyme cGAS hence activating the protein STING (Stimulator of Interferon Genes). Moments later interferons (molecules that interfere with virus replication thus inhibiting it) and inflammatory signals are produced, activating our defense system to fight the pathogens. In addition to the mitochondria's role as a sensor, it also fosters an army of its own and sends out its soldiers when danger arises. These soldiers are called reactive oxygen species (<strong>ROS</strong>) and these molecules directly aid in killing the invading pathogens via oxidative damage to their cellular components, for example braking the double strand of the DNA, as well as waking up immune cells around them which further trigger the inflammation required to battle the enemies.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            So the next time someone mentions that mitochondria is the "powerhouse of the cell", they aren't wrong but pause to remember that these wondrous cell organelles that are only seen under the lens do so much more.
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
                  <div key={commentItem.id} className="bg-gray-50 p-3 rounded-lg border border-gray-200 group hover:bg-gray-100 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">{commentItem.authorName || 'Anonymous'}</div>
                        <p className="text-gray-700 text-sm leading-relaxed">{commentItem.text}</p>
                      </div>
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

export default Mitochondria;
