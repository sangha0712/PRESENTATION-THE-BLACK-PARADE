import React from 'react';

interface WebtoonViewProps {
  onBack: () => void;
}

const WebtoonView: React.FC<WebtoonViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center animate-fadeIn relative overflow-hidden">
      <div className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur z-30 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-neon-red font-rajdhani hover:text-white transition-colors"
          >
            <span className="mr-2">◄</span> RETURN TO MENU
          </button>
          <span className="font-orbitron font-bold text-white tracking-widest">VISUAL LOGS</span>
        </div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="text-9xl mb-4 text-gray-800 animate-pulse">
            <span className="font-orbitron">404</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-4">
          TRANSMISSION OFFLINE
        </h1>
        <p className="text-neon-red font-rajdhani tracking-[0.2em] text-xl border-t border-b border-neon-red py-2 inline-block">
          CONTENT UNDER CONSTRUCTION
        </p>
        <p className="mt-8 text-gray-500 max-w-md mx-auto">
          The visual archives are currently being deciphered. Check back later for decoded transmissions.
        </p>
      </div>
      
      {/* Glitchy background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
         <div className="text-[20vw] font-black text-white font-orbitron rotate-12 whitespace-nowrap">
            LOCKED LOCKED
         </div>
      </div>
    </div>
  );
};

export default WebtoonView;