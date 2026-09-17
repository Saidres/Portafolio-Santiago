import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Activity, 
  Check, 
  X, 
  Terminal, 
  Zap, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Play, 
  Cpu, 
  Database, 
  CheckCircle2, 
  RefreshCw 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function MicroUIs() {
  const containerRef = useRef(null);
  const { language, t } = useLanguage();

  // State for Simulator 1: WebFlux vs Blocking
  const [trafficLoad, setTrafficLoad] = useState('10k'); // '1k', '10k', '50k'
  const [isSimulatingLoad, setIsSimulatingLoad] = useState(false);

  // State for Simulator 2: Hexagonal step highlight
  const [activeHexStep, setActiveHexStep] = useState(2); // 1: Inbound, 2: Domain, 3: Outbound

  // State for Simulator 3: Llama 3.2 3B Chatbot
  const samplePrompts = [
    {
      query: language === 'en' ? 'Check inventory for Yamaha R3 oil filters' : 'Consultar stock de filtros de aceite Yamaha R3',
      response: language === 'en'
        ? 'Found 14 units of "Filtro Aceite HifloFiltro HF204 (Yamaha R3)". Location: Shelf B-04. Current Unit Price: $42,000 COP.'
        : 'Disponibles 14 unidades de "Filtro Aceite HifloFiltro HF204 (Yamaha R3)". Ubicación: Estante B-04. Precio: $42.000 COP.',
      tokens: 42,
      latency: '142ms',
    },
    {
      query: language === 'en' ? 'Brake pads stock for Pulsar NS 200' : 'Pastillas de freno para Pulsar NS 200',
      response: language === 'en'
        ? 'Found 8 sets of ceramic front brake pads for Bajaj Pulsar NS 200. Location: Shelf A-12. In-stock & ready for service.'
        : 'Disponibles 8 juegos de pastillas de freno delanteras cerámicas para Bajaj Pulsar NS 200. Ubicación: Estante A-12.',
      tokens: 48,
      latency: '158ms',
    },
    {
      query: language === 'en' ? 'Status of maintenance order #4820' : 'Estado de orden de servicio #4820',
      response: language === 'en'
        ? 'Order #4820: Status COMPLETED. Oil & filter replaced. Ready for customer pickup at counter 2.'
        : 'Orden #4820: Estado COMPLETADO. Cambio de aceite y filtro realizado. Listo para entrega en mostrador 2.',
      tokens: 38,
      latency: '124ms',
    },
  ];

  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.micro-ui-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSimulateLoad = (load) => {
    setTrafficLoad(load);
    setIsSimulatingLoad(true);
    setTimeout(() => setIsSimulatingLoad(false), 500);
  };

  const handleSelectPrompt = (index) => {
    setIsGenerating(true);
    setActivePromptIndex(index);
    setTimeout(() => setIsGenerating(false), 350);
  };

  return (
    <section
      id="metodologia"
      ref={containerRef}
      className="py-24 md:py-32 bg-slate-50 dark:bg-dark-bg border-b border-slate-200/80 dark:border-dark-border/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase bg-brand-50 dark:bg-brand-950/40 px-3.5 py-1.5 rounded-full border border-brand-200 dark:border-brand-500/30 inline-flex items-center gap-2">
            <span>{t.microUis.tag}</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mt-4">
            {t.microUis.title}{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-purple dark:from-brand-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {t.microUis.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mt-3">
            {t.microUis.description}
          </p>
        </div>

        {/* Bento Grid with 3 Interactive Lab Stations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LAB 1: Spring WebFlux vs Blocking MVC Throughput Telemetry (7 cols) */}
          <div className="micro-ui-card bento-card spotlight-card lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-dark-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-600 dark:text-brand-400 uppercase font-bold block">
                      {t.microUis.f7Tag}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {t.microUis.f7Title} (WebFlux vs MVC)
                    </h3>
                  </div>
                </div>

                {/* Load selector */}
                <div className="flex items-center bg-slate-100 dark:bg-dark-surface rounded-lg p-1 font-mono text-[11px]">
                  {['1k', '10k', '50k'].map((load) => (
                    <button
                      key={load}
                      type="button"
                      onClick={() => handleSimulateLoad(load)}
                      className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                        trafficLoad === load
                          ? 'bg-white dark:bg-brand-600 text-slate-900 dark:text-white shadow-2xs'
                          : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {load} req/s
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                {t.microUis.f7Desc}
              </p>

              {/* Reactive Visualizer Graph */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface/60 border border-slate-200/60 dark:border-dark-border/60 font-mono text-xs mb-4">
                
                {/* Reactive Spring WebFlux Line */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-2 font-semibold text-emerald-600 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Spring WebFlux (Netty EventLoop)</span>
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      {trafficLoad === '1k' ? '1.8ms' : trafficLoad === '10k' ? '3.2ms' : '6.4ms'} Latency
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 dark:bg-dark-border rounded-full overflow-hidden p-0.5">
                    <div 
                      className={`h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 ${
                        trafficLoad === '1k' ? 'w-[15%]' : trafficLoad === '10k' ? 'w-[25%]' : 'w-[40%]'
                      }`} 
                    />
                  </div>
                  <div className="flex justify-between text-[10.5px] text-slate-400 mt-1">
                    <span>Hilos ocupados: 8 workers fijos</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+35% Eficiencia SURA</span>
                  </div>
                </div>

                {/* Blocking Spring MVC Line */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-2 font-semibold text-slate-600 dark:text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span>Spring MVC Tradicional (Bloqueante)</span>
                    </span>
                    <span className="font-bold text-slate-500">
                      {trafficLoad === '1k' ? '14.2ms' : trafficLoad === '10k' ? '48.6ms' : '210.4ms'} Latency
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 dark:bg-dark-border rounded-full overflow-hidden p-0.5">
                    <div 
                      className={`h-full bg-gradient-to-r from-slate-400 to-red-400 rounded-full transition-all duration-500 ${
                        trafficLoad === '1k' ? 'w-[30%]' : trafficLoad === '10k' ? 'w-[75%]' : 'w-[98%]'
                      }`} 
                    />
                  </div>
                  <div className="flex justify-between text-[10.5px] text-slate-400 mt-1">
                    <span>Hilos bloqueados esperando I/O de base de datos</span>
                    <span className="text-red-500 font-semibold">Saturación a 50k req/s</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-dark-border/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Backpressure reactiva con Project Reactor</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Netty Non-blocking</span>
            </div>
          </div>

          {/* LAB 2: Hexagonal Architecture Flow Interactive (5 cols) */}
          <div className="micro-ui-card bento-card spotlight-card lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-dark-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-600 dark:text-brand-400 uppercase font-bold block">
                      {t.microUis.f9Tag || 'ARQUITECTURA'}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Puertos & Adaptadores
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5">
                {language === 'en'
                  ? 'Click through each layer to inspect how domain logic is shielded from external drivers.'
                  : 'Haz clic en cada capa para observar cómo la lógica de dominio se aísla de dependencias externas.'}
              </p>

              {/* 3 Interactive Hexagonal steps */}
              <div className="space-y-2.5 font-mono text-xs">
                
                <button
                  type="button"
                  onClick={() => setActiveHexStep(1)}
                  className={`w-full p-3 rounded-xl text-left transition-all cursor-pointer border ${
                    activeHexStep === 1
                      ? 'bg-blue-50/80 dark:bg-blue-950/40 border-brand-500 shadow-xs'
                      : 'bg-slate-50 dark:bg-dark-surface border-slate-200/60 dark:border-dark-border'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">01. Driving Adapter</span>
                    <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">REST Controller</span>
                  </div>
                  {activeHexStep === 1 && (
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                      Recibe HTTP, deserializa JSON y llama al puerto de entrada sin lógica de negocio.
                    </p>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveHexStep(2)}
                  className={`w-full p-3 rounded-xl text-left transition-all cursor-pointer border ${
                    activeHexStep === 2
                      ? 'bg-purple-50/80 dark:bg-purple-950/40 border-purple-500 shadow-xs'
                      : 'bg-slate-50 dark:bg-dark-surface border-slate-200/60 dark:border-dark-border'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">02. Domain Core (Hexagon)</span>
                    <span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">Reglas Puras</span>
                  </div>
                  {activeHexStep === 2 && (
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                      Entidades y casos de uso en Java puro. 0% acoplamiento a Spring, Hibernate o bases de datos.
                    </p>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveHexStep(3)}
                  className={`w-full p-3 rounded-xl text-left transition-all cursor-pointer border ${
                    activeHexStep === 3
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500 shadow-xs'
                      : 'bg-slate-50 dark:bg-dark-surface border-slate-200/60 dark:border-dark-border'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">03. Driven Adapter</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">PostgreSQL / Kafka</span>
                  </div>
                  {activeHexStep === 3 && (
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                      Implementa los puertos de salida para persistencia o mensajería asíncrona.
                    </p>
                  )}
                </button>

              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-dark-border/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Resultado: -15% tiempo deploy</span>
              <span className="text-brand-600 dark:text-brand-400 font-semibold">82% Cobertura</span>
            </div>
          </div>

          {/* LAB 3: Llama 3.2 3B Chatbot Console Simulator (Servitec E.D.S) (12 cols) */}
          <div className="micro-ui-card bento-card spotlight-card lg:col-span-12 p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100 dark:border-dark-border/60">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-purple-600 dark:text-purple-400 uppercase font-bold block">
                    {language === 'en' ? 'APPLIED AI DEMONSTRATOR' : 'DEMOSTRADOR IA APLICADA // SERVITEC E.D.S'}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                    Simulador Llama 3.2 3B & Prompt Engineering
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
                  MODEL: LLAMA-3.2-3B-INSTRUCT
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  PRECISIÓN: 99.4%
                </span>
              </div>
            </div>

            {/* Prompt Selector Pills */}
            <div className="mb-4">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 block mb-2">
                {language === 'en' ? 'Select a test prompt from Servitec operations:' : 'Selecciona una consulta operativa de prueba:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {samplePrompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPrompt(idx)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer border ${
                      activePromptIndex === idx
                        ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                        : 'bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border-slate-200 dark:border-dark-border hover:border-purple-400'
                    }`}
                  >
                    "{p.query}"
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Output Screen */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 dark:bg-[#080C14] text-slate-100 font-mono text-xs border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>servitec-inventory-agent // inference-stream</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>LATENCIA: {samplePrompts[activePromptIndex].latency}</span>
                  <span>TOKENS: {samplePrompts[activePromptIndex].tokens}</span>
                </div>
              </div>

              {/* User Prompt Display */}
              <div className="flex items-start gap-2 mb-3 text-slate-300">
                <span className="text-purple-400 font-bold select-none">&gt;</span>
                <span className="font-semibold">{samplePrompts[activePromptIndex].query}</span>
              </div>

              {/* AI Response Output */}
              <div className="flex items-start gap-2 text-emerald-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 leading-relaxed">
                <Sparkles className={`w-4 h-4 text-purple-400 shrink-0 mt-0.5 ${isGenerating ? 'animate-spin' : ''}`} />
                <div>
                  {isGenerating ? (
                    <span className="text-slate-400 animate-pulse">
                      {language === 'en' ? 'Consulting ERP database via prompt...' : 'Consultando base de datos ERP vía prompt...'}
                    </span>
                  ) : (
                    <span>{samplePrompts[activePromptIndex].response}</span>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
