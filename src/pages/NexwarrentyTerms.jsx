import HeroSection from '../components/HeroSection';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';

const sections = [
  {
    number: '01',
    title: 'Definitions',
    content: 'Welcome to nexusdig.in (the "Site") operated by Nexus Digital Services Pvt. Ltd. ("Nexus Digital"). Nexus Digital provides its services subject to the following conditions. Before using the Site, you must read and accept all terms and conditions in this Terms of Use ("ToU") and the linked Privacy Policy. This ToU is effective upon acceptance. Use of any functionality of the Site constitutes acceptance. If this ToU conflicts with any other documents, the ToU will control for the purposes of usage of the Site.',
  },
  {
    number: '02',
    title: 'Description of Services',
    content: 'Nexus Digital provides users with access to information primarily about Business Support Services for Electronic goods including, but not restricted to, Warranties and related services (the "Service"). You are responsible for obtaining access to the Site, and that access may involve third-party fees (such as Internet service provider or airtime charges). You must provide and are responsible for all equipment necessary to access the Site.',
  },
  {
    number: '03',
    title: 'License and Site Access',
    content: 'Nexus Digital grants you a limited license to access and make personal use of the Site and the Service. This license does NOT include:',
    items: [
      'Any downloading or copying of any kind of information for the benefit of another individual, vendor, or any other third party.',
      'Caching, unauthorized hypertext links to the Site, or framing of any Content available through the Site.',
      'Uploading, posting, or transmitting any content that you do not have a right to make available (such as the intellectual property of another party).',
      'Uploading any material that contains software viruses or any code designed to interrupt, destroy, or limit the functionality of any computer software, hardware, or telecommunications equipment.',
      'Any action that imposes an unreasonable or disproportionately large load on Nexus Digital\'s infrastructure.',
      'Any use of data mining, robots, or similar data gathering and extraction tools.',
    ],
    footer: 'You may not bypass any measures used by Nexus Digital to prevent or restrict access to the Site. Any unauthorized use shall terminate the permission or license granted to you.',
  },
  {
    number: '04',
    title: 'Eligibility',
    content: 'The Service is not available to minors under the age of 18 or to any users suspended or removed from the system by Nexus Digital for any reason. Users may not have more than one active account. Users are prohibited from selling, trading, or otherwise transferring their accounts to another party.',
  },
  {
    number: '05',
    title: 'Your Account',
    content: 'In consideration of your use of the Site, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of India or other applicable jurisdiction. You agree to provide true, accurate, current, and complete information about yourself as prompted by the Site.',
    footer: 'You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your computer. Nexus Digital reserves the right to refuse service, terminate accounts, or remove or edit content in its sole discretion.',
  },
  {
    number: '06',
    title: 'Errors, Inaccuracies and Omissions',
    content: 'Occasionally there may be information on our site that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times, and availability. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information or cancel orders if any information is inaccurate at any time without prior notice.',
  },
  {
    number: '07',
    title: 'Submitted Content',
    content: 'Nexus Digital does not claim ownership of any materials you make available through the Site. With respect to materials you submit or make available, you grant Nexus Digital a perpetual, irrevocable, non-terminable, worldwide, royalty-free and non-exclusive license to use, copy, distribute, publicly display, modify, create derivative works, and sublicense such materials.',
    items: [
      'Any unlawful, threatening, libelous, defamatory, obscene, pornographic, or other material that would violate rights of publicity, privacy, or any law.',
      'Any commercial material or content (including solicitation of funds, advertising, or marketing of any good or services).',
      'Any material that infringes, misappropriates, or violates any copyright, trademark, patent right, or other proprietary right of any third party.',
    ],
    footer: 'You shall be solely liable for any damages resulting from any violation of the foregoing restrictions.',
  },
  {
    number: '08',
    title: 'Disclaimer of Liability and Warranty',
    content: 'To the extent permitted by law, Nexus Digital assumes no legal liability for and does not warrant that the information contained on this website is accurate or complete, or that web pages will be free from errors or that availability will be uninterrupted. Nexus Digital expressly disclaims and excludes all express and implied warranties, terms, or conditions not stated herein.',
    footer: 'In no case shall Nexus Digital, its directors, officers, employees, affiliates, agents, contractors, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.',
  },
  {
    number: '09',
    title: 'Limitation of Liability',
    content: 'You expressly understand and agree that Nexus Digital and its subsidiaries, affiliates, officers, employees, agents, partners, and licensors shall not be liable to you for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.',
    footer: 'If, despite the limitation above, Nexus Digital is found liable for any loss or damage, the liability will in no event exceed the greater of: (a) the service fees you paid to Nexus Digital in connection with such transaction(s), or (b) Rupees One Hundred only (INR 100).',
  },
  {
    number: '10',
    title: 'Indemnity',
    content: 'You agree to indemnify and hold Nexus Digital (and its officers, directors, agents, subsidiaries, joint ventures, and employees) harmless from any and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties, or other costs or expenses of any kind, including reasonable attorneys\' fees, arising out of or related to your breach of this ToU, your violation of any law or the rights of a third party, or your use of the Site.',
  },
  {
    number: '11',
    title: 'Electronic Communication',
    content: 'When you use the Site or send emails to Nexus Digital, you are communicating with Nexus Digital electronically. You consent to receive communications from Nexus Digital electronically. Nexus Digital may communicate with you by email, by posting notices on the Site, or by phone. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.',
  },
  {
    number: '12',
    title: 'Links',
    content: 'The Site or third parties may provide links to other World Wide Web sites or resources. Because Nexus Digital has no control over such sites and resources, you acknowledge and agree that Nexus Digital is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible or liable for any content, advertising, products, or other materials on or available from such sites or resources.',
  },
  {
    number: '13',
    title: 'Local Laws',
    content: 'Nexus Digital controls and operates this Website from its headquarters in Mumbai, India and makes no representation that the materials on the website are appropriate or available for use in other locations. All marketing or promotional materials found on this Website are solely directed to individuals, companies, or other entities located in India and comply with the laws prevailing in India. Disputes, if any, shall be subject to the exclusive jurisdiction of Courts at Mumbai.',
  },
  {
    number: '14',
    title: 'Modification',
    content: 'Nexus Digital reserves the right to make changes to the Site, related policies and agreements, this ToU, and the Privacy Policy at any time. If Nexus Digital makes a material modification to this ToU, it may notify you by displaying a prominent announcement above the text of this ToU for thirty (30) days, being deemed sufficient notification of such changes.',
    footer: 'Should you wish to terminate your account due to a modification, you may do so by sending an email with the subject line "Termination" to: info@nexusdig.in. If you choose to continue using the Site, you agree that by doing so you will be deemed to accept the new ToU or Privacy Policy, as relevant.',
  },
  {
    number: '15',
    title: 'General',
    content: 'This ToU and the relationship between you and Nexus Digital will be governed by the laws of India without regard to its conflict of law provisions. You and Nexus Digital agree to submit to the personal jurisdiction of the courts located in Mumbai with respect to any legal proceedings that may arise in connection with this ToU. This ToU constitutes the entire agreement between you and Nexus Digital and governs your use of the Site, superseding any prior agreements.',
  },
];

