import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Check, X, Calendar, Layers, Terminal, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function MicroUIs() {
  const containerRef = useRef(null);
  const chartPathRef = useRef(null);
  const cursorRef = useRef(null);
  const { language, t } = useLanguage();
  const [activeDay, setActiveDay] = useState(2); // Mid-week default
  const [taskStatus, setTaskStatus] = useState(language === 'en' ? 'In progress' : 'En progreso');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Common card reveals
      gsap.fromTo(
        '.micro-ui-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // F7 - Chart line stroke-dashoffset draw
      if (chartPathRef.current) {
        const pathLength = chartPathRef.current.getTotalLength();
        gsap.set(chartPathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(chartPathRef.current, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#micro-f7',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });
      }

      // F9 - Comparer columns stagger
      const compTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#micro-f9',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      compTl
        .fromTo('#f9-col-before', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' })
        .fromTo('#f9-col-after', { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2');

      // F3 - Cursor animation loop
      if (cursorRef.current) {
        const cursorTl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });
        cursorTl
          .set(cursorRef.current, { x: 20, y: 30, opacity: 0 })
          .to(cursorRef.current, { opacity: 1, duration: 0.3 })
          .to(cursorRef.current, { x: 120, y: 55, duration: 0.8, ease: 'power2.inOut' })
          .call(() => setActiveDay(2))
          .to(cursorRef.current, { scale: 0.85, duration: 0.15, yoyo: true, repeat: 1 })
          .to(cursorRef.current, { x: 230, y: 110, duration: 0.9, ease: 'power2.inOut', delay: 0.4 })
          .call(() => setTaskStatus(language === 'en' ? 'Reviewed & Validated' : 'Revisado & Validado'))
          .to(cursorRef.current, { scale: 0.85, duration: 0.15, yoyo: true, repeat: 1 })
          .to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 1 })
          .call(() => {
            setActiveDay(1);
            setTaskStatus(language === 'en' ? 'In progress' : 'En progreso');
          });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="metodologia"
      ref={containerRef}
      className="py-24 md:py-32 bg-arctic-white border-b border-arctic-night/5 relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="micro-ui-header max-w-2xl mb-20">
          <div className="mb-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-arctic-accent uppercase bg-arctic-ice px-3.5 py-1.5 rounded-full border border-arctic-accent/20 inline-flex items-center gap-2">
              <span>{t.microUis.tag}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-arctic-night tracking-tight mb-4">
            {t.microUis.title}{' '}
            <span className="font-serif italic font-normal text-arctic-accent">
              {t.microUis.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-arctic-night/70 font-normal leading-relaxed">
            {t.microUis.description}
          </p>
        </div>

        {/* Micro-UIs Container */}
        <div className="space-y-16">

          {/* ==========================================================
              F7 — MINI DASHBOARD ("Backend medible")
             ========================================================== */}
          <div
            id="micro-f7"
            className="p-8 sm:p-10 rounded-4xl bg-arctic-ice border border-arctic-night/10 shadow-soft"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left text */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-arctic-accent" />
                  <span className="font-mono text-xs font-semibold text-arctic-accent uppercase tracking-wider">
                    {t.microUis.f7Tag}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-arctic-night tracking-tight mb-3">
                  {t.microUis.f7Title}
                </h3>
                <p className="text-base text-arctic-night/70 leading-relaxed font-normal mb-6">
                  {t.microUis.f7Desc}
                </p>

                {/* 3 Conceptual indicators */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-2xl bg-white border border-arctic-night/10 text-center">
                    <span className="font-mono text-[10px] text-arctic-night/50 block uppercase">API</span>
                    <span className="text-xs font-bold text-arctic-accent">HEALTHY</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-arctic-night/10 text-center">
                    <span className="font-mono text-[10px] text-arctic-night/50 block uppercase">LOGIC</span>
                    <span className="text-xs font-bold text-arctic-night">ISOLATED</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-arctic-night/10 text-center">
                    <span className="font-mono text-[10px] text-arctic-night/50 block uppercase">DATA</span>
                    <span className="text-xs font-bold text-emerald-600">CONSISTENT</span>
                  </div>
                </div>
              </div>

              {/* Right: Minimalist SVG Chart */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-arctic-night/10 shadow-subtle">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-arctic-night/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-arctic-accent animate-ping" />
                    <span className="font-mono text-xs font-medium text-arctic-night/70">
                      {t.microUis.f7ChartTitle}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-arctic-night/40">{t.microUis.f7ChartStatus}</span>
                </div>

                {/* SVG Line Graph */}
                <div className="relative h-44 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 160" fill="none">
                    {/* Horizontal grid lines */}
                    <line x1="0" y1="40" x2="500" y2="40" stroke="#111827" strokeOpacity="0.05" strokeDasharray="4 4" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="#111827" strokeOpacity="0.05" strokeDasharray="4 4" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#111827" strokeOpacity="0.05" strokeDasharray="4 4" />

                    {/* Gradient Fill under the curve */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1A56DB" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#1A56DB" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 130 C 70 120, 110 70, 170 85 C 230 100, 270 45, 340 50 C 400 55, 440 25, 500 30 L 500 160 L 0 160 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* Dynamic curve drawn via stroke-dashoffset */}
                    <path
                      ref={chartPathRef}
                      d="M 0 130 C 70 120, 110 70, 170 85 C 230 100, 270 45, 340 50 C 400 55, 440 25, 500 30"
                      stroke="#1A56DB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Checkpoints */}
                    <circle cx="170" cy="85" r="4" fill="#FFFFFF" stroke="#1A56DB" strokeWidth="2.5" />
                    <circle cx="340" cy="50" r="4" fill="#FFFFFF" stroke="#1A56DB" strokeWidth="2.5" />
                    <circle cx="500" cy="30" r="5" fill="#1A56DB" />
                  </svg>
                </div>

                <div className="flex justify-between items-center pt-3 mt-2 font-mono text-[10px] text-arctic-night/40 border-t border-arctic-night/5">
                  <span>{t.microUis.f7Cycle1}</span>
                  <span>{t.microUis.f7Cycle2}</span>
                  <span>{t.microUis.f7Cycle3}</span>
                </div>
              </div>

            </div>
          </div>

          {/* ==========================================================
              F9 — COMPARADOR DE COLUMNAS ("De complejidad a claridad")
             ========================================================== */}
          <div
            id="micro-f9"
            className="p-8 sm:p-10 rounded-4xl bg-white border border-arctic-night/10 shadow-soft"
          >
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-arctic-accent" />
                <span className="font-mono text-xs font-semibold text-arctic-accent uppercase tracking-wider">
                  {t.microUis.f9Tag}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-arctic-night tracking-tight mb-2">
                {t.microUis.f9Title}
              </h3>
              <p className="text-base text-arctic-night/70 leading-relaxed font-normal">
                {t.microUis.f9Desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Column 1: Sin arquitectura clara */}
              <div
                id="f9-col-before"
                className="p-6 sm:p-8 rounded-3xl bg-arctic-ice/60 border border-arctic-night/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-arctic-night/10">
                    <span className="text-sm font-bold text-arctic-night">{t.microUis.f9BeforeTitle}</span>
                    <span className="font-mono text-xs text-rose-500 font-semibold px-2 py-0.5 rounded bg-rose-50 border border-rose-200">
                      {t.microUis.f9BeforeBadge}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-arctic-night/70">
                      <div className="p-1 rounded-md bg-rose-100/70 text-rose-600 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="font-semibold text-arctic-night block">{t.microUis.f9Before1Title}</strong>
                        <span>{t.microUis.f9Before1Desc}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-arctic-night/70">
                      <div className="p-1 rounded-md bg-rose-100/70 text-rose-600 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="font-semibold text-arctic-night block">{t.microUis.f9Before2Title}</strong>
                        <span>{t.microUis.f9Before2Desc}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-arctic-night/70">
                      <div className="p-1 rounded-md bg-rose-100/70 text-rose-600 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="font-semibold text-arctic-night block">{t.microUis.f9Before3Title}</strong>
                        <span>{t.microUis.f9Before3Desc}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pt-5 mt-6 border-t border-arctic-night/10 font-mono text-[11px] text-arctic-night/40">
                  {t.microUis.f9BeforeFooter}
                </div>
              </div>

              {/* Column 2: Con una estructura clara */}
              <div
                id="f9-col-after"
                className="p-6 sm:p-8 rounded-3xl bg-arctic-ice border-2 border-arctic-accent/40 shadow-soft flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle blue accent illumination on top-right */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-arctic-accent/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-arctic-accent/20">
                    <span className="text-sm font-bold text-arctic-night">{t.microUis.f9AfterTitle}</span>
                    <span className="font-mono text-xs text-arctic-accent font-semibold px-2 py-0.5 rounded bg-blue-50 border border-arctic-accent/30">
                      {t.microUis.f9AfterBadge}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-arctic-night/85">
                      <div className="p-1 rounded-md bg-arctic-accent text-white mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="font-semibold text-arctic-night block">{t.microUis.f9After1Title}</strong>
                        <span>{t.microUis.f9After1Desc}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-arctic-night/85">
                      <div className="p-1 rounded-md bg-arctic-accent text-white mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="font-semibold text-arctic-night block">{t.microUis.f9After2Title}</strong>
                        <span>{t.microUis.f9After2Desc}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-arctic-night/85">
                      <div className="p-1 rounded-md bg-arctic-accent text-white mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="font-semibold text-arctic-night block">{t.microUis.f9After3Title}</strong>
                        <span>{t.microUis.f9After3Desc}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative z-10 pt-5 mt-6 border-t border-arctic-accent/20 font-mono text-[11px] text-arctic-accent font-semibold flex items-center justify-between">
                  <span>{t.microUis.f9AfterFooter1}</span>
                  <span>{t.microUis.f9AfterFooter2}</span>
                </div>
              </div>

            </div>
          </div>

          {/* ==========================================================
              F3 — CALENDARIO CURSOR ("Trabajo estructurado")
             ========================================================== */}
          <div
            id="micro-f3"
            className="p-8 sm:p-10 rounded-4xl bg-arctic-ice border border-arctic-night/10 shadow-soft"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left description */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-arctic-accent" />
                  <span className="font-mono text-xs font-semibold text-arctic-accent uppercase tracking-wider">
                    {t.microUis.f3Tag}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-arctic-night tracking-tight mb-3">
                  {t.microUis.f3Title}
                </h3>
                <p className="text-base text-arctic-night/70 leading-relaxed font-normal mb-6">
                  {t.microUis.f3Desc}
                </p>
                <div className="p-4 rounded-2xl bg-white border border-arctic-night/10">
                  <div className="font-mono text-[11px] text-arctic-night/50 uppercase mb-1">{t.microUis.f3PhaseLabel}</div>
                  <div className="text-sm font-semibold text-arctic-night flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-arctic-accent animate-pulse" />
                    <span>{taskStatus}</span>
                  </div>
                </div>
              </div>

              {/* Right interactive calendar container with animated cursor */}
              <div className="lg:col-span-7 relative bg-white p-6 sm:p-8 rounded-3xl border border-arctic-night/10 shadow-subtle overflow-hidden">
                
                {/* Top Calendar Controls */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-arctic-night/10">
                  <span className="text-xs font-bold text-arctic-night uppercase tracking-wider font-mono">
                    {t.microUis.f3SprintTitle}
                  </span>
                  <span className="font-mono text-[11px] text-arctic-accent bg-arctic-ice px-2.5 py-1 rounded-md border border-arctic-accent/20">
                    {t.microUis.f3SprintBadge}
                  </span>
                </div>

                {/* Days row */}
                <div className="grid grid-cols-5 gap-2.5 sm:gap-3 mb-6">
                  {(language === 'en' ? ['MON', 'TUE', 'WED', 'THU', 'FRI'] : ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE']).map((day, idx) => (
                    <div
                      key={day}
                      className={`p-3 rounded-2xl text-center border transition-all duration-300 ${
                        activeDay === idx
                          ? 'bg-arctic-accent text-white border-arctic-accent shadow-accent-glow'
                          : 'bg-arctic-ice/70 text-arctic-night border-arctic-night/10'
                      }`}
                    >
                      <div className="font-mono text-[10px] opacity-75">{day}</div>
                      <div className="font-bold text-sm sm:text-base mt-0.5">{`0${idx + 1}`}</div>
                    </div>
                  ))}
                </div>

                {/* Milestone Task Block */}
                <div className="p-4 rounded-2xl bg-arctic-ice border border-arctic-night/10 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-arctic-accent font-semibold block">
                      {t.microUis.f3MilestoneTag}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-arctic-night">
                      {t.microUis.f3MilestoneTitle}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-white text-arctic-night/80 border border-arctic-night/10">
                    STATUS: OK
                  </span>
                </div>

                {/* Animated SVG Cursor */}
                <div
                  ref={cursorRef}
                  className="absolute pointer-events-none z-30 drop-shadow-md"
                  style={{ transform: 'translate(20px, 30px)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.5 3L11.5 21L14.5 13.5L22 10.5L4.5 3Z"
                      fill="#111827"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
