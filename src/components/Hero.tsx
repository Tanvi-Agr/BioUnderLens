import { Microscope, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-900">
      <div className="absolute inset-0 bg-[green-99] bg-green-50"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="p-4 backdrop-blur-sm rounded-full bg-green-100">
            <Microscope className="h-16 w-16 text-emerald-300" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 tracking-tight text-zinc-700 md:text-7xl">
          Under the <span className="text-green-600">Lens</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed text-zinc-500">Exploring the fascinating world of biology, one article at a time</p>
        
        
        
        <div className="flex flex-row gap-4 justify-center items-center">
          <Button className="text-white px-4 py-3 text-base my-[40px] bg-emerald-700 hover:bg-emerald-600 rounded-lg font-medium min-w-[120px]" onClick={() => {
            const section = document.getElementById('featured-blogs');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <BookOpen className="mr-2 h-5 w-5" />
            Start Reading
          </Button>
          <Button variant="outline" className="border-gray-400 text-white bg-gray-600 hover:bg-gray-700 hover:text-white px-4 py-3 text-base shadow-md rounded-lg font-medium min-w-[120px]" onClick={() => {
            const section = document.getElementById('about-me');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <Users className="mr-2 h-5 w-5" />
            About Me
          </Button>
        </div>
      </div>
      
    </section>;
};