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
          <li><Link to="/contact" className="text-sm transition-colors hover:text-cyan-500">Contact</Link></li>
        </ul>
      </Container>
      <p className="mx-auto mt-5.5 max-w-[1180px] px-6 text-center text-[0.8rem]">&copy; 2026 NEXUS. All rights reserved.</p>
    </footer>
  );
}
