import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-blue-100 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">M</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-gray-600 mb-6 text-lg">
              With over 4 years of experience in blockchain technology, I've established myself as a 
              seasoned backend engineer specializing in cross-chain solutions and decentralized systems.
              My expertise spans multiple blockchain platforms including Solana, Aptos, and Sui.
            </p>
            
            <p className="text-gray-600 mb-6 text-lg">
              As a founding engineer at KanaLabs, I've contributed to groundbreaking blockchain applications,
              including a sophisticated liquidity aggregator on Aptos. My technical stack includes TypeScript
              for backend development, Rust for Solana development, and Move for Aptos and Sui platforms.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg">
              I combine my blockchain expertise with strong DevOps knowledge, ensuring robust deployment
              and operational excellence for all projects I handle.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
                Blockchain Development
              </div>
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
                Cross-chain Solutions
              </div>
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
                Smart Contracts
              </div>
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
                P2P Applications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;