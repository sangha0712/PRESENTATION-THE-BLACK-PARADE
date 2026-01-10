import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import MainMenu from './components/MainMenu';
import AffiliationView from './components/AffiliationView';
import CharacterRoster from './components/CharacterRoster';
import HistoryView from './components/HistoryView';
import WebtoonView from './components/WebtoonView';
import ParticleBackground from './components/ParticleBackground';
import { MENU_IMAGES, MAIN_MENU_BACKGROUNDS } from './constants';
import { bgm } from './utils/AudioEngine';

type ViewState = 'LANDING' | 'MENU' | 'AFFILIATION' | 'CHARACTER' | 'HISTORY' | 'WEBTOON';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('LANDING');
  
  // Initialize persistent background image
  const [bgImage] = useState(() => 
    MAIN_MENU_BACKGROUNDS[Math.floor(Math.random() * MAIN_MENU_BACKGROUNDS.length)]
  );

  // Preload images as soon as the app loads (while user is on Landing screen)
  useEffect(() => {
    MENU_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleAccess = () => {
    setView('MENU');
    // Start the thriller BGM engine
    bgm.start().catch(err => console.error("Audio failed to start:", err));
  };

  const handleMenuSelect = (option: 'AFFILIATION' | 'CHARACTER' | 'HISTORY' | 'WEBTOON') => {
    setView(option);
  };

  const handleBackToMenu = () => {
    setView('MENU');
  };

  return (
    <div className="min-h-screen text-gray-200 font-noto selection:bg-neon-red selection:text-white relative bg-dark-bg">
      
      {/* Global Background Image - Persistent */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src={bgImage} 
          alt="global-background" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Global overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-dark-bg/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Global Particle Effect - Rendered on top of image */}
      <ParticleBackground />

      {/* Main Content Container - Rendered on top */}
      <div className="relative z-10">
        {/* View Router */}
        {view === 'LANDING' && (
          <Landing onAccess={handleAccess} />
        )}

        {view === 'MENU' && (
          <MainMenu onSelect={handleMenuSelect} />
        )}

        {view === 'AFFILIATION' && (
          <AffiliationView onBack={handleBackToMenu} />
        )}

        {view === 'CHARACTER' && (
          <CharacterRoster onBack={handleBackToMenu} />
        )}

        {view === 'HISTORY' && (
          <HistoryView onBack={handleBackToMenu} />
        )}

        {view === 'WEBTOON' && (
          <WebtoonView onBack={handleBackToMenu} />
        )}

        {/* Persistent Footer (Visible everywhere except Landing) */}
        {view !== 'LANDING' && (
          <footer className="py-6 border-t border-gray-900 bg-black/80 text-center z-10 relative">
            <p className="text-gray-600 font-rajdhani text-xs">
              PROJECT: AFTERMATH 3074 // SYSTEM VERSION 2.0
            </p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default App;