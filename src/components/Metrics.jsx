import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Metrics() {
  const containerRef = useRef(null);
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);
  const num4Ref = useRef(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Counter animation for +3
      const countObj1 = { val: 0 };
      gsap.to(countObj1, {
        val: 3,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (num1Ref.current) {
            num1Ref.current.textContent = `+${Math.floor(countObj1.val)}`;
          }
        },
      });

      // Counter animation for +35%
      const countObj2 = { val: 0 };
      gsap.to(countObj2, {
        val: 35,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (num2Ref.current) {
            num2Ref.current.textContent = `+${Math.floor(countObj2.val)}%`;
          }
        },
      });

      // Counter animation for 82%
      const countObj3 = { val: 0 };
      gsap.to(countObj3, {
        val: 82,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (num3Ref.current) {
            num3Ref.current.textContent = `${Math.floor(countObj3.val)}%`;
          }
        },
      });

      // Counter animation for -15%
      const countObj4 = { val: 0 };
      gsap.to(countObj4, {
        val: 15,
        duration: 1.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (num4Ref.current) {
            num4Ref.current.textContent = `-${Math.floor(countObj4.val)}%`;
          }
        },
      });

      gsap.fromTo(
        '.metric-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-arctic-white border-b border-arctic-night/5 relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section label */}
        <div className="text-center mb-14">
          <span className="font-mono text-xs font-semibold tracking-wider text-arctic-accent uppercase bg-arctic-ice px-4 py-1.5 rounded-full border border-arctic-night/10">
            {t.metrics.tag}
          </span>
        </div>

        {/* 4 Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Metric 1 */}
          <div className="metric-card card-hover p-7 rounded-4xl bg-arctic-ice border border-arctic-night/10 shadow-subtle flex flex-col justify-between">
            <div className="font-mono text-[11px] text-arctic-accent uppercase font-semibold mb-3 tracking-wider">
              {t.metrics.m1Tag}
            </div>
            <div
              ref={num1Ref}
              className="text-5xl sm:text-6xl font-serif italic text-arctic-night font-normal tracking-tight mb-3"
            >
              +3
            </div>
            <div>
              <div className="text-base font-bold text-arctic-night mb-1">{t.metrics.m1Title}</div>
              <p className="text-xs text-arctic-night/60 leading-relaxed font-normal">
                {t.metrics.m1Desc}
              </p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="metric-card card-hover p-7 rounded-4xl bg-arctic-ice border border-arctic-night/10 shadow-subtle flex flex-col justify-between">
            <div className="font-mono text-[11px] text-arctic-accent uppercase font-semibold mb-3 tracking-wider">
              {t.metrics.m2Tag}
            </div>
            <div
              ref={num2Ref}
              className="text-5xl sm:text-6xl font-serif italic text-arctic-accent font-normal tracking-tight mb-3"
            >
              +35%
            </div>
            <div>
              <div className="text-base font-bold text-arctic-night mb-1">{t.metrics.m2Title}</div>
              <p className="text-xs text-arctic-night/60 leading-relaxed font-normal">
                {t.metrics.m2Desc}
              </p>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="metric-card card-hover p-7 rounded-4xl bg-arctic-ice border border-arctic-night/10 shadow-subtle flex flex-col justify-between">
            <div className="font-mono text-[11px] text-arctic-accent uppercase font-semibold mb-3 tracking-wider">
              {t.metrics.m3Tag}
            </div>
            <div
              ref={num3Ref}
              className="text-5xl sm:text-6xl font-serif italic text-arctic-night font-normal tracking-tight mb-3"
            >
              82%
            </div>
            <div>
              <div className="text-base font-bold text-arctic-night mb-1">{t.metrics.m3Title}</div>
              <p className="text-xs text-arctic-night/60 leading-relaxed font-normal">
                {t.metrics.m3Desc}
              </p>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="metric-card card-hover p-7 rounded-4xl bg-arctic-ice border border-arctic-night/10 shadow-subtle flex flex-col justify-between">
            <div className="font-mono text-[11px] text-arctic-accent uppercase font-semibold mb-3 tracking-wider">
              {t.metrics.m4Tag}
            </div>
            <div
              ref={num4Ref}
              className="text-5xl sm:text-6xl font-serif italic text-emerald-600 font-normal tracking-tight mb-3"
            >
              -15%
            </div>
            <div>
              <div className="text-base font-bold text-arctic-night mb-1">{t.metrics.m4Title}</div>
              <p className="text-xs text-arctic-night/60 leading-relaxed font-normal">
                {t.metrics.m4Desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
