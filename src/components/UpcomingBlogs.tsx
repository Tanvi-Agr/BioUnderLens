import { Calendar, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const UpcomingBlogs = () => {
  const upcomingPosts = [{
    title: "The Immune System's Memory: How Your Body Remembers Threats",
    description: "Exploring adaptive immunity and the fascinating world of immunological memory",
    date: "2024-01-22",
    theme: "Immunology",
    type: "Deep Dive"
  }, {
    title: "Photosynthesis Myths: Beyond the Simple Equation",
    description: "Unraveling the complex biochemistry behind Earth's most important process",
    date: "2024-01-29",
    theme: "Plant Biology",
    type: "Myth Buster"
  }, {
    title: "Epigenetics: How Environment Shapes Our Genes",
    description: "The revolutionary science of how our experiences can alter gene expression",
    date: "2024-02-05",
    theme: "Genetics",
    type: "Research Focus"
  }];
  return <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Coming <span className="text-green-700">Soon</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get excited for these upcoming deep dives into the world of biology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {upcomingPosts.map((post, index) => <Card key={index} className="relative overflow-hidden border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
              <div className="absolute top-4 right-4">
                <Star className="h-5 w-5 text-emerald-500" />
              </div>
              
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.theme}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.type}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Expected: {new Date(post.date).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Next Month's Theme: <span className="text-emerald-600">Evolutionary Biology</span>
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Join us as we explore the mechanisms of evolution, from natural selection to speciation
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Darwin's Finches Revisited</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Molecular Evolution</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Convergent Evolution</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm">Human Evolution Myths</span>
          </div>
        </div>
      </div>
    </section>;
};