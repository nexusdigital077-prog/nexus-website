import { useState } from 'react';
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

      {/* ── WARRANTY CALCULATOR ───────────────────────────── */}
      <WarrantyCalculator />

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

/* ────────────────────────────────────────────────────────────
   Warranty Calculator Component
──────────────────────────────────────────────────────────── */
const CALC_RATE_CARD = [
  { label: 'Air Conditioner', rates: { '1 Year': 8.5, '2 Years': 13, '3 Years': 17 } },
  { label: 'Dishwasher / Dryer / Refrigerator / Washing Machine / Microwave', rates: { '1 Year': 8, '2 Years': 12, '3 Years': 16, '4 Years': 20 } },
  { label: 'Refrigerator & Washing Machine (Brand Warranty > 1 year)', rates: { '1 Year': 9, '2 Years': 14 } },
  { label: 'Television', rates: { '1 Year': 8.5, '2 Years': 12, '3 Years': 17 } },
  { label: 'Television (Brand Warranty > 1 year)', rates: { '1 Year': 10, '2 Years': 14 } },
  { label: 'Air & Water Purifier', rates: { '1 Year': 8, '2 Years': 12, '3 Years': 16 } },
  { label: 'Hob & Chimney', rates: { '1 Year': 9, '2 Years': 14 } },
  { label: 'Room Cooler / Heater / Atta Chakki / Water Dispenser / Geyser', rates: { '1 Year': 8, '2 Years': 12 } },
  { label: 'Personal Care / Massager / Vacuum Cleaner / Fan / Iron', rates: { '1 Year': 9, '2 Years': 14 } },
  { label: 'Chopper / Blender / Kettle / Toaster / Fryer / Griller / Food Processor / JMG / Induction Stove', rates: { '1 Year': 9, '2 Years': 14 } },
  { label: 'Home Theatre / Sound Bar / Audio System / Portable Speakers', rates: { '1 Year': 8.5, '2 Years': 12 } },
  { label: 'Bluetooth — Speakers / Neckband / Headphones', rates: { '1 Year': 12 } },
  { label: 'Laptop', rates: { '1 Year': 7, '2 Years': 9, '3 Years': 12 } },
  { label: 'Desktop / Printer / Office Solution', rates: { '1 Year': 7, '2 Years': 10 } },
];

const MAX_DEVICE_VALUE = 2000000; // ₹20 lakh

function WarrantyCalculator() {
  const [product, setProduct] = useState('');
  const [deviceValue, setDeviceValue] = useState('');

  const selected = CALC_RATE_CARD.find((r) => r.label === product);
  const numVal = parseFloat(deviceValue.replace(/,/g, ''));
  const isValid = selected && !isNaN(numVal) && numVal > 0 && numVal <= MAX_DEVICE_VALUE;

  const fmt = (n) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

  return (
    <section className="py-28">
      <Container>
        <div className="mb-12">
          <Eyebrow>CALCULATOR</Eyebrow>
          <h2 className="mb-3 text-[clamp(1.9rem,3vw,2.6rem)] text-slate-900">Calculate Your Warranty Price</h2>
          <p className="max-w-[56ch] text-slate-600">
            Select your product category, enter the device purchase price, and instantly see the warranty cost for each plan.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-10 shadow-glass">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="flex flex-col gap-6">
              {/* Product dropdown */}
              <div>
                <label htmlFor="wc-product" className="mb-2 block text-[0.82rem] font-semibold uppercase tracking-widest text-navy">
                  Product Category
                </label>
                <select
                  id="wc-product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full appearance-none rounded-xl border-2 border-line bg-white px-4 py-3.5 text-[0.95rem] text-slate-900 outline-none ring-0 transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
                >
                  <option value="">— Select a product —</option>
                  {CALC_RATE_CARD.map((r) => (
                    <option key={r.label} value={r.label}>{r.label}</option>
                  ))}
                </select>
              </div>

              {/* Device value input */}
              <div>
                <label htmlFor="wc-value" className="mb-2 block text-[0.82rem] font-semibold uppercase tracking-widest text-navy">
                  Device Purchase Price (₹)
                </label>
                <input
                  id="wc-value"
                  type="number"
                  min="1"
                  max="2000000"
                  placeholder="e.g. 50000"
                  value={deviceValue}
                  onChange={(e) => setDeviceValue(e.target.value)}
                  className="w-full rounded-xl border-2 border-line bg-white px-4 py-3.5 text-[0.95rem] text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
                />
                <p className="mt-1.5 text-[0.78rem] text-slate-500">Maximum device price: ₹20,00,000</p>
                {numVal > MAX_DEVICE_VALUE && (
                  <p className="mt-1 text-[0.82rem] font-semibold text-red-500">⚠️ Plan not available above ₹20 Lakh</p>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center">
              {!isValid && (
                <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-line py-12 text-center text-slate-400">
                  <span className="mb-3 text-4xl">🧮</span>
                  <p className="text-[0.9rem]">Select a product and enter device value<br />to see your warranty price.</p>
                </div>
              )}
              {isValid && (
                <div className="flex flex-col gap-4">
                  <p className="mb-2 text-[0.82rem] font-semibold uppercase tracking-widest text-navy">Estimated Warranty Cost</p>
                  {Object.entries(selected.rates).map(([duration, rate]) => {
                    const cost = (numVal * rate) / 100;
                    return (
                      <div
                        key={duration}
                        className="flex items-center justify-between rounded-xl border border-line bg-paper px-6 py-4 shadow-sm"
                      >
                        <div>
                          <p className="text-[0.85rem] font-semibold text-slate-700">{duration} Plan</p>
                          <p className="text-[0.75rem] text-slate-500">{rate}% of device value</p>
                        </div>
                        <p className="text-[1.35rem] font-bold text-navy">{fmt(cost)}</p>
                      </div>
                    );
                  })}
                  <p className="mt-2 text-[0.78rem] text-slate-500">*Prices are indicative. Final price may vary. GST & taxes extra.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
