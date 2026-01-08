import React from 'react';
import { WORLD_LORE, HISTORY_LOGS } from '../constants';

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

      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
         {/* Introduction Panel */}
         <div className="border border-neon-gold/30 bg-black/50 p-8 md:p-12 relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl font-orbitron text-neon-gold select-none pointer-events-none">
                3074
            </div>

            <h1 className="text-4xl md:text-5xl font-black font-orbitron mb-4 text-neon-gold">
                WORLD_HISTORY_LOG
            </h1>
            <p className="text-gray-400 font-noto max-w-2xl text-lg">
                대재앙(The Great Collapse) 이후, 인류의 생존과 진화에 대한 기록 보관소.<br/>
                열람 권한: <span className="text-neon-gold font-bold">LV.5 (ADMIN)</span>
            </p>
         </div>

         {/* Logs Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HISTORY_LOGS.map((log) => (
                <div key={log.id} className="group border border-gray-800 bg-panel-bg hover:border-neon-gold transition-colors duration-300 p-6 flex flex-col relative overflow-hidden">
                    {/* Security Level Tag */}
                    <div className="absolute top-2 right-2 text-[10px] font-rajdhani font-bold px-2 py-0.5 border border-gray-700 rounded text-gray-500 group-hover:text-neon-gold group-hover:border-neon-gold/50 transition-colors">
                        SECURITY: {log.securityLevel}
                    </div>

                    <div className="text-xs text-neon-gold/70 font-rajdhani tracking-widest mb-1">
                        {log.date} // {log.category}
                    </div>
                    
                    <h3 className="text-xl font-bold font-orbitron text-white mb-3 group-hover:text-neon-gold transition-colors">
                        {log.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 font-noto leading-relaxed">
                        {log.content}
                    </p>

                    {/* Tech Decor */}
                    <div className="mt-auto pt-4 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                        <div className="h-0.5 w-12 bg-gray-600 group-hover:bg-neon-gold"></div>
                        <span className="text-[10px] font-mono text-gray-500">{log.id}</span>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default HistoryView;