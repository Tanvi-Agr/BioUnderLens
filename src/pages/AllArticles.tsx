import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AllArticles = () => {
  const navigate = useNavigate();

  const blogPosts = [{
    title: "The Powerhouse Myth: Why Mitochondria Are More Than Energy Factories.",
    excerpt: "Exploring the diverse roles of mitochondria beyond ATP production, from cellular signaling to programmed cell death.",
    date: "2025-10-25",
    readTime: "3 min read",
    image: "mitochondria-2.png",
    category: "Cell Biology",
    slug: "mitochondria"
  }, {
    title: "Dermatillomania Decoded: The Brain Chemistry Behind Skin Picking",
    excerpt: "Uncovering the neurological and emotional mechanisms that make dermatillomania a difficult disorder to overcome.",
    date: "2025-10-18",
    readTime: "2 min read",
    image: "dermatillomania-brain-skin.png",
    category: "Neuroscience",
    slug: "dermatillomania"
  }];

  const handleArticleClick = (slug: string) => {
    if (slug === "dermatillomania") {
      navigate("/dermatillomania");
      window.scrollTo(0, 0);
    } else if (slug === "mitochondria") {
      navigate("/mitochondria");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All <span className="text-emerald-600">Articles</span>
          </h1>
          <p className="text-xl text-gray-600">
            Explore our collection of biology articles
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-4 gap-4">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full min-h-[120px] object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-3 p-3 flex flex-col justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold group-hover:text-emerald-600 transition-colors mb-1">
                      {post.title}
                    </CardTitle>
                    
                    <p className="text-gray-600 mb-2 leading-relaxed text-xs line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3 text-[10px] text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-2.5 w-2.5 mr-0.5" />
                        {new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-2.5 w-2.5 mr-0.5" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="self-start mt-1 text-xs h-7 px-2 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors"
                    onClick={() => handleArticleClick(post.slug)}
                  >
                    Read
                    <ArrowRight className="ml-1 h-2.5 w-2.5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
