import React, { useRef, useState, useEffect } from 'react';
import { HISTORY_LOGS } from '../constants';

interface HistoryViewProps {
  onBack: () => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ onBack }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // Unified Drag Handler
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);

    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const pageY = 'touches' in e ? e.touches[0].pageY : e.pageY;
    
    setStartX(pageX - scrollRef.current.offsetLeft);
    setStartY(pageY - scrollRef.current.offsetTop);
    setScrollLeft(scrollRef.current.scrollLeft);
    setScrollTop(scrollRef.current.scrollTop);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const pageY = 'touches' in e ? e.touches[0].pageY : e.pageY;
    
    const x = pageX - scrollRef.current.offsetLeft;
    const y = pageY - scrollRef.current.offsetTop;

    // Check for Mobile (Vertical) or Desktop (Horizontal)
    if (window.innerWidth < 768) {
        // Mobile: Vertical Drag
        // Note: For smoother mobile experience, we might often prefer native scroll,
        // but to satisfy "drag" specifically, we implement this.
        const walk = (y - startY) * 1.5;
        scrollRef.current.scrollTop = scrollTop - walk;
    } else {
        // Desktop: Horizontal Drag
        e.preventDefault(); // Prevent text selection on desktop
        const walk = (x - startX) * 2; 
        scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Convert vertical wheel to horizontal scroll ONLY on desktop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Only apply horizontal scroll transform on desktop
      if (window.innerWidth >= 768 && e.deltaY !== 0) {
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', onWheel);
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white animate-fadeIn flex flex-col overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur z-30 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-neon-gold font-rajdhani hover:text-white transition-colors z-50"
          >
            <span className="mr-2">◄</span> RETURN TO MENU
          </button>
          <span className="font-orbitron font-bold text-white tracking-widest z-50">ARCHIVES</span>
        </div>
      </div>

      {/* Main Draggable Area */}
      {/* Added touch events for mobile drag */}
      <div 
        ref={scrollRef}
        className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-x-auto md:overflow-y-hidden cursor-grab active:cursor-grabbing select-none relative no-scrollbar snap-y md:snap-x snap-mandatory"
        onMouseDown={handleDragStart}
        onMouseLeave={handleDragEnd}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDragMove}
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Intro Text / Container for Flex layout */}
        {/* Changed md:h-[60vh] to md:h-full to center items vertically on desktop */}
        {/* Added md:pt-48 to push center down by approx 6rem (12rem/2) */}
        <div className="flex flex-col md:flex-row items-center md:items-center px-4 md:px-20 relative min-h-full md:h-full md:min-w-max pt-24 md:pt-48 pb-24 md:pb-0">
            {/* The Central Timeline Line (Desktop) */}
            {/* Adjusted top from 1/2 to calc(50% + 6rem) to match the padding shift */}
            <div className="hidden md:block absolute top-[calc(50%+6rem)] left-0 w-full h-1 bg-gray-800 z-0"></div>
            <div className="hidden md:block absolute top-[calc(50%+6rem)] left-0 w-full h-[1px] bg-neon-gold/20 z-0"></div>

            {/* The Central Timeline Line (Mobile) */}
            <div className="md:hidden absolute top-0 left-8 w-1 h-full bg-gray-800 z-0"></div>
            <div className="md:hidden absolute top-0 left-8 w-[1px] h-full bg-neon-gold/20 z-0"></div>

            {/* Intro Card */}
            <div className="mb-12 md:mb-0 md:mr-32 relative z-10 w-full md:w-[500px] shrink-0 snap-center px-4 md:px-0">
                <div className="border border-neon-gold/30 bg-black/80 p-8 md:p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <h1 className="text-4xl md:text-6xl font-black font-orbitron mb-6 text-neon-gold">
                        HISTORY
                    </h1>
                    <p className="text-gray-300 font-noto text-lg md:text-xl leading-relaxed">
                        대재앙 이후 3074년까지의 기록.<br/>
                        <span className="md:hidden">아래로</span>
                        <span className="hidden md:inline">가로로</span> 스크롤하여 역사를 확인하십시오.
                    </p>
                    <div className="mt-6 text-neon-gold/50 font-rajdhani text-sm animate-pulse">
                        <span className="md:hidden">v v v DRAG OR SCROLL v v v</span>
                        <span className="hidden md:inline">&lt;&lt;&lt; DRAG OR SCROLL &gt;&gt;&gt;</span>
                    </div>
                </div>
            </div>

            {/* Timeline Items */}
            {HISTORY_LOGS.map((log, index) => (
                <div key={log.id} className="relative w-full md:w-[500px] shrink-0 mb-24 md:mb-0 md:mr-24 group snap-center pl-16 md:pl-0 pr-4 md:pr-0 min-h-[50vh] md:min-h-0 flex flex-col justify-center">
                    {/* Connection Point on Timeline (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 -left-3 w-6 h-6 rounded-full border-4 border-dark-bg bg-gray-600 group-hover:bg-neon-gold transition-colors z-20 transform -translate-y-1/2 shadow-[0_0_15px_rgba(0,0,0,1)]"></div>
                    
                    {/* Mobile Point */}
                    <div className="md:hidden absolute top-1/2 -left-10 w-6 h-6 rounded-full border-4 border-dark-bg bg-gray-600 group-hover:bg-neon-gold transition-colors z-20 transform -translate-y-1/2 shadow-[0_0_15px_rgba(0,0,0,1)]"></div>

                    {/* Vertical connector line (Desktop) */}
                    {/* Adjusted to connect from center of box to center line since we are centering everything now */}
                    <div className="hidden md:block absolute left-0 bottom-1/2 w-0.5 h-1/2 bg-transparent z-0"></div> 
                    {/* We removed the explicit connector line on desktop because if centered, the box sits ON the line. 
                        Let's add a small connector if needed, but centering implies it's on the axis. 
                        Actually, let's keep a subtle indicator. */}
                    
                    {/* Horizontal connector line (Mobile) */}
                    <div className="md:hidden absolute left-[-1.5rem] top-1/2 h-0.5 w-8 bg-gray-600 group-hover:bg-neon-gold transition-colors z-0"></div>

                    {/* The Content Box */}
                    {/* Desktop: Removed vertical offset (mb-20, translate-y-8) to center vertically */}
                    <div className="border-l-4 border-gray-700 bg-panel-bg/90 p-6 md:p-8 hover:border-neon-gold hover:bg-gray-900 transition-all duration-300 shadow-lg relative overflow-hidden flex flex-col justify-center h-full md:h-auto">
                        {/* ID BG */}
                        <div className="absolute -right-4 -top-4 text-6xl font-black font-orbitron text-white/5 select-none pointer-events-none">
                            {index + 1}
                        </div>

                        <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                             <span className="text-xl text-neon-gold font-rajdhani font-bold tracking-widest">
                                {log.date}
                             </span>
                             <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-0.5 rounded">
                                {log.securityLevel}
                             </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black font-noto text-white mb-4 group-hover:text-neon-gold transition-colors leading-tight">
                            {log.title}
                        </h3>

                        <p className="text-base md:text-lg text-gray-300 font-noto leading-relaxed">
                            {log.content}
                        </p>
                    </div>
                </div>
            ))}
            
            {/* End Spacer */}
            <div className="h-32 md:h-auto md:w-32 shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default HistoryView;