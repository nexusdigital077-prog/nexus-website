import Container from './Container';
import Eyebrow from './Eyebrow';
import devMarketingLogo from '../assets/dev-marketing-logo.png';
import { trainingStores } from '../data/trainingStores';

/* Partnership section on /collaborate: NexLock × Dev Marketing, plus the
   training gallery for the Top 10 stores across Mumbai. */
export default function DevMarketingSection() {
  return (
    <section id="dev-marketing" className="scroll-mt-24 py-20">
      <Container>
        <div className="mb-14 grid grid-cols-1 items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel flex items-center justify-center rounded-2xl bg-white p-8 shadow-glass-lg">
            <img src={devMarketingLogo} alt="Dev Marketing — redefining distribution" loading="lazy" className="h-auto w-full max-w-[240px] object-contain" />
          </div>
          <div>
            <Eyebrow>PARTNERSHIP</Eyebrow>
            <h2 className="mb-4 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">
              NexLock <span className="text-gradient-brand">× Dev Marketing</span>
            </h2>
            <p className="mb-4 text-slate-600">
              Nexus has collaborated with Dev Marketing to bring NexLock to retailers. As part of the work, NexLock training has been delivered to all of the Top 10 stores across Mumbai.
            </p>
            <p className="text-slate-600">Below are photos from those training sessions.</p>
          </div>
        </div>

        {trainingStores.length > 0 && (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingStores.map((s) => (
              <li key={s.code} className="glass-panel overflow-hidden rounded-2xl shadow-glass">
                <img src={s.image} alt={`NexLock training at ${s.store} ${s.branch}`} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <div className="p-5">
                  <p className="font-display text-[1.1rem] font-semibold text-slate-900">
                    {s.store} <span className="text-slate-500">· {s.branch}</span>
                  </p>
                  <p className="mt-1 font-mono text-[0.72rem] tracking-[0.08em] text-navy/70 uppercase">Store code {s.code}</p>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-600">{s.message}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
