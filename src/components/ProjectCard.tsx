import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full border border-gray-100">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {project.tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex mt-4 pt-4 border-t border-gray-100">
        <a 
          href={project.link} 
          className="text-blue-500 hover:text-blue-600 flex items-center mr-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={16} className="mr-1" />
          Demo
        </a>
        <a 
          href={project.repo} 
          className="text-blue-500 hover:text-blue-600 flex items-center transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} className="mr-1" />
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;