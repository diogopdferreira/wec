
import React from 'react';
import TeamHero from '@/components/team/TeamHero';
import TeamGrid from '@/components/team/TeamGrid';
import TeamValues from '@/components/team/TeamValues';
import Footer from '@/components/team/Footer';

const Team = () => {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <TeamGrid />
      <TeamValues />
      <Footer />
    </div>
  );
};

export default Team;
