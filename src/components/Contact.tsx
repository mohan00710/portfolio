import React from 'react';
import { Mail, Github as GitHub, Linkedin, X } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to reach out to me through any of these platforms.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-8 hover:transform hover:scale-105 transition-transform">
              <Mail size={24} className="text-blue-500 mr-4" />
              <a 
                href="mailto:mohanapriyan107@gmail.com" 
                className="text-gray-700 hover:text-blue-500 transition-colors text-lg"
              >
                mohanapriyan107@gmail.com
              </a>
            </div>
            
            <div className="flex justify-center items-center space-x-6">
              <a 
                href="https://github.com/mohan00710" 
                className="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 bg-white rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <GitHub size={24} className="text-gray-700 group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-600">
                  GitHub
                </span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/mohan-a-aa5b08197/" 
                className="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 bg-white rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={24} className="text-gray-700 group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-600">
                  LinkedIn
                </span>
              </a>
              
              <a 
                href="https://x.com/mohan0799" 
                className="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-4 bg-white rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <X size={24} className="text-gray-700 group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-600">
                  Twitter
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;