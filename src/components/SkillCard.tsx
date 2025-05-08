import React from 'react';

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <div className="flex flex-col items-center mb-4">
        {category.icon}
        <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span 
            key={index}
            className="text-sm px-3 py-1 bg-white text-blue-600 rounded-full border border-blue-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;