export default function NexwarrentyTerms() {
  useScrollReveal();

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection
        compact={true}
        eyebrow="NX–WRT–LEGAL"
        title={
          <>
            <span className="text-gradient-brand">Terms &amp; Conditions</span>
            {' '}for Nexwarrenty
          </>
        }
        lede="Please read these Terms of Use carefully before using nexusdig.in. By accessing or using any part of this Site, you agree to be bound by these Terms of Use and our linked Privacy Policy."
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
                📋
              </span>
              <div>
                <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                  Nexwarrenty — Nexus Digital Services Pvt. Ltd.
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  Governing jurisdiction: Mumbai, India
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {sections.map((sec) => (
              <div
                key={sec.number}
                data-reveal
                className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
              >
                <SectionHeader number={sec.number} title={sec.title} />

                {sec.content && (
                  <p className="text-[0.95rem] leading-relaxed text-slate-600">{sec.content}</p>
                )}

                {sec.items && (
                  <ul className="mt-3 space-y-3">
                    {sec.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 text-xs">✓</span>
                        <p className="text-[0.95rem] leading-relaxed text-slate-600">{item}</p>
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

            {/* ── Contact card ── */}
            <div
              data-reveal
              className="glass-panel translate-y-6 overflow-hidden rounded-2xl opacity-0 shadow-glass-lg transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <div className="badge-stripe" />
              <div className="p-8">
                <SectionHeader number="16" title="Contact" />
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
                  <div>
                    <Eyebrow>Company</Eyebrow>
                    <p className="mt-1 font-semibold text-slate-800">Nexus Digital Services Pvt. Ltd.</p>
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
