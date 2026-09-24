/*
 * The three pillars of Nexus. Single source of truth for names, routes,
 * positioning and accent classes, so Home, Navbar and Footer stay in sync.
 *
 * kind: 'services' → work Nexus does for clients
 *       'product'  → proprietary product Nexus builds and operates
 *
 * Accent classes are written out in full so Tailwind can pick them up.
 */
export const PILLARS = [
  {
    id: 'it-solutions',
    name: 'Nexus IT Solutions',
    shortName: 'IT Solutions',
    kind: 'services',
    kindLabel: 'Client services',
    code: 'NX–ITS',
    to: '/it-solutions',
    tagline: 'Software engineering for businesses.',
    summary:
      'Websites, web and mobile apps, custom software and CRMs — built new, or maintained, fixed and modernized when they already exist.',
    points: [
      'New websites, web & mobile applications',
      'Custom software & CRM development',
      'Maintenance, bug fixing & new features for existing systems',
      'APIs, integrations & legacy modernization',
    ],
    cta: 'Explore IT Solutions',
    accent: {
      text: 'text-cyan-700',
      bg: 'bg-cyan-600',
      soft: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      bar: 'from-navy via-indigo-600 to-cyan-500',
      gradientText: 'from-indigo-600 to-cyan-500',
    },
  },
  {
    id: 'nexlock',
    name: 'NexLock',
    shortName: 'NexLock',
    kind: 'product',
    kindLabel: 'Nexus product',
    code: 'NX–LCK',
    to: '/nexlock',
    tagline: 'Smart device lock & EMI recovery platform.',
    summary:
      'An Android app and dashboard for device-finance businesses that restricts a financed phone when an EMI is overdue — and restores it once payment is confirmed.',
    points: [
      'One QR scan to enroll a device',
      'Automatic lock on overdue EMI, remote unlock',
      'SIM swap & removal detection',
      'Payment reminders and portfolio dashboard',
    ],
    cta: 'Explore NexLock',
    accent: {
      text: 'text-blue-700',
      bg: 'bg-blue-600',
      soft: 'bg-blue-600/10',
      border: 'border-blue-600/30',
      bar: 'from-[#0c1b33] via-blue-700 to-blue-500',
      gradientText: 'from-blue-600 to-[#1a3260]',
    },
  },
  {
    id: 'nexwarranty',
    name: 'NexWarranty',
    shortName: 'NexWarranty',
    kind: 'product',
    kindLabel: 'Nexus product',
    code: 'NX–WRT',
    to: '/nexwarrenty',
    tagline: 'Extended warranty for home appliances & electronics.',
    summary:
      'Protection that starts where the brand warranty ends — 100% parts and labour, zero depreciation, and doorstep pickup and drop.',
    points: [
      '1 to 4 year plans, priced as a % of device value',
      'Covers devices up to ₹20 lakh',
      '100% spare parts & labour, zero depreciation',
      'Repair at brand-authorized service centers',
    ],
    cta: 'Explore NexWarranty',
    accent: {
      text: 'text-teal-700',
      bg: 'bg-teal-600',
      soft: 'bg-teal-500/10',
      border: 'border-teal-500/30',
      bar: 'from-[#092147] via-teal-700 to-emerald-400',
      gradientText: 'from-teal-600 to-emerald-500',
    },
  },
];

export const pillarById = (id) => PILLARS.find((p) => p.id === id);
