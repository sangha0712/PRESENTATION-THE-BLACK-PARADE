import React, { useState } from 'react';
import { FactionId, CharacterData } from '../types';
import { FACTIONS, CHARACTERS } from '../constants';
import FactionSection from './FactionSection';
import CharacterDetailModal from './CharacterDetailModal';

interface AffiliationViewProps {
  onBack: () => void;
}

const AffiliationView: React.FC<AffiliationViewProps> = ({ onBack }) => {
  const [activeFaction, setActiveFaction] = useState<FactionId>(FactionId.ZERO_HOUR);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);

  return (
    <div className="animate-fadeIn min-h-screen bg-transparent">
      {/* Header */}
      <div className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur z-30 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-neon-blue font-rajdhani hover:text-white transition-colors"
          >
            <span className="mr-2">◄</span> RETURN TO MENU
          </button>
          <span className="font-orbitron font-bold text-white tracking-widest">AFFILIATION</span>
        </div>
        
        {/* Tabs */}
        <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
                <div className="flex md:justify-center min-w-max">
                {Object.values(FACTIONS).map((faction) => {
                    const isActive = activeFaction === faction.id;
                    return (
                    <button
                        key={faction.id}
                        onClick={() => setActiveFaction(faction.id)}
                        className={`relative px-6 py-4 text-sm font-orbitron tracking-wider transition-all duration-300 uppercase
                        ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'}
                        `}
                    >
                        <span className="relative z-10">{faction.name}</span>
                        {isActive && (
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 ${faction.colors.primary.replace('bg-', 'bg-')} shadow-[0_0_15px_rgba(255,255,255,0.5)]`}></div>
                        )}
                        {isActive && (
                        <div className={`absolute inset-0 bg-gradient-to-t ${faction.colors.primary.replace('bg-', 'from-')}/20 to-transparent opacity-30`}></div>
                        )}
                    </button>
                    );
                })}
                </div>
            </div>
        </div>
      </div>

      <div className="pt-32 min-h-screen">
          {Object.values(FACTIONS).map((faction) => (
            <FactionSection
              key={faction.id}
              faction={faction}
              characters={CHARACTERS.filter(c => c.factionId === faction.id)}
              isActive={activeFaction === faction.id}
              onCharacterSelect={setSelectedCharacter}
            />
          ))}
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

export default AffiliationView;