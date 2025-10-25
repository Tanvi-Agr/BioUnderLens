import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const FeaturedBlogs = () => {
  const navigate = useNavigate();
  const currentTheme = "Cellular Biology";
  const blogPosts = [{
    title: "The Powerhouse Myth: Why Mitochondria Are More Than Just Energy Factories",
    excerpt: "Exploring the diverse roles of mitochondria beyond ATP production, from cellular signaling to programmed cell death.",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Cell Biology",
    slug: "mitochondria"
  }, {
    title: "Dermatillomania Decoded: The Brain Chemistry Behind Skin Picking",
    excerpt: "Uncovering the neurological and emotional mechanisms that make dermatillomania a difficult disorder to overcome.",
    date: "2025-07-12",
    readTime: "2 min read",
    image: "dermatillomania-brain-skin.png",
    category: "Neuroscience",
    slug: "dermatillomania"
  }];
  return <section id="featured-blogs" className="py-20 bg-gray-50">
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-emerald-600">Blogs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the fascinating world of biology with our weekly explorations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-emerald-50 group-hover:text-emerald-600"
                    onClick={() => {
                      if (post.slug === "dermatillomania") {
                        navigate("/dermatillomania");
                      }
                    }}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>;
};