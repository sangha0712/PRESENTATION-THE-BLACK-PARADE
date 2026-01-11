import React from 'react';
import { CharacterData, Rank, FactionId } from '../types';

interface CharacterCardProps {
  character: CharacterData;
  factionColor: string;
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
    <div className={`absolute top-2 right-2 w-10 h-10 flex items-center justify-center font-orbitron font-bold text-lg border-2 rounded ${colorClass} ${borderClass} shadow-[0_0_10px_rgba(0,0,0,0.5)] backdrop-blur-md`}>
      {rank}
    </div>
  );
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character, factionColor }) => {
  return (
    <div className={`group relative bg-panel-bg border border-gray-800 hover:${factionColor.replace('bg-', 'border-')} transition-all duration-300 overflow-hidden rounded-lg h-[450px] flex flex-col`}>
      {/* Top Image Placeholder Area */}
      <div className="h-1/2 w-full bg-gray-900 relative overflow-hidden">
        <img 
          src={character.imageUrl || `https://picsum.photos/seed/${character.id}/400/300`} 
          alt={character.name} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel-bg to-transparent"></div>
        <RankBadge rank={character.rank} />
        <div className="absolute bottom-2 left-4">
          <h3 className="text-2xl font-black text-white font-noto tracking-tighter">{character.name}</h3>
          <p className="text-xs text-gray-400 font-rajdhani uppercase tracking-widest">{character.age} YEARS OLD / {character.gender}</p>
        </div>
      </div>

      {/* Stats and Info Area */}
      <div className="p-4 flex flex-col flex-grow relative z-10">
        
        {/* Ability Section */}
        <div className="mb-4">
          <div className="text-[10px] text-gray-500 uppercase font-rajdhani tracking-widest mb-1">Ability</div>
          <div className="font-bold text-white text-sm mb-1">{character.abilityName}</div>
          <div className="text-xs text-gray-400 leading-snug line-clamp-2 group-hover:line-clamp-none transition-all">
            {character.abilityDesc}
          </div>
        </div>

        {/* Personality Tags */}
        <div className="mb-4">
           <div className="text-[10px] text-gray-500 uppercase font-rajdhani tracking-widest mb-2">Personality</div>
           <div className="flex flex-wrap gap-1">
             {character.personality.map((p, i) => (
               <span key={i} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-[10px] rounded border border-gray-700">
                 {p}
               </span>
             ))}
           </div>
        </div>

        {/* Decorative Tech Lines */}
        <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-end opacity-50 group-hover:opacity-100 transition-opacity">
           <div className="flex flex-col gap-1 w-full">
              <div className="text-[10px] text-gray-500 uppercase font-rajdhani tracking-widest">Notable Features</div>
              <ul className="text-xs text-gray-400 list-disc list-inside">
                {character.features.slice(0,2).map((f,i) => <li key={i} className="truncate">{f}</li>)}
              </ul>
           </div>
        </div>
        
        {/* Hover overlay for full features */}
        <div className="absolute inset-0 bg-black/90 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
             <h4 className="text-neon-blue font-orbitron mb-4">DATA_LOG</h4>
             <ul className="space-y-2 text-sm text-gray-300 font-noto">
                {character.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-neon-red mr-2">►</span> {f}
                  </li>
                ))}
             </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;