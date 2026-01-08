import React from 'react';
import { WORLD_LORE } from '../constants';

interface HistoryViewProps {
  onBack: () => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-dark-bg text-white animate-fadeIn">
      <div className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur z-30 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-neon-gold font-rajdhani hover:text-white transition-colors"
          >
            <span className="mr-2">◄</span> RETURN TO MENU
          </button>
          <span className="font-orbitron font-bold text-white tracking-widest">ARCHIVES</span>
        </div>
      </div>

      <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
         <div className="border border-neon-gold/30 bg-black/50 p-8 md:p-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl font-orbitron text-neon-gold select-none pointer-events-none">
                3074
            </div>

            <h1 className="text-4xl md:text-5xl font-black font-orbitron mb-8 text-neon-gold">
                WORLD_HISTORY_LOG
            </h1>

            <div className="space-y-8 font-noto text-gray-300 leading-relaxed">
                <section>
                    <h3 className="text-white font-bold text-xl mb-2 font-rajdhani border-l-2 border-neon-gold pl-3">EVENT: THE GREAT COLLAPSE</h3>
                    <p>{WORLD_LORE.event}. <br/>이 사건은 인류 역사의 분기점이 되었다.</p>
                </section>

                <section>
                    <h3 className="text-white font-bold text-xl mb-2 font-rajdhani border-l-2 border-neon-gold pl-3">STATUS REPORT</h3>
                    <ul className="grid grid-cols-2 gap-4 mt-4 bg-gray-900/50 p-4 border border-gray-800">
                        <li>
                            <span className="block text-xs text-gray-500">DECEASED</span>
                            <span className="text-xl font-bold text-red-500">{WORLD_LORE.population.dead}</span>
                        </li>
                        <li>
                            <span className="block text-xs text-gray-500">MUTATED</span>
                            <span className="text-xl font-bold text-yellow-500">{WORLD_LORE.population.mutated}</span>
                        </li>
                        <li>
                            <span className="block text-xs text-gray-500">SURVIVED (HUMAN)</span>
                            <span className="text-xl font-bold text-blue-500">{WORLD_LORE.population.survived}</span>
                        </li>
                        <li>
                            <span className="block text-xs text-gray-500">EVOLVED (GIFTED)</span>
                            <span className="text-xl font-bold text-neon-gold">{WORLD_LORE.population.evolved}</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-white font-bold text-xl mb-2 font-rajdhani border-l-2 border-neon-gold pl-3">NEW ENERGY SOURCE</h3>
                    <p><strong className="text-white">{WORLD_LORE.energy}</strong>. 방사능과 오염 물질이 결합하여 생성된 미지의 에너지원. 각성자들은 이를 통해 초월적인 힘을 발휘한다.</p>
                </section>

                <section>
                    <h3 className="text-white font-bold text-xl mb-2 font-rajdhani border-l-2 border-neon-gold pl-3">WARNING: RESTRICTED ZONES</h3>
                    <p className="text-red-400">{WORLD_LORE.undiscovered}</p>
                    <p className="text-sm mt-2">해당 지역은 고농도의 방사능과 S급 이상의 변이체가 서식하는 것으로 추정됨. 접근 금지.</p>
                </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between text-xs font-rajdhani text-gray-500">
                <span>DOC_ID: A-7492</span>
                <span>CLEARANCE: LEVEL 5</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HistoryView;