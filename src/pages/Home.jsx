import { Link } from 'react-router-dom';
import WelcomeOverlay from '../components/WelcomeOverlay';
import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import CertCard from '../components/CertCard';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';
import useTiltEffect from '../hooks/useTiltEffect';

const team = [
  { initial: 'S', name: 'Sagar', role: 'Chief Executive Officer', bio: 'Working for the past 10 years in IT and Business Development fields.', gradient: 'from-navy to-cyan-500', photo: '/team-sagar.jpg' },
  { initial: 'K', name: 'Kunal Kurmi', role: 'Chief Operating Officer', bio: 'B.Tech graduate of Thakur College of Engineering and Technology. Experienced with Spectrum, driving OnAssist and VWarranty.', gradient: 'from-[#0f6a8c] to-[#22d3ee]', photo: '/team-kunal.jpg' },
  { initial: 'K', name: 'Ketan', role: 'Chief Strategy Officer', bio: 'Worked with Onsitego, bringing 8 years of deep expertise in the extended warranty field.', gradient: 'from-[#17325c] to-[#0096c7]', photo: '/team-ketan.jpg' },
  { initial: 'A', name: 'Ashish', role: 'Chief Financial Officer / Advisor', bio: 'Our dedicated financial advisor, ensuring robust economic growth and stability.', gradient: 'from-[#0b3d66] to-[#48cae4]', photo: '/team-ashish.jpg' },
  { initial: 'J', name: 'Janak', role: 'Investor', bio: 'Strategic investor backing our vision for the future of IT and EMI security.', gradient: 'from-[#0a0f1e] to-[#22d3ee]' },
];

