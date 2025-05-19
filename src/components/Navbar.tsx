import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
            <div className="text-xl font-semibold text-blue-500">MOHAN</div>
            <div className="flex items-center text-gray-600 text-xs md:text-sm bg-blue-50 px-2 py-1 md:px-3 md:py-1 rounded-full mt-1 md:mt-0">
              <MapPin size={12} className="text-blue-500 mr-1" />
              <span>Da Nang, Vietnam</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-500 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg absolute left-4 right-4">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-500 transition-colors py-2 capitalize text-left px-4"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;