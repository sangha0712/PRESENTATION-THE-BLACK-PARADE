import React from 'react';
import { CharacterData, FactionData } from '../types';
import CharacterCard from './CharacterCard';

interface FactionSectionProps {
  faction: FactionData;
  characters: CharacterData[];
  isActive: boolean;
  onCharacterSelect: (char: CharacterData) => void;
}

const FactionSection: React.FC<FactionSectionProps> = ({ faction, characters, isActive, onCharacterSelect }) => {
  if (!isActive) return null;

  return (
    <div className="w-full animate-fadeIn pb-20">
      {/* Faction Header Banner */}
      <div className={`relative w-full py-12 px-6 overflow-hidden mb-8 border-y ${faction.colors.secondary} bg-black/40`}>
        <div className={`absolute top-0 right-0 p-4 opacity-10 font-black text-9xl font-orbitron ${faction.colors.text} select-none`}>
          {faction.logoSim}
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end gap-6">
          <div>
            <h2 className={`text-4xl md:text-6xl font-black font-orbitron ${faction.colors.text} ${faction.colors.glow} drop-shadow-md`}>
              {faction.name}
            </h2>
            <div className="h-1 w-24 bg-white mt-2 mb-4"></div>
            <p className="text-gray-300 font-noto max-w-xl text-lg">
              {faction.description}
            </p>
          </div>
          <div className="md:ml-auto flex flex-col items-end">
            <span className="text-gray-500 font-rajdhani text-sm tracking-widest uppercase">Controlled Territory</span>
            <span className={`text-xl font-bold font-noto ${faction.colors.text} text-right`}>{faction.territory}</span>
          </div>
        </div>
      </div>

      {/* Character Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-2 h-8 ${faction.colors.primary}`}></div>
          <h3 className="text-2xl font-bold text-white font-rajdhani uppercase tracking-wider">
            Active Operatives <span className="text-gray-600 text-lg">({characters.length})</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {characters.map((char) => (
            <CharacterCard 
              key={char.id} 
              character={char} 
              factionColor={faction.colors.secondary}
              onClick={() => onCharacterSelect(char)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactionSection;