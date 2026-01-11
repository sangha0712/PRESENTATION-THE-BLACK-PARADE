import React, { useEffect } from 'react';
import { CharacterData } from '../types';
import { FACTIONS } from '../constants';

interface CharacterDetailModalProps {
  character: CharacterData;
  onClose: () => void;
}

const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({ character, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const faction = FACTIONS[character.factionId];
  const borderColor = faction?.colors.secondary || 'border-gray-500';
  const textColor = faction?.colors.text || 'text-white';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-5xl bg-panel-bg border ${borderColor} shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-lg overflow-hidden flex flex-col md:flex-row max-h-[90vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white bg-black/50 rounded-full p-2 backdrop-blur hover:bg-red-500/20 transition-all"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        {/* Left: Image */}
        <div className="w-full md:w-2/5 h-[40vh] md:h-auto relative bg-gray-900 shrink-0">
           <img 
             src={character.imageUrl || `https://picsum.photos/seed/${character.id}/400/600`}
             alt={character.name}
             className="w-full h-full object-cover"
           />
           <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-panel-bg to-transparent md:hidden`}></div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar">
            {/* Header */}
            <div className="mb-6 border-b border-gray-800 pb-6">
                <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-rajdhani tracking-[0.2em] px-2 py-1 rounded border ${borderColor} ${textColor} bg-black/30`}>
                        {faction?.name} // {character.rank}-CLASS
                    </span>
                    <span className="text-gray-500 text-xs font-mono">ID: {character.id.toUpperCase()}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white font-noto tracking-tighter mb-2">
                    {character.name}
                </h2>
                <div className="flex items-center gap-4 text-gray-400 font-rajdhani text-sm uppercase">
                    <span>Age: {character.age}</span>
                    <span className="w-px h-3 bg-gray-700"></span>
                    <span>Gender: {character.gender}</span>
                </div>
            </div>

            {/* Ability */}
            <div className="mb-8">
                <h3 className={`${textColor} font-orbitron text-lg mb-3 flex items-center`}>
                    <span className="mr-2">⚡</span> ABILITY
                </h3>
                <div className="bg-black/30 border border-gray-800 p-4 rounded hover:border-gray-600 transition-colors">
                    <div className="text-white font-bold mb-1">{character.abilityName}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{character.abilityDesc}</div>
                </div>
            </div>

            {/* Personality */}
            <div className="mb-8">
                <h3 className={`${textColor} font-orbitron text-lg mb-3 flex items-center`}>
                    <span className="mr-2">🧠</span> PERSONALITY
                </h3>
                <div className="flex flex-wrap gap-2">
                    {character.personality.map((p, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded border border-gray-700 hover:border-gray-500 transition-colors cursor-default">
                            {p}
                        </span>
                    ))}
                </div>
            </div>

            {/* Features */}
            <div>
                <h3 className={`${textColor} font-orbitron text-lg mb-3 flex items-center`}>
                    <span className="mr-2">👁️</span> FEATURES
                </h3>
                <ul className="space-y-2">
                    {character.features.map((f, i) => (
                        <li key={i} className="flex items-start text-gray-400 text-sm bg-black/20 p-2 rounded">
                            <span className={`${textColor} mr-3 mt-0.5`}>►</span>
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailModal;