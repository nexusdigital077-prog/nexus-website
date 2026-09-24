import { Link } from 'react-router-dom';
import Container from './Container';
import { PILLARS } from '../data/pillars';

const company = [
  { to: '/about', label: 'About & leadership' },
  { to: '/careers', label: 'Careers' },
  { to: '/collaborate', label: 'Collaborate' },
  { to: '/contact', label: 'Contact' },
];

const legal = [
  { to: '/nexlock/privacy', label: 'NexLock Privacy Policy' },
  { to: '/nexlock/terms', label: 'NexLock Terms & Conditions' },
  { to: '/nexwarrenty/privacy', label: 'NexWarranty Privacy Policy' },
  { to: '/nexwarrenty/terms', label: 'NexWarranty Terms & Conditions' },
];

function Column({ title, children }) {
  return (
    <div>
      <p className="mb-4 font-mono text-[0.7rem] tracking-[0.14em] text-slate-500 uppercase">{title}</p>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

const linkCls = 'text-sm transition-colors hover:text-cyan-500';

export default function Footer() {
  const services = PILLARS.filter((p) => p.kind === 'services');
  const products = PILLARS.filter((p) => p.kind === 'product');

  return (
    <footer className="bg-ink px-6 pt-14 pb-8 text-slate-300">
      <Container className="grid grid-cols-2 gap-10 border-b border-white/8 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="inline-flex rounded-[10px] bg-white px-4 py-2">
            <img src="/logo.png" alt="NEXUS" className="h-10 w-auto object-contain" />
          </Link>
          <p className="mt-5 max-w-[34ch] text-sm text-slate-400">
            A technology company: software engineering for businesses, and products of our own — NexLock and NexWarranty.
          </p>
        </div>

        <Column title="Services">
          {services.map((p) => (
            <li key={p.id}><Link to={p.to} className={linkCls}>{p.name}</Link></li>
          ))}
          <li><Link to="/it-solutions#services" className={linkCls}>All services</Link></li>
          <li><Link to="/collaborate?type=it-existing" className={linkCls}>Existing software help</Link></li>
        </Column>

        <Column title="Products">
          {products.map((p) => (
            <li key={p.id}><Link to={p.to} className={linkCls}>{p.name}</Link></li>
          ))}
        </Column>

        <Column title="Company">
          <li><Link to="/" className={linkCls}>Home</Link></li>
          {company.map((l) => (
            <li key={l.to}><Link to={l.to} className={linkCls}>{l.label}</Link></li>
          ))}
        </Column>
      </Container>

      <Container className="mt-6 flex flex-wrap items-center justify-between gap-4 max-[640px]:flex-col max-[640px]:text-center">
        <div className="flex flex-col gap-2 text-[0.8rem] sm:flex-row sm:items-center sm:gap-4">
          <p>&copy; 2026 NEXUS. All rights reserved.</p>
          <span className="hidden text-slate-500 sm:inline">|</span>
          <p className="font-mono text-slate-400">GSTIN: 27ABAFN2902R1ZZ</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-5">
          {legal.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-[0.78rem] text-slate-400 transition-colors hover:text-cyan-500">{l.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
