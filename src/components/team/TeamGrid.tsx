
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TeamMemberCard from './TeamMemberCard';

const TeamGrid = () => {
  const { language } = useLanguage();
  
  const teamMembers = [
    {
      name: {
        en: 'Diogo Ferreira',
        pt: 'Diogo Ferreira'
      },
      role: {
        en: 'Team Member',
        pt: 'Membro da Equipa'
      },
      bio: {
        en: 'Contributing to the Wave Energy Converter project development and implementation.',
        pt: 'Contribuindo para o desenvolvimento e implementação do projeto Wave Energy Converter.'
      },
      avatar: 'D',
      imagePath: '/images/Diogo.jpg'
    },
    {
      name: {
        en: 'Duarte Oliveira',
        pt: 'Duarte Oliveira'
      },
      role: {
        en: 'Team Member',
        pt: 'Membro da Equipa'
      },
      bio: {
        en: 'Contributing to the Wave Energy Converter project development and implementation.',
        pt: 'Contribuindo para o desenvolvimento e implementação do projeto Wave Energy Converter.'
      },
      avatar: 'D',
      imagePath: '/lovable-uploads/ac189922-9b95-43e6-a9ae-594b9decf089.png'
    },
    {
      name: {
        en: 'Gonçalo Pinheiro',
        pt: 'Gonçalo Pinheiro'
      },
      role: {
        en: 'Team Member',
        pt: 'Membro da Equipa'
      },
      bio: {
        en: 'Contributing to the Wave Energy Converter project development and implementation.',
        pt: 'Contribuindo para o desenvolvimento e implementação do projeto Wave Energy Converter.'
      },
      avatar: 'G',
      imagePath: '/lovable-uploads/2547db5b-75dd-48b4-a3df-eb0f975a9059.png'
    },
    {
      name: {
        en: 'Henrique Nogueira',
        pt: 'Henrique Nogueira'
      },
      role: {
        en: 'Team Member',
        pt: 'Membro da Equipa'
      },
      bio: {
        en: 'Contributing to the Wave Energy Converter project development and implementation.',
        pt: 'Contribuindo para o desenvolvimento e implementação do projeto Wave Energy Converter.'
      },
      avatar: 'H',
      imagePath: '/lovable-uploads/ff6d33fd-6fb6-46a9-bce9-a7ec61f07d7e.png'
    },
    {
      name: {
        en: 'Thomas Amiouny-Albuquerque',
        pt: 'Thomas Amiouny-Albuquerque'
      },
      role: {
        en: 'Team Member',
        pt: 'Membro da Equipa'
      },
      bio: {
        en: 'Contributing to the Wave Energy Converter project development and implementation.',
        pt: 'Contribuindo para o desenvolvimento e implementação do projeto Wave Energy Converter.'
      },
      avatar: 'T',
      imagePath: '/lovable-uploads/5ca63824-a650-446d-93de-61ccf77364a3.png'
    },
    {
      name: {
        en: 'Tiago Silva',
        pt: 'Tiago Silva'
      },
      role: {
        en: 'Team Member',
        pt: 'Membro da Equipa'
      },
      bio: {
        en: 'Contributing to the Wave Energy Converter project development and implementation.',
        pt: 'Contribuindo para o desenvolvimento e implementação do projeto Wave Energy Converter.'
      },
      avatar: 'T',
      imagePath: '/lovable-uploads/d4bf3d2e-365b-4e08-b820-4444d893f1e8.png'
    }
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
