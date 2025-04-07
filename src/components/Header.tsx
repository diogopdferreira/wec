import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const {
    t
  } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routes = [{
    name: 'home',
    path: '/'
  }, {
    name: 'team',
    path: '/team'
  }, {
    name: 'prototype',
    path: '/prototype'
  }, {
    name: 'blog',
    path: '/blog'
  }];
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-ocean-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 mr-2 bg-ocean-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10C5.48276 10 7.13793 7 9.62069 7C12.1034 7 12.931 10 15.4138 10C17.8966 10 19.5517 7 22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 17C5.48276 17 7.13793 14 9.62069 14C12.1034 14 12.931 17 15.4138 17C17.8966 17 19.5517 14 22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-bold text-ocean-800">WEC</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex items-center space-x-1">
            {routes.map(route => <Link key={route.path} to={route.path} className={cn("px-3 py-2 rounded-md text-sm font-medium transition-colors", location.pathname === route.path ? "text-ocean-600 bg-ocean-50" : "text-gray-700 hover:text-ocean-600 hover:bg-ocean-50")}>
                {t(route.name)}
              </Link>)}
          </nav>
          <div className="ml-4 pl-4 border-l border-gray-200">
            <LanguageToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <LanguageToggle />
          <button onClick={toggleMobileMenu} className="ml-2 p-2 rounded-md text-gray-700 hover:text-ocean-600 hover:bg-ocean-50">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {routes.map(route => <Link key={route.path} to={route.path} onClick={() => setMobileMenuOpen(false)} className={cn("px-3 py-2 rounded-md text-base font-medium", location.pathname === route.path ? "text-ocean-600 bg-ocean-50" : "text-gray-700 hover:text-ocean-600 hover:bg-ocean-50")}>
                {t(route.name)}
              </Link>)}
          </nav>
        </div>}
    </header>;
};
export default Header;