
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const TeamHero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 wave-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ocean-900 mb-6">
            {t('teamTitle')}
          </h1>
          <p className="text-xl text-ocean-800 mb-6">
            {t('teamSubtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
