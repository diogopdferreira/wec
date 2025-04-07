
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

// Common translations used across the site
const translations: Translations = {
  // Navigation
  home: { en: 'Home', pt: 'Início' },
  team: { en: 'Team', pt: 'Equipa' },
  prototype: { en: 'Prototype', pt: 'Protótipo' },
  blog: { en: 'Blog', pt: 'Blog' },
  
  // Homepage
  welcomeTitle: { 
    en: 'Wave Energy Converter', 
    pt: 'Wave Energy Converter' 
  },
  welcomeSubtitle: { 
    en: 'Harnessing the power of ocean waves for a sustainable future', 
    pt: 'Aproveitando o poder das ondas do oceano para um futuro sustentável' 
  },
  learnMore: { en: 'Learn More', pt: 'Saiba Mais' },
  aboutProject: { en: 'About the Project', pt: 'Sobre o Projeto' },
  aboutDescription: { 
    en: 'Our Wave Energy Converter (WEC) project aims to serve as a proof of concept for innovative technology that captures energy from ocean waves through a simplified design, demonstrating its potential for clean, renewable electricity generation.', 
    pt: 'Nosso projeto de Wave Energy Converter (WEC) visa servir como prova de conceito para tecnologia inovadora que captura energia das ondas do oceano através de um design simplificado, demonstrando seu potencial para geração de eletricidade limpa e renovável.' 
  },
  
  // Team Page
  teamTitle: { en: 'Team', pt: 'Equipa' },
  teamSubtitle: { 
    en: 'Meet the team behind the project', 
    pt: 'Conheça a equipa por trás do projeto' 
  },
  teamValues: { en: 'Team Values', pt: 'Valores da Equipa' },
  
  // Prototype Page
  prototypeTitle: { en: 'Prototype', pt: 'Protótipo' },
  prototypeSubtitle: { 
    en: 'Exploring the technology and design of our Wave Energy Converter', 
    pt: 'Explorando a tecnologia e o design do nosso Wave Energy Converter' 
  },
  
  // Blog Page
  blogTitle: { en: 'Project Blog', pt: 'Blog do Projeto' },
  blogSubtitle: { 
    en: 'Updates, insights, and progress on our Wave Energy Converter journey', 
    pt: 'Atualizações, insights e progresso em nossa jornada com o Wave Energy Converter' 
  },
  
  // Language Toggle
  switchLanguage: { en: 'PT', pt: 'EN' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
