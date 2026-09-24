import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import { PillarIcon, Wordmark } from '../components/PillarMarks';
import { PILLARS } from '../data/pillars';
import useScrollReveal from '../hooks/useScrollReveal';
import teamSagar from '../assets/team-sagar.jpg';
import teamKunal from '../assets/team-kunal.jpg';
import teamKetan from '../assets/team-ketan.jpg';
import teamAshish from '../assets/team-ashish.jpg';
import teamJanak from '../assets/team-janak.jpg';
import teamVivek from '../assets/team-vivek.jpg';
import nexusTeam from '../assets/nexus-team.jpg';

const reveal =
  'translate-y-6 opacity-0 transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100';

// `focus` sets the object-position so each face sits well inside the portrait crop;
// `crop` zooms past a border baked into the source photo.
const leadership = [
  { name: 'Sagar', role: 'Chief Executive Officer', bio: 'Working for the past 10 years in IT and Business Development fields.', photo: teamSagar, focus: 'center 20%' },
  { name: 'Kunal Kurmi', role: 'Chief Operating Officer', bio: 'B.Tech graduate of Thakur College of Engineering and Technology. Experienced with Spectrum, driving OnAssist and VWarranty.', photo: teamKunal, focus: 'center 25%' },
  { name: 'Ketan', role: 'Chief Strategy Officer', bio: 'Worked with Onsitego, bringing 8 years of deep expertise in the extended warranty field.', photo: teamKetan, focus: 'center 20%', crop: 1.07 },
  { name: 'Vivek Gupta', role: 'Lead Software Developer', bio: 'The architect behind the tech — driving digital platforms, web systems, and engineering infrastructure.', photo: teamVivek, focus: 'center 18%' },
  { name: 'Ashish', role: 'Chief Financial Officer / Advisor', bio: 'Our dedicated financial advisor, ensuring robust economic growth and stability.', photo: teamAshish, focus: 'center 25%' },
  { name: 'Janak Shah', role: 'Investor', bio: 'Strategic investor backing our vision for the future of IT and EMI security.', photo: teamJanak, focus: 'center 20%' },
];

export default function About() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-[150px] pb-20">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-130 w-130 animate-drift rounded-full bg-cyan-500 opacity-20 mix-blend-multiply blur-[120px]" />
          <div className="absolute -right-30 bottom-0 h-110 w-110 animate-drift rounded-full bg-pink-500 opacity-15 mix-blend-multiply blur-[130px] [animation-delay:-6s]" />
        </div>
        <Container className="relative z-10 max-w-[860px] text-center">
          <p className="mb-4.5 inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.14em] text-navy uppercase before:h-px before:w-5.5 before:bg-pink-500 before:content-['']">
            ABOUT NEXUS
          </p>
          <h1 className="mb-5 translate-y-6 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] opacity-0 animate-fade-up">
            One team behind <span className="text-gradient-brand">all three pillars.</span>
          </h1>
          <p className="mx-auto max-w-[56ch] translate-y-6 text-[clamp(1.02rem,1.5vw,1.18rem)] text-slate-600 opacity-0 animate-fade-up [animation-delay:150ms]">
            Industry operators and software engineers under one roof — building software for clients, and running NexLock and NexWarranty ourselves.
          </p>
          <div className="mt-9 flex translate-y-5 flex-wrap justify-center gap-3 opacity-0 animate-fade-up [animation-delay:300ms]">
            {PILLARS.map((p) => (
              <Link key={p.id} to={p.to} className="glass-panel inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 shadow-glass transition hover:shadow-glass-lg">
                <PillarIcon id={p.id} size="h-8 w-8" iconSize={16} />
                <Wordmark id={p.id} className="text-[0.82rem]" />
              </Link>
            ))}
          </div>
        </Container>
      </header>

      {/* ── STORY ────────────────────────────────────────────────────── */}
      <section className="bg-paper-raised py-24">
        <Container>
          <div data-reveal className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${reveal}`}>
            <div className="relative aspect-5/4 overflow-hidden rounded-[18px] border border-white/80 shadow-glass-lg">
              <img src={nexusTeam} alt="The Nexus team at the headquarters office" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <Eyebrow>HOW NEXUS WORKS</Eyebrow>
              <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] text-slate-900">Built from inside the industry, engineered in-house.</h2>
              <p className="mb-4 text-slate-600">
                Our leadership spent the last decade inside the warranty and device-protection industry — at Onsitego and OnAssist — and our engineering team builds the digital platforms Nexus runs on.
              </p>
              <p className="text-slate-600">
                That combination is why Nexus can ship products of its own and still take on software work for clients: we build, run and maintain real systems every day.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────────────── */}
      <section id="leadership" className="scroll-mt-24 py-24 sm:py-28">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[560px]">
              <Eyebrow>LEADERSHIP</Eyebrow>
              <h2 className="mb-3 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">The people behind Nexus.</h2>
              <p className="text-slate-600">A team built out of the warranty and IT industry itself — not around it.</p>
            </div>
            <Link to="/careers" className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-navy transition-[gap] hover:gap-2.5">
              Join the team &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((m, i) => (
              <article key={m.name} data-reveal data-delay={String((i % 3) * 100)} className={`group ${reveal}`}>
                <div className="relative mb-6 aspect-4/5 overflow-hidden rounded-2xl bg-navy/5 shadow-glass">
                  <div className="h-full w-full" style={m.crop ? { transform: `scale(${m.crop})` } : undefined}>
                  <img
                    src={m.photo}
                    alt={`${m.name}, ${m.role}`}
                    loading="lazy"
                    style={{ objectPosition: m.focus }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-navy/35 to-transparent" />
                </div>
                <div className="border-l-2 border-pink-500 pl-4">
                  <h3 className="text-[1.3rem] text-slate-900">{m.name}</h3>
                  <p className="mb-3 font-mono text-[0.72rem] tracking-[0.1em] text-navy/70 uppercase">{m.role}</p>
                  <p className="text-[0.92rem] leading-relaxed text-slate-600">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
