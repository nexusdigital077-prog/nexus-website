import HeroSection from '../components/HeroSection';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';

const sections = [
  {
    number: '01',
    title: 'Service Description',
    content:
      'NexLock enables device management for financed devices. Devices may be enrolled and controlled by authorized finance agents, lenders, or retailers for loan compliance and EMI recovery purposes. Device management actions are performed by authorized third parties (finance agents or retailers), not directly by the Company.',
  },
  {
    number: '02',
    title: 'Information We Collect',
    items: [
      {
        label: 'Personal Information',
        detail: 'Name, phone number, email address, SIM number (when required), address.',
      },
      {
        label: 'Device Information',
        detail:
          'Device model, manufacturer, OS version, device identifiers (Android ID, IMEI where permitted), installed app security status, device lock status.',
      },
      {
        label: 'Usage & Technical Data',
        detail:
          'App activity logs, enrollment information, device management command history, network information.',
      },
      {
        label: 'Location Data (if enabled)',
        detail: 'Approximate device location for security and recovery purposes.',
      },
    ],
  },
  {
    number: '03',
    title: 'How Information Is Collected',
    items: [
      { detail: 'During device enrollment by finance agents or retailers.' },
      { detail: 'Automatically during app operation.' },
      { detail: 'From financing partners during loan processing.' },
    ],
  },
  {
    number: '04',
    title: 'How We Use Information',
    content:
      'Information is used solely to enable financed device management, ensure compliance with loan agreements, prevent fraud and theft, provide security features, maintain service functionality, and comply with legal obligations. We do not sell personal data.',
  },
  {
    number: '05',
    title: 'Device Management Responsibility',
    content:
      'NexLock provides the technical platform only. Actual device management actions are performed by authorized finance agents, lenders, or retailers. The Company does not independently initiate device restrictions without authorized partner action.',
  },
  {
    number: '06',
    title: 'Third-Party MDM Service Provider',
    content:
      'NexLock uses MDM infrastructure provided by Codeproof Technologies Inc. to deliver device security and management features. Relevant technical data may be processed through Codeproof systems solely to enable MDM functionality. Codeproof acts only as a technology provider and does not control loan decisions.',
  },
  {
    number: '07',
    title: 'Data Sharing',
    content:
      'Data may be shared with authorized finance agents, retailers involved in device sale or financing, platform service providers, and legal authorities when required by law.',
  },
  {
    number: '08',
    title: 'Data Retention',
    content:
      'Data is deleted after 1 year from enrollment, or after loan completion if the EMI tenure exceeds 12 months. After deletion, data is permanently removed from active systems subject to legal retention requirements.',
  },
  {
    number: '09',
    title: 'Data Security & Rights',
    content:
      'We implement reasonable safeguards to protect information. You have the right to request access, correction, or deletion of your data (subject to financing obligations), and withdraw consent where applicable. NexLock is not intended for individuals under 18 years of age.',
  },
];

export default function NexlockPrivacy() {
  useScrollReveal();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="NX–LCK–LEGAL"
        title={
          <>
            <span className="text-gradient-brand">Privacy Policy</span>
            {' '}for NexLock
          </>
        }
        lede="This Privacy Policy explains how Nexus Digital collects, uses, discloses, stores, and protects information when NexLock is used for device financing, security, and management purposes."
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
                🔒
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

          {/* Policy sections */}
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
                  <ul className="mt-2 space-y-3">
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
                    §10
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
