import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  Award, 
  Languages, 
  Layers, 
  Cpu, 
  Database, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const { t, language } = useLanguage();
  const [selectedLayer, setSelectedLayer] = useState('layer2');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-bento-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const architectureLayers = [
    {
      id: 'layer1',
      title: t.about.layer1Title,
      subtitle: 'HTTP / WebFlux / OpenAPI',
      desc: t.about.layer1Desc,
      icon: Layers,
      color: 'blue',
      badge: 'INGRESS',
      details: 'Filtros reactivos, validación de schemas DTO, sanitización y limitación de tasa.',
    },
    {
      id: 'layer2',
      title: t.about.layer2Title,
      subtitle: 'Pure Domain Logic & Ports',
      desc: t.about.layer2Desc,
      icon: Cpu,
      color: 'purple',
      badge: 'CORE DDD',
      details: 'Cero acoplamiento a frameworks. Pruebas unitarias ultrarrápidas con 82% cobertura en JUnit.',
    },
    {
      id: 'layer3',
      title: t.about.layer3Title,
      subtitle: 'PostgreSQL / AWS / Azure DevOps',
      desc: t.about.layer3Desc,
      icon: Database,
      color: 'emerald',
      badge: 'ADAPTERS',
      details: 'Pools de conexión optimizados, transaccionalidad ACID y observabilidad de métricas.',
    },
  ];

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50/50 dark:bg-dark-bg border-b border-slate-200/80 dark:border-dark-border/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header Tag */}
        <div className="mb-12">
          <span className="font-mono text-xs font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase bg-brand-50 dark:bg-brand-950/40 px-3.5 py-1.5 rounded-full border border-brand-200 dark:border-brand-500/30 inline-flex items-center gap-2">
            <span>{t.about.tag}</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mt-4 max-w-3xl">
            {t.about.title}{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-purple dark:from-brand-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {t.about.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Bento Box Grid (Apple & Vercel Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Core Bio & Mission (7 cols) */}
          <div className="about-bento-card bento-card spotlight-card lg:col-span-7 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-brand-600 dark:text-brand-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                <span>BACKEND ARCHITECTURE & HIGH CONCURRENCY</span>
              </div>
              <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </div>

            {/* Quick stats mini bar inside bio */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-dark-border/60 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60">
                <span className="text-[10px] text-slate-400 block uppercase">ENFOQUE</span>
                <span className="font-bold text-slate-800 dark:text-slate-100">Clean Code</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60">
                <span className="text-[10px] text-slate-400 block uppercase">ESTILO</span>
                <span className="font-bold text-slate-800 dark:text-slate-100">Hexagonal</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-400 block uppercase">METODOLOGÍA</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">TDD & DDD</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Academic & Professional Credentials (5 cols) */}
          <div className="about-bento-card bento-card spotlight-card lg:col-span-5 p-7 sm:p-8 flex flex-col justify-between">
            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand-500" />
              <span>{language === 'en' ? 'Verified Credentials' : 'Formación & Certificaciones'}</span>
            </h3>

            <div className="space-y-4">
              {/* Degree */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60 transition-transform duration-200 hover:scale-[1.01]">
                <div className="flex items-center justify-between font-mono text-[10px] text-brand-600 dark:text-brand-400 font-semibold mb-1">
                  <span>GRADO ACADÉMICO</span>
                  <span className="text-slate-400">2021 – 2025</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{t.about.eduDegree}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.about.eduInst}</p>
              </div>

              {/* AI Certification */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60 transition-transform duration-200 hover:scale-[1.01]">
                <div className="flex items-center justify-between font-mono text-[10px] text-purple-600 dark:text-purple-400 font-semibold mb-1">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> IA ESPECIALIZADA
                  </span>
                  <span className="text-slate-400">2026</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{t.about.certTitle}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.about.certInst}</p>
              </div>

              {/* English Certificate */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60 transition-transform duration-200 hover:scale-[1.01]">
                <div className="flex items-center justify-between font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                  <span className="flex items-center gap-1">
                    <Languages className="w-3 h-3" /> IDIOMA
                  </span>
                  <span className="text-slate-400">B1 MCER</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{t.about.langTitle}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.about.langInst}</p>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Interactive System Topology & Clean Architecture (12 cols) */}
          <div className="about-bento-card bento-card spotlight-card lg:col-span-12 p-7 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-100 dark:border-dark-border/60">
              <div>
                <span className="font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider block">
                  {t.about.topologyTitle}
                </span>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {t.about.topologySub}
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-dark-surface px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-dark-border/60 self-start md:self-auto">
                HEXAGONAL ARCHITECTURE VISUALIZER
              </span>
            </div>

            {/* Layer Selection Tabs / Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {architectureLayers.map((layer) => {
                const IconComponent = layer.icon;
                const isSelected = selectedLayer === layer.id;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setSelectedLayer(layer.id)}
                    className={`p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-brand-50/70 dark:bg-brand-950/40 border-brand-500 shadow-xs'
                        : 'bg-slate-50/70 dark:bg-dark-surface/70 border-slate-200/70 dark:border-dark-border/70 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-dark-card flex items-center justify-center shadow-xs">
                        <IconComponent className={`w-4 h-4 ${isSelected ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500'}`} />
                      </div>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/80 dark:bg-dark-card/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-dark-border/60">
                        {layer.badge}
                      </span>
                    </div>
                    <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">{layer.title}</h4>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">{layer.subtitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic details for selected layer */}
            {(() => {
              const active = architectureLayers.find((l) => l.id === selectedLayer);
              if (!active) return null;
              return (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>{active.title}:</strong> {active.details}
                    </span>
                  </div>
                  <span className="text-brand-600 dark:text-brand-400 font-semibold shrink-0">
                    DESACOPLADO & TESTEABLE
                  </span>
                </div>
              );
            })()}

          </div>

        </div>

      </div>
    </section>
  );
}
