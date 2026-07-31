import Container from './Container';

export default function PhotoBand({ backgroundImage, stamp, eyebrow, heading, description, style = {} }) {
  return (
    <section
      className="photo-overlay relative isolate flex min-h-[46vh] items-end overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')`, ...style }}
    >
      {stamp && (
        <div className="pointer-events-none absolute inset-x-0 top-6.5 z-[2]">
          <Container className="flex justify-end">
            <span className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/35 px-3.5 py-1.5 font-mono text-[0.72rem] tracking-[0.1em] text-slate-50 uppercase backdrop-blur-md before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan-500 before:shadow-[0_0_8px_var(--color-cyan-500)] before:content-['']">
              {stamp}
            </span>
          </Container>
        </div>
      )}

      <Container className="relative z-[2] w-full">
        <div className="max-w-[720px] py-12 pb-10.5">
          <p className="mb-4.5 inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.14em] text-cyan-500 uppercase before:h-px before:w-5.5 before:bg-pink-500 before:content-['']">
            {eyebrow}
          </p>
          <h2 className="mb-2.5 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-50">{heading}</h2>
          {description && <p className="max-w-[52ch] text-[1.02rem] text-slate-300">{description}</p>}
        </div>
      </Container>
    </section>
  );
}
