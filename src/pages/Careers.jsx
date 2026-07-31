import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import CertCard from '../components/CertCard';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

export default function Careers() {
  useScrollReveal();
  useTiltEffect();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="JOIN US"
        title={<><span className="text-gradient-brand">Careers</span> at Nexus</>}
        lede="Help us build the future of extended warranties and EMI security."
        style={{ minHeight: '40vh', paddingTop: '120px', paddingBottom: '2rem' }}
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX · LIFE AT NEXUS"
        eyebrow="SMALL TEAM, REAL OWNERSHIP"
        heading="We're still small enough that your work is visible."
        description="Every hire sits close to the product — sales, engineering and analytics all work off the same claims data."
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
              description="We are looking for energetic ground sales executives to expand our market reach and onboard new retail partners for Nexwarrenty and Nexlock products."
              code="NX-JOB-01"
              actionLabel="Apply Now"
              actionTo="/contact"
            />
            <CertCard
              icon="💻"
              title="Software Developer"
              description="Join our engineering team to build and maintain the core infrastructure that powers Nexlock's security protocols and our CRM platforms."
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
