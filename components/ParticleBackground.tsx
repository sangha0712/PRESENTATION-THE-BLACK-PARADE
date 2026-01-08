import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = ['#00f3ff', '#ff003c', '#bc13fe', '#ffffff'];

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height + 10;
      const size = Math.random() * 5 + 2; 
      const speedY = Math.random() * 1 + 0.5;
      const opacity = Math.random() * 0.5 + 0.1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.push({ x, y, size, speedY, opacity, color });
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create new particles occasionally
      if (Math.random() < 0.15) {
        createParticle();
      }

      particles.forEach((p, index) => {
        p.y -= p.speedY;
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.globalAlpha = 1.0;

        if (p.y < -10) {
          particles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    updateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

export default ParticleBackground;