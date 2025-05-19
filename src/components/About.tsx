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
             I'm a backend engineer with a strong passion for building robust and scalable infrastructure. With experience in blockchain technologies, I focus on designing and developing backend systems, peer-to-peer (P2P) solutions, and cross-chain protocols.
            </p>
            
            <p className="text-gray-600 mb-6 text-lg">
             As a founding engineer at Kana Labs, I played a key role in architecting core systems and delivering high-performance backend services. My work spans across DeFi, where I’ve built liquidity aggregators, trading applications, and seamless cross-chain experiences that power real-world decentralized finance products.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg">
             I thrive at the intersection of systems engineering and blockchain innovation—solving hard problems and creating tools that make decentralized applications faster, more secure, and developer-friendly.

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