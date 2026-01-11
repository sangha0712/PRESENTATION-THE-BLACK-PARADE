import React from 'react';
import { CharacterData, Rank } from '../types';

interface CharacterCardProps {
  character: CharacterData;
  factionColor: string;
  onClick: () => void;
}

const RankBadge: React.FC<{ rank: Rank }> = ({ rank }) => {
  let colorClass = "bg-gray-600";
  let borderClass = "border-gray-400";
  
  if (rank === Rank.S) {
    colorClass = "bg-yellow-600/20 text-yellow-400";
    borderClass = "border-yellow-500";
  } else if (rank === Rank.A_PLUS || rank === Rank.A) {
    colorClass = "bg-purple-600/20 text-purple-400";
    borderClass = "border-purple-500";
  } else if (rank === Rank.B_PLUS || rank === Rank.B) {
    colorClass = "bg-blue-600/20 text-blue-400";
    borderClass = "border-blue-500";
  } else if (rank === Rank.C) {
    colorClass = "bg-green-600/20 text-green-400";
    borderClass = "border-green-500";
  }

  return (
    <div className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center font-orbitron font-bold text-base border-2 rounded ${colorClass} ${borderClass} shadow-[0_0_10px_rgba(0,0,0,0.5)] backdrop-blur-md z-20`}>
      {rank}
    </div>
  );
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character, factionColor, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative bg-panel-bg border border-gray-800 hover:${factionColor.replace('bg-', 'border-')} transition-all duration-300 overflow-hidden rounded-lg h-[320px] flex flex-col cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] transform hover:-translate-y-1`}
    >
      {/* Full Height Image Background */}
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src={character.imageUrl || `https://picsum.photos/seed/${character.id}/400/600`} 
          alt={character.name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
        />
        {/* Stronger Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
      </div>

      <RankBadge rank={character.rank} />

      {/* Minimal Info: Name, Age, Gender */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-10 flex flex-col justify-end h-full pointer-events-none">
         <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-2xl font-black text-white font-noto tracking-tighter mb-1 drop-shadow-md">{character.name}</h3>
            
            <div className="flex items-center gap-2 text-gray-300 font-rajdhani uppercase tracking-widest text-xs mb-2">
               <span>{character.age} YEARS</span>
               <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
               <span>{character.gender}</span>
            </div>
            
            {/* Click CTA */}
            <div className="h-0 opacity-0 group-hover:opacity-100 group-hover:h-auto overflow-hidden transition-all duration-300">
               <span className={`text-xs ${factionColor.replace('border-', 'text-')} font-orbitron tracking-wider flex items-center`}>
                 ACCESS DATA <span className="ml-2">►</span>
               </span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CharacterCard;