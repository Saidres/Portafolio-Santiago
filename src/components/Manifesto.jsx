import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);
  const { language, t } = useLanguage();

  const quote = t.manifesto.quote;
  const words = quote.split(' ');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (wordsRef.current.length > 0) {
        gsap.fromTo(
          wordsRef.current.filter(Boolean),
          { opacity: 0.18, y: 15 },
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
  }, [language]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-arctic-night overflow-hidden px-6 sm:px-8 py-24"
    >
      {/* Background architectural image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=2000&q=80"
          alt="Fachada moderna de cristal y arquitectura corporativa sobria"
          className="w-full h-full object-cover object-center filter grayscale opacity-25 contrast-125"
        />
        {/* Dark #111827 gradient overlay for maximum readability and mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-arctic-night via-arctic-night/85 to-arctic-night/95" />
      </div>

      {/* Decorative vertical accent mark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-arctic-accent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        <div className="font-mono text-xs uppercase tracking-widest text-arctic-accent font-semibold mb-10">
          {t.manifesto.tag}
        </div>

        {/* Central Quote: Large Lora Italic */}
        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-serif italic text-white font-normal leading-[1.25] tracking-tight mb-12">
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
        <div className="manifesto-byline flex items-center justify-center gap-3 font-mono text-xs sm:text-sm text-white/60 tracking-wider">
          <span className="w-6 h-[1px] bg-white/20" />
          <span className="text-white font-medium">Santiago Chamorro</span>
          <span className="text-arctic-accent">·</span>
          <span>{t.manifesto.byline}</span>
          <span className="w-6 h-[1px] bg-white/20" />
        </div>

      </div>
    </section>
  );
}
