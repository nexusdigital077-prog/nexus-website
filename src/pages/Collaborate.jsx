import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

const partnershipTypes = [
  'Extended Warranty Retail Partner',
  'EMI Security & Device Lock Integration',
  'Corporate IT Hardware & Infrastructure',
  'Brand / Manufacturer Alliance',
  'Other Corporate Collaboration',
];

export default function Collaborate() {
  useScrollReveal();
  useTiltEffect();

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    partnershipType: partnershipTypes[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Collaboration Request from ${formData.companyName}`);
    const body = encodeURIComponent(
      `Company Name: ${formData.companyName}\n` +
      `Contact Person: ${formData.contactName} (${formData.designation || 'N/A'})\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Partnership Type: ${formData.partnershipType}\n\n` +
      `Message / Details:\n${formData.message}`
    );

    window.location.href = `mailto:info@nexusdig.in?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="B2B & CORPORATE ALLIANCES"
        title={<><span className="text-gradient-brand">Partner & Collaborate</span> With Nexus</>}
        lede="Empower your business with India's leading warranty, EMI security, and IT solutions provider. Let's grow together."
        style={{ minHeight: '42vh', paddingTop: '120px', paddingBottom: '2.5rem' }}
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX · PARTNERSHIPS"
        eyebrow="GROW WITH US"
        heading="Unlocking new revenue streams for retailers, OEMs, and corporate partners."
        style={{ minHeight: '34vh' }}
      />

      <section className="py-20">
        <Container>
          <div className="mb-14 text-center">
            <Eyebrow>WHY PARTNER WITH NEXUS?</Eyebrow>
            <h2 className="mt-2 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">Enterprise Solutions Built For Scale</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div data-reveal data-tilt className="glass-panel translate-y-6 rounded-2xl p-7 opacity-0 shadow-glass transition-all duration-500 ease-out hover:-translate-y-1.5 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
              <div className="mb-4 text-3xl">🛡️</div>
              <h4 className="mb-2 text-lg text-navy">Warranty Integration</h4>
              <p className="text-[0.88rem] leading-relaxed text-slate-600">
                Offer seamless extended warranty and damage protection directly at your checkout or retail counter.
              </p>
            </div>

            <div data-reveal data-tilt className="glass-panel translate-y-6 rounded-2xl p-7 opacity-0 shadow-glass transition-all delay-100 duration-500 ease-out hover:-translate-y-1.5 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
              <div className="mb-4 text-3xl">🔒</div>
              <h4 className="mb-2 text-lg text-navy">Nexlock Security</h4>
              <p className="text-[0.88rem] leading-relaxed text-slate-600">
                Protect EMI payments and finance risk with hardware-level remote device locking for retailers and lenders.
              </p>
            </div>

            <div data-reveal data-tilt className="glass-panel translate-y-6 rounded-2xl p-7 opacity-0 shadow-glass transition-all delay-200 duration-500 ease-out hover:-translate-y-1.5 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
              <div className="mb-4 text-3xl">💼</div>
              <h4 className="mb-2 text-lg text-navy">Corporate IT Services</h4>
              <p className="text-[0.88rem] leading-relaxed text-slate-600">
                End-to-end device procurement, bulk hardware maintenance, and enterprise IT infrastructure management.
              </p>
            </div>

            <div data-reveal data-tilt className="glass-panel translate-y-6 rounded-2xl p-7 opacity-0 shadow-glass transition-all delay-300 duration-500 ease-out hover:-translate-y-1.5 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
              <div className="mb-4 text-3xl">📈</div>
              <h4 className="mb-2 text-lg text-navy">High Margin Share</h4>
              <p className="text-[0.88rem] leading-relaxed text-slate-600">
                Maximize revenue per unit with transparent commission structures and zero setup overhead.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-raised/40 py-20 border-y border-white/60">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div data-reveal className="glass-panel translate-y-6 rounded-2xl p-8 sm:p-12 opacity-0 shadow-glass-lg transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
              <div className="mb-8 text-center">
                <Eyebrow>DIRECT COLLABORATION FORM</Eyebrow>
                <h3 className="mt-2 text-2xl sm:text-3xl text-navy">Submit Your Proposal</h3>
                <p className="mt-2 text-slate-600 text-sm">
                  Fill out the form below. Your request will be sent straight to our corporate desk at{' '}
                  <a href="mailto:info@nexusdig.in" className="font-semibold text-navy hover:text-cyan-500">
                    info@nexusdig.in
                  </a>.
                </p>
              </div>

              {submitted && (
                <div className="mb-8 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5 text-center text-slate-800">
                  <span className="text-2xl">✅</span>
                  <h4 className="mt-2 font-semibold text-navy">Proposal Prepared!</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    If your email app didn't open automatically, click below to send your details directly:
                  </p>
                  <a
                    href={`mailto:info@nexusdig.in?subject=${encodeURIComponent(`Collaboration Request from ${formData.companyName}`)}&body=${encodeURIComponent(
                      `Company Name: ${formData.companyName}\nContact Person: ${formData.contactName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPartnership Type: ${formData.partnershipType}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-600"
                  >
                    ✉️ Send Email to info@nexusdig.in
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Company / Business Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Retail Pvt Ltd"
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div>
                    <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g. Business Manager"
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@acmeretail.com"
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Partnership Category *
                  </label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                  >
                    {partnershipTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Collaboration Details / Proposal *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, expected order volume, or collaboration goals..."
                    className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                  ></textarea>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-10 py-4 font-semibold text-white shadow-lg transition hover:bg-cyan-600 hover:shadow-cyan-500/20 active:scale-[0.99] cursor-pointer"
                  >
                    <span>🤝 Submit Collaboration Proposal</span>
                  </button>
                  <p className="mt-3 text-xs text-slate-500">
                    Submitting will open your mail client to send structured details to{' '}
                    <strong className="text-navy">info@nexusdig.in</strong>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
