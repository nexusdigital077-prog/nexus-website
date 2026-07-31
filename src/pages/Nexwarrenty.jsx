import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

const covered = [
  'Unlimited breakdown support',
  'All mechanical & electrical breakdowns after brand warranty expires',
  '100% cost of spare parts & labor charges',
  'Repair or replacement guarantee — no questions asked',
  'Zero depreciation — full claim value with no deduction',
  'Free doorstep pickup & drop service with complimentary transportation',
];

const notCovered = [
  'Damage caused by physical impact or accidents',
  'Normal wear and tear that does not affect functionality',
  'Damage resulting from fire, burns, or explosions of any kind',
  'Devices that have been tampered with or repaired without authorization, or used improperly',
  'Problems caused by liquid or water exposure',
  'Electrical issues such as wiring faults, faulty plugs or switches, or voltage fluctuations',
  'Damage due to external factors like rodent bites or insect infestations',
  'Cosmetic wear that does not impair device functionality',
  'Products with serial numbers that have been removed or altered',
  'Devices used for commercial purposes or within commercial establishments',
  'Consumable items such as cables, cartridges, batteries, chargers, and similar accessories',
];

const pricingRows = [
  ['Air Conditioner', '8.5%', '13%', '17%', '—'],
  ['Dishwasher, Dryer, Refrigerator, Washing Machine & Microwave', '8%', '12%', '16%', '20%'],
  ['Refrigerator & Washing Machine (If Brand Warranty is more than 1 year)', '9%', '14%', '—', '—'],
  ['Television', '8.5%', '12%', '17%', '—'],
  ['Television (If Brand Warranty is more than 1 year)', '10%', '14%', '—', '—'],
  ['Air & Water Purifier', '8%', '12%', '16%', '—'],
  ['Hob & Chimney', '9%', '14%', '—', '—'],
  ['Room Cooler, Heater, Atta Chakki, Water Dispenser & Geyser', '8%', '12%', '—', '—'],
  ['Personal Care, Massager, Vacuum Cleaner, Fan & Iron', '9%', '14%', '—', '—'],
  ['Chopper, Blender, Kettle, Toaster, Fryer, Griller, Food Processor, JMG & Induction Stove', '9%', '14%', '—', '—'],
  ['Home Theatre, Sound Bar, Audio System & Portable Speakers', '8.5%', '12%', '—', '—'],
  ['Bluetooth — Speakers, Neckband & Headphones', '12%', '—', '—', '—'],
  ['Laptop', '7%', '9%', '12%', '—'],
  ['Desktop, Printer & Office Solution', '7%', '10%', '—', '—'],
];

const benefits = [
  { icon: '♾️', label: 'Unlimited Breakdown Support' },
  { icon: '⚙️', label: 'All Spare Parts Covered' },
  { icon: '🛡️', label: 'Repair or Replacement Guarantee' },
  { icon: '💵', label: 'Zero Depreciation' },
  { icon: '🚪', label: 'Doorstep Service' },
];

