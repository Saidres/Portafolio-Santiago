import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Calendar, MapPin, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const experiencesData = {
  es: [
    {
      company: 'Servitec E.D.S',
      role: 'Ingeniero de Software — Proyecto de Optimización de Inventario con IA',
      period: '04/2026 – 06/2026',
      location: 'Pasto, Colombia',
      summary: 'Desarrollo e integración de un chatbot inteligente con el modelo Llama 3.2 3B para consulta de inventario en lenguaje natural.',
      impactMetric: 'IA APLICADA // LLAMA 3.2 3B',
      impactColor: 'purple',
      highlights: [
        'Desarrollo de un chatbot con el modelo Llama 3.2 3B para consultar el inventario de la empresa en lenguaje natural.',
        'Integración del chatbot con los sistemas internos existentes para que las respuestas reflejaran el inventario real y actualizado.',
        'Diseño y ajuste de prompts del modelo para mejorar la precisión y relevancia de las respuestas ante distintas formas de preguntar.',
      ],
      tags: ['Llama 3.2 3B', 'Python', 'APIs REST', 'Prompt Engineering', 'Integración'],
      badge: 'IA APLICADA',
    },
    {
      company: 'Seguros SURA',
      role: 'Ingeniero de Software Backend',
      period: '02/2025 – 02/2026',
      location: 'Medellín (Remoto Corporativo)',
      summary: 'Migración arquitectónica, microservicios reactivos en alta concurrencia y pruebas automatizadas en plataformas corporativas.',
      impactMetric: '+35% VELOCIDAD // 82% TESTS',
      impactColor: 'blue',
      highlights: [
        'Migración de microservicios de Scala a Java bajo Arquitectura Hexagonal, reduciendo el tiempo de despliegue en un 15%.',
        'Implementación de servicios reactivos con Spring WebFlux, mejorando hasta 35% los tiempos de respuesta en escenarios de alta concurrencia.',
        'Aumento de la cobertura de pruebas automatizadas del 62% al 82% utilizando JUnit y Mockito.',
        'Diseño e implementación de servicios REST para integración entre sistemas internos y gestión de incidencias en Azure DevOps.',
      ],
      tags: ['Java', 'Spring Boot', 'WebFlux', 'Arquitectura Hexagonal', 'JUnit', 'Mockito', 'Azure DevOps'],
      badge: 'ALTA CONCURRENCIA',
    },
    {
      company: 'Servitec E.D.S',
      role: 'Ingeniero de Software',
      period: '02/2024 – 02/2025',
      location: 'Pasto, Colombia',
      summary: 'Administración de bases de datos relacionales en producción, mecanismos de seguridad y automatización de procesos operativos.',
      impactMetric: 'ALTA DISPONIBILIDAD & DATOS',
      impactColor: 'emerald',
      highlights: [
        'Administración y optimización de bases de datos PostgreSQL y MySQL para plataformas en producción.',
        'Implementación de mecanismos de autenticación y control de acceso, reforzando la seguridad de las aplicaciones.',
        'Integración de sistemas mediante APIs REST y automatización de procesos internos con resolución de incidencias.',
      ],
      tags: ['PostgreSQL', 'MySQL', 'APIs REST', 'Seguridad', 'Automatización'],
      badge: 'PRODUCCIÓN',
    },
    {
      company: 'Desarrollador Web Freelance',
      role: 'Redinfoco · KeySafe · Academix',
      period: '02/2023 – 02/2024',
      location: 'Pasto, Colombia',
      summary: 'Desarrollo de aplicaciones web, APIs REST y modelado de datos a medida para clientes independientes.',
      impactMetric: 'APIs REST & MODELADO',
      impactColor: 'slate',
      highlights: [
        'Desarrollo de aplicaciones web y APIs REST con Django, Python y PostgreSQL para clientes independientes.',
        'Diseño de paneles administrativos y sistemas de gestión con autenticación y autorización.',
        'Modelado de bases de datos relacionales y automatización de procesos empresariales.',
      ],
      tags: ['Python', 'Django', 'PostgreSQL', 'Modelado Relacional', 'REST APIs'],
      badge: 'ARQUITECTURA WEB',
    },
  ],
  en: [
    {
      company: 'Servitec E.D.S',
      role: 'Software Engineer — AI Inventory Optimization Project',
      period: '04/2026 – 06/2026',
      location: 'Pasto, Colombia',
      summary: 'Development and integration of an intelligent chatbot using the Llama 3.2 3B model for natural language inventory querying.',
      impactMetric: 'APPLIED AI // LLAMA 3.2 3B',
      impactColor: 'purple',
      highlights: [
        'Built a chatbot powered by Llama 3.2 3B to query company inventory using natural language.',
        'Integrated the chatbot with existing internal systems for real-time inventory updates.',
        'Designed and tuned model prompts to maximize response precision across various query styles.',
      ],
      tags: ['Llama 3.2 3B', 'Python', 'REST APIs', 'Prompt Engineering', 'Integration'],
      badge: 'APPLIED AI',
    },
    {
      company: 'Seguros SURA',
      role: 'Backend Software Engineer',
      period: '02/2025 – 02/2026',
      location: 'Medellin (Corporate Remote)',
      summary: 'Architectural migration, reactive microservices in high concurrency, and automated testing on corporate platforms.',
      impactMetric: '+35% SPEED // 82% TESTS',
      impactColor: 'blue',
      highlights: [
        'Migrated microservices from Scala to Java under Hexagonal Architecture, cutting deployment time by 15%.',
        'Implemented reactive services with Spring WebFlux, improving response times up to 35% under high concurrency.',
        'Increased automated test coverage from 62% to 82% using JUnit and Mockito.',
        'Designed REST services for corporate platform integration and continuous deployment via Azure DevOps.',
      ],
      tags: ['Java', 'Spring Boot', 'WebFlux', 'Hexagonal Architecture', 'JUnit', 'Mockito', 'Azure DevOps'],
      badge: 'HIGH CONCURRENCY',
    },
    {
      company: 'Servitec E.D.S',
      role: 'Software Engineer',
      period: '02/2024 – 02/2025',
      location: 'Pasto, Colombia',
      summary: 'Administration of relational databases in production, security mechanisms, and automation of operational processes.',
      impactMetric: 'HIGH AVAILABILITY & DATA',
      impactColor: 'emerald',
      highlights: [
        'Administered and optimized PostgreSQL and MySQL databases for production platforms.',
        'Implemented authentication and access control mechanisms, strengthening application security.',
        'Integrated systems via REST APIs and automated internal processes with production incident support.',
      ],
      tags: ['PostgreSQL', 'MySQL', 'REST APIs', 'Security', 'Automation'],
      badge: 'PRODUCTION',
    },
    {
      company: 'Freelance Web Developer',
      role: 'Redinfoco · KeySafe · Academix',
      period: '02/2023 – 02/2024',
      location: 'Pasto, Colombia',
      summary: 'Development of web applications, REST APIs, and relational data modeling for independent clients.',
      impactMetric: 'REST APIS & MODELING',
      impactColor: 'slate',
      highlights: [
        'Developed web applications and REST APIs using Django, Python, and PostgreSQL.',
        'Designed administrative dashboards and management systems with auth & authorization.',
        'Relational database modeling and business process automation through custom solutions.',
      ],
      tags: ['Python', 'Django', 'PostgreSQL', 'Relational Modeling', 'REST APIs'],
      badge: 'WEB ARCHITECTURE',
    },
  ],
};

