import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, CheckCircle2, Zap, Clock, ShieldAlert } from 'lucide-react';
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
      // Counter 1: +3
      const count1 = { val: 0 };
      gsap.to(count1, {
        val: 3,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (num1Ref.current) num1Ref.current.textContent = `+${Math.floor(count1.val)}`;
        },
      });

      // Counter 2: +35%
      const count2 = { val: 0 };
      gsap.to(count2, {
        val: 35,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (num2Ref.current) num2Ref.current.textContent = `+${Math.floor(count2.val)}%`;
        },
      });

      // Counter 3: 82%
      const count3 = { val: 0 };
      gsap.to(count3, {
        val: 82,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (num3Ref.current) num3Ref.current.textContent = `${Math.floor(count3.val)}%`;
        },
      });

      // Counter 4: -15%
      const count4 = { val: 0 };
      gsap.to(count4, {
        val: 15,
        duration: 1.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (num4Ref.current) num4Ref.current.textContent = `-${Math.floor(count4.val)}%`;
        },
      });

      // Entrance animation for cards
      gsap.fromTo(
        '.metric-bento-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
  }, []);

  const metricsData = [
    {
      ref: num1Ref,
      defaultVal: '+3',
      title: t.metrics?.m1Title || 'Años de Experiencia',
      desc: t.metrics?.m1Desc || 'Diseñando y manteniendo servicios y APIs en entornos corporativos ágiles.',
      badge: 'TRAYECTORIA',
      color: 'blue',
      gradient: 'from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400',
    },
    {
      ref: num2Ref,
      defaultVal: '+35%',
      title: t.metrics?.m2Title || 'Tiempos de Respuesta',
      desc: t.metrics?.m2Desc || 'Optimización con Spring WebFlux en microservicios corporativos SURA.',
      badge: 'ALTA CONCURRENCIA',
      color: 'emerald',
      gradient: 'from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400',
    },
    {
      ref: num3Ref,
      defaultVal: '82%',
      title: t.metrics?.m3Title || 'Cobertura de Pruebas',
      desc: t.metrics?.m3Desc || 'Elevada desde 62% con JUnit y Mockito para máxima estabilidad en producción.',
      badge: 'CALIDAD DE CÓDIGO',
      color: 'purple',
      gradient: 'from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400',
    },
    {
      ref: num4Ref,
      defaultVal: '-15%',
      title: t.metrics?.m4Title || 'Tiempo de Despliegue',
      desc: t.metrics?.m4Desc || 'Logrado tras migración arquitectónica a Java bajo Arquitectura Hexagonal.',
      badge: 'OPTIMIZACIÓN DEPLOY',
      color: 'amber',
      gradient: 'from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-slate-50 dark:bg-dark-bg border-b border-slate-200/80 dark:border-dark-border/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Tag */}
        <div className="text-center mb-14">
          <span className="font-mono text-xs font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase bg-brand-50 dark:bg-brand-950/40 px-3.5 py-1.5 rounded-full border border-brand-200 dark:border-brand-500/30 inline-flex items-center gap-2">
            <span>{t.metrics?.tag || '04 / MÉTRICAS DE IMPACTO VERIFICABLE'}</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mt-4">
            {language === 'en' ? 'Engineering outcomes that speak' : 'Resultados de ingeniería medibles'}{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-purple dark:from-brand-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {language === 'en' ? 'in production.' : 'en producción.'}
            </span>
          </h2>
        </div>

        {/* 4 Bento Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((m, idx) => (
            <div
              key={idx}
              className="metric-bento-card bento-card spotlight-card p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                  {m.badge}
                </span>

                {/* Big Animated Number */}
                <div
                  ref={m.ref}
                  className={`font-heading text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent mb-3`}
                >
                  {m.defaultVal}
                </div>

                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-2">
                  {m.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-3 border-t border-slate-100 dark:border-dark-border/60">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
