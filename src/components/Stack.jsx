import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, Network, Cpu, Layers, Database, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const capabilitiesData = {
  es: [
    {
      id: '01',
      title: 'Java & Spring Ecosystem',
      description: 'Especializado en Java 17/21, Spring Boot, Spring WebFlux para servicios reactivos no bloqueantes y Spring Security. Construcción de APIs y lógica de alto rendimiento.',
      indicator: 'JAVA · SPRING BOOT · WEBFLUX · NETTY',
      skills: ['Java 17/21', 'Spring Boot 3', 'Spring WebFlux', 'Spring Security', 'Maven / Gradle'],
      icon: Server,
      featured: true,
      color: 'blue',
    },
    {
      id: '02',
      title: 'Arquitectura de Software',
      description: 'Diseño desacoplado bajo Arquitectura Hexagonal (Ports & Adapters), Clean Architecture, Domain Driven Design (DDD) y sistemas guiados por eventos.',
      indicator: 'HEXAGONAL · DDD · CLEAN ARCH · KAFKA',
      skills: ['Arquitectura Hexagonal', 'Clean Architecture', 'DDD', 'Apache Kafka'],
      icon: Layers,
      featured: false,
      color: 'purple',
    },
    {
      id: '03',
      title: 'Microservicios & Alta Concurrencia',
      description: 'Diseño e integración de servicios REST corporativos, serialización estricta, alta concurrencia y comunicación resiliente entre plataformas.',
      indicator: 'REST APIs · MICROSERVICIOS · CONTRATOS',
      skills: ['Microservicios', 'REST APIs', 'Integración Corporativa', 'Alta Concurrencia'],
      icon: Network,
      featured: false,
      color: 'emerald',
    },
    {
      id: '04',
      title: 'Bases de Datos & Tuning',
      description: 'Administración, modelado y optimización de bases de datos PostgreSQL y MySQL en producción con integridad transaccional ACID.',
      indicator: 'POSTGRESQL · MYSQL · SQL · OPTIMIZACIÓN',
      skills: ['PostgreSQL', 'MySQL', 'Modelado Relacional', 'Tuning de Queries', 'Índices'],
      icon: Database,
      featured: false,
      color: 'cyan',
    },
    {
      id: '05',
      title: 'Cloud, DevOps & CI/CD',
      description: 'Infraestructura cloud en AWS (EC2, S3, Lambda), contenedores Docker, gestión de ramas GitFlow y pipelines automatizados en Azure DevOps.',
      indicator: 'AWS · DOCKER · AZURE DEVOPS · GITFLOW',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Azure DevOps', 'Git / GitFlow'],
      icon: ShieldCheck,
      featured: false,
      color: 'amber',
    },
    {
      id: '06',
      title: 'Testing & IA Aplicada',
      description: 'Pruebas automatizadas con JUnit y Mockito (82% de cobertura alcanzada) e integración de modelos LLM (Llama 3.2 3B) para acelerar diagnósticos y flujos.',
      indicator: 'JUNIT · MOCKITO · LLAMA 3.2 3B · PROMPTS',
      skills: ['JUnit 5', 'Mockito (82% cov)', 'Llama 3.2 3B', 'Prompt Engineering'],
      icon: Cpu,
      featured: true,
      color: 'purple',
    },
  ],
  en: [
    {
      id: '01',
      title: 'Java & Spring Ecosystem',
      description: 'Specialized in Java 17/21, Spring Boot, Spring WebFlux for non-blocking reactive streams, and Spring Security. High-throughput backend logic.',
      indicator: 'JAVA · SPRING BOOT · WEBFLUX · NETTY',
      skills: ['Java 17/21', 'Spring Boot 3', 'Spring WebFlux', 'Spring Security', 'Maven / Gradle'],
      icon: Server,
      featured: true,
      color: 'blue',
    },
    {
      id: '02',
      title: 'Software Architecture',
      description: 'Decoupled system design using Hexagonal Architecture (Ports & Adapters), Clean Architecture, Domain Driven Design (DDD), and event-driven patterns.',
      indicator: 'HEXAGONAL · DDD · CLEAN ARCH · KAFKA',
      skills: ['Hexagonal Architecture', 'Clean Architecture', 'DDD', 'Apache Kafka'],
      icon: Layers,
      featured: false,
      color: 'purple',
    },
    {
      id: '03',
      title: 'Microservices & Concurrency',
      description: 'Design and integration of corporate REST APIs, strict schema contracts, high concurrency, and resilient cross-platform communication.',
      indicator: 'REST APIS · MICROSERVICES · CONTRACTS',
      skills: ['Microservices', 'REST APIs', 'Enterprise Integration', 'High Concurrency'],
      icon: Network,
      featured: false,
      color: 'emerald',
    },
    {
      id: '04',
      title: 'Databases & Query Tuning',
      description: 'Administration, modeling, and query optimization for PostgreSQL and MySQL in production environments with ACID transactional integrity.',
      indicator: 'POSTGRESQL · MYSQL · SQL · OPTIMIZATION',
      skills: ['PostgreSQL', 'MySQL', 'Relational Modeling', 'Query Tuning', 'Indexes'],
      icon: Database,
      featured: false,
      color: 'cyan',
    },
    {
      id: '05',
      title: 'Cloud, DevOps & CI/CD',
      description: 'Cloud infrastructure on AWS (EC2, S3, Lambda), Docker containerization, GitFlow branch management, and automated pipelines in Azure DevOps.',
      indicator: 'AWS · DOCKER · AZURE DEVOPS · GITFLOW',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Azure DevOps', 'Git / GitFlow'],
      icon: ShieldCheck,
      featured: false,
      color: 'amber',
    },
    {
      id: '06',
      title: 'Testing & Applied AI',
      description: 'Automated test suites with JUnit and Mockito (82% coverage achieved) and LLM model integration (Llama 3.2 3B) for fast search and diagnostics.',
      indicator: 'JUNIT · MOCKITO · LLAMA 3.2 3B · PROMPTS',
      skills: ['JUnit 5', 'Mockito (82% cov)', 'Llama 3.2 3B', 'Prompt Engineering'],
      icon: Cpu,
      featured: true,
      color: 'purple',
    },
  ],
};

export default function Stack() {
  const sectionRef = useRef(null);
  const { language, t } = useLanguage();
  const currentCapabilities = capabilitiesData[language] || capabilitiesData.es;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stack-bento-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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
      id="stack"
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50/50 dark:bg-dark-bg border-b border-slate-200/80 dark:border-dark-border/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase bg-brand-50 dark:bg-brand-950/40 px-3.5 py-1.5 rounded-full border border-brand-200 dark:border-brand-500/30 inline-flex items-center gap-2">
            <span>{t.stack.tag}</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mt-4">
            {t.stack.title}{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-purple dark:from-brand-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {t.stack.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mt-3">
            {t.stack.description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCapabilities.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="stack-bento-item bento-card spotlight-card p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-dark-border/60">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-slate-100/80 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300 hover:border-brand-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {item.indicator}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <span className="font-mono text-xs text-slate-400 dark:text-slate-500 tracking-wider">
            {t.stack.footerNote}
          </span>
        </div>

      </div>
    </section>
  );
}