export default function Home() {
  useScrollReveal();
  useCountUp();
  useTiltEffect();

  return (
    <>
      <WelcomeOverlay />

      <HeroSection
        eyebrow="NX · CERTIFIED PROTECTION"
        title={<>Protection that <span className="text-gradient-brand">holds up.</span></>}
        lede="Extended warranties and EMI security built for how people actually own devices — from the first breakdown to the last unpaid instalment."
        ctaButtons={[
          { label: 'Explore our products', to: '/#products' },
          { label: 'See coverage plans', to: '/nexwarrenty', secondary: true }
        ]}
        stats={[
          { countTo: 20, prefix: '₹', suffix: 'L', label: 'Max device value covered' },
          { countTo: 0, prefix: '', suffix: '%', label: 'Depreciation on approved claims' },
          { countTo: 10, prefix: '', suffix: '+ yrs', label: 'Leadership industry experience' }
        ]}
        showSeal={true}
      />

      <section id="products" className="py-28">
        <Container>
          <div className="mb-12">
            <Eyebrow>01 · PRODUCTS</Eyebrow>
            <h2 className="mb-3 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">Two products. One promise.</h2>
            <p className="mb-14 max-w-[56ch] text-slate-600">Whatever the device, whatever the risk, Nexus certifies it — either against wear or against missed payments.</p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <CertCard
              icon="🛡️"
              title="Nexwarrenty"
              description="Comprehensive extended warranty coverage for home and electronic appliances, giving you complete peace of mind — 100% cost of parts and labor, zero depreciation."
              code="NX–WRT–01"
              actionLabel="Learn more"
              actionTo="/nexwarrenty"
            />
            <CertCard
              icon="📱"
              title="Nexlock"
              description="An advanced EMI security solution that automatically locks mobile devices if customers fall behind on payments, ensuring compliance without repossession."
              code="NX–LCK–02"
              actionLabel="Learn more"
              actionTo="/nexlock"
            />
          </div>
        </Container>
      </section>

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1768051579338-3dc694863efc?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX · ON THE GROUND"
        eyebrow="CERTIFIED, NOT OUTSOURCED"
        heading="Real technicians. Authorized parts. No shortcuts."
        description="Every claim routes to a brand-authorized service center — the same repair your manufacturer would perform, at zero cost to you."
      />

      <section className="py-28">
        <Container>
          <div data-reveal className="grid translate-y-6 grid-cols-1 gap-6 opacity-0 transition-all duration-700 ease-out sm:grid-cols-2 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 lg:grid-cols-3">
            <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/80 shadow-glass transition-all duration-350 hover:-translate-y-1.5 hover:shadow-glass-lg">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?fm=jpg&q=80&w=900&auto=format&fit=crop"
                alt="Refrigerator covered under Nexwarrenty appliance warranty"
                loading="lazy"
                className="h-full w-full object-cover [filter:saturate(0.92)_contrast(1.03)] transition-transform duration-600 group-hover:scale-[1.06]"
              />
              <div className="photo-card-scrim absolute inset-0" />
              <div className="absolute inset-x-[1.2rem] bottom-[1.1rem] z-[2] text-slate-50">
                <span className="mb-1 block font-mono text-[0.78rem] tracking-[0.05em] text-slate-300">NX–WRT–01</span>
                <strong className="font-display text-[1.05rem] font-semibold">Large appliances</strong>
              </div>
            </div>
            <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/80 shadow-glass transition-all duration-350 hover:-translate-y-1.5 hover:shadow-glass-lg">
              <img
                src="https://images.unsplash.com/photo-1632923565835-6582b54f2105?fm=jpg&q=80&w=900&auto=format&fit=crop"
                alt="Washer and dryer covered under Nexwarrenty appliance warranty"
                loading="lazy"
                className="h-full w-full object-cover [filter:saturate(0.92)_contrast(1.03)] transition-transform duration-600 group-hover:scale-[1.06]"
              />
              <div className="photo-card-scrim absolute inset-0" />
              <div className="absolute inset-x-[1.2rem] bottom-[1.1rem] z-[2] text-slate-50">
                <span className="mb-1 block font-mono text-[0.78rem] tracking-[0.05em] text-slate-300">NX–WRT–01</span>
                <strong className="font-display text-[1.05rem] font-semibold">Laundry & kitchen</strong>
              </div>
            </div>
            <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/80 shadow-glass transition-all duration-350 hover:-translate-y-1.5 hover:shadow-glass-lg">
              <img
                src="https://images.unsplash.com/photo-1592744254966-58c65cfd2e69?fm=jpg&q=80&w=900&auto=format&fit=crop"
                alt="Digital lock representing Nexlock EMI security"
                loading="lazy"
                className="h-full w-full object-cover [filter:saturate(0.92)_contrast(1.03)] transition-transform duration-600 group-hover:scale-[1.06]"
              />
              <div className="photo-card-scrim absolute inset-0" />
              <div className="absolute inset-x-[1.2rem] bottom-[1.1rem] z-[2] text-slate-50">
                <span className="mb-1 block font-mono text-[0.78rem] tracking-[0.05em] text-slate-300">NX–LCK–02</span>
                <strong className="font-display text-[1.05rem] font-semibold">EMI device security</strong>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-raised py-18">
        <Container>
          <div
            data-reveal
            className="grid translate-y-6 grid-cols-1 items-center gap-12 opacity-0 transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 md:grid-cols-2"
          >
            <div className="relative aspect-5/4 overflow-hidden rounded-[18px] border border-white/80 shadow-glass-lg after:absolute after:inset-0 after:bg-linear-to-br after:from-cyan-500/16 after:to-transparent after:content-['']">
              <img
                src="https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                alt="The Nexus team collaborating in the office"
                loading="lazy"
                className="h-full w-full object-cover [filter:saturate(0.94)]"
              />
              <span className="absolute bottom-4 left-4 z-[2] rounded-full bg-[rgba(5,10,18,0.55)] px-2.5 py-1 font-mono text-[0.78rem] text-slate-50 backdrop-blur-xs">
                NX–TEAM
              </span>
            </div>
            <div>
              <Eyebrow>BUILT FROM INSIDE THE INDUSTRY</Eyebrow>
              <h2 className="mb-4 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">People who've sold the warranty, not just written it.</h2>
              <p className="mb-4 text-slate-600">Our leadership spent the last decade inside Vecare, Onsitego and OnAssist — running claims desks, negotiating with brands, and watching where warranty programs usually let customers down. Nexus exists to fix those gaps.</p>
              <Link to="/careers" className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-navy transition-[color,gap] duration-250 hover:gap-2 hover:text-pink-700">
                Meet the team &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="team" className="py-28">
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

      <section className="py-28">
        <Container>
          <div data-reveal className="relative translate-y-6 overflow-hidden rounded-[20px] bg-ink px-6 py-14 text-center text-slate-50 opacity-0 transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 sm:px-12">
            <div className="bg-grid-ink pointer-events-none absolute inset-0 opacity-15" />
            <div className="relative">
              <Eyebrow onDark>READY WHEN YOU ARE</Eyebrow>
              <h2 className="mb-3.5 text-slate-50">Cover your next device before it needs it.</h2>
              <p className="mx-auto mb-8 max-w-[50ch] text-slate-300">Nexwarrenty plans are priced as a simple percentage of device value — see exactly what 1 to 4 years of protection costs.</p>
              <Link
                to="/nexwarrenty"
                className="inline-flex items-center gap-2 rounded-lg bg-pink-500 px-8 py-3.5 text-base font-semibold text-ink shadow-[0_8px_20px_rgba(9,33,71,0.2)] transition hover:bg-[#ffb75c]"
              >
                View pricing &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
