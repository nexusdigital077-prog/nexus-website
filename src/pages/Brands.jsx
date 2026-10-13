import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';
import { brands } from '../data/brands';

export default function Brands() {
  useScrollReveal();

  return (
    <>
      <header className="relative overflow-hidden pt-[150px] pb-16">
        <Container className="max-w-[860px] text-center">
          <Eyebrow>BRAND PARTNERS</Eyebrow>
          <h1 className="mb-5 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08]">
            Brands we work <span className="text-gradient-brand">with.</span>
          </h1>
          <p className="mx-auto max-w-[56ch] text-[clamp(1.02rem,1.5vw,1.18rem)] text-slate-600">
            Partnerships where Nexus brings NexLock or NexWarranty to a brand's retailers and customers.
          </p>
        </Container>
      </header>

      <section className="pb-28">
        <Container>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link
                  to={`/brands/${b.slug}`}
                  className="glass-panel group flex h-full flex-col overflow-hidden rounded-2xl shadow-glass transition duration-300 hover:-translate-y-1 hover:shadow-glass-lg"
                >
                  <div className="flex aspect-[16/10] items-center justify-center bg-white p-8">
                    <img src={b.logo} alt={b.name} loading="lazy" className="max-h-full w-auto object-contain" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="mb-2 font-mono text-[0.7rem] tracking-[0.12em] text-pink-700 uppercase">Partner · {b.partner}</p>
                    <h2 className="mb-2 text-[1.4rem] text-slate-900">{b.name}</h2>
                    <p className="mb-6 text-[0.92rem] text-slate-600">{b.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 font-semibold text-navy transition-[gap] group-hover:gap-2.5">
                      View brand &rarr;
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
