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

/* ─── BRAND COLORS (matching NexLock logo: dark navy + electric blue) ── */
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
  borderNav: 'rgba(12,27,51,0.08)',
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

const EMI_STATS = [
  { value: '7 Days', label: 'Grace Period' },
  { value: '24/7',   label: 'Device Monitoring' },
  { value: '100%',   label: 'Data Encryption' },
  { value: '&#8377;10L', label: 'EMI Cover*' },
];

/* ─── SHARED STYLE HELPERS ────────────────────────────────────────────── */
const sectionPad = { padding: '6rem 2rem' };
const maxW = { maxWidth: 1200, margin: '0 auto', width: '100%' };

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
    <div style={{ background: C.bgWhite, color: C.textPri, fontFamily: 'inherit' }}>

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section
        id="nexlock-hero"
        style={{
          background: `linear-gradient(145deg, #f0f5ff 0%, #e8f0fe 40%, #f4f7ff 100%)`,
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '6rem',
          paddingBottom: '5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
          opacity: 0.6,
        }} />
        {/* Decorative blobs */}
        <div style={{ position:'absolute', top:'-10%', right:'-5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-15%', left:'-8%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(12,27,51,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div style={{ ...maxW, padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

            {/* Left column */}
            <div>
              <p data-reveal data-animate="fade-up" data-delay="0"
                style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:'1.25rem' }}>
                EMI Security Platform
              </p>
              <h1
                data-reveal data-animate="fade-up" data-delay="80"
                style={{ fontSize:'clamp(2.4rem, 5vw, 3.6rem)', fontWeight:800, lineHeight:1.1, marginBottom:'1.5rem', letterSpacing:'-0.02em', color:C.navy }}
              >
                Smart Device Lock &amp;{' '}
                <span style={{ background:`linear-gradient(120deg, ${C.blue}, ${C.navyMid})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  EMI Recovery
                </span>{' '}
                Platform
              </h1>
              <p
                data-reveal data-animate="fade-up" data-delay="160"
                style={{ fontSize:'1.05rem', color:C.textSec, lineHeight:1.7, marginBottom:'2rem', maxWidth:480 }}
              >
                Recover mobile financing loans and minimise default risks — no field agents, no repossession, no root access required.
              </p>

              {/* Chips */}
              <div data-reveal data-animate="fade-up" data-delay="240" style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'2.25rem' }}>
                {HERO_CHIPS.map((chip) => (
                  <span key={chip} style={{
                    padding:'0.3rem 0.9rem', borderRadius:'9999px',
                    border:`1px solid ${C.border}`,
                    background:'rgba(37,99,235,0.06)',
                    fontSize:'0.78rem', fontWeight:600, color:C.blue,
                  }}>{chip}</span>
                ))}
              </div>

              {/* Stats */}
              <div data-reveal data-animate="fade-up" data-delay="320" style={{ display:'flex', gap:'2.5rem', marginBottom:'2.5rem' }}>
                <div>
                  <p style={{ fontSize:'2.2rem', fontWeight:800, color:C.blue, lineHeight:1 }}>99%</p>
                  <p style={{ fontSize:'0.8rem', color:C.textMute, marginTop:'0.3rem' }}>Repayment Success</p>
                </div>
                <div>
                  <p style={{ fontSize:'2.2rem', fontWeight:800, color:C.blue, lineHeight:1 }}>50K+</p>
                  <p style={{ fontSize:'0.8rem', color:C.textMute, marginTop:'0.3rem' }}>Active Devices</p>
                </div>
              </div>

              {/* CTAs */}
              <div data-reveal data-animate="fade-up" data-delay="400" style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                <a id="nexlock-get-started" href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:'0.5rem',
                    padding:'0.85rem 1.9rem',
                    background:`linear-gradient(135deg, ${C.blue}, ${C.navyMid})`,
                    color:'#fff', fontSize:'0.85rem', fontWeight:700,
                    letterSpacing:'0.05em', textTransform:'uppercase',
                    borderRadius:'0.55rem', textDecoration:'none',
                    boxShadow:`0 8px 24px rgba(37,99,235,0.3)`,
                    transition:'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(37,99,235,0.4)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=`0 8px 24px rgba(37,99,235,0.3)`; }}
                >
                  <Icon path={ICONS.download} size={16} color="#fff" /> Get Started
                </a>
                <Link to="/contact" id="nexlock-contact-cta"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:'0.5rem',
                    padding:'0.82rem 1.75rem',
                    background:'transparent', color:C.navy,
                    fontSize:'0.85rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase',
                    borderRadius:'0.55rem', textDecoration:'none',
                    border:`1.5px solid ${C.navyMid}`,
                    transition:'background 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={e=>{ e.currentTarget.style.background=C.navy; e.currentTarget.style.color='#fff'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.color=C.navy; }}
                >
                  Become a Partner &#8594;
                </Link>
              </div>
            </div>

            {/* Right column — NexLock Logo hero visual */}
            <div data-reveal data-animate="fade-left" data-delay="200"
              style={{ display:'flex', justifyContent:'center', alignItems:'center', position:'relative' }}>
              {/* Decorative ring behind logo */}
              <div style={{
                position:'absolute',
                width:460, height:460,
                borderRadius:'50%',
                border:`1px solid rgba(37,99,235,0.15)`,
                animation:'ring-pulse 4s ease-in-out infinite',
              }} />
              <div style={{
                position:'absolute',
                width:380, height:380,
                borderRadius:'50%',
                border:`1px solid rgba(37,99,235,0.1)`,
                animation:'ring-pulse 4s ease-in-out infinite 1.5s',
              }} />
              {/* Glowing backdrop */}
              <div style={{
                width:280, height:280,
                borderRadius:'50%',
                background:'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(37,99,235,0.03) 60%, transparent 75%)',
                display:'flex', alignItems:'center', justifyContent:'center',
                animation:'logo-float 4s ease-in-out infinite',
              }}>
                <img
                  src="/nexlock-logo.png"
                  alt="NexLock Logo"
                  style={{ width:220, height:'auto', objectFit:'contain', filter:'drop-shadow(0 12px 32px rgba(37,99,235,0.25))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MARQUEE TICKER ───────────────────────────────────────── */}
      <section id="nexlock-marquee" style={{
        background: C.navy,
        borderTop:`1px solid rgba(255,255,255,0.06)`,
        padding:'1.1rem 0', overflow:'hidden',
      }}>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={{
              padding:'0 2.5rem', fontSize:'0.75rem', fontWeight:700,
              letterSpacing:'0.14em', color:'rgba(255,255,255,0.55)',
              display:'flex', alignItems:'center', gap:'2.5rem', whiteSpace:'nowrap',
            }}>
              {item}
              <span style={{ color:C.blueLight, fontSize:'0.6rem' }}>&#9670;</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. VALUE PROPOSITION ─────────────────────────────────────── */}
      <section id="nexlock-value" style={{ ...sectionPad, background:C.bgSoft }}>
        <div style={{ ...maxW, display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
          <div>
            <p data-reveal data-animate="fade-right" style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:'1rem' }}>Why NexLock</p>
            <h2 data-reveal data-animate="fade-right" data-delay="100"
              style={{ fontSize:'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight:800, lineHeight:1.2, marginBottom:'1.25rem', color:C.navy }}>
              Leading EMI Risk<br />
              <span style={{ background:`linear-gradient(120deg, ${C.blue}, ${C.navyMid})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Management Platform</span>
            </h2>
            <p data-reveal data-animate="fade-right" data-delay="200"
              style={{ fontSize:'1rem', color:C.textSec, lineHeight:1.75, marginBottom:'2rem' }}>
              NexLock gives device finance businesses a powerful, app-level tool to enforce EMI compliance automatically — keeping repayment rates high and default costs low, without any physical intervention.
            </p>
            <ul data-reveal data-animate="fade-right" data-delay="300"
              style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem' }}>
              {['Zero physical intervention or field agents','Works on any Android device without root','Compliant with RBI EMI collection guidelines','Real-time portfolio visibility'].map(item => (
                <li key={item} style={{ display:'flex', alignItems:'center', gap:'0.65rem', fontSize:'0.9rem', color:C.textSec }}>
                  <span style={{ color:C.blue, fontWeight:700, flexShrink:0 }}>&#10003;</span> {item}
                </li>
              ))}
            </ul>
            <div data-reveal data-animate="fade-right" data-delay="400" style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <a href="#nexlock-features" id="nexlock-explore-features"
                style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.82rem 1.75rem', background:`linear-gradient(135deg, ${C.blue}, ${C.navyMid})`, color:'#fff', fontSize:'0.82rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', borderRadius:'0.55rem', textDecoration:'none', boxShadow:`0 6px 20px rgba(37,99,235,0.25)` }}>
                <Icon path={ICONS.arrow} size={16} color="#fff" /> Explore Features
              </a>
              <Link to="/contact" id="nexlock-partner-cta"
                style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.82rem 1.75rem', background:'transparent', color:C.navy, fontSize:'0.82rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', borderRadius:'0.55rem', textDecoration:'none', border:`1.5px solid ${C.navyMid}` }}>
                Become a Partner
              </Link>
            </div>
          </div>

          {/* Stat cards */}
          <div data-reveal data-animate="fade-left" data-delay="150"
            style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            {[
              { value:'63%', label:'Default reduction in 90 days' },
              { value:'60s', label:'Device enrollment time' },
              { value:'ZERO', label:'Field agent cost required' },
              { value:'99.9%', label:'Platform uptime SLA' },
            ].map((stat, i) => (
              <div key={i} data-reveal data-animate="zoom-in" data-delay={String(200 + i * 80)} data-tilt
                style={{ ...lightCard, padding:'1.75rem 1.5rem', textAlign:'center' }}>
                <p style={{ fontSize:'2rem', fontWeight:800, color:C.blue, lineHeight:1, marginBottom:'0.5rem' }}>{stat.value}</p>
                <p style={{ fontSize:'0.78rem', color:C.textMute, lineHeight:1.4 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ──────────────────────────────────────────── */}
      <section id="nexlock-workflow" style={{ ...sectionPad, background:C.bgWhite }}>
        <div style={maxW}>
          <p data-reveal data-animate="fade-up" style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:'0.75rem' }}>Workflow</p>
          <h2 data-reveal data-animate="fade-up" data-delay="100"
            style={{ fontSize:'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight:800, marginBottom:'0.75rem', color:C.navy }}>How NexLock Works</h2>
          <p data-reveal data-animate="fade-up" data-delay="180"
            style={{ fontSize:'1rem', color:C.textSec, marginBottom:'3.5rem', maxWidth:520 }}>
            From installation to repayment, manage every device in one seamless flow.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'1.25rem' }}>
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={step.num} data-reveal data-animate="zoom-in" data-delay={String(i * 80)} data-tilt
                style={{ ...lightCard, padding:'2rem 1.75rem', position:'relative', overflow:'hidden' }}>
                {/* Decorative number */}
                <span style={{ position:'absolute', top:'1.2rem', right:'1.25rem', fontSize:'0.68rem', fontWeight:800, letterSpacing:'0.12em', color:'rgba(37,99,235,0.2)', fontFamily:'IBM Plex Mono, monospace' }}>{step.num}</span>
                <div style={{ ...blueIconBox, marginBottom:'1.2rem' }}>
                  <Icon path={step.icon} size={22} color="#fff" />
                </div>
                <h3 style={{ fontSize:'1rem', fontWeight:700, marginBottom:'0.5rem', color:C.navy }}>{step.title}</h3>
                <p style={{ fontSize:'0.85rem', color:C.textSec, lineHeight:1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FEATURES GRID ─────────────────────────────────────────── */}
      <section id="nexlock-features" style={{ ...sectionPad, background:C.bgAlt }}>
        <div style={maxW}>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexWrap:'wrap', gap:'1.5rem', marginBottom:'3.5rem' }}>
            <div>
              <p data-reveal data-animate="fade-up" style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:'0.75rem' }}>Solutions</p>
              <h2 data-reveal data-animate="fade-up" data-delay="100"
                style={{ fontSize:'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight:800, lineHeight:1.2, color:C.navy }}>Built For Device<br />Financing Businesses</h2>
            </div>
            <div data-reveal data-animate="fade-left" data-delay="200">
              <Link to="/contact" id="nexlock-all-features"
                style={{ display:'inline-flex', alignItems:'center', padding:'0.82rem 1.75rem', background:`linear-gradient(135deg, ${C.blue}, ${C.navyMid})`, color:'#fff', fontSize:'0.82rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', borderRadius:'0.55rem', textDecoration:'none', boxShadow:`0 6px 20px rgba(37,99,235,0.25)` }}>
                All Features
              </Link>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))', gap:'1.1rem' }}>
            {FEATURES.map((feat, i) => (
              <div key={feat.label} data-reveal data-animate="fade-up" data-delay={String(i * 70)} data-tilt
                style={{ ...lightCard, padding:'1.75rem 1.5rem', display:'flex', flexDirection:'column', gap:'0.85rem', transition:'border-color 0.25s, box-shadow 0.25s, transform 0.25s' }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(37,99,235,0.4)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(37,99,235,0.15)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=C.border; e.currentTarget.style.boxShadow='0 4px 24px rgba(37,99,235,0.08)'; }}
              >
                <div style={blueIconBox}><Icon path={feat.icon} size={20} color="#fff" /></div>
                <p style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.12em', color:C.navy, textTransform:'uppercase' }}>{feat.label}</p>
                <p style={{ fontSize:'0.84rem', color:C.textSec, lineHeight:1.6 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ADVANCED PROTECTION ───────────────────────────────────── */}
      <section id="nexlock-protection" style={{ ...sectionPad, background:C.bgWhite }}>
        <div style={maxW}>
          <p data-reveal data-animate="fade-up" style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:'0.75rem' }}>Advanced Protection</p>
          <h2 data-reveal data-animate="fade-up" data-delay="100"
            style={{ fontSize:'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight:800, marginBottom:'3.5rem', lineHeight:1.2, color:C.navy }}>
            App-Grade EMI<br />Device Protection
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:'2rem', alignItems:'center' }}>
            {/* Left */}
            <div data-reveal data-animate="fade-right" data-delay="100"
              style={{ ...lightCard, padding:'2.5rem 2rem', borderLeft:`4px solid ${C.blue}` }}>
              <h3 style={{ fontSize:'1.15rem', fontWeight:700, marginBottom:'0.5rem', color:C.navy }}>App-Level Security</h3>
              <p style={{ fontSize:'0.85rem', color:C.textSec, marginBottom:'1.5rem', lineHeight:1.6 }}>Powerful protection implemented entirely through Android built-in permission system — no rooting, no enterprise enrollment.</p>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.85rem' }}>
                {PROTECTION_LEFT.map(item => (
                  <li key={item} style={{ display:'flex', gap:'0.65rem', alignItems:'flex-start', fontSize:'0.85rem', color:C.textSec }}>
                    <span style={{ color:C.blue, marginTop:'0.1rem', flexShrink:0, fontWeight:700 }}>&#9658;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Centre emblem */}
            <div data-reveal data-animate="zoom-in" data-delay="200"
              style={{ width:160, height:160, borderRadius:'50%', background:`linear-gradient(135deg, ${C.blue}22, ${C.navyMid}11)`, border:`2px solid ${C.border}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, boxShadow:`0 0 60px rgba(37,99,235,0.15)`, animation:'ring-pulse 4s ease-in-out infinite' }}>
              <img src="/nexlock-logo.png" alt="NexLock" style={{ width:100, height:'auto', filter:'drop-shadow(0 4px 12px rgba(37,99,235,0.3))' }} />
            </div>
            {/* Right */}
            <div data-reveal data-animate="fade-left" data-delay="100"
              style={{ ...lightCard, padding:'2.5rem 2rem', borderRight:`4px solid ${C.navyMid}` }}>
              <h3 style={{ fontSize:'1.15rem', fontWeight:700, marginBottom:'0.5rem', color:C.navy }}>Reliable Protection</h3>
              <p style={{ fontSize:'0.85rem', color:C.textSec, marginBottom:'1.5rem', lineHeight:1.6 }}>Multi-layer safeguards ensure financed devices remain protected against tampering, SIM swaps, and evasion attempts.</p>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.85rem' }}>
                {PROTECTION_RIGHT.map(item => (
                  <li key={item} style={{ display:'flex', gap:'0.65rem', alignItems:'flex-start', fontSize:'0.85rem', color:C.textSec }}>
                    <span style={{ color:C.navyMid, marginTop:'0.1rem', flexShrink:0, fontWeight:700 }}>&#9658;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. INTELLIGENT TOOLS ─────────────────────────────────────── */}
      <section id="nexlock-tools" style={{ ...sectionPad, background:C.bgSoft }}>
        <div style={maxW}>
          <p data-reveal data-animate="fade-up" style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:'0.75rem' }}>Platform Capabilities</p>
          <h2 data-reveal data-animate="fade-up" data-delay="100"
            style={{ fontSize:'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight:800, marginBottom:'3.5rem', color:C.navy }}>Intelligent EMI Tools</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'1.5rem' }}>
            {TOOLS.map((tool, i) => (
              <div key={tool.num} data-reveal data-animate="fade-up" data-delay={String(i * 100)} data-tilt
                style={{ ...lightCard, padding:'2.25rem 2rem', position:'relative', overflow:'hidden' }}>
                {/* Blue top accent bar */}
                <div style={{ position:'absolute', top:0, left:0, right:0, height:4, background:`linear-gradient(90deg, ${C.blue}, ${C.navyMid})`, borderRadius:'1rem 1rem 0 0' }} />
                <p style={{ fontSize:'2.2rem', fontWeight:800, color:C.blue, fontFamily:'IBM Plex Mono, monospace', marginBottom:'1rem', lineHeight:1 }}>{tool.num}</p>
                <p style={{ fontSize:'0.72rem', fontWeight:800, letterSpacing:'0.14em', color:C.navy, marginBottom:'0.75rem' }}>{tool.title}</p>
                <p style={{ fontSize:'0.88rem', color:C.textSec, lineHeight:1.65, marginBottom:'1.5rem' }}>{tool.desc}</p>
                <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap' }}>
                  {tool.tags.map(tag => (
                    <span key={tag} style={{ padding:'0.2rem 0.75rem', borderRadius:'9999px', border:`1px solid ${C.border}`, background:'rgba(37,99,235,0.05)', fontSize:'0.72rem', fontWeight:700, color:C.blue, letterSpacing:'0.04em' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. EMI OVERDUE ───────────────────────────────────────────── */}
      <section id="nexlock-emi" style={{ ...sectionPad, background:C.bgWhite }}>
        <div style={{ ...maxW, display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
          <div>
            <p data-reveal data-animate="fade-right" style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blue, marginBottom:'0.75rem' }}>EMI Protection</p>
            <h2 data-reveal data-animate="fade-right" data-delay="100"
              style={{ fontSize:'clamp(1.6rem, 3vw, 2.4rem)', fontWeight:800, lineHeight:1.25, marginBottom:'2rem', color:C.navy }}>
              What Happens When<br />You Miss An EMI?
            </h2>
            <div data-reveal data-animate="fade-right" data-delay="200"
              style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'2.5rem' }}>
              {[
                { value:'7 Days', label:'Grace Period' },
                { value:'24/7',   label:'Device Monitoring' },
                { value:'100%',   label:'Data Encryption' },
                { value:'&#8377;10L', label:'EMI Cover*' },
              ].map((s, i) => (
                <div key={s.label} data-reveal data-animate="zoom-in" data-delay={String(200 + i * 80)}
                  style={{ ...lightCard, padding:'1.5rem', textAlign:'center' }}>
                  <p style={{ fontSize:'1.75rem', fontWeight:800, color:C.navy, marginBottom:'0.35rem' }} dangerouslySetInnerHTML={{__html: s.value}} />
                  <p style={{ fontSize:'0.75rem', color:C.textMute, letterSpacing:'0.04em' }}>{s.label}</p>
                </div>
              ))}
            </div>
            <div data-reveal data-animate="fade-right" data-delay="500" style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <Link to="/contact" id="nexlock-learn-more"
                style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.82rem 1.75rem', background:'transparent', color:C.navy, fontSize:'0.82rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', borderRadius:'0.55rem', textDecoration:'none', border:`1.5px solid ${C.navyMid}` }}>
                <Icon path={ICONS.shield} size={16} color={C.navy} /> Learn More
              </Link>
              <Link to="/contact" id="nexlock-become-partner"
                style={{ display:'inline-flex', alignItems:'center', padding:'0.82rem 1.75rem', background:`linear-gradient(135deg, ${C.blue}, ${C.navyMid})`, color:'#fff', fontSize:'0.82rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', borderRadius:'0.55rem', textDecoration:'none', boxShadow:`0 6px 20px rgba(37,99,235,0.25)` }}>
                Become Partner
              </Link>
            </div>
          </div>

          {/* Auto-lock visual */}
          <div data-reveal data-animate="fade-left" data-delay="200"
            style={{
              background:`linear-gradient(145deg, ${C.bgAlt}, #dce8ff)`,
              border:`1.5px solid ${C.border}`,
              borderRadius:'1.5rem',
              padding:'3rem 2rem',
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
              minHeight:340, textAlign:'center',
              boxShadow:`0 12px 48px rgba(37,99,235,0.12)`,
            }}>
            <div style={{ width:120, height:120, borderRadius:'50%', background:`linear-gradient(135deg, ${C.blue}33, ${C.navyMid}22)`, border:`2px solid ${C.border}`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.5rem', boxShadow:`0 8px 32px rgba(37,99,235,0.2)` }}>
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h3 style={{ fontSize:'1.3rem', fontWeight:700, marginBottom:'0.75rem', color:C.navy }}>Auto-Lock Activated</h3>
            <p style={{ fontSize:'0.88rem', color:C.textSec, lineHeight:1.65, maxWidth:280 }}>
              The device displays a payment reminder screen. Core functions are restricted until the overdue EMI is cleared.
            </p>
            <div style={{ marginTop:'1.5rem', padding:'0.6rem 1.5rem', borderRadius:'9999px', background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.25)', fontSize:'0.78rem', fontWeight:700, color:'#dc2626', letterSpacing:'0.08em' }}>
              PAYMENT OVERDUE &#8212; DEVICE RESTRICTED
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. DOWNLOAD CTA ──────────────────────────────────────────── */}
      <section id="nexlock-download"
        style={{
          background:`linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 50%, #1e3a8a 100%)`,
          padding:'8rem 2rem', textAlign:'center', position:'relative', overflow:'hidden',
        }}>
        {/* Decorative circles */}
        <div style={{ position:'absolute', top:'-20%', right:'-10%', width:500, height:500, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.05)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-30%', left:'-5%', width:400, height:400, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.04)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize:'52px 52px', pointerEvents:'none' }} />

        <div style={{ ...maxW, position:'relative', zIndex:1 }}>
          {/* NexLock logo in CTA */}
          <div data-reveal data-animate="zoom-in"
            style={{ display:'flex', justifyContent:'center', marginBottom:'2rem' }}>
            <div style={{ background:'rgba(255,255,255,0.95)', borderRadius:'1.25rem', padding:'0.85rem 1.5rem', display:'inline-flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 24px rgba(0,0,0,0.25)' }}>
              <img src="/nexlock-logo.png" alt="NexLock"
                style={{ width:120, height:'auto' }} />
            </div>
          </div>
          <p data-reveal data-animate="fade-up" style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:C.blueLight, marginBottom:'1rem' }}>Get Started Today</p>
          <h2 data-reveal data-animate="zoom-in" data-delay="100"
            style={{ fontSize:'clamp(2rem, 5vw, 3.5rem)', fontWeight:900, lineHeight:1.1, marginBottom:'1.25rem', color:'#fff' }}>
            Download NexLock Today
          </h2>
          <p data-reveal data-animate="fade-up" data-delay="200"
            style={{ fontSize:'1rem', color:'rgba(255,255,255,0.6)', marginBottom:'2.5rem', maxWidth:480, margin:'0 auto 2.5rem' }}>
            Join 50,000+ users who manage their device EMIs smarter.
          </p>
          <div data-reveal data-animate="zoom-in" data-delay="300"
            style={{ display:'flex', gap:'1.25rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a id="nexlock-google-play" href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.65rem', padding:'1rem 2.25rem', background:C.blue, color:'#fff', fontSize:'0.9rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', borderRadius:'0.6rem', textDecoration:'none', boxShadow:`0 8px 24px rgba(37,99,235,0.5)`, transition:'transform 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='';}}
            >
              <Icon path={ICONS.play} size={18} color="#fff" /> Google Play
            </a>
            <a id="nexlock-app-store" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.65rem', padding:'1rem 2.25rem', background:'rgba(255,255,255,0.1)', color:'#fff', fontSize:'0.9rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', borderRadius:'0.6rem', textDecoration:'none', border:'1.5px solid rgba(255,255,255,0.25)', transition:'background 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.18)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.1)';}}
            >
              &#8853; App Store
            </a>
          </div>
          <p data-reveal data-animate="fade-up" data-delay="450"
            style={{ marginTop:'2.5rem', fontSize:'0.72rem', color:'rgba(255,255,255,0.3)', lineHeight:1.6 }}>
            *&#8377;10L EMI Cover subject to terms and conditions. NexLock operates under Android standard permission framework.{' '}
            <Link to="/nexlock/privacy" style={{ color:'rgba(147,197,253,0.7)', textDecoration:'underline' }}>Privacy Policy</Link>
            {' · '}
            <Link to="/nexlock/terms" style={{ color:'rgba(147,197,253,0.7)', textDecoration:'underline' }}>Terms of Service</Link>
          </p>
        </div>
      </section>

    </div>
  );
}
