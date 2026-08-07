import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nexwarrenty from './pages/Nexwarrenty';
import Nexlock from './pages/Nexlock';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Collaborate from './pages/Collaborate';
import NexlockPrivacy from './pages/NexlockPrivacy';
import NexlockTerms from './pages/NexlockTerms';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nexwarrenty" element={<Nexwarrenty />} />
        <Route path="/nexlock" element={<Nexlock />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nexlock/privacy" element={<NexlockPrivacy />} />
        <Route path="/nexlock/terms" element={<NexlockTerms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
