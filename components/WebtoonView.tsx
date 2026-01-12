
import React, { useEffect, useRef, useState } from 'react';
import { bgm } from '../utils/AudioEngine';

// Images sorted with swapped order for 2 and 1 as requested
// Original Order: 0 -> 1 -> 2
// New Order: 0 -> 2 -> 1
const WEBTOON_IMAGES = [
  "https://igx.kr/r/vC/2/0",
  "https://igx.kr/r/vC/2/2",
  "https://igx.kr/r/vC/2/1"
];

// Changed to .../2/1 as requested (Last image in the current visual order)
const ALERT_TRIGGER_IMAGE = "https://igx.kr/r/vC/2/1";

interface WebtoonViewProps {
  onBack: () => void;
}

const WebtoonView: React.FC<WebtoonViewProps> = ({ onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const alertTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Use state for the ref to ensure re-run of effect when element is attached
  const [triggerElement, setTriggerElement] = useState<HTMLImageElement | null>(null);
  const hasAlertPlayed = useRef(false);

  // Loading State
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  // Handle image load
  const handleImageLoad = () => {
    setLoadedCount((prev) => {
      const newCount = prev + 1;
      return newCount;
    });
  };

  // Check if loading is complete
  useEffect(() => {
    if (loadedCount >= WEBTOON_IMAGES.length) {
      // Small artificial delay to ensure layout stability and dramatic effect
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loadedCount]);

  // 1. Force Reset scroll to top WHEN LOADING FINISHES
  useEffect(() => {
    if (!isLoading && containerRef.current) {
      // Reset immediately
      containerRef.current.scrollTop = 0;
      
      // Force instant scroll again to be sure
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.scrollTo({ top: 0, behavior: 'instant' });
        }
      });
      // Reset alert play state just in case
      hasAlertPlayed.current = false;
    }
  }, [isLoading]);

  // 2. Setup Intersection Observer for the alert sound
  // Changed to use viewport (root: null) which is more reliable for fixed overlays
  useEffect(() => {
    if (isLoading || !triggerElement) return;

    const options = {
      root: null, // Use browser viewport
      threshold: 0.01, // Trigger as soon as 1% of the image is visible
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAlertPlayed.current) {
          console.log("Visual Trigger: Disaster Alert Scheduled (12s delay)");
          hasAlertPlayed.current = true;
          
          // Schedule sound 12 seconds after image appears
          alertTimerRef.current = setTimeout(() => {
            bgm.playEmergencyAlert();
          }, 12000);

          observer.disconnect(); 
        }
      });
    }, options);

    observer.observe(triggerElement);

    return () => {
      observer.disconnect();
      // Cleanup timer if user leaves before sound plays
      if (alertTimerRef.current) {
        clearTimeout(alertTimerRef.current);
      }
    };
  }, [isLoading, triggerElement]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col animate-fadeIn z-50">
      
      {/* LOADING SCREEN OVERLAY */}
      {isLoading && (
        <div className="absolute inset-0 z-[60] bg-black flex flex-col items-center justify-center space-y-4">
           <div className="w-16 h-16 border-4 border-gray-800 border-t-neon-red rounded-full animate-spin"></div>
           <div className="text-neon-red font-orbitron tracking-widest animate-pulse">
              DOWNLOADING VISUAL DATA... {Math.round((loadedCount / WEBTOON_IMAGES.length) * 100)}%
           </div>
           <div className="text-gray-500 font-rajdhani text-xs">
              INITIALIZING NEURAL INTERFACE
           </div>
        </div>
      )}

      {/* Header */}
      <div className={`absolute top-0 w-full bg-black/90 backdrop-blur-md z-30 border-b border-gray-900 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-neon-red font-rajdhani hover:text-white transition-colors"
          >
            <span className="mr-2">◄</span> RETURN TO MENU
          </button>
          <span className="font-orbitron font-bold text-white tracking-widest text-sm md:text-base">
            VISUAL LOG: 001
          </span>
        </div>
      </div>

      {/* Main Scroll Container */}
      {/* Hidden while loading to prevent layout shifts/scroll triggers */}
      <div 
        ref={containerRef}
        className={`w-full h-full overflow-y-auto bg-black pt-16 ${isLoading ? 'invisible' : 'visible'}`}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center min-h-screen bg-black shadow-2xl shadow-gray-900/20">
          {WEBTOON_IMAGES.map((src, index) => (
            <img 
              key={index}
              ref={src === ALERT_TRIGGER_IMAGE ? setTriggerElement : null}
              src={src}
              alt={`Webtoon Page ${index + 1}`}
              className="w-full h-auto object-contain block"
              loading="eager" // Load eagerly to support the preloader
              onLoad={handleImageLoad}
            />
          ))}

          {/* End of Content Marker */}
          <div className="w-full py-24 flex flex-col items-center justify-center text-gray-700 font-rajdhani space-y-4">
             <div className="w-16 h-1 bg-neon-red/30"></div>
             <p className="tracking-[0.3em] text-xs">END OF RECORD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebtoonView;
