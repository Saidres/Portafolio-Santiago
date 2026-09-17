import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledRatio);

      if (window.scrollY > 30) {
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
    { name: t.navbar.projects, href: '#proyectos' },
    { name: t.navbar.experience, href: '#experiencia' },
    { name: t.navbar.contact, href: '#contacto' },
  ];

  return (
    <>
      {/* Scroll Progress Bar at the absolute top */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-brand-500 via-brand-purple to-brand-emerald z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center items-center px-3 sm:px-6 py-3.5 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-2 md:gap-4 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 max-w-5xl w-full ${
            scrolled
              ? 'bg-white/85 dark:bg-dark-surface/90 backdrop-blur-xl border border-slate-200/80 dark:border-dark-border shadow-soft dark:shadow-bento-dark text-slate-900 dark:text-slate-100'
              : 'bg-white/50 dark:bg-dark-surface/60 backdrop-blur-md border border-slate-200/50 dark:border-dark-border/50 text-slate-900 dark:text-slate-100 shadow-subtle'
          }`}
          aria-label="Navegación principal"
        >
          {/* Brand Logo & Live Status */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-bold tracking-tight text-sm link-hover group"
          >
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-brand-600 dark:bg-brand-500 text-white font-mono text-xs font-semibold shadow-sm transition-transform duration-200 group-hover:scale-105">
              SC
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white leading-tight">
                SANTIAGO CHAMORRO
              </span>
              <span className="hidden sm:flex items-center gap-1 font-mono text-[9.5px] text-emerald-600 dark:text-emerald-400 font-medium leading-none mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                BACKEND ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls: Theme Toggle + Language Toggle + CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Theme Toggle (Dark / Light) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-card border border-transparent hover:border-slate-200 dark:hover:border-dark-border transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Language Switcher ES / EN */}
            <div className="flex items-center bg-slate-100 dark:bg-dark-card rounded-full p-0.5 border border-slate-200/80 dark:border-dark-border font-mono text-[11px] shadow-subtle">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded-full font-semibold transition-all cursor-pointer ${
                  language === 'es'
                    ? 'bg-white dark:bg-brand-600 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-white dark:bg-brand-600 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Primary CTA */}
            <a
              href="#contacto"
              className="btn-magnetic hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-600 dark:bg-brand-500 text-white hover:bg-brand-700 dark:hover:bg-brand-600 shadow-sm transition-colors cursor-pointer"
            >
              <span>{t.navbar.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-card transition-colors cursor-pointer"
              aria-label="Alternar menú"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md md:hidden animate-fade-in">
          <div className="fixed top-18 left-4 right-4 bg-white dark:bg-dark-surface rounded-3xl p-6 border border-slate-200 dark:border-dark-border shadow-elevated">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-dark-border text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-brand-500" />
                  <span>{t.navbar.navLabel}</span>
                </div>
                {/* Mobile Language Switcher */}
                <div className="flex items-center bg-slate-100 dark:bg-dark-card rounded-full p-0.5 border border-slate-200 dark:border-dark-border text-xs">
                  <button
                    type="button"
                    onClick={() => setLanguage('es')}
                    className={`px-2.5 py-0.5 rounded-full font-semibold ${
                      language === 'es' ? 'bg-brand-600 text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-2.5 py-0.5 rounded-full font-semibold ${
                      language === 'en' ? 'bg-brand-600 text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-800 dark:text-slate-200 hover:text-brand-500 py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold bg-brand-600 text-white shadow-accent-glow"
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
