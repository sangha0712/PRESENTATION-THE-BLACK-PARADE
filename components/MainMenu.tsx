
import React, { useState, useRef } from 'react';
import { MENU_IMAGES } from '../constants';

type MenuOption = 'AFFILIATION' | 'CHARACTER' | 'HISTORY' | 'WEBTOON';

interface MainMenuProps {
  onSelect: (option: MenuOption) => void;
}

interface MenuButtonProps {
  title: string;
  subtitle: string;
  onClick: () => void;
  color: string;
  delay: string;
  hoverImages?: string[];
  heightClass?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ 
  title, 
  subtitle, 
  onClick, 
  color, 
  delay, 
  hoverImages,
  heightClass = "h-48 lg:h-[35vh]" // Default height for top row items
}) => {
  // Initialize with a random index immediately
  const [activeIndex, setActiveIndex] = useState(() => 
    hoverImages && hoverImages.length > 0 
      ? Math.floor(Math.random() * hoverImages.length) 
      : 0
  );

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (hoverImages && hoverImages.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex(prev => {
          let next = Math.floor(Math.random() * hoverImages.length);
          if (next === prev && hoverImages.length > 1) {
            next = (next + 1) % hoverImages.length;
          }
          return next;
        });
      }, 500); 
    }
  };

  const clipPathClosed = 'polygon(-20% 0%, -20% 0%, -40% 100%, -40% 100%)';
  const clipPathOpen = 'polygon(-20% 0%, 130% 0%, 110% 100%, -40% 100%)';

  return (
    <button 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-full ${heightClass} border border-gray-800 bg-black/20 overflow-hidden hover:border-${color} transition-colors duration-500 animate-fadeIn`}
      style={{ animationDelay: delay }}
    >
      {hoverImages && hoverImages.length > 0 && (
        <>
           <style>{`
             .menu-wipe-${color} {
               clip-path: ${clipPathClosed};
               transition: clip-path 500ms cubic-bezier(0.25, 1, 0.5, 1);
               will-change: clip-path;
               transform: translateZ(0); /* Force GPU */
             }
             .group:hover .menu-wipe-${color} {
               clip-path: ${clipPathOpen};
             }
           `}</style>
           
           <div className={`absolute inset-0 z-0 menu-wipe-${color}`}>
              <img 
                src={hoverImages[activeIndex]} 
                alt="" 
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/60"></div>
           </div>
        </>
      )}

      <div className={`absolute inset-0 bg-${color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none`}></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-6 text-center z-10 pointer-events-none">
        <h2 className="text-3xl lg:text-4xl font-black font-orbitron text-white group-hover:scale-110 transition-transform duration-500 mb-3 drop-shadow-lg break-all lg:break-normal">
          {title}
        </h2>
        <div className={`h-0.5 w-0 group-hover:w-12 bg-${color} transition-all duration-500 mb-3 shadow-[0_0_10px_currentColor]`}></div>
        <p className="text-gray-500 font-rajdhani tracking-widest text-xs lg:text-sm group-hover:text-gray-200 transition-colors drop-shadow-md leading-relaxed">
          {subtitle}
        </p>
      </div>
      
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gray-600 group-hover:border-white transition-colors z-20"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gray-600 group-hover:border-white transition-colors z-20"></div>
    </button>
  );
};

const MainMenu: React.FC<MainMenuProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen w-full relative flex flex-col justify-center overflow-hidden">
      {/* Background is now handled by App.tsx */}

      {/* Hidden Cache Container */}
      <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
        {MENU_IMAGES.map((src, idx) => (
          <img key={idx} src={src} alt="preload" decoding="async" />
        ))}
      </div>

      {/* Content Container */}
      {/* Reduced width from 95% to 7xl to add more breathing room on sides */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-20 pb-10 flex flex-col justify-center h-full">
        <div className="mb-8 lg:mb-12 text-center">
          <h3 className="text-neon-blue font-rajdhani tracking-[0.3em] text-lg mb-2 drop-shadow-md">WELCOME USER_ID: GHOST</h3>
          <h1 className="text-4xl md:text-6xl font-black font-orbitron text-white drop-shadow-lg">SELECT MODULE</h1>
        </div>

        {/* Layout: Top 3 columns, Bottom 1 column full width */}
        <div className="flex flex-col gap-6 w-full">
          {/* Top Row: 3 items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            <MenuButton 
              title="AFFILIATION" 
              subtitle="FACTION DATABASE & TERRITORIES" 
              onClick={() => onSelect('AFFILIATION')}
              color="neon-blue"
              delay="0s"
            />
            <MenuButton 
              title="CHARACTER" 
              subtitle="OPERATIVE ROSTER" 
              onClick={() => onSelect('CHARACTER')}
              color="neon-purple"
              delay="0.1s"
              hoverImages={MENU_IMAGES}
            />
            <MenuButton 
              title="HISTORY" 
              subtitle="WORLD ARCHIVE & LORE" 
              onClick={() => onSelect('HISTORY')}
              color="neon-gold"
              delay="0.2s"
            />
          </div>

          {/* Bottom Row: 1 item full width, reduced height */}
          <div className="w-full">
             <MenuButton 
              title="WEBTOON" 
              subtitle="VISUAL RECORDS [OFFLINE]" 
              onClick={() => onSelect('WEBTOON')}
              color="neon-red"
              delay="0.3s"
              heightClass="h-32 lg:h-[18vh]"
            />
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 font-rajdhani text-xs drop-shadow-md">
          SECURE CONNECTION ESTABLISHED // PING: 4ms
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
