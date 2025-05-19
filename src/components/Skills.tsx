import React from 'react';
import { Code2, Server, Binary, Cog, Database, GitBranch } from 'lucide-react';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6 text-blue-500 mb-2" />,
      skills: ["Node.js", "TypeScript", "Rust", "Move"]
    },
    {
      id: 2,
      title: "Blockchain Development",
      icon: <Binary className="w-6 h-6 text-blue-500 mb-2" />,
      skills: ["Solana", "Aptos", "Sui", "Smart Contracts", "Offchain Solution"]
    },
    {
      id: 3,
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-blue-500 mb-2" />,
      skills: ["API", "gRPC", "P2P", "Microservices", "Backend Servers"]
    },
    {
      id: 4,
      title: "DevOps & Tools",
      icon: <Cog className="w-6 h-6 text-blue-500 mb-2" />,
      skills: ["Docker", "CI/CD", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My technical expertise spans blockchain development, backend engineering, and DevOps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map(category => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;