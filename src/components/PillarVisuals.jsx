import { Link } from 'react-router-dom';
import { PILLARS } from '../data/pillars';
import { PillarIcon, Wordmark } from './PillarMarks';

/*
 * Illustrative product visuals, built in markup rather than screenshots.
 * They depict only what each pillar actually does (per the product pages);
 * sample values are marked as such.
 */

function IllustrationTag({ children = 'Illustration', onDark = false }) {
  return (
    <span className={`font-mono text-[0.62rem] tracking-[0.14em] uppercase ${onDark ? 'text-slate-400' : 'text-slate-500'}`}>
      {children}
    </span>
  );
}

/* ─── Home hero: the company architecture at a glance ───────────────── */
export function CompanyMap() {
  return (
    <div className="relative w-full max-w-[460px]">
      <div className="glass-panel relative z-10 mx-auto flex w-fit items-center gap-3 rounded-2xl px-5 py-3 shadow-glass-lg">
        <img src="/favicon-180.png" alt="" className="h-9 w-9" />
        <div className="text-left">
          <p className="font-display text-lg leading-none font-bold tracking-[0.18em] text-navy">NEXUS</p>
          <p className="mt-1 font-mono text-[0.62rem] tracking-[0.14em] text-slate-500 uppercase">Technology company</p>
        </div>
      </div>

      {/* connector trunk */}
      <div className="mx-auto h-8 w-px bg-linear-to-b from-navy/40 to-cyan-500/60" />

      <div className="relative">
        <div className="absolute top-0 bottom-8 left-[27px] w-px bg-linear-to-b from-cyan-500/60 via-blue-500/50 to-teal-500/60" aria-hidden="true" />
        <ul className="flex flex-col gap-3">
          {PILLARS.map((p, i) => (
            <li key={p.id}>
              <Link
                to={p.to}
                className="glass-panel group relative flex items-center gap-4 rounded-2xl p-3.5 pr-5 shadow-glass transition-all duration-300 hover:translate-x-1 hover:shadow-glass-lg"
                style={{ animationDelay: `${450 + i * 120}ms` }}
              >
                <PillarIcon id={p.id} size="h-11 w-11" iconSize={22} />
                <div className="min-w-0 flex-1">
                  <p className="font-display text-[1.02rem] leading-tight font-semibold text-slate-900">{p.name}</p>
                  <p className="text-[0.8rem] leading-snug text-slate-600">{p.tagline}</p>
                </div>
                <span className={`hidden shrink-0 rounded-full px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.1em] uppercase sm:inline ${p.accent.soft} ${p.accent.text}`}>
                  {p.kind === 'product' ? 'Product' : 'Services'}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── IT Solutions: a maintenance board on a client's existing system ─ */
const TICKETS = [
  { type: 'Bug fix', title: 'Invoice totals not syncing to reports', status: 'Fixed', tone: 'bg-emerald-400/15 text-emerald-300' },
  { type: 'Feature', title: 'Customer notifications via third-party API', status: 'In progress', tone: 'bg-cyan-400/15 text-cyan-300' },
  { type: 'UI/UX', title: 'Modernize the sales dashboard', status: 'In review', tone: 'bg-indigo-400/20 text-indigo-200' },
  { type: 'Performance', title: 'Slow customer search on large datasets', status: 'Planned', tone: 'bg-white/10 text-slate-300' },
];

export function ITBoardVisual() {
  return (
    <div className="relative w-full max-w-[500px] sm:pb-24">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink text-left shadow-[0_30px_60px_rgba(5,10,18,0.35)]">
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 truncate font-mono text-[0.72rem] text-slate-400">client-crm / maintenance-board</span>
        </div>
        <div className="p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[0.68rem] tracking-[0.12em] text-slate-400 uppercase">Existing system · ongoing</p>
            <IllustrationTag onDark>Illustrative</IllustrationTag>
          </div>
          <ul className="flex flex-col gap-2.5">
            {TICKETS.map((t) => (
              <li key={t.title} className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/[0.03] px-3.5 py-3">
                <span className="w-[74px] shrink-0 font-mono text-[0.64rem] tracking-[0.06em] text-cyan-400 uppercase">{t.type}</span>
                <span className="min-w-0 flex-1 truncate text-[0.84rem] text-slate-100">{t.title}</span>
                <span className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.04em] uppercase ${t.tone}`}>{t.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute right-4 bottom-0 z-10 hidden w-[230px] rounded-2xl border border-navy/8 bg-white p-4 text-left shadow-glass-lg sm:block">
        <p className="font-mono text-[0.62rem] tracking-[0.12em] text-slate-500 uppercase">New build</p>
        <p className="mt-1 font-display text-[0.95rem] font-semibold text-slate-900">Customer mobile app</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy/10">
          <div className="h-full w-[62%] rounded-full bg-linear-to-r from-indigo-600 to-cyan-500" />
        </div>
        <p className="mt-1.5 text-[0.72rem] text-slate-500">Web · Android · iOS</p>
      </div>
    </div>
  );
}

/* ─── NexLock: the overdue-EMI lock screen on a financed phone ─────── */
export function NexLockPhoneVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] px-6 sm:px-10">
      <div className="relative mx-auto w-[230px] rounded-[2.4rem] border-[7px] border-[#0c1b33] bg-[#0c1b33] shadow-[0_30px_60px_rgba(12,27,51,0.35)] sm:w-[250px]">
        <div className="absolute top-2 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0c1b33]" />
        <div className="flex aspect-[9/19] flex-col items-center justify-between overflow-hidden rounded-[1.9rem] bg-linear-to-b from-[#f0f5ff] to-[#dfe8fd] px-5 pt-10 pb-6 text-center">
          <Wordmark id="nexlock" className="text-[0.95rem]" />
          <div>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-300 bg-blue-600/10">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0c1b33" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <p className="font-display text-[1.05rem] font-bold text-[#0c1b33]">Device restricted</p>
            <p className="mt-2 text-[0.72rem] leading-snug text-slate-600">Your EMI payment is overdue. Core functions are restricted until it is cleared.</p>
          </div>
          <div className="w-full">
            <div className="rounded-full border border-red-300 bg-red-100 px-3 py-1.5 font-mono text-[0.58rem] font-semibold tracking-[0.08em] text-red-600">
              PAYMENT OVERDUE
            </div>
            <p className="mt-2 text-[0.62rem] text-slate-500">Access is restored once payment is confirmed</p>
          </div>
        </div>
      </div>

      <div className="absolute top-[18%] left-0 z-10 rounded-xl border border-blue-600/20 bg-white px-3 py-2 text-left shadow-[0_10px_24px_rgba(37,99,235,0.15)]">
        <p className="font-mono text-[0.58rem] tracking-[0.1em] text-blue-700 uppercase">Enrolled</p>
        <p className="text-[0.75rem] font-semibold text-[#0c1b33]">One QR scan</p>
      </div>
      <div className="absolute right-0 bottom-[36%] z-10 rounded-xl border border-red-300/60 bg-white px-3 py-2 text-left shadow-[0_10px_24px_rgba(220,38,38,0.12)]">
        <p className="font-mono text-[0.58rem] tracking-[0.1em] text-red-600 uppercase">Alert</p>
        <p className="text-[0.75rem] font-semibold text-[#0c1b33]">SIM swap detected</p>
      </div>
      <p className="mt-4 text-center"><IllustrationTag /></p>
    </div>
  );
}

/* ─── NexWarranty: a sample plan certificate ───────────────────────── */
const CERT_ROWS = [
  ['Device', 'Refrigerator'],
  ['Plan term', '3 years after brand warranty'],
  ['Spare parts & labour', '100% covered'],
  ['Depreciation on claims', 'Zero'],
  ['Service', 'Doorstep pickup & drop'],
];

export function NexWarrantyCertificateVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div className="absolute -inset-3 -z-0 rotate-[-3deg] rounded-[22px] bg-linear-to-br from-teal-500/20 to-emerald-400/10" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[18px] border border-white/80 bg-white text-left shadow-[0_30px_60px_rgba(9,33,71,0.16)]">
        <div className="h-2 bg-[repeating-linear-gradient(to_right,#092147_0_10px,#14b8a6_10px_14px)]" />
        <div className="p-6 sm:p-7">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[0.62rem] tracking-[0.14em] text-teal-700 uppercase">Extended warranty certificate</p>
              <Wordmark id="nexwarranty" className="mt-1 block text-xl" />
            </div>
            <PillarIcon id="nexwarranty" size="h-11 w-11" iconSize={22} />
          </div>
          <dl className="divide-y divide-dashed divide-navy/10 border-y border-dashed border-navy/10">
            {CERT_ROWS.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 py-2.5">
                <dt className="text-[0.8rem] text-slate-500">{k}</dt>
                <dd className="text-right text-[0.84rem] font-semibold text-navy">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="font-mono text-[0.62rem] tracking-[0.1em] text-slate-500 uppercase">Plan price</p>
              <p className="font-display text-lg font-bold text-navy">16% <span className="text-[0.78rem] font-medium text-slate-500">of device value</span></p>
            </div>
            <IllustrationTag>Sample plan</IllustrationTag>
          </div>
        </div>
      </div>
    </div>
  );
}
