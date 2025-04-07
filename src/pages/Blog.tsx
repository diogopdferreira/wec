
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Blog = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen py-24 flex flex-col items-center justify-center bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-ocean-900 mb-6">
          {language === 'en' ? 'Blog' : 'Blog'}
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl text-ocean-600 mb-8">
            {language === 'en' ? 'Coming Soon' : 'Em Breve'}
          </p>
          
          <div className="relative h-1 bg-ocean-100 rounded overflow-hidden w-64 mx-auto">
            <div className="absolute top-0 left-0 h-full bg-ocean-500 animate-pulse w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
