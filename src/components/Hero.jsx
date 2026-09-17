import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ArrowDown, 
  Terminal, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Server, 
  CheckCircle2, 
  Sparkles,
  GitBranch,
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const containerRef = useRef(null);
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('runtime');
  const [simulatedPing, setSimulatedPing] = useState(3.2);
  const [requestCount, setRequestCount] = useState(14820);
  const [isPinging, setIsPinging] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-tag', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo('.hero-headline-line', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, '-=0.2')
        .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-actions', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-tech-pills', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-telemetry-card', { opacity: 0, scale: 0.95, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.8 }, '-=0.6');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Micro-interaction for simulated health check / ping
  const handleTriggerPing = () => {
    setIsPinging(true);
    setTimeout(() => {
      setSimulatedPing((prev) => +(2.8 + Math.random() * 0.9).toFixed(1));
      setRequestCount((prev) => prev + Math.floor(Math.random() * 120 + 30));
      setIsPinging(false);
    }, 400);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center bg-slate-50 dark:bg-dark-bg overflow-hidden border-b border-slate-200/80 dark:border-dark-border/60 transition-colors duration-300"
    >
      {/* Background ambient lighting effects (UI/UX Pro Max Aurora & Grid) */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-60" />
      <div className="absolute -top-32 -left-20 w-[450px] h-[450px] rounded-full bg-brand-500/10 dark:bg-brand-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] rounded-full bg-brand-purple/10 dark:bg-brand-purple/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Statement & High-Impact Typography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Pill */}
            <div className="hero-tag flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300/60 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-[11px] font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t.hero.tag}</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-dark-surface/80 px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-dark-border">
                {t.hero.expBadge}
              </span>
            </div>

            {/* Headline with Space Grotesk Typography */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 dark:text-white leading-[1.08] tracking-tight mb-6">
              <span className="hero-headline-line block">
                {t.hero.headline1}
              </span>
              <span className="hero-headline-line block text-slate-800 dark:text-slate-200">
                {t.hero.headline2}
              </span>
              <span className="hero-headline-line block bg-gradient-to-r from-brand-600 via-brand-purple to-brand-500 dark:from-brand-400 dark:via-brand-purple dark:to-cyan-400 bg-clip-text text-transparent">
                {t.hero.headline3}
              </span>
            </h1>

            {/* Subtitle / Positioning Statement */}
            <p className="hero-description text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-8 font-normal">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#contacto"
                className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 text-white shadow-accent-glow cursor-pointer transition-colors"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-white dark:bg-dark-surface text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-card border border-slate-200 dark:border-dark-border transition-colors cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Technical Stack Pills */}
            <div className="hero-tech-pills flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200/80 dark:border-dark-border/80 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-800 dark:text-slate-200 font-semibold shadow-2xs">
                ☕ JAVA 17/21
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-brand-600 dark:text-brand-400 font-semibold shadow-2xs">
                🌱 SPRING BOOT
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-emerald-600 dark:text-emerald-400 font-semibold shadow-2xs">
                ⚡ WEBFLUX REACTIVO
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-purple-600 dark:text-purple-400 font-semibold shadow-2xs">
                🔷 ARQ. HEXAGONAL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 font-semibold shadow-2xs">
                ☁️ AWS / AZURE
              </span>
            </div>

          </div>

          {/* Right Column: Live Backend Runtime Telemetry Bento Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="hero-telemetry-card bento-card spotlight-card w-full max-w-md p-5 bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl border border-slate-200/80 dark:border-dark-border shadow-elevated dark:shadow-bento-dark">
              
              {/* Card Header: Console style */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 dark:border-dark-border/70">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 dark:bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 dark:bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-slate-600 dark:text-slate-400 ml-1">
                    system-telemetry.jvm
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-300/40 dark:border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  UPTIME 99.99%
                </span>
              </div>

              {/* Sub-tabs: Telemetry vs Architecture */}
              <div className="flex items-center gap-1 p-1 mb-4 bg-slate-100 dark:bg-dark-surface rounded-xl font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('runtime')}
                  className={`flex-1 py-1.5 px-2.5 rounded-lg text-center font-medium transition-all cursor-pointer ${
                    activeTab === 'runtime'
                      ? 'bg-white dark:bg-dark-card text-brand-600 dark:text-brand-400 shadow-2xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  ⚡ Runtime Metrics
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('hexagonal')}
                  className={`flex-1 py-1.5 px-2.5 rounded-lg text-center font-medium transition-all cursor-pointer ${
                    activeTab === 'hexagonal'
                      ? 'bg-white dark:bg-dark-card text-brand-600 dark:text-brand-400 shadow-2xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  🔷 Hexagonal Ports
                </button>
              </div>

              {/* Tab 1: Runtime metrics */}
              {activeTab === 'runtime' && (
                <div className="space-y-3 font-mono text-xs">
                  {/* Metric 1: WebFlux Latency */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface/60 border border-slate-100 dark:border-dark-border/60">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        <span>Spring WebFlux Latency</span>
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        {simulatedPing}ms
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-dark-border rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[18%]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>Reactive Netty Worker</span>
                      <span className="text-emerald-600 dark:text-emerald-400">+35% faster vs MVC</span>
                    </div>
                  </div>

                  {/* Metric 2: Throughput / Req count */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface/60 border border-slate-100 dark:border-dark-border/60">
                    <div className="flex items-center justify-between mb-1">
                      <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                        <Activity className="w-3.5 h-3.5 text-brand-500" />
                        <span>Processed Ingress</span>
                      </span>
                      <span className="text-brand-600 dark:text-brand-400 font-bold">
                        {requestCount.toLocaleString()} reqs
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                      Non-blocking backpressure / Zero dropped packets
                    </span>
                  </div>

                  {/* Metric 3: Quality & Deploy */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface/60 border border-slate-100 dark:border-dark-border/60">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block mb-0.5">COVERAGE (JUNIT)</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-100">82%</span>
                      <span className="text-[9.5px] text-emerald-600 dark:text-emerald-400 block">SURA Platform</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface/60 border border-slate-100 dark:border-dark-border/60">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block mb-0.5">DEPLOY TIME</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-100">-15%</span>
                      <span className="text-[9.5px] text-brand-600 dark:text-brand-400 block">Hexagonal Refactor</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Hexagonal Architecture Quick Preview */}
              {activeTab === 'hexagonal' && (
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-500/20">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-blue-800 dark:text-blue-300 mb-1">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" /> Primary Adapter
                      </span>
                      <span>REST API / Kafka Consumer</span>
                    </div>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400">
                      Entrada HTTP/Eventos decoupled vía DTOs y validación.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-500/20">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-purple-800 dark:text-purple-300 mb-1">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" /> Core Domain Logic
                      </span>
                      <span>Zero Dependencies</span>
                    </div>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400">
                      Entidades puras y reglas de negocio aisladas de frameworks.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-500/20">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                      <span className="flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5" /> Secondary Adapter
                      </span>
                      <span>PostgreSQL / Azure / AWS</span>
                    </div>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-400">
                      Persistencia e integraciones intercambiables sin alterar el Core.
                    </p>
                  </div>
                </div>
              )}

              {/* Action: Send simulated request to pipeline */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-dark-border/70 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleTriggerPing}
                  disabled={isPinging}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-dark-surface hover:bg-slate-800 dark:hover:bg-dark-border text-white text-[11px] font-mono font-medium transition-colors cursor-pointer"
                >
                  <Sparkles className={`w-3.5 h-3.5 text-brand-400 ${isPinging ? 'animate-spin' : ''}`} />
                  <span>{isPinging ? 'Processing event...' : '⚡ Test Event Loop'}</span>
                </button>

                <span className="text-[10px] font-mono text-slate-400">
                  {language === 'en' ? 'Live Simulator' : 'Simulador en vivo'}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