export default function Nexwarrenty() {
  useScrollReveal();
  useTiltEffect();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="NX–WRT–01"
        title={<>Nexus <span className="text-gradient-brand">Extended Warranty</span></>}
        lede={<>Securing connectivity, ensuring trust — coverage up to <strong>₹20 lakhs</strong> of device purchase price.</>}
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1775210727386-4c798dfae209?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX–WRT–01"
        eyebrow="EVERY APPLIANCE, ACCOUNTED FOR"
        heading="From the first breakdown to the last service call."
        description="Whatever's plugged in at home — it's covered, doorstep to doorstep, at zero deduction."
      />

      <section className="py-28">
        <Container>
          <div className="mb-12">
            <Eyebrow>COVERAGE</Eyebrow>
            <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">What's in the certificate.</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div data-reveal data-tilt className="glass-panel translate-y-6 rounded-2xl p-9.5 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
              <h3 className="mb-6 flex items-center gap-2.5 border-b-2 border-line pb-4 text-[1.3rem] text-navy">
                <span>✔️</span> WHAT'S COVERED
              </h3>
              <ul className="list-none">
                {covered.map((item) => (
                  <li key={item} className="relative mb-4 pl-6.5 text-[0.96rem] text-slate-900 before:absolute before:left-0 before:font-bold before:text-navy before:content-['•']">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal data-tilt className="glass-panel translate-y-6 rounded-2xl p-9.5 opacity-0 shadow-glass transition-all delay-150 duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
              <h3 className="mb-6 flex items-center gap-2.5 border-b-2 border-line pb-4 text-[1.3rem] text-red-500">
                <span>❌</span> NOT COVERED
              </h3>
              <ul className="list-none">
                {notCovered.map((item) => (
                  <li key={item} className="relative mb-4 pl-6.5 text-[0.96rem] text-slate-900 before:absolute before:left-0 before:font-bold before:text-red-500 before:content-['•']">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-raised py-28">
        <Container>
          <div className="mb-12">
            <Eyebrow>PRICING</Eyebrow>
            <h2 className="mb-3 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">Plan price as % of device value.</h2>
            <p className="max-w-[56ch] text-slate-600">Choose your coverage duration. All prices are a percentage of device purchase price.</p>
          </div>

          <div data-reveal className="glass-panel translate-y-6 overflow-x-auto rounded-[14px] opacity-0 shadow-glass transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
            <table className="w-full min-w-[820px] border-collapse font-mono">
              <thead>
                <tr>
                  <th className="border border-line bg-navy p-4 text-left text-[0.72rem] font-semibold tracking-[0.04em] text-white uppercase">Product category</th>
                  <th className="border border-line bg-navy p-4 text-[0.72rem] font-semibold tracking-[0.04em] text-white uppercase">1 year</th>
                  <th className="border border-line bg-navy p-4 text-[0.72rem] font-semibold tracking-[0.04em] text-white uppercase">2 years</th>
                  <th className="border border-line bg-navy p-4 text-[0.72rem] font-semibold tracking-[0.04em] text-white uppercase">3 years</th>
                  <th className="border border-line bg-navy p-4 text-[0.72rem] font-semibold tracking-[0.04em] text-white uppercase">4 years</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row[0]} className="even:bg-paper hover:bg-cyan-500/8">
                    <td className="border border-line p-4 text-left font-body text-[0.85rem] font-semibold text-slate-900">{row[0]}</td>
                    {row.slice(1).map((val, i) => (
                      <td key={i} className="border border-line p-4 text-center text-[0.85rem] font-semibold text-navy">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center font-display text-[1.05rem] font-bold text-red-500">
            ⚠️ Plan Available for Max device Price of 20 Lakh
          </p>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div data-reveal className="grid translate-y-6 grid-cols-1 items-center gap-12 opacity-0 transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 md:grid-cols-2">
            <div className="relative order-2 aspect-5/4 overflow-hidden rounded-[18px] border border-white/80 shadow-glass-lg after:absolute after:inset-0 after:bg-linear-to-br after:from-cyan-500/16 after:to-transparent after:content-[''] md:order-2">
              <img
                src="https://images.unsplash.com/photo-1562941995-17dc31eaaf6d?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                alt="Technician repairing an electronic device"
                loading="lazy"
                className="h-full w-full object-cover [filter:saturate(0.94)]"
              />
              <span className="absolute bottom-4 left-4 z-[2] rounded-full bg-[rgba(5,10,18,0.55)] px-2.5 py-1 font-mono text-[0.78rem] text-slate-50 backdrop-blur-xs">
                NX–WRT–01
              </span>
            </div>
            <div className="order-1 md:order-1">
              <Eyebrow>HOW A CLAIM ACTUALLY WORKS</Eyebrow>
              <h2 className="mb-4 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">Upload the invoice. We take it from there.</h2>
              <p className="mb-4 text-slate-600">Share your purchase invoice and IMEI or serial number, and we route the device to a brand-authorized center — same parts, same standards as the manufacturer.</p>
              <p className="text-slate-600">No paperwork chase, no back-and-forth on cost. If it's covered, it's fixed.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-raised py-28">
        <Container>
          <div className="mb-12">
            <Eyebrow>NEXUS ADVANTAGE</Eyebrow>
            <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">The Nexus Advantage</h2>
          </div>

          <div data-reveal className="glass-panel grid translate-y-6 grid-cols-1 gap-5.5 rounded-2xl p-10.5 opacity-0 shadow-glass transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.label} className="flex items-start gap-2.5 text-[0.95rem] font-medium">
                <span className="shrink-0 text-navy">{b.icon}</span> {b.label}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="glass-panel rounded-2xl border-t-4 border-navy p-9.5 shadow-glass">
              <h3 className="mb-4 text-[1.15rem] text-navy">📌 IMPORTANT POINTS TO CONSIDER</h3>
              <p className="text-[0.95rem] leading-[1.6] text-slate-900">
                To qualify, your device needs at least 12 months of valid Indian warranty and must be free of pre-existing issues. Repairs are handled at approved centers, with complimentary transportation included if needed.
              </p>
            </div>
            <div className="glass-panel rounded-2xl border-t-4 border-navy p-9.5 shadow-glass">
              <h3 className="mb-4 text-[1.15rem] text-navy">⚖️ MAXIMUM LIABILITY</h3>
              <p className="text-[0.95rem] leading-[1.6] text-slate-900">
                The total coverage available will be limited to the product's initial purchase price. When the sum of all repair or replacement expenses equals this amount, the warranty will be regarded as complete, and no additional responsibilities will remain.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-navy p-9.5 text-center text-white shadow-glass">
            <h3 className="mb-3 font-display text-[1.4rem] tracking-[0.04em]">📞 RAISE A SERVICE REQUEST</h3>
            <p className="mb-6 opacity-90">Have an issue with your device? Call our support desk directly to register a service request.</p>
            <a
              href="tel:7710070322"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-9 py-3.5 text-xl font-bold text-navy no-underline shadow-[0_4px_12px_rgba(34,211,238,0.3)]"
            >
              <span>📞</span> 7710070322
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
