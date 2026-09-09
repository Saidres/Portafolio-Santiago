import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
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
      highlights: [
        'Desarrollo de chatbot con Llama 3.2 3B para consulta de inventario en lenguaje natural a solicitud del negocio.',
        'Integración con sistemas internos existentes para reflejar inventario real y sincronizado en tiempo real.',
        'Diseño y ajuste de prompts del modelo para máxima precisión ante diversas modalidades de consulta.',
      ],
      tags: ['Llama 3.2 3B', 'Python', 'APIs REST', 'Prompt Engineering', 'Integración'],
      badge: 'IA APLICADA',
    },
    {
      company: 'Seguros SURA',
      role: 'Ingeniero de Software Backend',
      period: '02/2025 – 02/2026',
      location: 'Medellín (Remoto)',
      summary: 'Migración arquitectónica, desarrollo reactivo de alta concurrencia y aumento de cobertura de calidad en servicios corporativos.',
      highlights: [
        'Migración de microservicios de Scala a Java bajo Arquitectura Hexagonal, reduciendo tiempos de despliegue en un 15%.',
        'Implementación de servicios reactivos con Spring WebFlux, mejorando hasta 35% los tiempos de respuesta en alta concurrencia.',
        'Aumento de la cobertura de pruebas automatizadas del 62% al 82% mediante JUnit y Mockito.',
        'Diseño de APIs REST para integración de sistemas internos y pipelines CI/CD en Azure DevOps.',
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
      highlights: [
        'Administración y optimización de bases de datos PostgreSQL y MySQL para plataformas en producción.',
        'Implementación de mecanismos de autenticación y control de acceso reforzando la seguridad.',
        'Integración de sistemas vía APIs REST y soporte técnico con resolución de incidencias en ambientes productivos.',
      ],
      tags: ['PostgreSQL', 'MySQL', 'APIs REST', 'Seguridad', 'Automatización'],
      badge: 'PRODUCCIÓN',
    },
    {
      company: 'Desarrollador Web Freelance',
      role: 'Redinfoco · KeySafe · Academix',
      period: '02/2023 – 02/2024',
      location: 'Pasto, Colombia',
      summary: 'Diseño de aplicaciones web, APIs REST y modelado de datos a medida para clientes independientes.',
      highlights: [
        'Desarrollo de aplicaciones web y APIs REST con Django, Python y PostgreSQL.',
        'Diseño de paneles administrativos, autenticación, autorización y administración de usuarios.',
        'Modelado de bases de datos relacionales y automatización de procesos empresariales.',
      ],
      tags: ['Python', 'Django', 'PostgreSQL', 'Modelado Relacional'],
      badge: 'ARQUITECTURA WEB',
    },
  ],
  en: [
    {
      company: 'Servitec E.D.S',
      role: 'Software Engineer — AI Inventory Optimization Project',
      period: '04/2026 – 06/2026',
      location: 'Pasto, Colombia',
      summary: 'Development and integration of an AI chatbot using the Llama 3.2 3B model for real-time inventory queries in natural language.',
      highlights: [
        'Built an AI chatbot with Llama 3.2 3B to query company inventory using natural language, accelerating product search.',
        'Integrated the chatbot with legacy internal databases ensuring real-time synchronized stock data.',
        'Engineered model prompt templates to enhance response precision and context relevance across query variations.',
      ],
      tags: ['Llama 3.2 3B', 'Python', 'REST APIs', 'Prompt Engineering', 'Integration'],
      badge: 'APPLIED AI',
    },
    {
      company: 'Seguros SURA',
      role: 'Backend Software Engineer',
      period: '02/2025 – 02/2026',
      location: 'Medellin (Remote)',
      summary: 'Architectural migration, high-concurrency reactive microservices, and test coverage scaling across enterprise platforms.',
      highlights: [
        'Migrated microservices from Scala to Java under Hexagonal Architecture, cutting deployment time by 15%.',
        'Implemented reactive services with Spring WebFlux, boosting response times by up to 35% in high-concurrency scenarios.',
        'Elevated automated unit/integration test coverage from 62% to 82% using JUnit and Mockito.',
        'Designed REST APIs for corporate systems integration and automated CI/CD pipelines in Azure DevOps.',
      ],
      tags: ['Java', 'Spring Boot', 'WebFlux', 'Hexagonal Architecture', 'JUnit', 'Mockito', 'Azure DevOps'],
      badge: 'HIGH CONCURRENCY',
    },
    {
      company: 'Servitec E.D.S',
      role: 'Software Engineer',
      period: '02/2024 – 02/2025',
      location: 'Pasto, Colombia',
      summary: 'Production relational database administration, authentication mechanisms, and internal workflow automation.',
      highlights: [
        'Administered and optimized PostgreSQL and MySQL databases for production business platforms.',
        'Implemented authentication mechanisms and role-based access control, strengthening application security.',
        'Integrated systems via REST APIs and resolved technical incidents in production database environments.',
      ],
      tags: ['PostgreSQL', 'MySQL', 'REST APIs', 'Security', 'Automation'],
      badge: 'PRODUCTION',
    },
    {
      company: 'Freelance Web Developer',
      role: 'Redinfoco · KeySafe · Academix',
      period: '02/2023 – 02/2024',
      location: 'Pasto, Colombia',
      summary: 'Design and deployment of web applications, REST APIs, and custom relational schemas for private clients.',
      highlights: [
        'Engineered web applications and REST APIs using Django, Python, and PostgreSQL.',
        'Built administrative dashboards, user authorization flows, and access control systems.',
        'Modeled relational database schemas and automated key operational processes.',
      ],
      tags: ['Python', 'Django', 'PostgreSQL', 'Relational Modeling'],
      badge: 'WEB ARCHITECTURE',
    },
  ],
};

