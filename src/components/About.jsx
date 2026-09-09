import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Shield, Network, ArrowDownRight, Layers, Workflow, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-animate-item',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.about-visual-node',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="py-24 md:py-32 bg-arctic-white border-b border-arctic-night/5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header Tag */}
        <div className="about-animate-item mb-12">
          <span className="font-mono text-xs font-semibold tracking-wider text-arctic-accent uppercase bg-arctic-ice px-3.5 py-1.5 rounded-full border border-arctic-accent/20 inline-flex items-center gap-2">
            <span>{t.about.tag}</span>
          </span>
        </div>

        {/* 50/50 Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="about-animate-item text-3xl sm:text-4xl lg:text-5xl font-bold text-arctic-night leading-[1.15] tracking-tight mb-8">
              {t.about.title}{' '}
              <span className="font-serif italic font-normal text-arctic-accent">
                {t.about.titleHighlight}
              </span>
            </h2>

            <div className="about-animate-item space-y-5 text-base sm:text-lg text-arctic-night/75 leading-relaxed font-normal">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Principles & Education Badges */}
            <div className="about-animate-item grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 mt-6 border-t border-arctic-night/10">
              <div className="p-3.5 rounded-2xl bg-arctic-ice border border-arctic-night/10">
                <span className="font-mono text-[10px] text-arctic-accent block mb-1 uppercase font-semibold">EDUCATION</span>
                <span className="text-xs font-bold text-arctic-night block">{t.about.eduDegree}</span>
                <span className="text-[11px] text-arctic-night/60">{t.about.eduInst}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-arctic-ice border border-arctic-night/10">
                <span className="font-mono text-[10px] text-arctic-accent block mb-1 uppercase font-semibold">AI CERTIFICATE</span>
                <span className="text-xs font-bold text-arctic-night block">{t.about.certTitle}</span>
                <span className="text-[11px] text-arctic-night/60">{t.about.certInst}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-arctic-ice border border-arctic-night/10">
                <span className="font-mono text-[10px] text-arctic-accent block mb-1 uppercase font-semibold">LANGUAGE</span>
                <span className="text-xs font-bold text-arctic-night block">{t.about.langTitle}</span>
                <span className="text-[11px] text-arctic-night/60">{t.about.langInst}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Systems Architecture Blueprint */}
          <div className="relative">
            <div className="rounded-4xl p-6 sm:p-8 bg-arctic-ice border border-arctic-night/10 shadow-soft relative overflow-hidden">
              
              {/* Subtle background technical grid */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #111827 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Blueprint Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 mb-6 border-b border-arctic-night/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-arctic-accent" />
                  <span className="font-mono text-xs font-semibold text-arctic-night tracking-wider uppercase">
                    {t.about.topologyTitle}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-arctic-night/50">
                  {t.about.topologySub}
                </span>
              </div>

              {/* Architectural Layers Visualization */}
              <div className="relative z-10 space-y-4">
                
                {/* Layer 1: Client & Ingress */}
                <div className="about-visual-node p-4 rounded-2xl bg-white border border-arctic-night/10 shadow-subtle flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-arctic-ice text-arctic-night">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-arctic-night">{t.about.layer1Title}</div>
                      <div className="font-mono text-[10px] text-arctic-night/60">{t.about.layer1Desc}</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-medium text-arctic-accent bg-arctic-ice px-2 py-1 rounded">
                    LAYER // 01
                  </span>
                </div>

                {/* Connecting visual flow */}
                <div className="flex justify-center -my-2 relative z-0">
                  <div className="w-[2px] h-4 bg-arctic-accent/40" />
                </div>

                {/* Layer 2: Core Domain Logic */}
                <div className="about-visual-node p-4 rounded-2xl bg-white border-2 border-arctic-accent/30 shadow-soft flex items-center justify-between relative">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-arctic-accent text-white">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-arctic-night flex items-center gap-2">
                        <span>{t.about.layer2Title}</span>
                        <span className="text-[10px] font-mono text-arctic-accent font-semibold px-1.5 py-0.5 rounded bg-arctic-ice">CORE</span>
                      </div>
                      <div className="font-mono text-[10px] text-arctic-night/60">{t.about.layer2Desc}</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-medium text-arctic-accent bg-arctic-ice px-2 py-1 rounded">
                    LAYER // 02
                  </span>
                </div>

                {/* Connecting visual flow */}
                <div className="flex justify-center -my-2 relative z-0">
                  <div className="w-[2px] h-4 bg-arctic-accent/40" />
                </div>

                {/* Layer 3: Persistence & Data Access */}
                <div className="about-visual-node p-4 rounded-2xl bg-white border border-arctic-night/10 shadow-subtle flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-arctic-ice text-arctic-night">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-arctic-night">{t.about.layer3Title}</div>
                      <div className="font-mono text-[10px] text-arctic-night/60">{t.about.layer3Desc}</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-medium text-arctic-accent bg-arctic-ice px-2 py-1 rounded">
                    LAYER // 03
                  </span>
                </div>

              </div>

              {/* Technical Footnote inside card */}
              <div className="relative z-10 mt-6 pt-4 border-t border-arctic-night/10 flex items-center justify-between font-mono text-[11px] text-arctic-night/60">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-arctic-accent" />
                  {t.about.footerArch}
                </span>
                <span>{t.about.footerTag}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
