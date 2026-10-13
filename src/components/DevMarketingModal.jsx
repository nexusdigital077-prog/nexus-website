import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import devMarketingLogo from '../assets/dev-marketing-logo.png';

const SHOW_DELAY_MS = 1400; // let the Nexus loader finish first

/* Highlight shown each time the homepage opens. */
export default function DevMarketingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[900] flex items-center justify-center bg-navy/50 p-5 backdrop-blur-sm" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="devmarketing-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[460px] translate-y-0 overflow-hidden rounded-2xl bg-white text-center shadow-[0_30px_80px_rgba(5,10,18,0.35)] animate-fade-up opacity-100"
      >
        <div className="h-1.5 bg-linear-to-r from-navy via-indigo-600 to-cyan-500" />
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-navy"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 pt-10 pb-8">
          <p className="mb-5 font-mono text-[0.7rem] tracking-[0.14em] text-pink-700 uppercase">New partnership</p>
          <img src={devMarketingLogo} alt="Dev Marketing" className="mx-auto mb-6 h-auto w-[150px] object-contain" />
          <h2 id="devmarketing-title" className="mb-3 text-[1.6rem] leading-tight text-slate-900">
            We've collaborated with <span className="text-gradient-brand">Dev Marketing</span> for NexLock
          </h2>
          <p className="mx-auto mb-7 max-w-[38ch] text-[0.95rem] text-slate-600">
            NexLock training has been delivered to the Top 10 stores across Mumbai.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/collaborate#dev-marketing"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-600"
            >
              See the partnership &rarr;
            </Link>
            <button
              type="button"
              onClick={close}
              className="inline-flex items-center justify-center rounded-lg border border-navy/20 px-6 py-3 font-semibold text-navy transition hover:border-navy"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
