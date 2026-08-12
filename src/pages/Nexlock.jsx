import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

/* ─── INLINE SVG ICON HELPER ─────────────────────────────────────────── */
const Icon = ({ path, size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

/* ─── ICON PATHS ──────────────────────────────────────────────────────── */
const ICONS = {
  qr:       'M3 3h6v6H3zm0 12h6v6H3zm12-12h6v6h-6zM9 9h1v1H9zm5 0h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm-2 0h1v1h-1zm0 2h1v1h-1zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm0 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z',
  lock:     'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  bell:     'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
  shield:   'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  phone:    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  users:    'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  chart:    'M18 20V10M12 20V4M6 20v-6',
  sim:      'M2 5a2 2 0 0 1 2-2h12l4 4v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z M9 13h6M9 9h6',
  flash:    'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  check:    'M20 6 9 17l-5-5',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  play:     'M5 3l14 9-14 9V3z',
  arrow:    'M5 12h14M12 5l7 7-7 7',
};

/* ─── BRAND COLORS ────────────────────────────────────────────────────── */
const C = {
  navy:      '#0c1b33',
  navyMid:   '#1a3260',
  blue:      '#2563eb',
  blueDark:  '#1d4ed8',
  blueLight: '#3b82f6',
  bgWhite:   '#ffffff',
  bgSoft:    '#f4f7ff',
  bgAlt:     '#eef2ff',
  border:    'rgba(37,99,235,0.15)',
  textPri:   '#0c1b33',
  textSec:   '#4b5d78',
  textMute:  '#8896ab',
};

/* ─── DATA ────────────────────────────────────────────────────────────── */
const HERO_CHIPS = ['One-Tap Setup', 'Smart Lock Overlay', 'Instant Enroll', 'No Root Required'];

const MARQUEE_ITEMS = ['NBFC', 'FINTECH', 'MOBILE RETAILERS', 'DEVICE FINANCING', 'DISTRIBUTORS', 'LENDING PARTNERS', 'EMI FINANCE', 'MICROFINANCE'];

const WORKFLOW_STEPS = [
  { num: '01', icon: ICONS.download, title: 'Install NexLock', desc: 'Download and install directly from Google Play — no special provisioning or device wipe required.' },
  { num: '02', icon: ICONS.shield,   title: 'Grant Permissions', desc: 'Enable overlay, accessibility, and device admin permissions during a simple guided setup.' },
  { num: '03', icon: ICONS.qr,       title: 'QR Scan & Link', desc: 'Scan one QR code to instantly link the device to your dashboard and customer account.' },
  { num: '04', icon: ICONS.bell,     title: 'Set EMI Schedule', desc: 'Configure payment dates, grace periods, and automated reminder sequences.' },
  { num: '05', icon: ICONS.chart,    title: 'Monitor & Auto-Lock', desc: 'NexLock automatically restricts device access when a payment is overdue — hands-free.' },
  { num: '06', icon: ICONS.lock,     title: 'Restore Access', desc: 'Unlock instantly via the dashboard the moment payment is confirmed.' },
];

const FEATURES = [
  { icon: ICONS.qr,    label: 'One QR Scan',        desc: 'Onboard any device in seconds with a single QR scan — no double setup, no manual entry.' },
  { icon: ICONS.flash, label: 'Easy Installation',   desc: 'Install like a standard Play Store app — no technical expertise or device wipe needed.' },
  { icon: ICONS.bell,  label: 'Smart Reminders',     desc: 'Automated notifications reduce missed payments before a lock even becomes necessary.' },
  { icon: ICONS.lock,  label: 'Auto Lock',           desc: 'Device access is restricted automatically when EMI falls overdue — no manual action.' },
  { icon: ICONS.phone, label: 'Device Monitoring',   desc: 'Real-time status tracking for every financed device in your portfolio at a glance.' },
  { icon: ICONS.users, label: 'Customer Management', desc: 'Manage borrower profiles, contracts, and payment history from one unified dashboard.' },
  { icon: ICONS.check, label: 'Instant Enrollment',  desc: 'New devices go live in under 60 seconds — dramatically faster than legacy setup flows.' },
  { icon: ICONS.sim,   label: 'SIM Swap Detection',  desc: 'Detects SIM card removal or replacement and triggers an immediate security alert.' },
];

const PROTECTION_LEFT = [
  'Overlay lock screen (no root required)',
  'Uninstall prevention via device admin',
  'Accessibility-based policy enforcement',
  'Secure permission-gated onboarding',
];
const PROTECTION_RIGHT = [
  'SIM swap & removal detection',
  'Remote lock / unlock from dashboard',
  'Real-time missed-payment alerts',
  'Offline unlock via time-limited codes',
];

const TOOLS = [
  { num: '001/', title: 'PAYMENT MONITORING',    desc: 'Track EMI payment status in real time with automated alerts, overdue flags, and exportable reports.', tags: ['EMI', 'Alerts', 'Reports'] },
  { num: '002/', title: 'REMOTE DEVICE ACTIONS', desc: 'Lock, unlock, and send payment reminders remotely — no physical access, no field agents needed.',   tags: ['Remote', 'Control', 'Automation'] },
  { num: '003/', title: 'ANALYTICS DASHBOARD',   desc: 'Gain portfolio-level insights into repayment rates, risk distribution, and device health trends.',      tags: ['Data', 'Insights', 'Reports'] },
];

/* ─── SHARED STYLE HELPERS ────────────────────────────────────────────── */
const lightCard = {
  background: '#fff',
  border: `1px solid ${C.border}`,
  borderRadius: '1rem',
  boxShadow: '0 4px 24px rgba(37,99,235,0.08)',
};

const blueIconBox = {
  width: 48, height: 48,
  borderRadius: '0.75rem',
  background: `linear-gradient(135deg, ${C.blue}, ${C.navyMid})`,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  flexShrink: 0,
};

/* ─── COMPONENT ───────────────────────────────────────────────────────── */
export default function Nexlock() {
  useScrollReveal();
  useTiltEffect();

  return (
    <div style={{ background: C.bgWhite, color: C.textPri, fontFamily: 'inherit', overflowX: 'hidden', width: '100%' }}>

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section
        id="nexlock-hero"
        className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-24 min-h-[85vh] flex items-center"
        style={{
          background: `linear-gradient(145deg, #f0f5ff 0%, #e8f0fe 40%, #f4f7ff 100%)`,
        }}
      >
        {/* Decorative background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute -top-24 -right-24 w-80 h-80 sm:w-96 sm:h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left Column — Text */}
            <div className="text-left">
              <p data-reveal data-animate="fade-up" data-delay="0"
                className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4" style={{ color: C.blue }}>
                EMI Security Platform
              </p>
              <h1
                data-reveal data-animate="fade-up" data-delay="80"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6"
                style={{ color: C.navy }}
              >
                Smart Device Lock &amp;{' '}
                <span style={{ background: `linear-gradient(120deg, ${C.blue}, ${C.navyMid})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  EMI Recovery
                </span>{' '}
                Platform
              </h1>
              <p
                data-reveal data-animate="fade-up" data-delay="160"
                className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-xl"
              >
                Recover mobile financing loans and minimise default risks — no field agents, no repossession, no root access required.
              </p>

              {/* Chips */}
              <div data-reveal data-animate="fade-up" data-delay="240" className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {HERO_CHIPS.map((chip) => (
                  <span key={chip} className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold" style={{
                    border: `1px solid ${C.border}`,
                    background: 'rgba(37,99,235,0.06)',
                    color: C.blue,
                  }}>{chip}</span>
                ))}
              </div>

              {/* Stats */}
              <div data-reveal data-animate="fade-up" data-delay="320" className="flex gap-8 mb-8">
                <div>
                  <p className="text-3xl sm:text-4xl font-extrabold leading-none" style={{ color: C.blue }}>99%</p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Repayment Success</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-extrabold leading-none" style={{ color: C.blue }}>50K+</p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Active Devices</p>
                </div>
              </div>

              {/* CTAs */}
              <div data-reveal data-animate="fade-up" data-delay="400" className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a id="nexlock-get-started" href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${C.blue}, ${C.navyMid})`,
                    boxShadow: `0 8px 24px rgba(37,99,235,0.3)`,
                  }}
                >
                  <Icon path={ICONS.download} size={16} color="#fff" /> Get Started
                </a>
                <Link to="/contact" id="nexlock-contact-cta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider border-2 transition-colors hover:bg-slate-900 hover:text-white"
                  style={{
                    color: C.navy,
                    borderColor: C.navyMid,
                  }}
                >
                  Become a Partner &#8594;
                </Link>
              </div>
            </div>

            {/* Right Column — Responsive Hero Visual */}
            <div data-reveal data-animate="fade-left" data-delay="200"
              className="flex justify-center items-center relative py-6 lg:py-0 w-full overflow-hidden"
            >
              {/* Glowing Outer Container */}
              <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 max-w-full">
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-blue-500/10" />
                
                {/* Center Backdrop with NexLock Logo */}
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full flex items-center justify-center p-4 bg-gradient-to-br from-blue-500/10 to-indigo-900/5 backdrop-blur-sm shadow-xl">
                  <img
                    src="/nexlock-logo.png"
                    alt="NexLock Logo"
                    className="w-36 sm:w-44 h-auto object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. MARQUEE TICKER ───────────────────────────────────────── */}
      <section id="nexlock-marquee" className="py-4 overflow-hidden" style={{
        background: C.navy,
        borderTop: `1px solid rgba(255,255,255,0.06)`,
      }}>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="px-6 sm:px-10 text-xs font-bold tracking-widest text-slate-300 flex items-center gap-6 sm:gap-10 whitespace-nowrap">
              {item}
              <span className="text-blue-400 text-[10px]">&#9670;</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. VALUE PROPOSITION ─────────────────────────────────────── */}
      <section id="nexlock-value" className="py-16 sm:py-20 lg:py-24" style={{ background: C.bgSoft }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p data-reveal data-animate="fade-right" className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2" style={{ color: C.blue }}>Why NexLock</p>
              <h2 data-reveal data-animate="fade-right" data-delay="100"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4" style={{ color: C.navy }}>
                Leading EMI Risk<br />
                <span style={{ background: `linear-gradient(120deg, ${C.blue}, ${C.navyMid})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Management Platform</span>
              </h2>
              <p data-reveal data-animate="fade-right" data-delay="200"
                className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                NexLock gives device finance businesses a powerful, app-level tool to enforce EMI compliance automatically — keeping repayment rates high and default costs low, without any physical intervention.
              </p>
              <ul data-reveal data-animate="fade-right" data-delay="300"
                className="space-y-3 mb-8">
                {['Zero physical intervention or field agents','Works on any Android device without root','Compliant with RBI EMI collection guidelines','Real-time portfolio visibility'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="text-blue-600 font-bold flex-shrink-0">&#10003;</span> {item}
                  </li>
                ))}
              </ul>
              <div data-reveal data-animate="fade-right" data-delay="400" className="flex flex-wrap gap-3">
                <a href="#nexlock-features" id="nexlock-explore-features"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md"
                  style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.navyMid})` }}>
                  <Icon path={ICONS.arrow} size={16} color="#fff" /> Explore Features
                </a>
                <Link to="/contact" id="nexlock-partner-cta"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border-2"
                  style={{ color: C.navy, borderColor: C.navyMid }}>
                  Become a Partner
                </Link>
              </div>
            </div>

            {/* Stat Cards Grid */}
            <div data-reveal data-animate="fade-left" data-delay="150"
              className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value:'63%', label:'Default reduction in 90 days' },
                { value:'60s', label:'Device enrollment time' },
                { value:'ZERO', label:'Field agent cost required' },
                { value:'99.9%', label:'Platform uptime SLA' },
              ].map((stat, i) => (
                <div key={i} data-reveal data-animate="zoom-in" data-delay={String(200 + i * 80)} data-tilt
                  style={lightCard} className="p-5 sm:p-6 text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: C.blue }}>{stat.value}</p>
                  <p className="text-xs text-slate-500 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ──────────────────────────────────────────── */}
      <section id="nexlock-workflow" className="py-16 sm:py-20 lg:py-24" style={{ background: C.bgWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p data-reveal data-animate="fade-up" className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2" style={{ color: C.blue }}>Workflow</p>
          <h2 data-reveal data-animate="fade-up" data-delay="100"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: C.navy }}>How NexLock Works</h2>
          <p data-reveal data-animate="fade-up" data-delay="180"
            className="text-sm sm:text-base text-slate-600 mb-10 max-w-xl">
            From installation to repayment, manage every device in one seamless flow.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={step.num} data-reveal data-animate="zoom-in" data-delay={String(i * 80)} data-tilt
                style={lightCard} className="p-6 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-xs font-mono font-extrabold text-blue-500/20">{step.num}</span>
                <div style={blueIconBox} className="mb-4">
                  <Icon path={step.icon} size={22} color="#fff" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: C.navy }}>{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FEATURES GRID ─────────────────────────────────────────── */}
      <section id="nexlock-features" className="py-16 sm:py-20 lg:py-24" style={{ background: C.bgAlt }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p data-reveal data-animate="fade-up" className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2" style={{ color: C.blue }}>Solutions</p>
              <h2 data-reveal data-animate="fade-up" data-delay="100"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight" style={{ color: C.navy }}>Built For Device<br />Financing Businesses</h2>
            </div>
            <div data-reveal data-animate="fade-left" data-delay="200">
              <Link to="/contact" id="nexlock-all-features"
                className="inline-flex items-center px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md"
                style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.navyMid})` }}>
                All Features
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {FEATURES.map((feat, i) => (
              <div key={feat.label} data-reveal data-animate="fade-up" data-delay={String(i * 70)} data-tilt
                style={lightCard} className="p-5 sm:p-6 flex flex-col gap-3 transition-all hover:border-blue-400 hover:shadow-lg"
              >
                <div style={blueIconBox}><Icon path={feat.icon} size={20} color="#fff" /></div>
                <p className="text-xs font-extrabold tracking-wider uppercase" style={{ color: C.navy }}>{feat.label}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ADVANCED PROTECTION ───────────────────────────────────── */}
      <section id="nexlock-protection" className="py-16 sm:py-20 lg:py-24" style={{ background: C.bgWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p data-reveal data-animate="fade-up" className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2" style={{ color: C.blue }}>Advanced Protection</p>
          <h2 data-reveal data-animate="fade-up" data-delay="100"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-10 leading-tight" style={{ color: C.navy }}>
            App-Grade EMI<br />Device Protection
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">
            {/* Left Card */}
            <div data-reveal data-animate="fade-right" data-delay="100"
              style={lightCard} className="p-6 sm:p-8 border-l-4 border-l-blue-600">
              <h3 className="text-lg font-bold mb-2" style={{ color: C.navy }}>App-Level Security</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">Powerful protection implemented entirely through Android built-in permission system — no rooting, no enterprise enrollment.</p>
              <ul className="space-y-3">
                {PROTECTION_LEFT.map(item => (
                  <li key={item} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600">
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">&#9658;</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Logo Emblem */}
            <div data-reveal data-animate="zoom-in" data-delay="200"
              className="flex justify-center my-4 lg:my-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center p-3 shadow-lg">
                <img src="/nexlock-logo.png" alt="NexLock Emblem" className="w-20 sm:w-24 h-auto object-contain" />
              </div>
            </div>

            {/* Right Card */}
            <div data-reveal data-animate="fade-left" data-delay="100"
              style={lightCard} className="p-6 sm:p-8 border-r-4 border-r-indigo-900">
              <h3 className="text-lg font-bold mb-2" style={{ color: C.navy }}>Reliable Protection</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">Multi-layer safeguards ensure financed devices remain protected against tampering, SIM swaps, and evasion attempts.</p>
              <ul className="space-y-3">
                {PROTECTION_RIGHT.map(item => (
                  <li key={item} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600">
                    <span className="text-indigo-900 font-bold mt-0.5 flex-shrink-0">&#9658;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. INTELLIGENT TOOLS ─────────────────────────────────────── */}
      <section id="nexlock-tools" className="py-16 sm:py-20 lg:py-24" style={{ background: C.bgSoft }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p data-reveal data-animate="fade-up" className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2" style={{ color: C.blue }}>Platform Capabilities</p>
          <h2 data-reveal data-animate="fade-up" data-delay="100"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-10" style={{ color: C.navy }}>Intelligent EMI Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOOLS.map((tool, i) => (
              <div key={tool.num} data-reveal data-animate="fade-up" data-delay={String(i * 100)} data-tilt
                style={lightCard} className="p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-900" />
                <div>
                  <p className="text-3xl font-extrabold font-mono mb-3" style={{ color: C.blue }}>{tool.num}</p>
                  <p className="text-xs font-extrabold tracking-widest mb-3 uppercase" style={{ color: C.navy }}>{tool.title}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{tool.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {tool.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full border border-blue-200 bg-blue-50/50 text-xs font-semibold text-blue-600">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. EMI OVERDUE ───────────────────────────────────────────── */}
      <section id="nexlock-emi" className="py-16 sm:py-20 lg:py-24" style={{ background: C.bgWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p data-reveal data-animate="fade-right" className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2" style={{ color: C.blue }}>EMI Protection</p>
              <h2 data-reveal data-animate="fade-right" data-delay="100"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-6" style={{ color: C.navy }}>
                What Happens When<br />You Miss An EMI?
              </h2>
              
              <div data-reveal data-animate="fade-right" data-delay="200"
                className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                {[
                  { value:'7 Days', label:'Grace Period' },
                  { value:'24/7',   label:'Device Monitoring' },
                  { value:'100%',   label:'Data Encryption' },
                  { value:'&#8377;10L', label:'EMI Cover*' },
                ].map((s, i) => (
                  <div key={s.label} data-reveal data-animate="zoom-in" data-delay={String(200 + i * 80)}
                    style={lightCard} className="p-4 sm:p-5 text-center">
                    <p className="text-xl sm:text-2xl font-extrabold mb-1" style={{ color: C.navy }} dangerouslySetInnerHTML={{__html: s.value}} />
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>

              <div data-reveal data-animate="fade-right" data-delay="500" className="flex flex-wrap gap-3">
                <Link to="/contact" id="nexlock-learn-more"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border-2"
                  style={{ color: C.navy, borderColor: C.navyMid }}>
                  <Icon path={ICONS.shield} size={16} color={C.navy} /> Learn More
                </Link>
                <Link to="/contact" id="nexlock-become-partner"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md"
                  style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.navyMid})` }}>
                  Become Partner
                </Link>
              </div>
            </div>

            {/* Auto-Lock Visual Card */}
            <div data-reveal data-animate="fade-left" data-delay="200"
              className="bg-gradient-to-br from-indigo-50 to-blue-100/70 border border-blue-200 rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-lg min-h-[300px]"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-600/10 border-2 border-blue-300 flex items-center justify-center mb-5 shadow-inner">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: C.navy }}>Auto-Lock Activated</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mb-5">
                The device displays a payment reminder screen. Core functions are restricted until the overdue EMI is cleared.
              </p>
              <div className="px-4 py-2 rounded-full bg-red-100 border border-red-300 text-xs font-bold text-red-600 tracking-wider">
                PAYMENT OVERDUE &#8212; DEVICE RESTRICTED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. DOWNLOAD CTA ──────────────────────────────────────────── */}
      <section id="nexlock-download"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 50%, #1e3a8a 100%)`,
        }}>
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Logo container */}
          <div data-reveal data-animate="zoom-in" className="flex justify-center mb-6">
            <div className="bg-white/95 rounded-2xl px-5 py-3 inline-flex items-center justify-center shadow-lg">
              <img src="/nexlock-logo.png" alt="NexLock" className="w-28 sm:w-36 h-auto object-contain" />
            </div>
          </div>
          
          <p data-reveal data-animate="fade-up" className="text-xs sm:text-sm font-bold tracking-widest uppercase text-blue-300 mb-3">Get Started Today</p>
          <h2 data-reveal data-animate="zoom-in" data-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Download NexLock Today
          </h2>
          <p data-reveal data-animate="fade-up" data-delay="200"
            className="text-sm sm:text-base text-slate-300 mb-8 max-w-md mx-auto">
            Join 50,000+ users who manage their device EMIs smarter.
          </p>

          <div data-reveal data-animate="zoom-in" data-delay="300"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a id="nexlock-google-play" href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:-translate-y-0.5 transition-transform"
              style={{ background: C.blue }}
            >
              <Icon path={ICONS.play} size={18} color="#fff" /> Google Play
            </a>
            <a id="nexlock-app-store" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white border border-white/30 bg-white/10 hover:bg-white/20 transition-colors"
            >
              &#8853; App Store
            </a>
          </div>

          <p data-reveal data-animate="fade-up" data-delay="450"
            className="mt-8 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
            *&#8377;10L EMI Cover subject to terms and conditions. NexLock operates under Android standard permission framework.{' '}
            <Link to="/nexlock/privacy" className="text-blue-300 underline hover:text-blue-200">Privacy Policy</Link>
            {' · '}
            <Link to="/nexlock/terms" className="text-blue-300 underline hover:text-blue-200">Terms of Service</Link>
          </p>
        </div>
      </section>

    </div>
  );
}
