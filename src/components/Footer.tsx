import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-semibold text-blue-500">MOHAN</div>
            <p className="text-gray-600 text-sm mt-1">
              Backend Engineer & Blockchain Developer
            </p>
          </div>
          
          <div className="text-gray-600 text-sm">
            © {currentYear} Mohan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;