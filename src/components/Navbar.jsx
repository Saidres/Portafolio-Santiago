import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Terminal, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.home, href: '#hero' },
    { name: t.navbar.about, href: '#sobre-mi' },
    { name: t.navbar.experience, href: '#experiencia' },
    { name: t.navbar.stack, href: '#stack' },
    { name: t.navbar.projects, href: '#proyectos' },
    { name: t.navbar.contact, href: '#contacto' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 sm:px-6 py-4 pointer-events-none transition-all duration-300"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-6 px-5 md:px-7 py-3 rounded-full transition-all duration-500 max-w-5xl w-full ${
            scrolled
              ? 'bg-[#F4F7FA]/80 backdrop-blur-xl border border-[#111827]/10 shadow-soft text-arctic-night'
              : 'bg-transparent border border-transparent text-arctic-night'
          }`}
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-bold tracking-tight text-sm md:text-base link-hover group"
          >
            <span className="w-7 h-7 rounded-lg bg-arctic-night text-white flex items-center justify-center font-mono text-xs font-semibold group-hover:bg-arctic-accent transition-colors duration-300">
              SC
            </span>
            <span className="hidden sm:inline font-semibold tracking-tight text-arctic-night text-sm">
              SANTIAGO CHAMORRO
            </span>
            <span className="inline sm:hidden font-semibold tracking-tight text-arctic-night text-sm">
              S. CHAMORRO
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-arctic-night/75">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="link-hover hover:text-arctic-accent transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-arctic-accent hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action: Language Toggle + CTA */}
          <div className="flex items-center gap-2.5">
            
            {/* Language Switcher ES / EN */}
            <div className="flex items-center bg-arctic-ice/90 rounded-full p-0.5 border border-arctic-night/10 font-mono text-[11px] shadow-subtle">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded-full font-semibold transition-all ${
                  language === 'es'
                    ? 'bg-arctic-night text-white shadow-subtle'
                    : 'text-arctic-night/60 hover:text-arctic-night'
                }`}
                aria-label="Cambiar idioma a Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-arctic-night text-white shadow-subtle'
                    : 'text-arctic-night/60 hover:text-arctic-night'
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
            </div>

            <a
              href="#contacto"
              className="btn-magnetic hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-arctic-accent text-white shadow-accent-glow hover:bg-blue-700 transition-colors"
            >
              <span className="btn-slide-bg bg-blue-800" />
              <span className="relative z-10 flex items-center gap-1.5">
                {t.navbar.cta}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-arctic-night hover:bg-arctic-night/5 transition-colors"
              aria-label="Alternar menú de navegación"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-arctic-night/40 backdrop-blur-md md:hidden animate-fade-in">
          <div className="fixed top-20 left-4 right-4 bg-arctic-white rounded-3xl p-6 border border-arctic-night/10 shadow-elevated">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-arctic-night/10 text-xs font-mono text-arctic-night/60">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-arctic-accent" />
                  <span>{t.navbar.navLabel}</span>
                </div>
                {/* Mobile Language Switcher */}
                <div className="flex items-center bg-arctic-ice rounded-full p-0.5 border border-arctic-night/10 text-xs">
                  <button
                    type="button"
                    onClick={() => setLanguage('es')}
                    className={`px-2.5 py-0.5 rounded-full font-semibold ${language === 'es' ? 'bg-arctic-night text-white' : 'text-arctic-night/60'}`}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-2.5 py-0.5 rounded-full font-semibold ${language === 'en' ? 'bg-arctic-night text-white' : 'text-arctic-night/60'}`}
                  >
                    EN
                  </button>
                </div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-arctic-night hover:text-arctic-accent py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold bg-arctic-accent text-white shadow-accent-glow"
                >
                  {t.navbar.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
