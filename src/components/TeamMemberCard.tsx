import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <img 
        src={member.photoUrl} 
        alt={member.name} 
        className="w-full h-60 object-cover"
      />
      <div className="p-5">
        <h3 className="font-semibold text-xl">{member.name}</h3>
        <p className="text-green-600 font-medium mb-3">{member.role}</p>
        <p className="text-gray-700">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;