export default function Experience() {
  const sectionRef = useRef(null);
  const { language, t } = useLanguage();
  const currentExperiences = experiencesData[language] || experiencesData.es;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.experience-card',
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

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 dark:bg-dark-bg border-b border-slate-200/80 dark:border-dark-border/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase bg-brand-50 dark:bg-brand-950/40 px-3.5 py-1.5 rounded-full border border-brand-200 dark:border-brand-500/30 inline-flex items-center gap-2">
            <span>{t.experience.tag}</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mt-4">
            {t.experience.title}{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-purple dark:from-brand-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {t.experience.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mt-3">
            {t.experience.description}
          </p>
        </div>

        {/* Bento Timeline Grid */}
        <div className="space-y-6">
          {currentExperiences.map((exp, index) => {
            const isSura = exp.company === 'Seguros SURA';
            const isLlama = exp.badge === 'IA APLICADA' || exp.badge === 'APPLIED AI';

            return (
              <div
                key={`${exp.company}-${index}`}
                className={`experience-card bento-card spotlight-card p-6 sm:p-8 ${
                  isSura
                    ? 'border-brand-500/40 dark:border-brand-500/40 shadow-accent-glow/20'
                    : isLlama
                    ? 'border-purple-500/30 dark:border-purple-500/30'
                    : ''
                }`}
              >
                {/* Header Row: Company, Badge & Period */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100 dark:border-dark-border/60">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border flex items-center justify-center font-bold font-mono text-sm text-brand-600 dark:text-brand-400 shadow-2xs">
                      {exp.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{exp.company}</span>
                        {isSura && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-brand-700 dark:text-brand-300 font-semibold border border-brand-200 dark:border-brand-500/30">
                            CORPORATE
                          </span>
                        )}
                        {isLlama && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-500/30 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> LLM AGENT
                          </span>
                        )}
                      </h3>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 bg-slate-50 dark:bg-dark-surface px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-dark-border/60">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-slate-50 dark:bg-dark-surface px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-dark-border/60">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Summary & Impact Banner */}
                <div className="mb-6">
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                {/* Highlight Checkmarks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {exp.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50/70 dark:bg-dark-surface/50 border border-slate-200/60 dark:border-dark-border/50 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-dark-border/60 font-mono text-[11px]">
                  <span className="text-slate-400 mr-1">{t.experience.techLabel || 'TECH //'}</span>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 font-semibold shadow-2xs hover:border-brand-500/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
