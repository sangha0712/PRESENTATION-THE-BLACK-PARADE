import React, { useState } from 'react';

interface LandingProps {
  onAccess: () => void;
}

const Landing: React.FC<LandingProps> = ({ onAccess }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleAccessClick = () => {
    setIsExiting(true);
    // Wait for the exit animation to complete before unmounting
    setTimeout(() => {
      onAccess();
    }, 800);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out ${isExiting ? 'opacity-0 scale-125 filter blur-sm' : 'opacity-100 scale-100'}`}>
      {/* Background is now handled by ParticleBackground in App.tsx */}
      
      {/* Changed to flex-col items-center to ensure perfect centering of children including the button */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12 text-center w-full px-4">
        <div className="relative select-none">
          {/* Main Title - Static */}
          <h1 className="text-6xl md:text-9xl font-black font-orbitron tracking-tighter text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            The Black<br/>Parade
          </h1>
        </div>

        <p className="text-gray-500 font-rajdhani tracking-[0.5em] text-sm md:text-lg bg-black/30 px-4 py-1 inline-block backdrop-blur-sm rounded max-w-full break-words">
          SYSTEM FAILURE IMMINENT // REBOOT REQUIRED
        </p>

        <button 
          onClick={handleAccessClick}
          className="group relative px-12 py-4 bg-black/50 backdrop-blur-sm border border-neon-red/30 text-neon-red font-orbitron text-xl tracking-widest hover:bg-neon-red hover:text-black transition-all duration-300 overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(255,0,60,0.1)] hover:shadow-[0_0_30px_rgba(255,0,60,0.4)]"
        >
          <span className="relative z-10 group-hover:font-bold">ACCESS</span>
          <div className="absolute inset-0 bg-neon-red/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          
          {/* Decorative Corner lines */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-red"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-red"></div>
        </button>
      </div>

      <div className="absolute bottom-8 text-center w-full px-4">
         <p className="text-[10px] text-gray-700 font-rajdhani">
           UNAUTHORIZED ENTRY IS PUNISHABLE BY PERMANENT DATA ERASURE
         </p>
      </div>
    </div>
  );
};

export default Landing;