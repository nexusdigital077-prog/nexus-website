import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import { PillarBadge, PillarIcon, Wordmark } from '../components/PillarMarks';
import { ITBoardVisual } from '../components/PillarVisuals';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

const reveal =
  'translate-y-6 opacity-0 transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100';

/* ─── Service catalogue, grouped by what the client already has ─────── */
const SERVICE_GROUPS = [
  {
    code: 'BUILD',
    title: 'Build something new',
    intro: 'From a first website to business software designed around how your team works.',
    services: [
      { name: 'Website Development', desc: 'Company websites and landing pages that are fast, responsive and easy to update.' },
      { name: 'Web Application Development', desc: 'Browser-based applications, portals and internal tools.' },
      { name: 'Mobile Application Development', desc: 'Apps for Android and iOS, connected to your existing systems.' },
      { name: 'Custom Software Development', desc: 'Software built around your process instead of forcing your process around software.' },
      { name: 'CRM Development', desc: 'CRMs shaped to your sales, service and customer workflows.' },
      { name: 'API Development', desc: 'Clean, documented APIs for your apps, partners and integrations.' },
      { name: 'Database / Backend Development', desc: 'Data models, backend services and business logic that scale with you.' },
    ],
  },
  {
    code: 'IMPROVE',
    title: 'Improve what you already have',
    intro: 'We pick up software someone else built — or that your previous team left behind.',
    highlight: true,
    services: [
      { name: 'Existing CRM Maintenance', desc: 'Keep your current CRM stable, updated and working the way your team needs.' },
      { name: 'Existing Software Maintenance', desc: 'Ongoing care for applications that are already in production.' },
      { name: 'Bug Fixing', desc: 'Find, fix and verify the issues your users are running into.' },
      { name: 'Feature Development', desc: 'Add new capabilities to an existing codebase without starting over.' },
      { name: 'UI/UX Modernization', desc: 'Refresh outdated interfaces so they are easier and faster to use.' },
      { name: 'Legacy Software Modernization', desc: 'Move older systems onto current technology, step by step.' },
      { name: 'Performance Improvements', desc: 'Speed up slow pages, queries and workflows.' },
    ],
  },
  {
    code: 'CONNECT & RUN',
    title: 'Connect it and keep it running',
    intro: 'Integrations, releases and the long-term support that keeps software useful.',
    services: [
      { name: 'API & Third-Party Integrations', desc: 'Connect payment gateways, messaging, ERPs and other services.' },
      { name: 'Deployment / Technical Support', desc: 'Hosting, releases and hands-on help when something goes wrong.' },
      { name: 'Long-term Software Maintenance', desc: 'A technical team on call for the life of your software.' },
    ],
  },
];

const WHEN = [
  'You need a new website',
  'You need a web application',
  'You need a mobile application',
  'You need custom business software',
  'Your existing CRM needs maintenance',
  'Your application has bugs',
  'You need new features',
  'Your software UI is outdated',
  'You need integrations',
  'Your application needs modernization',
  'You need a technical team for ongoing maintenance',
];

const STEPS = [
  { num: '01', title: 'Understand', desc: 'We learn the business goal — and for existing software, review the code, data and hosting before promising anything.' },
  { num: '02', title: 'Scope', desc: 'A clear plan of what will be built or fixed, in what order, and what it will take.' },
  { num: '03', title: 'Build & fix', desc: 'Work ships in small, reviewable increments so you see progress early.' },
  { num: '04', title: 'Deploy', desc: 'We release to your environment and make sure it runs as expected.' },
  { num: '05', title: 'Maintain', desc: 'Stay on with us for bug fixes, updates and new features over time.' },
];

