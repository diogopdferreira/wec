
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <Button 
      onClick={toggleLanguage} 
      variant="ghost" 
      size="sm"
      className="flex items-center gap-1 text-ocean-800 hover:text-ocean-600 hover:bg-ocean-100 transition-colors"
    >
      <Globe size={16} />
      <span>{t('switchLanguage')}</span>
    </Button>
  );
};

export default LanguageToggle;
