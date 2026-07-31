import { Link } from 'react-router-dom';
import Container from './Container';

function SealSVG() {
  return (
    <svg className="h-auto w-[min(420px,90%)]" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-cyan-500)" />
          <stop offset="100%" stopColor="var(--color-indigo-600)" />
        </linearGradient>
      </defs>

      {/* Rotating data rings */}
      <g className="origin-[200px_200px] animate-seal-spin">
        <circle cx="200" cy="200" r="186" fill="none" stroke="var(--color-cyan-500)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
        <circle cx="200" cy="200" r="172" fill="none" stroke="var(--color-indigo-600)" strokeWidth="2" strokeDasharray="30 20 5 20" opacity="0.6" />
      </g>

      {/* Nested Hexagons */}
      <polygon
        className="animate-seal-draw [stroke-dasharray:900] [stroke-dashoffset:900] [animation-delay:200ms]"
        points="200,50 336,125 336,275 200,350 64,275 64,125"
        fill="none"
        stroke="url(#hex-grad)"
        strokeWidth="2"
        filter="url(#neon-glow)"
      />
      <polygon points="200,70 318,137 318,263 200,330 82,263 82,137" fill="none" stroke="var(--color-cyan-500)" strokeWidth="1" opacity="0.3" strokeDasharray="10 5" />

      {/* Connecting lines */}
      <g stroke="var(--color-cyan-500)" strokeWidth="2" filter="url(#neon-glow)" opacity="0.8">
        <line x1="200" y1="50" x2="200" y2="14" />
        <line x1="336" y1="125" x2="368" y2="107" />
        <line x1="336" y1="275" x2="368" y2="293" />
        <line x1="200" y1="350" x2="200" y2="386" />
        <line x1="64" y1="275" x2="32" y2="293" />
        <line x1="64" y1="125" x2="32" y2="107" />
      </g>

      {/* Glowing Nodes */}
      <g fill="var(--color-cyan-500)" filter="url(#neon-glow)">
        <circle className="animate-seal-pulse" cx="200" cy="14" r="6" />
        <circle className="animate-seal-pulse [animation-delay:400ms]" cx="368" cy="107" r="6" />
        <circle className="animate-seal-pulse [animation-delay:800ms]" cx="368" cy="293" r="6" />
        <circle className="animate-seal-pulse" cx="200" cy="386" r="6" />
        <circle className="animate-seal-pulse [animation-delay:400ms]" cx="32" cy="293" r="6" />
        <circle className="animate-seal-pulse [animation-delay:800ms]" cx="32" cy="107" r="6" />
      </g>

      {/* High-tech Lock */}
      <g filter="url(#neon-glow)">
        <rect x="156" y="196" width="88" height="64" rx="8" fill="none" stroke="var(--color-navy)" strokeWidth="4" />
        <rect x="160" y="200" width="80" height="56" rx="6" fill="var(--color-navy)" opacity="0.9" />
        <path d="M174 196 v-24 a26 26 0 0 1 52 0 v24" fill="none" stroke="var(--color-cyan-500)" strokeWidth="6" strokeLinecap="round" />
        <circle className="animate-seal-pulse" cx="200" cy="222" r="7" fill="var(--color-cyan-500)" />
        <rect className="animate-seal-pulse [animation-delay:200ms]" x="196" y="222" width="8" height="18" rx="3" fill="var(--color-cyan-500)" />
      </g>

      {/* Scanning line effect */}
      <line x1="140" y1="196" x2="260" y2="196" stroke="var(--color-cyan-500)" strokeWidth="2" filter="url(#neon-glow)">
        <animate attributeName="y1" values="196;260;196" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="196;260;196" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

export default function HeroSection({
  compact = false,
  eyebrow,
  title,
  lede,
  ctaButtons = [],
  stats = [],
  showSeal = false,
  style = {},
  children,
}) {
  return (
    <header
      className={`relative overflow-hidden pt-[150px] pb-16 ${compact ? 'min-h-[62vh] pb-12 text-center' : 'min-h-screen'}`}
      style={style}
      id="home"
    >
      {showSeal && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-50 -left-50 h-150 w-150 animate-drift rounded-full bg-cyan-500 opacity-25 mix-blend-multiply blur-[120px]" />
          <div className="absolute -right-25 -bottom-25 h-125 w-125 animate-drift rounded-full bg-pink-500 opacity-25 mix-blend-multiply blur-[120px] [animation-delay:-6s]" />
          <div className="absolute top-[30%] right-[10%] h-100 w-100 animate-drift rounded-full bg-indigo-600 opacity-20 mix-blend-multiply blur-[140px] [animation-direction:alternate-reverse]" />
        </div>
      )}

      <Container
        className={`relative z-10 grid items-center gap-8 ${
          compact ? '' : 'min-[900px]:grid-cols-[1.1fr_0.9fr]'
        }`}
      >
        <div
          className={
            compact
              ? 'mx-auto max-w-[720px] text-center'
              : 'mx-auto max-w-[720px] text-center min-[900px]:mx-0 min-[900px]:max-w-none min-[900px]:text-left'
          }
        >
          {eyebrow && (
            <p className="mb-4.5 inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.14em] text-navy uppercase before:h-px before:w-5.5 before:bg-pink-500 before:content-['']">
              {eyebrow}
            </p>
          )}
          {title && (
            <h1 className="mb-4.5 translate-y-7 text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[1.05] opacity-0 animate-fade-up">
              {title}
            </h1>
          )}
          {lede && (
            <p
              className={`mx-auto mb-9 max-w-[46ch] translate-y-6 text-[clamp(1.05rem,1.6vw,1.25rem)] text-slate-600 opacity-0 animate-fade-up [animation-delay:150ms] ${
                compact ? '' : 'min-[900px]:mx-0'
              }`}
            >
              {lede}
            </p>
          )}
          {children}

          {ctaButtons.length > 0 && (
            <div
              className={`mb-12 flex translate-y-5 flex-wrap gap-4 opacity-0 animate-fade-up [animation-delay:300ms] ${
                compact ? 'justify-center' : ''
              }`}
            >
              {ctaButtons.map((btn, i) => (
                <Link
                  key={i}
                  to={btn.to}
                  className={
                    btn.secondary
                      ? 'inline-flex items-center gap-2 rounded-lg border border-line px-8 py-3.5 text-base font-semibold text-navy transition hover:border-navy hover:bg-paper-raised hover:backdrop-blur-2xl'
                      : 'inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(9,33,71,0.2)] transition hover:-translate-y-0.75 hover:bg-indigo-600 hover:shadow-glass-lg'
                  }
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}

          {stats.length > 0 && (
            <div
              className={`flex translate-y-5 flex-wrap gap-9.5 opacity-0 animate-fade-up [animation-delay:450ms] ${
                compact ? 'justify-center' : ''
              }`}
            >
              {stats.map((stat, i) => (
                <div className="border-l-2 border-pink-500 pl-3.5" key={i}>
                  <span
                    className="block font-mono text-[1.6rem] font-semibold text-navy"
                    data-count-to={stat.countTo}
                    data-prefix={stat.prefix || ''}
                    data-suffix={stat.suffix || ''}
                  >
                    {stat.prefix || ''}
                    {0}
                    {stat.suffix || ''}
                  </span>
                  <span className="text-[0.8rem] tracking-[0.04em] text-slate-600 uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {showSeal && (
          <div className="relative z-10 flex justify-center" aria-hidden="true">
            <SealSVG />
          </div>
        )}
      </Container>
    </header>
  );
}
