import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import Container from '../components/Container';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

export default function Contact() {
  useScrollReveal();
  useTiltEffect();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="GET IN TOUCH"
        title={<><span className="text-gradient-brand">Contact</span> Us</>}
        lede="We're here to help with your warranty and IT solution needs."
        style={{ minHeight: '40vh', paddingTop: '120px', paddingBottom: '2rem' }}
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1603114595741-e60bf9486e04?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX · SUPPORT"
        eyebrow="TALK TO A HUMAN"
        heading="Real people, close by in Andheri East."
        style={{ minHeight: '34vh' }}
      />

      <section className="pt-8 pb-28">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div data-reveal data-tilt className="glass-panel translate-y-6 rounded-2xl p-10 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
              <h3 className="mb-6 text-2xl">Office Details</h3>

              <div className="mb-6 flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <strong>Headquarters</strong>
                  <br />
                  Shop no 14, Vasydev App, Panchayat Road
                  <br />
                  Opp. to Sona Udyog, Andheri East
                  <br />
                  Mumbai 400069, Maharashtra
                </div>
              </div>

              <div className="mb-6 flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <strong>Email Us</strong>
                  <br />
                  <a href="mailto:info@nexusdig.in" className="font-medium text-navy no-underline hover:text-cyan-500">
                    info@nexusdig.in
                  </a>
                </div>
              </div>

              <div className="mb-6 flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <strong>Call Us</strong>
                  <br />
                  <a href="tel:7710070322" className="font-medium text-navy no-underline hover:text-cyan-500">
                    7710070322
                  </a>
                </div>
              </div>
            </div>

            <div data-reveal className="h-full min-h-[300px] translate-y-6 overflow-hidden rounded-2xl opacity-0 shadow-glass transition-all delay-150 duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 md:min-h-[400px]">
              <iframe
                title="Office Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Shop+no+14+vasydev+app,+panchayat+road+opp+to+sona+udyog+andheri+east+mumbai+400069+maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
