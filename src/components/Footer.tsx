
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
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Microscope className="h-8 w-8 text-emerald-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Under the Lens</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Exploring the fascinating world of biology, feeding curious minds with in-depth 
              knowledge and busting myths along the way.
            </p>
            <div className="flex space-x-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  className="hover:text-emerald-400 transition-colors bg-transparent p-0 m-0 border-0 outline-none text-left"
                  onClick={() => scrollToSection('featured-blogs')}
                >
                  Latest Articles
                </button>
              </li>
              <li>
                <button
                  className="hover:text-emerald-400 transition-colors bg-transparent p-0 m-0 border-0 outline-none text-left"
                  onClick={() => scrollToSection('about-me')}
                >
                  About Me
                </button>
              </li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Monthly Themes</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          {/* Copyright line removed as requested */}
        </div>
      </div>
    </footer>
  );
};
