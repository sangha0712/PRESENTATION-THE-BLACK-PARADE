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
}

const MenuButton: React.FC<MenuButtonProps> = ({ title, subtitle, onClick, color, delay, hoverImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);
  const [isHovered, setIsHovered] = useState(false);
  const lastIndexRef = useRef<number>(-1);

  const handleMouseEnter = () => {
    if (hoverImages && hoverImages.length > 0) {
      // Pick a random index distinct from the last one to ensure variety
      let newIndex = Math.floor(Math.random() * hoverImages.length);
      if (newIndex === lastIndexRef.current && hoverImages.length > 1) {
        newIndex = (newIndex + 1) % hoverImages.length;
      }
      lastIndexRef.current = newIndex;
      setCurrentImageIndex(newIndex);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-full h-48 md:h-64 border border-gray-800 bg-dark-bg/50 overflow-hidden hover:border-${color} transition-colors duration-500 animate-fadeIn`}
      style={{ animationDelay: delay }}
    >
      {/* Dynamic Hover Image Layer with Parallelogram Wipe Animation */}
      {hoverImages && (
        <div 
          className="absolute inset-0 z-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            // Use current index if available, otherwise fallback
            backgroundImage: currentImageIndex >= 0 ? `url(${hoverImages[currentImageIndex]})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            // Clip-path Logic:
            // isHovered=true: Expands to cover the whole button.
            // isHovered=false: Collapses to the left.
            clipPath: isHovered 
              ? 'polygon(-20% 0%, 130% 0%, 110% 100%, -40% 100%)' // Fully Open
              : 'polygon(-20% 0%, -20% 0%, -40% 100%, -40% 100%)'  // Closed to Left
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      )}

      {/* Default Background Layer (Visible when not hovering or underneath) */}
      <div className={`absolute inset-0 bg-${color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
      
      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-black font-orbitron text-white group-hover:scale-110 transition-transform duration-500 mb-2 drop-shadow-lg">
          {title}
        </h2>
        <div className={`h-0.5 w-0 group-hover:w-16 bg-${color} transition-all duration-500 mb-2 shadow-[0_0_10px_currentColor]`}></div>
        <p className="text-gray-500 font-rajdhani tracking-widest text-sm group-hover:text-gray-200 transition-colors drop-shadow-md">
          {subtitle}
        </p>
      </div>
      
      {/* Tech decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gray-600 group-hover:border-white transition-colors z-20"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gray-600 group-hover:border-white transition-colors z-20"></div>
    </button>
  );
};

const MainMenu: React.FC<MainMenuProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="mb-12 text-center">
        <h3 className="text-neon-blue font-rajdhani tracking-[0.3em] text-lg mb-2">WELCOME USER_ID: GHOST</h3>
        <h1 className="text-4xl md:text-6xl font-black font-orbitron text-white">SELECT MODULE</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <MenuButton 
          title="WEBTOON" 
          subtitle="VISUAL RECORDS [OFFLINE]" 
          onClick={() => onSelect('WEBTOON')}
          color="neon-red"
          delay="0.3s"
        />
      </div>

      <div className="mt-12 text-center text-gray-600 font-rajdhani text-xs">
        SECURE CONNECTION ESTABLISHED // PING: 4ms
      </div>
    </div>
  );
};

export default MainMenu;