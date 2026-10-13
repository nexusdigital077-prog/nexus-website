import { Link, Navigate, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';
import { brandBySlug } from '../data/brands';
import top10Logo from '../assets/brands/top-10-logo.png';

export default function Brand() {
  useScrollReveal();
  const { slug } = useParams();
  const brand = brandBySlug(slug);

  if (!brand) return <Navigate to="/brands" replace />;

  return (
    <>
      <header className="relative overflow-hidden pt-[150px] pb-20">
        <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel flex items-center justify-center rounded-2xl bg-white p-10 shadow-glass-lg">
            <img src={brand.logo} alt={brand.name} className="h-auto w-full max-w-[240px] object-contain" />
          </div>
          <div>
            <Link to="/brands" className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-navy">
              &larr; All brands
            </Link>
            <Eyebrow>BRAND PARTNER</Eyebrow>
            <h1 className="mb-4 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08]">
              {brand.partner} <span className="text-gradient-brand">× {brand.name}</span>
            </h1>
            <p className="mb-8 max-w-[52ch] text-[clamp(1.02rem,1.5vw,1.18rem)] text-slate-600">{brand.summary}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={`/collaborate?type=${brand.partner.toLowerCase()}`}
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(9,33,71,0.2)] transition hover:-translate-y-0.5 hover:bg-indigo-600"
              >
                Partner with Nexus &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {brand.stores?.length > 0 && (
        <section className="bg-paper-raised py-24">
          <Container>
            <div className="mb-12 max-w-[640px]">
              <Eyebrow>TRAINING ACROSS MUMBAI</Eyebrow>
              <h2 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">
                <img src={top10Logo} alt="Top-10" className="h-[0.85em] w-auto" />
                <span>branches, trained on {brand.partner}.</span>
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {brand.stores.map((s) => (
                <li key={s.code} className="glass-panel overflow-hidden rounded-2xl shadow-glass">
                  <img src={s.image} alt={`${brand.partner} training at ${s.store} ${s.branch}`} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                  <div className="p-5">
                    <p className="flex items-center gap-2 font-display text-[1.1rem] font-semibold text-slate-900">
                      <img src={top10Logo} alt={s.store} className="h-[1em] w-auto" />
                      <span className="text-slate-500">· {s.branch}</span>
                    </p>
                    <p className="mt-1 font-mono text-[0.72rem] tracking-[0.08em] text-navy/70 uppercase">Store code {s.code}</p>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-600">{s.message}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
