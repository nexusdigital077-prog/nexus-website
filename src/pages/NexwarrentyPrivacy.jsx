import HeroSection from '../components/HeroSection';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';

/* ─────────────────────────────────────────────────────────────
   Sub-processor table data
───────────────────────────────────────────────────────────── */
const processors = [
  { no: 1, name: 'Cloud Hosting Service Providers', data: 'Personal Data, Hardware Identifiers, Location Data', purpose: "Nexus Digital's Website, Applications, Databases" },
  { no: 2, name: 'Insurance Companies', data: 'Personal Data, Hardware Identifiers', purpose: 'To cover the risk under various plans of Nexus Digital' },
  { no: 3, name: 'Service Centres', data: 'Personal Data, Hardware Identifiers', purpose: 'To provide repair and replacement services' },
  { no: 4, name: 'Logistic Partners', data: 'Personal Data, Hardware Identifiers', purpose: 'To provide pick and drop services of the products' },
  { no: 5, name: 'Call Centers / Contact Centers', data: 'Personal Data, Hardware Identifiers', purpose: 'To provide customer services' },
  { no: 6, name: 'Communication Service Providers', data: 'Personal Data', purpose: 'To provide transactional, informational, and promotional messages' },
  { no: 7, name: 'Statistical & Analytics Service Provider', data: 'Personal Data', purpose: 'To analyze customer behavior, preferences, and purchasing trends' },
  { no: 8, name: 'Document Replacement Service Provider', data: 'Personal Data', purpose: 'To provide document replacement services' },
  { no: 9, name: 'Electronic Device Lessor', data: 'Personal Data', purpose: 'To provide products & services under Smart EPP program' },
  { no: 10, name: 'Electronic Device Seller', data: 'Personal Data', purpose: 'To provide products & services under Smart EPP program' },
  { no: 11, name: 'Liquidation Partner', data: 'Personal Data', purpose: 'To provide products & services under Assured Buyback (ABB) program' },
];

/* ─────────────────────────────────────────────────────────────
   Rights of the Data Principal
───────────────────────────────────────────────────────────── */
const rights = [
  {
    title: 'Right to Information',
    detail: 'Obtain a summary of Personal Data being processed, and identities of all Data Fiduciaries and Processors with whom the data has been shared.',
  },
  {
    title: 'Right to Correction & Erasure',
    detail: 'Request correction, completion, updating, and erasure of your Personal Data.',
  },
  {
    title: 'Right to Grievance Redressal',
    detail: 'Access readily available means of grievance redressal for any act or omission regarding the performance of obligations relating to Personal Data.',
  },
  {
    title: 'Right to Nominate',
    detail: 'Nominate another individual who shall, in the event of death or incapacity of the Data Principal, exercise these rights.',
  },
  {
    title: 'Right to Withdraw Consent',
    detail: 'Withdraw consent given for processing personal data at any time. The consequences of withdrawal shall be borne by the Data Principal.',
  },
];

/* ─────────────────────────────────────────────────────────────
   Duties of Data Principal
───────────────────────────────────────────────────────────── */
const duties = [
  'Comply with the provisions of all applicable laws for the time being in force while exercising rights.',
  'Ensure not to impersonate another person while providing Personal Data for a specified purpose.',
  'Ensure not to suppress any material information while providing Personal Data for any document, unique identifier, or proof of identity/address issued by the government.',
  'Ensure not to register a false or frivolous grievance or complaint with a Data Fiduciary or government authorities.',
  'Furnish only verifiably authentic information while exercising the right to correction or erasure.',
];

/* ─────────────────────────────────────────────────────────────
   Mobile app data collected
───────────────────────────────────────────────────────────── */
const appData = [
  { label: 'Phone Number', detail: 'Uniquely identifies a Nexus Digital customer.' },
  { label: 'IMEI', detail: 'Primary hardware identifier required to provide protection plans.' },
  { label: 'Location', detail: 'Enables address capture for technician visits and checks location eligibility for services.' },
  { label: 'Phone Components', detail: 'Tests hardware elements (camera, Bluetooth, sensors, mic, battery, GPS, Wi-Fi) for malfunction, executed only upon explicit user action.' },
  { label: 'Technical Information', detail: 'MAC address, IP address, and Wi-Fi details to offer personalized gadget protection.' },
  { label: 'Contact List', detail: 'Facilitates contact selection and fraud detection via secondary devices.' },
  { label: 'Android Advertising ID', detail: 'Used in compliance with Google Play Services guidelines solely for advertising and analytics without connecting to personally identifiable information without explicit consent.' },
];

