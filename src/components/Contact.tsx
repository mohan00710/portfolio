import React, { useState } from 'react';
import { Mail, Send, Github as GitHub, Linkedin, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out to me directly.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-full py-3 px-6 rounded-lg transition-all ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 text-green-600 bg-green-50 p-3 rounded-lg text-center">
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 text-red-600 bg-red-50 p-3 rounded-lg text-center">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <Mail size={24} className="text-blue-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">mohanapriyan107@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-8">
                <a 
                  href="https://github.com/mohan00710" 
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub size={20} className="text-gray-700" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohan-a-aa5b08197/" 
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} className="text-gray-700" />
                </a>
                <a 
                  href="https://x.com/mohan0799" 
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X size={20} className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;