export default function Experience() {
  const sectionRef = useRef(null);
  const { language, t } = useLanguage();

  const experiences = experiencesData[language] || experiencesData.es;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.exp-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="py-24 md:py-32 bg-arctic-ice border-b border-arctic-night/5 relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="exp-header max-w-2xl mb-16">
          <div className="mb-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-arctic-accent uppercase bg-white px-3.5 py-1.5 rounded-full border border-arctic-night/10 inline-flex items-center gap-2">
              <span>{t.experience.tag}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-arctic-night tracking-tight mb-4">
            {t.experience.title}{' '}
            <span className="font-serif italic font-normal text-arctic-accent">
              {t.experience.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-arctic-night/70 font-normal leading-relaxed">
            {t.experience.description}
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="exp-card card-hover p-8 sm:p-10 rounded-4xl bg-white border border-arctic-night/10 shadow-subtle hover:shadow-soft flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-arctic-night/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-arctic-ice text-arctic-night flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5 text-arctic-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-arctic-night tracking-tight">
                        {exp.company}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-arctic-accent">
                        {exp.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-arctic-night/70 bg-arctic-ice px-3 py-1.5 rounded-full border border-arctic-night/10 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-arctic-accent" />
                      {exp.period}
                    </span>
                    <span className="font-mono text-xs text-arctic-night/50 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-arctic-accent bg-blue-50 px-2.5 py-1 rounded-md border border-arctic-accent/20">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-arctic-night/80 font-normal leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Detailed Highlights */}
                <ul className="space-y-3 mb-8">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-sm text-arctic-night/70 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-arctic-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies footer */}
              <div className="pt-6 border-t border-arctic-night/10 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-arctic-night/40 uppercase mr-2">
                  {t.experience.techLabel}
                </span>
                {exp.tags.map((tItem) => (
                  <span
                    key={tItem}
                    className="font-mono text-xs px-3 py-1 rounded-lg bg-arctic-ice text-arctic-night/80 border border-arctic-night/10"
                  >
                    {tItem}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
