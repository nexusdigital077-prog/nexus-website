import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/#products', label: 'Products' },
  { to: '/nexwarrenty', label: 'Nex Warrenty' },
  { to: '/nexlock', label: 'Security' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

const linkClasses = ({ isActive }) =>
  [
    'block w-full px-6 py-4 text-sm font-medium text-slate-900 transition-colors hover:text-navy',
    'md:relative md:inline md:w-auto md:px-0 md:py-0',
    "md:after:absolute md:after:-bottom-1.5 md:after:left-0 md:after:h-0.5 md:after:w-0 md:after:bg-pink-500 md:after:transition-[width] md:after:duration-250 md:after:content-['']",
    'md:hover:after:w-full',
    isActive ? 'md:after:w-full' : '',
  ].join(' ');

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 z-[1000] w-full border-b border-white/60 bg-paper/60 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-2.5">
        <NavLink to="/" onClick={closeMenu}>
          <img src="/logo.png" alt="NEXUS" className="h-[80px] w-auto object-contain" />
        </NavLink>

        <ul
          id="navLinks"
          className={`fixed top-[74px] right-0 flex w-[min(280px,80vw)] flex-col rounded-bl-2xl border border-white/80 bg-white shadow-glass-lg backdrop-blur-2xl transition-transform duration-350 ease-[cubic-bezier(0.2,0.8,0.2,1)] md:static md:w-auto md:translate-x-0 md:flex-row md:items-center md:gap-9 md:rounded-none md:border-none md:bg-transparent md:shadow-none md:backdrop-blur-none ${
            isOpen ? 'translate-x-0' : 'translate-x-[110%]'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.to} className="w-full md:w-auto">
              <NavLink to={item.to} end={item.end} className={linkClasses} onClick={closeMenu}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="flex cursor-pointer flex-col gap-1.5 border-none bg-transparent p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="navLinks"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-navy transition-transform duration-300 ease-out ${
              isOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span className={`h-0.5 w-6 rounded-full bg-navy transition-opacity duration-300 ease-out ${isOpen ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-6 rounded-full bg-navy transition-transform duration-300 ease-out ${
              isOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