/* ─────────────────────────────────────────────────────────────
   Basic Terms
───────────────────────────────────────────────────────────── */
const basicTerms = [
  { term: 'Applicable Law', definition: 'The applicable laws of India.' },
  { term: 'Data Fiduciary', definition: 'Any person who alone or in conjunction with other persons determines the purpose and means of processing of Personal Data.' },
  { term: 'Data Principal', definition: 'The individual to whom the Personal Data relates, including parents/guardians of children or persons with disability.' },
  { term: 'Data Processor', definition: 'Any person who processes Personal Data on behalf of a Data Fiduciary.' },
  { term: 'Hardware Identifiers', definition: 'Make, Model Number, Serial Number, IMEI number, MAC address, etc., as applicable.' },
  { term: 'Location Data', definition: "Device's Internet Protocol (IP) Address, GPS Latitude & Longitude coordinates, etc., as applicable." },
  { term: 'Personal Data', definition: 'Any data about an individual who is identifiable by or in relation to such data as per The Digital Personal Data Protection Act, 2023, India.' },
  { term: 'Processing', definition: 'A wholly or partly automated operation on digital Personal Data, including collection, recording, storage, retrieval, use, sharing, disclosure, restriction, erasure, or destruction.' },
];

export default function NexwarrentyPrivacy() {
  useScrollReveal();

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        compact={true}
        eyebrow="NX–WRT–LEGAL"
        title={
          <>
            <span className="text-gradient-brand">Privacy Policy</span>
            {' '}for Nexwarrenty
          </>
        }
        lede="At Nexus Digital, we maintain the highest levels of security standards. This policy explains how we collect, use, and protect your Digital Personal Data in compliance with applicable laws of India."
        ctaButtons={[{ label: '← Back to Nexwarrenty', to: '/nexwarrenty', secondary: true }]}
        style={{ minHeight: '44vh', paddingTop: '120px', paddingBottom: '2rem' }}
      />

      <section className="py-20 bg-grid-paper">
        <Container>

          {/* Meta badge */}
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
                  Nexwarrenty — Nexus Digital
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  Last Updated: 06 July 2026
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8">

            {/* ── Overview ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="00" title="Overview" />
              <div className="space-y-4 text-[0.95rem] leading-relaxed text-slate-600">
                <p>At Nexus Digital, we maintain the highest levels of security standards. Digital Personal Data Protection & Privacy is crucial as it safeguards sensitive information from unauthorized access, misuse, or disclosure. It allows individuals to control how their Personal Data is collected, used, and shared, thereby protecting their privacy and maintaining control over their personal information.</p>
                <p>We collect Personal Data so that we can serve better services for the Nexus Digital Plans availed. We are fully committed to ensuring the privacy, confidentiality, and integrity of any personal information. We protect this information by maintaining lawful physical, electronic, and procedural security means.</p>
              </div>
            </div>

            {/* ── Security Standards ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="01" title="Information Security Standards & Compliances" />
              <p className="mb-5 text-[0.95rem] leading-relaxed text-slate-600">
                Nexus Digital is audited and certified by CERT-In empanelled auditing organizations for:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
                  <p className="mb-1 text-sm font-semibold text-navy">ISO/IEC 27001 – ISMS</p>
                  <p className="text-[0.88rem] leading-relaxed text-slate-600">An international standard providing a framework for establishing, implementing, maintaining, and continually improving an information security management system, ensuring confidentiality, integrity, and availability of information assets.</p>
                </div>
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
                  <p className="mb-1 text-sm font-semibold text-navy">PCI-DSS</p>
                  <p className="text-[0.88rem] leading-relaxed text-slate-600">A set of security standards ensuring that all companies that accept, process, store, or transmit credit card information maintain a secure environment to protect cardholder data from theft and misuse.</p>
                </div>
              </div>
            </div>

            {/* ── Basic Terms ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="02" title="Basic Terms" />
              <ul className="space-y-4">
                {basicTerms.map((t) => (
                  <li key={t.term} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 text-xs">✓</span>
                    <p className="text-[0.95rem] leading-relaxed text-slate-600">
                      <span className="font-semibold text-slate-800">{t.term}: </span>{t.definition}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Scope ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="03" title="Scope of Processing Personal Data" />
              <div className="space-y-3 text-[0.95rem] leading-relaxed text-slate-600">
                <p>This policy applies to the processing of Personal Data of Customers (the Data Principal) by Nexus Digital (as a Data Fiduciary). Processing will be governed by this policy; in particular, Nexus Digital will process Personal Data only on consent given by the Data Principal with a clear affirmative action.</p>
                <p>The subject matter is the Personal Data provided in respect of Services under the Plan Terms & Conditions. The duration of processing is the duration of provision of Services until disposal of Personal Data in accordance with applicable laws.</p>
              </div>
            </div>

            {/* ── Data Sharing ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="04" title="Sharing of Personal Data with Third Parties" />
              <p className="text-[0.95rem] leading-relaxed text-slate-600">
                Nexus Digital does not publish, sell, lease, or share data to any third parties, except for performance of its service obligations or as may be required by law, or pursuant to the order of a court or regulatory authority, or in order for Nexus Digital to enforce its rights.
              </p>
            </div>

            {/* ── Sub-Processing Table ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 overflow-hidden rounded-2xl opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <div className="p-8 pb-4">
                <SectionHeader number="05" title="Sub-Processing" />
                <p className="mb-6 text-[0.95rem] leading-relaxed text-slate-600">
                  Nexus Digital maintains a list of sub-processors engaged for processing Personal Data in accordance with this policy:
                </p>
              </div>
              <div className="overflow-x-auto px-8 pb-8">
                <table className="w-full min-w-[560px] border-collapse text-[0.88rem]">
                  <thead>
                    <tr className="border-b border-indigo-100">
                      <th className="pb-3 pr-4 text-left font-mono text-xs tracking-widest text-indigo-500 uppercase">No.</th>
                      <th className="pb-3 pr-4 text-left font-mono text-xs tracking-widest text-indigo-500 uppercase">Processor</th>
                      <th className="pb-3 pr-4 text-left font-mono text-xs tracking-widest text-indigo-500 uppercase">Data</th>
                      <th className="pb-3 text-left font-mono text-xs tracking-widest text-indigo-500 uppercase">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processors.map((p, i) => (
                      <tr key={p.no} className={i % 2 === 0 ? 'bg-indigo-50/30' : ''}>
                        <td className="py-2.5 pr-4 font-mono text-indigo-400">{String(p.no).padStart(2, '0')}</td>
                        <td className="py-2.5 pr-4 font-semibold text-navy">{p.name}</td>
                        <td className="py-2.5 pr-4 text-slate-500">{p.data}</td>
                        <td className="py-2.5 text-slate-600">{p.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── Rights ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="06" title="Rights of the Data Principal" />
              <ul className="space-y-4">
                {rights.map((r) => (
                  <li key={r.title} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 text-xs">✓</span>
                    <p className="text-[0.95rem] leading-relaxed text-slate-600">
                      <span className="font-semibold text-slate-800">{r.title}: </span>{r.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Grievance Redressal ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="07" title="Grievance Redressal" />
              <p className="mb-3 text-[0.95rem] leading-relaxed text-slate-600">
                Customers or Data Principals can raise grievances, requests, or any queries related to their personal data:
              </p>
              <a href="mailto:happytoassist@nexusdigital.in" className="inline-flex items-center gap-2 font-semibold text-indigo-600 transition-colors hover:text-pink-600">
                <span>✉</span> happytoassist@nexusdigital.in
              </a>
            </div>

            {/* ── Duties ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="08" title="Duties of Data Principal" />
              <ul className="space-y-3">
                {duties.map((d, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 text-xs">✓</span>
                    <p className="text-[0.95rem] leading-relaxed text-slate-600">{d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Security & Technical ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="09" title="Security of Processing" />
              <p className="mb-4 text-[0.95rem] leading-relaxed text-slate-600">
                Nexus Digital implements appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
              </p>
              <ul className="space-y-3">
                {[
                  'Masking and encryption of Personal Data.',
                  'Ongoing confidentiality, integrity, availability, and resilience of processing systems and services.',
                  'Ability to restore availability and access to Personal Data in a timely manner after a physical or technical incident.',
                  'Risk assessment against accidental or unlawful destruction, loss, alteration, or unauthorized disclosure of Personal Data.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 text-xs">✓</span>
                    <p className="text-[0.95rem] leading-relaxed text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Website & Mobile App ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <SectionHeader number="10" title="Nexus Digital Website & Mobile Applications" />
              <div className="mb-6 space-y-3 text-[0.95rem] leading-relaxed text-slate-600">
                <p>Nexus Digital has developed website and mobile applications targeted at Indian consumers. The website and mobile applications can be used to activate a subscription plan, renew subscriptions, interact with chat support and contact centers, and avail various value-added services.</p>
              </div>
              <p className="mb-3 text-sm font-semibold text-navy">Mobile App Data Collected:</p>
              <ul className="space-y-3">
                {appData.map((a) => (
                  <li key={a.label} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 text-xs">✓</span>
                    <p className="text-[0.95rem] leading-relaxed text-slate-600">
                      <span className="font-semibold text-slate-800">{a.label}: </span>{a.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Retention / Purging / Cross-Border ── */}
            {[
              { number: '11', title: 'Termination of Service', content: 'Upon the expiration of membership or termination of the Services, storage of Personal Data will cease unless any business partner\'s contractual obligations or applicable law requires continued storage.' },
              { number: '12', title: 'Personal Data Purging', content: 'Nexus Digital will irrevocably scramble or purge Personal Data in accordance with the Personal Data Protection Act, 2023, India, or its contractual obligations.' },
              { number: '13', title: 'Cross Border Transfer', content: 'To the extent any Personal Data is transferred outside India, such transfer will be subject to appropriate safeguards that provide an adequate level of protection in accordance with applicable laws.' },
              { number: '14', title: 'Personal Data Breach', content: 'Nexus Digital will notify Customer without undue delay after becoming aware of a Personal Data breach and will reasonably respond to Customer\'s request for further information.' },
              { number: '15', title: 'Cookies Policy', content: 'We use "Cookies" to analyze web page flow, measure promotional effectiveness, and ensure a safe experience. Cookies do not contain personal information. Users can accept, reject, or delete cookies via browser settings, though disabling them may affect website functionality.' },
            ].map((sec) => (
              <div
                key={sec.number}
                data-reveal
                className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
              >
                <SectionHeader number={sec.number} title={sec.title} />
                <p className="text-[0.95rem] leading-relaxed text-slate-600">{sec.content}</p>
              </div>
            ))}

            {/* ── Contact card ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 overflow-hidden rounded-2xl opacity-0 shadow-glass-lg transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <div className="badge-stripe" />
              <div className="p-8">
                <SectionHeader number="16" title="Inquiries & Complaints" />
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
                  <div>
                    <Eyebrow>Company</Eyebrow>
                    <p className="mt-1 font-semibold text-slate-800">Nexus Digital</p>
                  </div>
                  <div>
                    <Eyebrow>Email</Eyebrow>
                    <a href="mailto:info@nexusdig.in" className="mt-1 inline-block font-semibold text-indigo-600 transition-colors hover:text-pink-600">
                      info@nexusdig.in
                    </a>
                  </div>
                </div>
                <p className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/60 px-5 py-3 text-[0.88rem] text-slate-600">
                  Nexus Digital reserves the right to modify this policy periodically. Significant changes will be communicated via prominent notifications on the website, login screen, or by email.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Shared sub-component
───────────────────────────────────────────────────────────── */
function SectionHeader({ number, title }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-[0.72rem] tracking-[0.1em] text-indigo-500 uppercase">
        §{number}
      </span>
      <h2 className="text-xl font-semibold text-navy">{title}</h2>
    </div>
  );
}
