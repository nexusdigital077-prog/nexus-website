import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import CertCard from '../components/CertCard';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';
import nexusTeam from '../assets/nexus-team.jpg';

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
            <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">Current Openings</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <CertCard
              icon="🤝"
              title="Sales on Ground"
              description="We are looking for energetic ground sales executives to expand our market reach and onboard new retail partners for NexWarranty and NexLock."
              code="NX-JOB-01"
              actionLabel="Apply Now"
              actionTo="/contact"
            />
            <CertCard
              icon="💻"
              title="Software Developer"
              description="Join our engineering team to build client software through Nexus IT Solutions, and the platforms behind NexLock and our CRM systems."
              code="NX-JOB-02"
              actionLabel="Apply Now"
              actionTo="/contact"
            />
            <CertCard
              icon="📊"
              title="Data Analysis"
              description="Analyze trends, customer behavior, and device failure rates to help us optimize our warranty plans and business strategies."
              code="NX-JOB-03"
              actionLabel="Apply Now"
              actionTo="/contact"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
