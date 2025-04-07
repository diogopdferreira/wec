
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-ocean-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

const TeamValues = () => {
  const { t, language } = useLanguage();
  
  const values = [
    {
      title: language === 'en' ? 'Innovation' : 'Inovação',
      description: language === 'en' 
        ? 'We push the boundaries of wave energy technology through creative thinking and research.'
        : 'Avançamos os limites da tecnologia de energia das ondas através de pesquisa e pensamento criativo.'
    },
    {
      title: language === 'en' ? 'Sustainability' : 'Sustentabilidade',
      description: language === 'en'
        ? 'We\'re committed to developing solutions that protect and preserve our oceans.'
        : 'Estamos comprometidos em desenvolver soluções que protejam e preservem nossos oceanos.'
    },
    {
      title: language === 'en' ? 'Collaboration' : 'Colaboração',
      description: language === 'en'
        ? 'We believe in the power of interdisciplinary teamwork to solve complex challenges.'
        : 'Acreditamos no poder do trabalho em equipe interdisciplinar para resolver desafios complexos.'
    },
    {
      title: language === 'en' ? 'Excellence' : 'Excelência',
      description: language === 'en'
        ? 'We strive for the highest standards in engineering and scientific research.'
        : 'Buscamos os mais altos padrões em engenharia e pesquisa científica.'
    }
  ];

  return (
    <section className="py-16 bg-ocean-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-ocean-900 mb-12">{t('teamValues')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} title={value.title} description={value.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamValues;
