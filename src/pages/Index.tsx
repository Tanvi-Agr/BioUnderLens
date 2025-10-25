
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedBlogs } from "@/components/FeaturedBlogs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <Hero />
      <FeaturedBlogs />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
