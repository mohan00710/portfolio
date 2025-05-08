import { FileCode, Code2, Binary, Cloud, Server, ChevronDown, Briefcase } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white relative">
      {/* Open to Work Badge - Positioned at the top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 bg-green-100 border border-green-500 px-6 py-3 rounded-full shadow-md animate-pulse">
          <Briefcase className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-medium">Open to Work</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-gray-800 animate-fade-in">
          Hello, I'm <span className="text-blue-500">Mohan</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Server className="w-6 h-6 text-blue-500" />
          Backend Engineer with 4+ years of blockchain expertise
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <FileCode className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">TypeScript</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Code2 className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">Rust</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Binary className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">Move</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Cloud className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">AWS</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Binary className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Solana</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Binary className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Aptos</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Binary className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Sui</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Code2 className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Smart Contracts</span>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-8 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Briefcase className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-medium text-gray-800">Previous Experience</h3>
          </div>
          <p className="text-gray-700">
            <span className="font-medium">Kana Labs</span> | Backend Engineer & Founding Team Member
          </p>
          <p className="text-gray-600 text-sm">
            May 2021 - May 2025 | 4 years
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={scrollToAbout}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Explore My Work
          </button>
          <a 
            href="#contact" 
            className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full transition-all"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <ChevronDown 
            size={32} 
            onClick={scrollToAbout} 
            className="text-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;