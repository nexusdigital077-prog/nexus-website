import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import Container from '../components/Container';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

export default function Nexlock() {
  useScrollReveal();
  useTiltEffect();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="NX–LCK–02"
        title={
          <>
            Nexlock{' '}
            <span className="rounded-full bg-[rgba(242,169,60,0.14)] px-2.5 py-1 font-mono text-[0.7rem] tracking-[0.08em] text-pink-700 uppercase">
              Coming soon
            </span>
          </>
        }
        lede="An advanced EMI security solution that automatically locks mobile devices if customers fall behind on payments — ensuring compliance without repossession."
        ctaButtons={[{ label: '← Back to products', to: '/#products', secondary: true }]}
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1614064643392-8dd713152ae9?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX–LCK–02"
        eyebrow="EMI SECURITY"
        heading="Compliance without repossession."
        description="Nexlock keeps devices in customers' hands while keeping payments on track — no field agents, no confrontation."
        style={{ minHeight: '38vh' }}
      />

      <section className="py-28">
        <Container>
          <div
            data-reveal
            data-tilt
            className="glass-panel mx-auto flex max-w-[640px] translate-y-6 flex-col overflow-hidden rounded-2xl opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
          >
            <div className="p-8.5 pb-6.5">
              <div className="mb-5.5 flex h-13 w-13 items-center justify-center rounded-xl bg-linear-to-br from-navy to-indigo-600 text-2xl text-white">
                📱
              </div>
              <h3 className="mb-2.5 text-2xl">This page is being built.</h3>
              <p className="text-[0.95rem] text-slate-600">
                We're finishing the details on Nexlock's coverage, device compatibility and partner onboarding. In the meantime, if you're a retailer or finance partner interested in EMI security, reach out to the Nexus team through your usual contact.
              </p>
            </div>
            <div className="ticket-perforation" />
            <div className="mt-auto flex items-center justify-between px-8.5 pt-5.5 pb-8.5">
              <span className="font-mono text-[0.78rem] tracking-[0.05em] text-slate-600">NX–LCK–02</span>
              <Link
                to="/nexwarrenty"
                className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-navy transition-[color,gap] duration-250 hover:gap-2 hover:text-pink-700"
              >
                See Nexwarrenty instead &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
