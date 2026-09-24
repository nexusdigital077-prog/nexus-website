import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import CertCard from '../components/CertCard';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';
import nexusTeam from '../assets/nexus-team.jpg';

const CAREERS_EMAIL = 'careers@nexusdig.in';
const applyHref = (role) =>
  `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${role}`)}&body=${encodeURIComponent(
    `Hi Nexus team,\n\nI'd like to apply for the ${role} role. My resume is attached.\n\nName:\nPhone:\n`
  )}`;

export default function Careers() {
  useScrollReveal();
  useTiltEffect();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="JOIN US"
        title={<><span className="text-gradient-brand">Careers</span> at Nexus</>}
        lede="Build software for our clients and the products we run ourselves — NexLock and NexWarranty."
        style={{ minHeight: '40vh', paddingTop: '120px', paddingBottom: '2rem' }}
      />

      <PhotoBand
        backgroundImage={nexusTeam}
        stamp="NX · LIFE AT NEXUS"
        eyebrow="SMALL TEAM, REAL OWNERSHIP"
        heading="We're still small enough that your work is visible."
        description="Every hire sits close to the work — client projects and our own products are built by the same team."
        style={{ minHeight: '38vh' }}
      />

      <section className="pt-8 pb-28">
        <Container>
          <div className="mb-12">
            <Eyebrow>OPEN POSITIONS</Eyebrow>
            <h2 className="mb-3 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">Current Openings</h2>
            <p className="max-w-[60ch] text-slate-600">
              To apply, send your resume to{' '}
              <a href="mailto:careers@nexusdig.in" className="font-semibold text-navy underline decoration-pink-500/60 underline-offset-4 hover:text-pink-700">
                careers@nexusdig.in
              </a>{' '}
              with the role you're applying for in the subject line — or use the Apply Now button on any opening.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <CertCard
              icon="🤝"
              title="Sales on Ground"
              description="We are looking for energetic ground sales executives to expand our market reach and onboard new retail partners for NexWarranty and NexLock."
              code="NX-JOB-01"
              actionLabel="Apply Now"
              actionHref={applyHref('Sales on Ground')}
            />
            <CertCard
              icon="💻"
              title="Software Developer"
              description="Join our engineering team to build client software through Nexus IT Solutions, and the platforms behind NexLock and our CRM systems."
              code="NX-JOB-02"
              actionLabel="Apply Now"
              actionHref={applyHref('Software Developer')}
            />
            <CertCard
              icon="📊"
              title="Data Analysis"
              description="Analyze trends, customer behavior, and device failure rates to help us optimize our warranty plans and business strategies."
              code="NX-JOB-03"
              actionLabel="Apply Now"
              actionHref={applyHref('Data Analysis')}
            />
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl bg-ink px-7 py-8 text-slate-50 sm:flex-row sm:items-center sm:px-10">
            <div>
              <p className="mb-1 font-mono text-[0.7rem] tracking-[0.14em] text-cyan-400 uppercase">Don't see your role?</p>
              <p className="font-display text-[1.2rem]">Send your resume to careers@nexusdig.in — we're always glad to hear from good people.</p>
            </div>
            <a
              href="mailto:careers@nexusdig.in?subject=Resume%20%E2%80%94%20General%20application"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-ink transition hover:bg-cyan-400"
            >
              Email your resume &rarr;
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
