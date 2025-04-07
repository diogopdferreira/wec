
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface TeamMemberProps {
  member: {
    name: {
      en: string;
      pt: string;
    };
    role: {
      en: string;
      pt: string;
    };
    bio: {
      en: string;
      pt: string;
    };
    avatar: string;
    imagePath?: string;
  };
  language: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ member, language }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
      <div className="bg-ocean-100">
        {member.imagePath ? (
          <AspectRatio ratio={4/5} className="w-full">
            <img 
              src={member.imagePath} 
              alt={member.name[language as keyof typeof member.name]} 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        ) : (
          <AspectRatio ratio={4/5} className="w-full flex items-center justify-center">
            <Avatar className="w-24 h-24 border-2 border-white">
              <AvatarFallback className="bg-ocean-500 text-3xl text-white">
                {member.avatar}
              </AvatarFallback>
            </Avatar>
          </AspectRatio>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-ocean-900 mb-1">
          {member.name[language as keyof typeof member.name]}
        </h3>
        <p className="text-ocean-600 mb-4">
          {member.role[language as keyof typeof member.role]}
        </p>
        <p className="text-gray-600">
          {member.bio[language as keyof typeof member.bio]}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
