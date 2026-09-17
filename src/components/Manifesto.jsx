import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);
  const { language, t } = useLanguage();

  const quote = t.manifesto?.quote || 'La elegancia de un sistema backend no radica en la complejidad de su código, sino en la simplicidad con la que resuelve problemas complejos.';
  const words = quote.split(' ');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (wordsRef.current.length > 0) {
        gsap.fromTo(
          wordsRef.current.filter(Boolean),
          { opacity: 0.2, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
              end: 'center 45%',
              scrub: 1,
            },
          }
        );
      }

      gsap.fromTo(
        '.manifesto-byline',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [language, quote]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-slate-950 dark:bg-[#060911] text-white overflow-hidden px-6 sm:px-8 py-28 border-b border-slate-800"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/10 dark:bg-brand-500/15 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Decorative vertical accent mark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-10 h-[2.5px] bg-gradient-to-r from-brand-500 to-brand-purple rounded-full" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-400 font-semibold mb-10 px-3.5 py-1 rounded-full bg-brand-950/60 border border-brand-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.manifesto?.tag || 'MANIFIESTO DE INGENIERÍA'}</span>
        </div>

        {/* Central Quote: Large Space Grotesk / High contrast */}
        <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-heading font-medium text-slate-100 leading-[1.3] tracking-tight mb-12">
          “{words.map((word, index) => (
            <span
              key={`${language}-${word}-${index}`}
              ref={(el) => (wordsRef.current[index] = el)}
              className="inline-block mr-[0.28em] transition-opacity"
            >
              {word}
            </span>
          ))}”
        </blockquote>

        {/* Byline */}
        <div className="manifesto-byline flex items-center justify-center gap-3 font-mono text-xs sm:text-sm text-slate-400 tracking-wider">
          <span className="w-6 h-[1px] bg-slate-700" />
          <span className="text-white font-semibold">Santiago Chamorro</span>
          <span className="text-brand-400">·</span>
          <span>{t.manifesto?.byline || 'Java Backend & Reactive Systems'}</span>
          <span className="w-6 h-[1px] bg-slate-700" />
        </div>

      </div>
    </section>
  );
}
