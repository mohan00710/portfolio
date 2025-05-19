import React, { useState, useEffect } from 'react';
import { ChevronDown, Code2, Binary, Server, FileCode, Cloud, Database, Cog, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  
  const greetings = [
    { text: "Hello", language: "English" },
    { text: "வணக்கம்", language: "Tamil" },
    { text: "Xin chào", language: "Vietnamese" },
    { text: "నమస్కారం", language: "Telugu" },
    { text: "नमस्ते", language: "Hindi" },
    { text: "안녕하세요", language: "Korean" },
    { text: "こんにちは", language: "Japanese" },
    { text: "Hola", language: "Spanish" },
    { text: "你好", language: "Chinese" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white relative px-4">
      <div className="container mx-auto text-center pt-20 md:pt-0">
        <div className="h-16 md:h-24 mb-4 md:mb-8">
          <div className="animate-fade-in">
            <h1 className="text-2xl md:text-6xl font-bold text-gray-800">
              <span className="block text-blue-500 transition-all duration-500 transform">
                {greetings[currentGreeting].text}
              </span>
              <span className="text-xs md:text-sm text-gray-500 mt-1 block">
                {greetings[currentGreeting].language}
              </span>
            </h1>
          </div>
        </div>

        <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-8 text-gray-800">
          I'm <span className="text-blue-500">Mohan</span>
        </h1>

        <h2 className="text-base md:text-2xl text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Server className="w-4 h-4 md:w-6 md:h-6 text-blue-500" />
          Backend Engineer with 4+ years of blockchain expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
          <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base">
            <FileCode className="w-3 h-3 md:w-5 md:h-5 text-blue-500" />
            <span className="text-gray-700">TypeScript</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base">
            <Code2 className="w-3 h-3 md:w-5 md:h-5 text-blue-500" />
            <span className="text-gray-700">Rust</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base">
            <Binary className="w-3 h-3 md:w-5 md:h-5 text-blue-500" />
            <span className="text-gray-700">Move</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base">
            <Cloud className="w-3 h-3 md:w-5 md:h-5 text-blue-500" />
            <span className="text-gray-700">AWS</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
          <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs">
            <Binary className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
            <span className="text-gray-700">Solana</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs">
            <Binary className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
            <span className="text-gray-700">Aptos</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs">
            <Binary className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
            <span className="text-gray-700">Sui</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs">
            <Code2 className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
            <span className="text-gray-700">Smart Contracts</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-3 md:p-4 mb-6 md:mb-8 max-w-xl mx-auto text-xs md:text-base">
          <div className="flex items-center justify-center gap-1 md:gap-3 mb-1 md:mb-2">
            <Briefcase className="w-3 h-3 md:w-5 md:h-5 text-blue-500" />
            <h3 className="text-sm md:text-lg font-medium text-gray-800">Previous Experience</h3>
          </div>
          <p className="text-gray-700">
            <span className="font-medium">Kana Labs</span> | Backend Engineer & Founding Team Member
          </p>
          <p className="text-gray-600 text-xs">
            May 2021 - May 2025 | 4 years
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4 mb-16 md:mb-0">
          <button 
            onClick={scrollToAbout}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 md:px-8 md:py-3 rounded-full transition-all transform hover:scale-105 text-sm md:text-base"
          >
            Explore My Work
          </button>
          <a 
            href="#contact" 
            className="w-full sm:w-auto border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 md:px-8 md:py-3 rounded-full transition-all text-sm md:text-base"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="absolute bottom-4 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <ChevronDown 
            size={20} 
            onClick={scrollToAbout} 
            className="text-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;