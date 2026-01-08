import React from 'react';
import { WORLD_LORE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden border-b border-gray-800 bg-dark-bg">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-bg via-transparent to-black pointer-events-none"></div>

      <div className="z-20 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-neon-blue font-rajdhani text-xl md:text-2xl tracking-[0.5em] uppercase mb-4 animate-pulse">
          Project: Aftermath
        </h2>
        <h1 className="text-6xl md:text-8xl font-black font-orbitron text-white mb-6 relative inline-block">
          <span className="relative z-10">3074</span>
          <span className="absolute top-0 left-0 text-neon-red opacity-50 blur-[2px] animate-glitch -z-10">3074</span>
          <span className="absolute top-0 left-0 text-neon-blue opacity-50 blur-[2px] animate-glitch -z-10" style={{ animationDelay: '0.1s' }}>3074</span>
        </h1>
        
        <p className="text-gray-400 font-noto text-lg md:text-xl leading-relaxed max-w-2xl mx-auto border-l-4 border-neon-red pl-4 text-left bg-black/50 p-4 rounded-r-lg backdrop-blur-sm">
          <span className="text-neon-red font-bold block mb-2">{WORLD_LORE.event}</span>
          인류의 90%가 소멸한 대재앙 이후, 살아남은 자들은 진화했다.
          방사능에 면역을 가진 <span className="text-white font-bold">각성자</span>들의 시대.
          세 개의 거대 세력이 한반도의 패권을 두고 격돌한다.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8 text-sm font-rajdhani text-gray-500">
          <div className="border border-gray-800 px-3 py-1 rounded bg-black/40">
            POPULATION: MUTATED 80%
          </div>
          <div className="border border-gray-800 px-3 py-1 rounded bg-black/40">
            RESOURCE: AXION
          </div>
          <div className="border border-gray-800 px-3 py-1 rounded bg-black/40">
            WARNING: UNDEVELOPED ZONES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;