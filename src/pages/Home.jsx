import { Link } from 'react-router-dom';
import WelcomeOverlay from '../components/WelcomeOverlay';
import HeroSection from '../components/HeroSection';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import { PillarBadge, PillarIcon, Wordmark } from '../components/PillarMarks';
import { CompanyMap, ITBoardVisual, NexLockPhoneVisual, NexWarrantyCertificateVisual } from '../components/PillarVisuals';
import { PILLARS, pillarById } from '../data/pillars';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';
import useTiltEffect from '../hooks/useTiltEffect';
import teamSagar from '../assets/team-sagar.jpg';
import teamKunal from '../assets/team-kunal.jpg';
import teamKetan from '../assets/team-ketan.jpg';
import teamAshish from '../assets/team-ashish.jpg';
import teamJanak from '../assets/team-janak.jpg';
import teamVivek from '../assets/team-vivek.jpg';
import nexusTeam from '../assets/nexus-team.jpg';

const team = [
  { initial: 'S', name: 'Sagar', role: 'Chief Executive Officer', bio: 'Working for the past 10 years in IT and Business Development fields.', gradient: 'from-navy to-cyan-500', photo: teamSagar },
  { initial: 'K', name: 'Kunal Kurmi', role: 'Chief Operating Officer', bio: 'B.Tech graduate of Thakur College of Engineering and Technology. Experienced with Spectrum, driving OnAssist and VWarranty.', gradient: 'from-[#0f6a8c] to-[#22d3ee]', photo: teamKunal },
  { initial: 'K', name: 'Ketan', role: 'Chief Strategy Officer', bio: 'Worked with Onsitego, bringing 8 years of deep expertise in the extended warranty field.', gradient: 'from-[#17325c] to-[#0096c7]', photo: teamKetan },
  { initial: 'V', name: 'Vivek Gupta', role: 'Lead Software Developer', bio: 'The architect behind the tech — driving digital platforms, web systems, and engineering infrastructure.', gradient: 'from-[#2563eb] to-[#06b6d4]', photo: teamVivek },
  { initial: 'A', name: 'Ashish', role: 'Chief Financial Officer / Advisor', bio: 'Our dedicated financial advisor, ensuring robust economic growth and stability.', gradient: 'from-[#0b3d66] to-[#48cae4]', photo: teamAshish },
  { initial: 'J', name: 'Janak Shah', role: 'Investor', bio: 'Strategic investor backing our vision for the future of IT and EMI security.', gradient: 'from-[#0a0f1e] to-[#22d3ee]', photo: teamJanak },
];

const reveal =
  'translate-y-6 opacity-0 transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100';

const IT_BUILD = ['Websites', 'Web applications', 'Mobile applications', 'Custom business software', 'CRM development', 'APIs & backends'];
const IT_EXISTING = ['CRM & software maintenance', 'Bug fixing', 'New feature development', 'UI/UX modernization', 'Legacy modernization', 'Integrations & performance'];

const NEXLOCK_FEATURES = [
  { title: 'One QR scan', desc: 'Link a device to the dashboard and customer account in a single scan.' },
  { title: 'Auto lock', desc: 'Access is restricted automatically when an EMI falls overdue.' },
  { title: 'Remote unlock', desc: 'Restore the device from the dashboard once payment is confirmed.' },
  { title: 'SIM swap detection', desc: 'SIM removal or replacement triggers a security alert.' },
];

const NEXWARRANTY_FEATURES = [
  { title: '100% parts & labour', desc: 'Mechanical and electrical breakdowns after the brand warranty expires.' },
  { title: 'Zero depreciation', desc: 'Full claim value with no deduction.' },
  { title: 'Doorstep service', desc: 'Free pickup and drop, with complimentary transportation.' },
  { title: 'Authorized repairs', desc: 'Claims route to brand-authorized service centers.' },
];

/* ─── Shared layout for the three pillar deep-dives ─────────────────────
   Every pillar gets the same structure, size and weight; only the accent,
   copy and visual change.
   ──────────────────────────────────────────────────────────────────────── */
