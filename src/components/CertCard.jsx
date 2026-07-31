import { Link } from 'react-router-dom';

export default function CertCard({ icon, title, description, code, actionLabel, actionTo, className = '' }) {
  return (
    <div
      data-reveal
      data-tilt
      className={`glass-panel flex translate-y-6 flex-col overflow-hidden rounded-2xl opacity-0 shadow-glass transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-glass-lg data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 ${className}`}
    >
      <div className="p-8.5 pb-6.5">
        <div className="mb-5.5 flex h-13 w-13 items-center justify-center rounded-xl bg-linear-to-br from-navy to-indigo-600 text-2xl text-white">
          {icon}
        </div>
        <h3 className="mb-2.5 text-2xl">{title}</h3>
        <p className="text-[0.95rem] text-slate-600">{description}</p>
      </div>

      <div className="ticket-perforation" />

      <div className="mt-auto flex items-center justify-between px-8.5 pt-5.5 pb-8.5">
        <span className="font-mono text-[0.78rem] tracking-[0.05em] text-slate-600">{code}</span>
        <Link
          to={actionTo}
          className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-navy transition-[color,gap] duration-250 hover:gap-2 hover:text-pink-700"
        >
          {actionLabel} &rarr;
        </Link>
      </div>
    </div>
  );
}
