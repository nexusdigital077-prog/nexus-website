import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BOOT_MIN_MS = 700; // keep the refresh loader up long enough to read as intentional
const ROUTE_MS = 550; // brief brand beat when moving between pages

/*
 * Nexus page loader.
 *  - Boot: dismisses the static #boot-loader in index.html once the page has
 *    loaded (it is visible before React even runs, so refreshes never flash blank).
 *  - Route changes: shows the same loader briefly whenever the path changes.
 * Styles live in index.html (.nx-loader) so both share one design.
 */
export default function PageLoader() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    const boot = document.getElementById('boot-loader');
    if (!boot) return;
    const started = performance.now();
    let removeTimer;
    const finish = () => {
      const wait = Math.max(0, BOOT_MIN_MS - (performance.now() - started));
      removeTimer = setTimeout(() => {
        boot.classList.add('is-done');
        setTimeout(() => boot.remove(), 500);
      }, wait);
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    return () => {
      window.removeEventListener('load', finish);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), ROUTE_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className={`nx-loader ${visible ? '' : 'is-done'}`} role="status" aria-label="Loading" aria-hidden={!visible}>
      <div className="nx-loader__mark">
        <div className="nx-loader__ring" />
        <div className="nx-loader__halo" />
        <img className="nx-loader__logo" src="/favicon-180.png" alt="" />
      </div>
      <div className="nx-loader__word">NEXUS</div>
      <div className="nx-loader__bar" />
    </div>
  );
}
