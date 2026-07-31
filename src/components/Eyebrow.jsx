export default function Eyebrow({ children, onDark = false, className = '' }) {
  return (
    <p
      className={`mb-4.5 inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.14em] uppercase before:h-px before:w-5.5 before:bg-pink-500 before:content-[''] ${
        onDark ? 'text-cyan-500' : 'text-navy'
      } ${className}`}
    >
      {children}
    </p>
  );
}
