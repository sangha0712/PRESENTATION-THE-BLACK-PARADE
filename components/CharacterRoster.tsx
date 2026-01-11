
import React, { useState } from 'react';
import { CHARACTERS, FACTIONS } from '../constants';
import { Rank, CharacterData } from '../types';
import CharacterCard from './CharacterCard';
import CharacterDetailModal from './CharacterDetailModal';

interface CharacterRosterProps {
  onBack: () => void;
}

const rankOrder = {
  [Rank.S]: 1,
  [Rank.A_PLUS]: 2,
  [Rank.A]: 3,
  [Rank.B_PLUS]: 4,
  [Rank.B]: 5,
  [Rank.C]: 6,
  [Rank.D]: 7,
  [Rank.F]: 8,
};

const CharacterRoster: React.FC<CharacterRosterProps> = ({ onBack }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);

  // Sort characters by Rank
  const sortedCharacters = [...CHARACTERS].sort((a, b) => {
    return rankOrder[a.rank] - rankOrder[b.rank];
  });

  return (
    <div className="min-h-screen bg-transparent animate-fadeIn">
       <div className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur z-30 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-neon-purple font-rajdhani hover:text-white transition-colors"
          >
            <span className="mr-2">◄</span> RETURN TO MENU
          </button>
          <span className="font-orbitron font-bold text-white tracking-widest">FULL ROSTER</span>
        </div>
      </div>

      <div className="pt-24 pb-12 max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center">
            <h2 className="text-3xl font-orbitron text-white mb-2">OPERATIVE DATABASE</h2>
            <p className="text-gray-500 font-rajdhani">SORTED BY RANK: S &rarr; C</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {sortedCharacters.map((char) => {
             // Look up faction for color styling
             const faction = Object.values(FACTIONS).find(f => f.id === char.factionId);
             const color = faction?.colors.secondary || 'border-gray-500';
             
             return (
               <CharacterCard 
                 key={char.id}
                 character={char}
                 factionColor={color}
                 onClick={() => setSelectedCharacter(char)}
               />
             );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedCharacter && (
        <CharacterDetailModal 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      )}
    </div>
  );
};

export default CharacterRoster;
