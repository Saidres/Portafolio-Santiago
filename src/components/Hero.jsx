import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ArrowDown, Database, Cpu, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      tl.fromTo(
        '.hero-tag',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(
        '.hero-headline-line',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
        '-=0.3'
      )
      .fromTo(
        '.hero-description',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        '.hero-actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.hero-tech-pills',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        '.hero-visual',
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 0.9, ease: 'power2.inOut' },
        '-=0.7'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 md:py-32 flex items-center justify-center bg-arctic-white overflow-hidden border-b border-arctic-night/5"
    >
      {/* Background subtle geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-arctic-accent blur-3xl" />
        <div className="absolute bottom-10 right-1/10 w-[500px] h-[500px] rounded-full bg-arctic-night blur-3xl" />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* 65% Left Column: Statement & Details (Cols 1-7 in 12-col grid) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Upper Tag */}
            <div className="hero-tag flex flex-wrap items-center gap-2.5 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arctic-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-arctic-accent"></span>
              </span>
              <span className="font-mono text-xs tracking-wider uppercase font-semibold text-arctic-night/70 bg-arctic-ice px-3 py-1 rounded-md border border-arctic-night/10">
                {t.hero.tag}
              </span>
              <span className="font-mono text-[11px] text-arctic-night/50 bg-arctic-ice/50 px-2.5 py-1 rounded-md border border-arctic-night/5">
                {t.hero.expBadge}
              </span>
            </div>

            {/* Headline H5 — Statement Personal */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-bold text-arctic-night leading-[1.08] tracking-tight mb-8">
              <span className="hero-headline-line block font-sans">
                {t.hero.headline1}
              </span>
              <span className="hero-headline-line block font-sans">
                {t.hero.headline2}
              </span>
              <span className="hero-headline-line block font-serif italic font-normal text-arctic-accent">
                {t.hero.headline3}
              </span>
            </h1>

            {/* Subtitle / Positioning Statement */}
            <p className="hero-description text-base sm:text-lg text-arctic-night/75 leading-relaxed max-w-xl mb-10 font-normal">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contacto"
                className="btn-magnetic inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-arctic-accent text-white shadow-accent-glow hover:bg-blue-700 transition-colors"
              >
                <span className="btn-slide-bg bg-blue-800" />
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              <a
                href="#experiencia"
                className="card-hover inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-arctic-ice text-arctic-night hover:bg-white border border-arctic-night/15 transition-colors"
              >
                {t.hero.ctaSecondary}
                <ArrowDown className="w-4 h-4 text-arctic-night/60" />
              </a>
            </div>

            {/* Technical tags */}
            <div className="hero-tech-pills flex flex-wrap items-center gap-2.5 pt-6 border-t border-arctic-night/10 font-mono text-[11px] text-arctic-night/70">
              <span className="px-2.5 py-1 rounded bg-arctic-ice border border-arctic-night/10 font-semibold text-arctic-night">
                JAVA
              </span>
              <span className="px-2.5 py-1 rounded bg-arctic-ice border border-arctic-night/10 font-semibold text-arctic-night">
                SPRING BOOT
              </span>
              <span className="px-2.5 py-1 rounded bg-arctic-ice border border-arctic-night/10 font-semibold text-arctic-night">
                WEBFLUX
              </span>
              <span className="px-2.5 py-1 rounded bg-arctic-ice border border-arctic-night/10 font-semibold text-arctic-accent">
                ARQ. HEXAGONAL
              </span>
              <span className="px-2.5 py-1 rounded bg-arctic-ice border border-arctic-night/10 font-semibold text-arctic-night">
                AWS
              </span>
            </div>

          </div>

          {/* 35% Right Column: Visual Abstract / Architectural Composition (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Decorative drawn vertical accent line */}
            <div
              ref={lineRef}
              className="hidden lg:block absolute -left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-arctic-accent via-arctic-accent/40 to-transparent"
              aria-hidden="true"
            />

            <div className="hero-visual w-full max-w-md relative">
              
              {/* Outer architectural frame */}
              <div className="relative rounded-4xl p-2 bg-gradient-to-b from-arctic-ice to-white border border-arctic-night/10 shadow-soft overflow-hidden">
                
                {/* Architectural Clean Glass Image */}
                <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                    alt="Estructura arquitectónica moderna de vidrio y acero"
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                  {/* Deep cool gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-arctic-night via-arctic-night/40 to-transparent opacity-80" />

                  {/* Architectural Blueprint Overlays */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                    
                    {/* Top Status Bar */}
                    <div className="flex items-center justify-between font-mono text-[11px] text-white/80 bg-arctic-night/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-arctic-accent" />
                        <span>{t.hero.runtimeTag}</span>
                      </div>
                      <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> STABLE
                      </span>
                    </div>

                    {/* Middle Architectural Fine Lines / Wireframe */}
                    <div className="my-auto py-4 font-mono text-[10px] space-y-2 text-white/70">
                      <div className="p-2.5 rounded-lg bg-arctic-night/60 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-white/90">
                          <Layers className="w-3 h-3 text-arctic-accent" /> {t.hero.reactiveTag}
                        </span>
                        <span className="text-arctic-accent font-semibold">{t.hero.reactiveMetric}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-arctic-night/60 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-white/90">
                          <Cpu className="w-3 h-3 text-arctic-accent" /> {t.hero.hexagonalTag}
                        </span>
                        <span className="text-emerald-400 font-semibold">{t.hero.hexagonalMetric}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-arctic-night/60 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-white/90">
                          <Database className="w-3 h-3 text-arctic-accent" /> {t.hero.junitTag}
                        </span>
                        <span className="text-white/90 font-semibold">{t.hero.junitMetric}</span>
                      </div>
                    </div>

                    {/* Bottom Technical Tag */}
                    <div className="font-mono text-[10px] text-white/60 tracking-wider flex items-center justify-between pt-2 border-t border-white/10">
                      <span>POSTGRESQL // MICROSERVICIOS</span>
                      <span className="text-arctic-accent font-semibold">AZURE DEVOPS / AWS</span>
                    </div>

                  </div>
                </div>

                {/* Subtitle card under visual */}
                <div className="p-4 bg-white/95 rounded-2xl mt-2 flex items-center justify-between border border-arctic-night/5">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-arctic-night/50 uppercase tracking-wider">
                      {t.hero.locationLabel}
                    </span>
                    <span className="text-xs font-semibold text-arctic-night">
                      {t.hero.locationValue}
                    </span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-arctic-accent" />
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