export default function ITSolutions() {
  useScrollReveal();
  useTiltEffect();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-[150px] pb-24">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-130 w-130 animate-drift rounded-full bg-cyan-500 opacity-20 mix-blend-multiply blur-[120px]" />
          <div className="absolute -right-25 bottom-0 h-110 w-110 animate-drift rounded-full bg-indigo-600 opacity-15 mix-blend-multiply blur-[130px] [animation-delay:-6s]" />
        </div>
        <Container className="relative z-10 grid items-center gap-16 min-[960px]:grid-cols-[1.05fr_0.95fr]">
          <div className="translate-y-6 opacity-0 animate-fade-up">
            <PillarBadge kind="services" className="mb-6" />
            <div className="mb-5 flex items-center gap-4">
              <PillarIcon id="it-solutions" />
              <Wordmark id="it-solutions" className="text-[clamp(1.3rem,2.4vw,1.7rem)]" />
            </div>
            <h1 className="mb-5 text-[clamp(2.1rem,3.7vw,3.3rem)] leading-[1.08]">
              Software engineering for businesses — <span className="text-gradient-brand">new builds and the systems you already run.</span>
            </h1>
            <p className="mb-9 max-w-[52ch] text-[clamp(1.02rem,1.5vw,1.18rem)] text-slate-600">
              We build websites, web and mobile applications, custom software and CRMs. And we don't only start from scratch: bring us the software you already have, and we'll maintain it, fix it, extend it and modernize it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/collaborate?type=it-new"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(9,33,71,0.2)] transition hover:-translate-y-0.5 hover:bg-indigo-600"
              >
                Discuss a new project &rarr;
              </Link>
              <Link
                to="/collaborate?type=it-existing"
                className="inline-flex items-center gap-2 rounded-lg border border-navy/20 bg-white/60 px-7 py-3.5 text-base font-semibold text-navy transition hover:border-navy"
              >
                Get help with existing software
              </Link>
            </div>
          </div>
          <div className="flex translate-y-6 justify-center opacity-0 animate-fade-up [animation-delay:250ms]">
            <ITBoardVisual />
          </div>
        </Container>
      </header>

      {/* ── POSITIONING STRIP ────────────────────────────────────────── */}
      <section className="bg-ink py-14 text-slate-50">
        <Container className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="mb-2 font-mono text-[0.7rem] tracking-[0.14em] text-slate-400 uppercase">Starting from zero?</p>
            <p className="font-display text-[1.35rem] leading-snug">We design and build it with you — web, mobile, backend and everything in between.</p>
          </div>
          <span className="hidden h-16 w-px bg-white/15 md:block" />
          <div>
            <p className="mb-2 font-mono text-[0.7rem] tracking-[0.14em] text-cyan-400 uppercase">Already have software?</p>
            <p className="font-display text-[1.35rem] leading-snug">We take it over, fix what's broken, add what's missing and keep it running.</p>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="scroll-mt-24 py-24 sm:py-28">
        <Container>
          <div className="mb-14 max-w-[680px]">
            <Eyebrow>SERVICES</Eyebrow>
            <h2 className="mb-3 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">What we do for clients.</h2>
            <p className="text-slate-600">Grouped by where you're starting from — a blank page, a system that needs work, or software that needs to connect and keep running.</p>
          </div>

          <div className="flex flex-col gap-8">
            {SERVICE_GROUPS.map((g) => (
              <div
                key={g.code}
                data-reveal
                className={`grid grid-cols-1 gap-6 rounded-2xl p-6 sm:p-8 lg:grid-cols-[280px_1fr] lg:gap-10 ${
                  g.highlight ? 'border border-cyan-500/30 bg-cyan-500/6' : 'glass-panel shadow-glass'
                } ${reveal}`}
              >
                <div>
                  <p className={`mb-2 font-mono text-[0.7rem] tracking-[0.14em] uppercase ${g.highlight ? 'text-cyan-700' : 'text-slate-500'}`}>{g.code}</p>
                  <h3 className="mb-2 text-[1.45rem] text-slate-900">{g.title}</h3>
                  <p className="text-[0.92rem] text-slate-600">{g.intro}</p>
                </div>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {g.services.map((s) => (
                    <li key={s.name} className="rounded-xl border border-navy/8 bg-white/70 p-4">
                      <p className="mb-1 font-display text-[1rem] font-semibold text-navy">{s.name}</p>
                      <p className="text-[0.85rem] leading-snug text-slate-600">{s.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHEN TO CALL US ──────────────────────────────────────────── */}
      <section className="bg-paper-raised py-24 sm:py-28">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>WHEN TO CALL US</Eyebrow>
            <h2 className="mb-4 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">If any of these sound familiar, we can help.</h2>
            <p className="text-slate-600">You don't need a full specification to get started. Tell us where things stand and we'll suggest the next step.</p>
          </div>
          <ul data-reveal className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${reveal}`}>
            {WHEN.map((w) => (
              <li key={w} className="glass-panel flex items-center gap-3 rounded-xl px-4 py-3.5 text-[0.95rem] text-slate-800 shadow-glass">
                <svg className="shrink-0 text-cyan-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {w}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="mb-12 max-w-[640px]">
            <Eyebrow>HOW WE WORK</Eyebrow>
            <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">From first conversation to long-term support.</h2>
          </div>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <li key={s.num} data-reveal data-delay={String(i * 80)} className={`glass-panel rounded-2xl p-6 shadow-glass ${reveal}`}>
                <p className="mb-4 font-mono text-[1.4rem] font-semibold text-cyan-600">{s.num}</p>
                <h3 className="mb-2 text-[1.1rem] text-slate-900">{s.title}</h3>
                <p className="text-[0.86rem] leading-snug text-slate-600">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── SAME TEAM AS OUR PRODUCTS ────────────────────────────────── */}
      <section className="bg-paper-raised py-24 sm:py-28">
        <Container>
          <div data-reveal className={`grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] ${reveal}`}>
            <div>
              <Eyebrow>PART OF NEXUS</Eyebrow>
              <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.4rem)] text-slate-900">We build and run software of our own, too.</h2>
              <p className="text-slate-600">
                Nexus IT Solutions sits alongside Nexus's own products, NexLock and NexWarranty. Building and operating live products every day is what we bring to client work: we know what it takes to keep software working after launch.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { id: 'nexlock', to: '/nexlock', line: 'Smart device lock & EMI recovery platform' },
                { id: 'nexwarranty', to: '/nexwarrenty', line: 'Extended warranty for appliances & electronics' },
              ].map((p) => (
                <Link key={p.id} to={p.to} className="glass-panel flex items-center gap-4 rounded-2xl p-4 shadow-glass transition hover:translate-x-1 hover:shadow-glass-lg">
                  <PillarIcon id={p.id} size="h-11 w-11" iconSize={22} />
                  <div className="min-w-0 flex-1">
                    <Wordmark id={p.id} className="text-[1.05rem]" />
                    <p className="text-[0.82rem] text-slate-600">{p.line}</p>
                  </div>
                  <span className="text-navy" aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <Container>
          <div data-reveal className={`relative overflow-hidden rounded-[20px] bg-ink px-6 py-14 text-center text-slate-50 sm:px-12 ${reveal}`}>
            <div className="bg-grid-ink pointer-events-none absolute inset-0 opacity-15" />
            <div className="relative">
              <Eyebrow onDark>START A CONVERSATION</Eyebrow>
              <h2 className="mb-3.5 text-slate-50">New project or existing system — tell us about it.</h2>
              <p className="mx-auto mb-8 max-w-[52ch] text-slate-300">Share what you need and what you already have. We'll reply with questions and a suggested next step.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/collaborate?type=it-new" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3.5 text-base font-semibold text-ink transition hover:bg-cyan-400">
                  Discuss a new project &rarr;
                </Link>
                <Link to="/collaborate?type=it-existing" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-base font-semibold text-slate-50 transition hover:border-white/60">
                  Get help with existing software
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
