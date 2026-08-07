import { Link } from 'react-router-dom';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pt-12 pb-8 text-slate-300">
      <Container className="flex flex-wrap items-center justify-between gap-5.5 border-b border-white/8 pb-8 max-[640px]:flex-col max-[640px]:text-center">
        <span className="glass-panel inline-flex rounded-[10px] px-4 py-2">
          <img src="/logo.png" alt="NEXUS" className="h-10 w-auto object-contain" />
        </span>
        <ul className="flex flex-wrap gap-6.5">
          <li><Link to="/" className="text-sm transition-colors hover:text-cyan-500">Home</Link></li>
          <li><Link to="/nexwarrenty" className="text-sm transition-colors hover:text-cyan-500">Nexwarrenty</Link></li>
          <li><Link to="/nexlock" className="text-sm transition-colors hover:text-cyan-500">Nexlock</Link></li>
          <li><Link to="/careers" className="text-sm transition-colors hover:text-cyan-500">Careers</Link></li>
          <li><Link to="/collaborate" className="text-sm transition-colors hover:text-cyan-500">Collaborate</Link></li>
          <li><Link to="/contact" className="text-sm transition-colors hover:text-cyan-500">Contact</Link></li>
        </ul>
      </Container>
      <Container className="mt-5.5 flex flex-wrap items-center justify-between gap-3 max-[640px]:flex-col max-[640px]:text-center">
        <p className="text-[0.8rem]">&copy; 2026 NEXUS. All rights reserved.</p>
        <ul className="flex flex-wrap gap-5">
          <li>
            <Link to="/nexlock/privacy" className="text-[0.78rem] text-slate-400 transition-colors hover:text-cyan-500">
              NexLock Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/nexlock/terms" className="text-[0.78rem] text-slate-400 transition-colors hover:text-cyan-500">
              NexLock Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
