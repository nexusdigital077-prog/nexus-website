import HeroSection from '../components/HeroSection';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';

const sections = [
  {
    number: '01',
    title: 'Authorized Use Only',
    content:
      'NexLock is a restricted application intended solely for use by authorized personnel acting on behalf of financing organizations or retailers. End customers are not permitted to use the application.',
  },
  {
    number: '02',
    title: 'Role of the Company',
    content:
      'The Company provides a technical platform for device management. It does not provide loans, collect EMIs, determine recovery actions, or enter into agreements with device end users.',
  },
  {
    number: '03',
    title: 'Agent Responsibilities',
    content:
      'Authorized users agree to the following obligations when using NexLock:',
    items: [
      { detail: 'Use the application only for lawful financing activities.' },
      { detail: 'Obtain customer consent before device enrollment.' },
      { detail: 'Enter accurate and truthful information at all times.' },
      { detail: 'Protect login credentials and account access.' },
      { detail: 'Comply with all applicable laws and regulations.' },
    ],
    footer:
      'Agents are solely responsible for all actions taken using their accounts.',
  },
  {
    number: '04',
    title: 'Device Management Actions',
    content:
      'Authorized partners may perform actions including device enrollment, lock or unlock commands, security enforcement, and status monitoring at the direction of the financing organization or retailer.',
  },
  {
    number: '05',
    title: 'Third-Party Technology',
    content:
      'NexLock uses MDM infrastructure provided by Codeproof Technologies Inc. to enable device security and management. Use of the application implies consent to necessary data processing for MDM functionality.',
  },
  {
    number: '06',
    title: 'Limitation of Liability & Prohibited Activities',
    content: 'Users must NOT:',
    items: [
      { detail: 'Use the app for unauthorized surveillance.' },
      { detail: 'Manage devices without proper authorization.' },
      { detail: 'Attempt to bypass or circumvent security features.' },
      { detail: 'Use the platform for any illegal purposes.' },
    ],
    footer:
      'The Company shall not be liable for actions taken by agents or retailers, loan recovery disputes, partner-initiated device restrictions, or losses arising from financing arrangements.',
  },
];

export default function NexlockTerms() {
  useScrollReveal();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="NX–LCK–LEGAL"
        title={
          <>
            <span className="text-gradient-brand">Terms &amp; Conditions</span>
            {' '}for NexLock
          </>
        }
        lede="These Terms & Conditions govern access to and use of the NexLock application by authorized finance agents, lenders, and retailers. By using NexLock, you agree to these terms."
        ctaButtons={[{ label: '← Back to NexLock', to: '/nexlock', secondary: true }]}
        style={{ minHeight: '44vh', paddingTop: '120px', paddingBottom: '2rem' }}
      />

      <section className="py-20 bg-grid-paper">
        <Container>
          {/* Intro badge */}
          <div
            data-reveal
            className="mb-14 translate-y-6 opacity-0 transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
          >
            <div className="glass-panel inline-flex items-center gap-3 rounded-xl px-5 py-3 shadow-glass">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-indigo-600 text-sm text-white">
                📋
              </span>
              <div>
                <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                  NexLock — Nexus Digital
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  Effective: August 2026 &nbsp;·&nbsp; Last updated: August 2026
                </p>
              </div>
            </div>
          </div>

          {/* ToC sections */}
          <div className="grid gap-8">
            {sections.map((sec) => (
              <div
                key={sec.number}
                data-reveal
                className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-[0.72rem] tracking-[0.1em] text-indigo-500 uppercase">
                    §{sec.number}
                  </span>
                  <h2 className="text-xl font-semibold text-navy">{sec.title}</h2>
                </div>

                {sec.content && (
                  <p className="text-[0.95rem] leading-relaxed text-slate-600">{sec.content}</p>
                )}

                {sec.items && (
                  <ul className="mt-3 space-y-3">
                    {sec.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 text-xs">
                          ✓
                        </span>
                        <p className="text-[0.95rem] leading-relaxed text-slate-600">
                          {item.label && (
                            <span className="font-semibold text-slate-800">{item.label}: </span>
                          )}
                          {item.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.footer && (
                  <p className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/60 px-5 py-3 text-[0.9rem] leading-relaxed text-slate-700">
                    {sec.footer}
                  </p>
                )}
              </div>
            ))}

            {/* Contact card with accent stripe */}
            <div
              data-reveal
              className="glass-panel translate-y-6 overflow-hidden rounded-2xl opacity-0 shadow-glass-lg transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <div className="badge-stripe" />
              <div className="p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-[0.72rem] tracking-[0.1em] text-indigo-500 uppercase">
                    §07
                  </span>
                  <h2 className="text-xl font-semibold text-navy">Contact Information</h2>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
                  <div>
                    <Eyebrow>Company</Eyebrow>
                    <p className="mt-1 font-semibold text-slate-800">Nexus Digital</p>
                  </div>
                  <div>
                    <Eyebrow>Email</Eyebrow>
                    <a
                      href="mailto:info@nexusdig.in"
                      className="mt-1 inline-block font-semibold text-indigo-600 transition-colors hover:text-pink-600"
                    >
                      info@nexusdig.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
