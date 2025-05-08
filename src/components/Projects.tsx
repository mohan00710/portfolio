import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Liquidity Aggregator",
      description: "Built a sophisticated liquidity aggregator on Solana and Aptos that sources optimal trading routes across multiple DEXs, ensuring best execution prices and minimal slippage for traders.",
      tags: ["Solana", "Aptos", "DeFi", "TypeScript", "Rust", "Move"],
      link: "#",
      repo: "#"
    },
    {
      id: 2,
      title: "Cross-chain Liquidity Aggregator",
      description: "Developed a cross-chain liquidity aggregator enabling seamless asset transfers and trading between Solana, Aptos, and Sui networks, with built-in price optimization and security measures.",
      tags: ["Cross-chain", "DeFi", "Solana", "Aptos", "Sui", "Smart Contracts"],
      link: "#",
      repo: "#"
    },
    {
      id: 3,
      title: "Trident RPC Load Balancer",
      description: "Engineered a high-performance RPC load balancer for Aptos network, ensuring optimal distribution of requests and enhanced reliability for blockchain operations.",
      tags: ["Aptos", "RPC", "Load Balancing", "Infrastructure", "TypeScript"],
      link: "#",
      repo: "#"
    },
    {
      id: 4,
      title: "KanaLabs Core Infrastructure",
      description: "Contributed to core infrastructure development at KanaLabs, implementing critical blockchain integrations and maintaining high-availability systems.",
      tags: ["Blockchain", "Infrastructure", "DeFi", "DevOps"],
      link: "#",
      repo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Highlighting my key contributions in blockchain technology and DeFi infrastructure at KanaLabs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in learning more about these projects?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
          >
            <ExternalLink size={18} className="mr-2" />
            Get in touch for more details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;