
import { Microscope, Mail } from "lucide-react";

export const Footer = () => {
  // Scroll to a section by id
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-[2fr_1fr] md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-2 md:mb-4">
              <Microscope className="h-6 w-6 md:h-8 md:w-8 text-emerald-400 mr-2 md:mr-3" />
              <h3 className="text-lg md:text-2xl font-bold text-white">Under the Lens</h3>
            </div>
            <p className="text-gray-400 text-xs md:text-base mb-2 md:mb-6 leading-relaxed">
              Exploring the fascinating world of biology, feeding curious minds with in-depth 
              knowledge and busting myths along the way.
            </p>
          </div>
          <div className="text-left md:text-left">
            <h4 className="text-sm md:text-lg font-semibold text-white mb-2 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <button
                  className="hover:text-emerald-400 transition-colors bg-transparent p-0 m-0 border-0 outline-none text-left text-xs md:text-base"
                  onClick={() => scrollToSection('featured-blogs')}
                >
                  Latest Articles
                </button>
              </li>
              <li>
                <button
                  className="hover:text-emerald-400 transition-colors bg-transparent p-0 m-0 border-0 outline-none text-left text-xs md:text-base"
                  onClick={() => scrollToSection('about-me')}
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  className="hover:text-emerald-400 transition-colors bg-transparent p-0 m-0 border-0 outline-none text-left text-xs md:text-base"
                  onClick={() => scrollToSection('mission')}
                >
                  My Mission
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 md:pt-8 text-center">
          {/* Copyright line removed as requested */}
        </div>
      </div>
    </footer>
  );
};