function PillarSection({ pillarId, number, heading, intro, visual, reverse = false, tinted = false, ctas, children }) {
  const p = pillarById(pillarId);
  return (
    <section id={pillarId} className={`relative scroll-mt-24 overflow-hidden py-24 sm:py-28 ${tinted ? 'bg-paper-raised' : ''}`}>
      <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${p.accent.bar}`} aria-hidden="true" />
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className={`${reveal} ${reverse ? 'lg:order-2' : ''}`}>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className={`font-mono text-[0.72rem] tracking-[0.14em] uppercase ${p.accent.text}`}>Pillar {number}</span>
              <span className="h-px w-6 bg-navy/20" />
              <PillarBadge kind={p.kind} />
            </div>
            <div className="mb-5 flex items-center gap-4">
              <PillarIcon id={p.id} />
              <Wordmark id={p.id} className="text-[clamp(1.4rem,2.6vw,1.9rem)]" />
            </div>
            <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.12] text-slate-900">{heading}</h2>
            <p className="mb-8 max-w-[58ch] text-slate-600">{intro}</p>
            {children}
            <div className="mt-9 flex flex-wrap gap-3.5">
              {ctas.map((cta, i) => {
                const cls =
                  i === 0
                    ? `inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[0.95rem] font-semibold text-white shadow-[0_8px_20px_rgba(9,33,71,0.18)] transition hover:-translate-y-0.5 bg-linear-to-r ${p.accent.bar}`
                    : 'inline-flex items-center gap-2 rounded-lg border border-navy/20 bg-white/60 px-6 py-3 text-[0.95rem] font-semibold text-navy transition hover:border-navy';
                return (
                  <Link key={cta.label} to={cta.to} className={cls}>
                    {cta.label} {i === 0 && <span aria-hidden="true">&rarr;</span>}
                  </Link>
                );
              })}
            </div>
          </div>
          <div data-reveal data-animate={reverse ? 'fade-right' : 'fade-left'} className={`flex justify-center ${reveal} ${reverse ? 'lg:order-1' : ''}`}>
            {visual}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureGrid({ items, accent }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f.title} className="glass-panel rounded-xl p-4 shadow-glass">
          <p className={`mb-1 flex items-center gap-2 font-display text-[0.98rem] font-semibold text-slate-900`}>
            <span className={`h-1.5 w-1.5 rounded-full ${accent.bg}`} />
            {f.title}
          </p>
          <p className="text-[0.85rem] leading-snug text-slate-600">{f.desc}</p>
        </li>
      ))}
    </ul>
  );
}

function ProblemSolution({ problem, solution, accent }) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-navy/10 bg-white/50 p-4">
        <p className="mb-1.5 font-mono text-[0.66rem] tracking-[0.14em] text-slate-500 uppercase">The problem</p>
        <p className="text-[0.9rem] leading-snug text-slate-700">{problem}</p>
      </div>
      <div className={`rounded-xl border p-4 ${accent.border} ${accent.soft}`}>
        <p className={`mb-1.5 font-mono text-[0.66rem] tracking-[0.14em] uppercase ${accent.text}`}>What it does</p>
        <p className="text-[0.9rem] leading-snug text-slate-800">{solution}</p>
      </div>
    </div>
  );
}

function Audience({ label, items }) {
  return (
    <p className="mt-6 text-[0.85rem] text-slate-600">
      <span className="mr-2 font-mono text-[0.66rem] tracking-[0.14em] text-slate-500 uppercase">{label}</span>
      {items.join(' · ')}
    </p>
  );
}

export default function Home() {
  useScrollReveal();
  useCountUp();
  useTiltEffect();

  const it = pillarById('it-solutions');

  return (
    <>
      <WelcomeOverlay />

      <HeroSection
        eyebrow="NEXUS · TECHNOLOGY COMPANY"
        title={<>We build technology for businesses — <span className="text-gradient-brand">and our own products.</span></>}
        lede="Nexus IT Solutions builds and maintains software for clients. NexLock and NexWarranty are products Nexus has built and runs itself. Three pillars, one technology company."
        ctaButtons={[
          { label: 'Explore the three pillars', to: '/#pillars' },
          { label: 'Start a software project', to: '/collaborate?type=it-new', secondary: true },
        ]}
        stats={[
          { countTo: 3, label: 'Pillars' },
          { countTo: 2, label: 'Own products' },
          { countTo: 10, suffix: '+', label: 'Years leadership experience' },
        ]}
        aside={<CompanyMap />}
      />

      {/* ── COMPANY ARCHITECTURE ─────────────────────────────────────── */}
      <section id="pillars" className="scroll-mt-24 py-24 sm:py-28">
        {/* Legacy anchor: older links point to /#products */}
        <span id="products" className="block scroll-mt-24" aria-hidden="true" />
        <Container>
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <Eyebrow>01 · WHAT NEXUS DOES</Eyebrow>
            <h2 className="mb-4 text-[clamp(1.9rem,3.2vw,2.8rem)] text-slate-900">One company. Three pillars.</h2>
            <p className="text-slate-600">
              We engineer software for other businesses, and we build technology products of our own. Each pillar has its own focus — all three share the same Nexus team and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <article
                key={p.id}
                data-reveal
                data-delay={String(i * 120)}
                data-tilt
                className={`glass-panel flex flex-col overflow-hidden rounded-2xl shadow-glass transition-shadow duration-300 hover:shadow-glass-lg ${reveal}`}
              >
                <div className={`h-1.5 bg-linear-to-r ${p.accent.bar}`} />
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <PillarIcon id={p.id} />
                    <span className={`rounded-full px-3 py-1 font-mono text-[0.64rem] tracking-[0.12em] uppercase ${p.accent.soft} ${p.accent.text}`}>
                      {p.kindLabel}
                    </span>
                  </div>
                  <Wordmark id={p.id} className="mb-2 block text-[1.45rem]" />
                  <p className="mb-3 font-display text-[1.05rem] font-semibold text-slate-900">{p.tagline}</p>
                  <p className="mb-6 text-[0.92rem] text-slate-600">{p.summary}</p>
                  <ul className="mb-8 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-[0.88rem] text-slate-700">
                        <svg className={`mt-1 shrink-0 ${p.accent.text}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-navy/10 pt-5">
                    <span className="font-mono text-[0.72rem] tracking-[0.06em] text-slate-500">{p.code}</span>
                    <Link to={p.to} className={`inline-flex items-center gap-1.5 text-[0.95rem] font-semibold transition-[gap] duration-250 hover:gap-2.5 ${p.accent.text}`}>
                      {p.cta} &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center text-[0.88rem] text-slate-600 sm:flex-row sm:gap-8">
            <p><span className="mr-2 font-mono text-[0.68rem] tracking-[0.12em] text-cyan-700 uppercase">Services</span>We build and maintain software for you.</p>
            <span className="hidden h-4 w-px bg-navy/15 sm:block" />
            <p><span className="mr-2 font-mono text-[0.68rem] tracking-[0.12em] text-blue-700 uppercase">Products</span>Technology Nexus owns, builds and operates.</p>
          </div>
        </Container>
      </section>

      {/* ── PILLAR 01 · NEXUS IT SOLUTIONS ───────────────────────────── */}
      <PillarSection
        pillarId="it-solutions"
        number="01"
        tinted
        heading="New software when you need it. A dependable team for the software you already run."
        intro="Most businesses already have a website, an app or a CRM that needs attention. Nexus IT Solutions builds new systems from scratch — and takes on existing ones: fixing bugs, adding features, modernizing the UI and keeping them running long-term."
        visual={<ITBoardVisual />}
        ctas={[
          { label: it.cta, to: it.to },
          { label: 'Get help with existing software', to: '/collaborate?type=it-existing' },
        ]}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-navy/10 bg-white/60 p-5">
            <p className="mb-3 font-mono text-[0.68rem] tracking-[0.14em] text-slate-500 uppercase">Build new</p>
            <ul className="space-y-1.5 text-[0.9rem] text-slate-700">
              {IT_BUILD.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/8 p-5">
            <p className="mb-3 font-mono text-[0.68rem] tracking-[0.14em] text-cyan-700 uppercase">Work with what exists</p>
            <ul className="space-y-1.5 text-[0.9rem] text-slate-800">
              {IT_EXISTING.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </PillarSection>

      {/* ── PILLAR 02 · NEXLOCK ──────────────────────────────────────── */}
      <PillarSection
        pillarId="nexlock"
        number="02"
        reverse
        heading="Recover device-finance EMIs without field agents or repossession."
        intro="NexLock is an Android app and management dashboard built by Nexus for businesses that sell or finance phones on EMI."
        visual={<NexLockPhoneVisual />}
        ctas={[
          { label: pillarById('nexlock').cta, to: '/nexlock' },
          { label: 'Become a NexLock partner', to: '/collaborate?type=nexlock' },
        ]}
      >
        <ProblemSolution
          accent={pillarById('nexlock').accent}
          problem="When an EMI on a financed phone goes unpaid, recovery means reminders, field visits and, at worst, repossession."
          solution="NexLock restricts the device automatically once an EMI is overdue, and restores it the moment payment is confirmed."
        />
        <FeatureGrid items={NEXLOCK_FEATURES} accent={pillarById('nexlock').accent} />
        <Audience label="Built for" items={['NBFCs', 'Fintech lenders', 'Mobile retailers', 'Distributors']} />
      </PillarSection>

      {/* ── PILLAR 03 · NEXWARRANTY ──────────────────────────────────── */}
      <PillarSection
        pillarId="nexwarranty"
        number="03"
        tinted
        heading="Cover that begins where the brand warranty ends."
        intro="NexWarranty is Nexus's extended warranty for home appliances and electronics — 1 to 4 year plans for devices worth up to ₹20 lakh, priced as a simple percentage of device value."
        visual={<NexWarrantyCertificateVisual />}
        ctas={[
          { label: pillarById('nexwarranty').cta, to: '/nexwarrenty' },
          { label: 'Calculate a plan price', to: '/nexwarrenty#calculator' },
        ]}
      >
        <ProblemSolution
          accent={pillarById('nexwarranty').accent}
          problem="Once the manufacturer's warranty expires, every breakdown becomes an out-of-pocket repair bill."
          solution="NexWarranty pays for parts and labour in full, with zero depreciation and doorstep pickup and drop."
        />
        <FeatureGrid items={NEXWARRANTY_FEATURES} accent={pillarById('nexwarranty').accent} />
        <Audience label="Built for" items={['Households', 'Appliance & electronics retailers']} />
      </PillarSection>

      {/* ── ONE TEAM ─────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <Container>
          <div data-reveal className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${reveal}`}>
            <div className="relative aspect-5/4 overflow-hidden rounded-[18px] border border-white/80 shadow-glass-lg after:absolute after:inset-0 after:bg-linear-to-br after:from-cyan-500/16 after:to-transparent after:content-['']">
              <img src={nexusTeam} alt="The Nexus team at the headquarters office" loading="lazy" className="h-full w-full object-cover [filter:saturate(0.98)]" />
              <span className="absolute bottom-4 left-4 z-[2] rounded-full bg-[rgba(5,10,18,0.55)] px-2.5 py-1 font-mono text-[0.78rem] text-slate-50 backdrop-blur-xs">NX–TEAM</span>
            </div>
            <div>
              <Eyebrow>ONE TEAM BEHIND ALL THREE</Eyebrow>
              <h2 className="mb-4 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">Industry operators and software engineers under one roof.</h2>
              <p className="mb-4 text-slate-600">
                Our leadership spent the last decade inside the warranty and device-protection industry — at Onsitego and OnAssist — and our engineering team builds the digital platforms Nexus runs on.
              </p>
              <p className="mb-6 text-slate-600">
                That combination is why Nexus can ship products of its own and still take on software work for clients: we build, run and maintain real systems every day.
              </p>
              <Link to="/#team" className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-navy transition-[color,gap] duration-250 hover:gap-2 hover:text-pink-700">
                Meet the leadership &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────────────── */}
      <section id="team" className="scroll-mt-24 bg-paper-raised py-24 sm:py-28">
        <Container>
          <div className="mb-12">
            <Eyebrow>02 · LEADERSHIP</Eyebrow>
            <h2 className="mb-3 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">The people behind Nexus.</h2>
            <p className="mb-14 max-w-[56ch] text-slate-600">A team built out of the warranty and IT industry itself — not around it.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                data-reveal
                data-tilt
                className="glass-panel translate-y-6 overflow-hidden rounded-2xl opacity-0 shadow-glass transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-glass-lg data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
              >
                <div className="badge-stripe" />
                <div className="p-8 text-center">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="mx-auto mb-5 h-21 w-21 rounded-full object-cover object-top shadow-lg" />
                  ) : (
                    <div className={`mx-auto mb-5 flex h-21 w-21 items-center justify-center rounded-full bg-linear-to-br ${member.gradient} font-display text-[2.1rem] font-bold text-white`}>
                      {member.initial}
                    </div>
                  )}
                  <h4 className="mb-1 text-lg">{member.name}</h4>
                  <p className="mb-4 font-mono text-[0.72rem] tracking-[0.06em] text-pink-700 uppercase">{member.role}</p>
                  <p className="text-[0.85rem] leading-[1.55] text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ROUTING CTA ──────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <Container>
          <div data-reveal className={`relative overflow-hidden rounded-[20px] bg-ink px-6 py-14 text-slate-50 sm:px-12 ${reveal}`}>
            <div className="bg-grid-ink pointer-events-none absolute inset-0 opacity-15" />
            <div className="relative">
              <div className="mx-auto mb-10 max-w-[620px] text-center">
                <Eyebrow onDark>WHERE TO START</Eyebrow>
                <h2 className="mb-3 text-[clamp(1.8rem,3vw,2.5rem)] text-slate-50">Tell us what you're working on.</h2>
                <p className="text-slate-300">Pick the part of Nexus that fits — or just get in touch and we'll route you.</p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  { id: 'it-solutions', need: 'I need software built, fixed or maintained', to: '/collaborate?type=it-new', action: 'Start a project' },
                  { id: 'nexlock', need: 'I finance or sell phones on EMI', to: '/nexlock', action: 'See NexLock' },
                  { id: 'nexwarranty', need: 'I want to protect an appliance or device', to: '/nexwarrenty', action: 'See NexWarranty plans' },
                ].map((r) => (
                  <Link
                    key={r.id}
                    to={r.to}
                    className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <PillarIcon id={r.id} size="h-10 w-10" iconSize={20} />
                      <Wordmark id={r.id} onDark className="text-[0.95rem]" />
                    </div>
                    <p className="mb-6 font-display text-[1.1rem] leading-snug text-slate-50">{r.need}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-cyan-400 transition-[gap] group-hover:gap-2.5">
                      {r.action} &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
