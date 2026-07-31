import { useEffect, useRef, useState } from 'react';

export default function WelcomeOverlay() {
  const [phase, setPhase] = useState('active'); // 'active' | 'exit' | 'hidden'
  const canvasRef = useRef(null);
  const runningRef = useRef(true);

  // Skip if already played this session
  useEffect(() => {
    if (sessionStorage.getItem('nexus_intro_played')) {
      setPhase('hidden');
      return;
    }
    sessionStorage.setItem('nexus_intro_played', 'true');
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Particle canvas animation
  useEffect(() => {
    if (phase === 'hidden') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const C = ['#00e096', '#00b4d8', '#7c5cfc', '#00d4aa', '#5b8def'];
    const pts = [];
    for (let i = 0; i < 70; i++) {
      pts.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.4,
        a: Math.random() * 0.4 + 0.1,
        c: C[Math.floor(Math.random() * C.length)],
        p: Math.random() * 6.28,
      });
    }

    function draw() {
      if (!runningRef.current) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12000) {
            const d = Math.sqrt(d2);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,180,216,${0.05 * (1 - d / 110)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.p += 0.02;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.a * (0.7 + Math.sin(p.p) * 0.3);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      requestAnimationFrame(draw);
    }
    draw();

    return () => {
      runningRef.current = false;
      window.removeEventListener('resize', resize);
    };
  }, [phase]);

  // Cinematic timing sequence
  useEffect(() => {
    if (phase === 'hidden') return;

    const orbEl = document.getElementById('orbitalSystem');
    const burstEl = document.getElementById('lightBurst');
    const hL = document.getElementById('hLineLeft');
    const hR = document.getElementById('hLineRight');
    const wcEl = document.getElementById('welcomeContent');

    const t1 = setTimeout(() => {
      orbEl?.classList.add('show');
      hL?.classList.add('show');
      hR?.classList.add('show');
      burstEl?.classList.add('show');
    }, 200);

    const t2 = setTimeout(() => {
      wcEl?.classList.add('show-all');
    }, 600);

    const t3 = setTimeout(() => {
      setPhase('exit');
      setTimeout(() => {
        setPhase('hidden');
        runningRef.current = false;
        document.body.style.overflow = '';
      }, 1000);
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [phase]);

  if (phase === 'hidden') return null;

  return (
    <div
      id="welcomeOverlay"
      className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050816] ${
        phase === 'exit' ? 'animate-cam-out' : ''
      }`}
    >
      <canvas ref={canvasRef} id="particleCanvas" className="absolute inset-0 z-[2] h-full w-full" />

      {/* Orbital rings */}
      <div
        id="orbitalSystem"
        className="absolute top-1/2 left-1/2 z-[3] h-125 w-125 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-1200 ease-linear [&.show]:opacity-100"
      >
        <div className="absolute inset-5 animate-[spin_8s_linear_infinite] rounded-full border border-[rgba(0,224,150,0.2)]" />
        <div className="absolute inset-12.5 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-dashed border-[rgba(0,180,216,0.15)]" />
        <div className="absolute -inset-2.5 animate-[spin_15s_linear_infinite] rounded-full border-2 border-dotted border-[rgba(124,92,252,0.15)]" />
      </div>

      {/* Light burst */}
      <div
        id="lightBurst"
        className="absolute top-1/2 left-1/2 z-[3] h-175 w-175 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.35)_0%,rgba(0,224,150,0.12)_30%,transparent_65%)] opacity-0 transition-[transform,opacity] duration-1500 ease-[cubic-bezier(.16,1,.3,1)] [&.show]:scale-[2] [&.show]:opacity-100"
      />

      {/* Horizontal reveal lines */}
      <div
        id="hLineLeft"
        className="absolute top-1/2 right-1/2 z-[4] mr-65 h-px w-0 bg-linear-to-r from-transparent via-[rgba(0,180,216,0.5)] to-transparent transition-[width] duration-1200 ease-[cubic-bezier(.16,1,.3,1)] max-[600px]:hidden [&.show]:w-[35vw]"
      />
      <div
        id="hLineRight"
        className="absolute top-1/2 left-1/2 z-[4] ml-65 h-px w-0 bg-linear-to-r from-transparent via-[rgba(0,180,216,0.5)] to-transparent transition-[width] duration-1200 ease-[cubic-bezier(.16,1,.3,1)] max-[600px]:hidden [&.show]:w-[35vw]"
      />

      {/* Main content */}
      <div
        id="welcomeContent"
        className="relative z-10 flex scale-95 flex-col items-center gap-4 text-center opacity-0 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] [&.show-all]:scale-100 [&.show-all]:opacity-100"
      >
        <div id="welcomeRow" className="flex justify-center gap-1.5">
          {'Welcome'.split('').map((ch, i) => (
            <span
              key={i}
              className="inline-block text-[clamp(1.8rem,4.5vw,3rem)] font-semibold text-white uppercase tracking-[.05em] [text-shadow:0_0_20px_rgba(0,180,216,0.3)]"
            >
              {ch}
            </span>
          ))}
          <span className="inline-block w-[.4em]">&nbsp;</span>
          <span className="inline-block text-[clamp(1.8rem,4.5vw,3rem)] font-normal text-white/55 uppercase tracking-[.05em]">t</span>
          <span className="inline-block text-[clamp(1.8rem,4.5vw,3rem)] font-normal text-white/55 uppercase tracking-[.05em]">o</span>
        </div>

        <div id="logoWrap" className="relative my-4 flex items-center justify-center">
          <div
            id="logoRing"
            className="absolute h-[clamp(260px,55vw,540px)] w-[clamp(260px,55vw,540px)] animate-ring-pulse rounded-full border-2 border-[rgba(0,180,216,0.2)] shadow-[0_0_30px_rgba(0,180,216,0.1)]"
          />
          <img
            src="/logo.png"
            alt="NEXUS"
            id="welcomeLogo"
            className="block max-w-[clamp(220px,50vw,460px)] animate-logo-float [filter:drop-shadow(0_0_30px_rgba(0,180,216,0.3))]"
          />
        </div>

        <div id="welcomeTagline" className="flex items-center gap-4">
          <span className="block h-px w-10 bg-[rgba(0,180,216,0.4)] max-[600px]:w-5" />
          <span className="font-mono text-[clamp(.75rem,1.6vw,.95rem)] tracking-[.2em] text-white/55 uppercase">
            Securing connectivity, ensuring trust.
          </span>
          <span className="block h-px w-10 bg-[rgba(0,180,216,0.4)] max-[600px]:w-5" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_25%,#050816_75%)]" />
      <div className="absolute top-[-2px] left-0 z-[3] h-0.5 w-full animate-scan-move bg-linear-to-r from-transparent via-[rgba(0,224,150,0.6)] to-transparent opacity-30" />
      <div className="bg-grid-welcome absolute inset-0 z-0" />
    </div>
  );
}
