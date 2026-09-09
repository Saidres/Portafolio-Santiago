import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, Network, Cpu, Layers, Database, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const capabilitiesData = {
  es: [
    {
      id: '01',
      title: 'Java & Spring Ecosystem',
      description: 'Especializado en Java, Spring Boot, WebFlux para servicios reactivos y Spring Security. Construcción de APIs y lógica de alto rendimiento.',
      indicator: 'JAVA · SPRING BOOT · WEBFLUX · SCALA',
      skills: ['Java', 'Spring Boot', 'Spring WebFlux', 'Spring Security', 'Scala'],
      icon: Server,
    },
    {
      id: '02',
      title: 'Arquitectura de Software',
      description: 'Diseño desacoplado bajo Arquitectura Hexagonal (Ports & Adapters), Clean Architecture, Domain Driven Design (DDD) y sistemas guiados por eventos.',
      indicator: 'HEXAGONAL · DDD · CLEAN ARCH · KAFKA',
      skills: ['Arquitectura Hexagonal', 'Clean Architecture', 'DDD', 'Apache Kafka'],
      icon: Layers,
    },
    {
      id: '03',
      title: 'Microservicios & APIs',
      description: 'Diseño e integración de servicios REST corporativos, serialización estricta, alta concurrencia y comunicación resiliente entre plataformas.',
      indicator: 'REST APIs · MICROSERVICIOS · CONTRATOS',
      skills: ['Microservicios', 'REST APIs', 'Integración Corporativa', 'Alta Concurrencia'],
      icon: Network,
    },
    {
      id: '04',
      title: 'Bases de Datos Relacionales',
      description: 'Administración, modelado y optimización de bases de datos PostgreSQL y MySQL en producción con integridad transaccional.',
      indicator: 'POSTGRESQL · MYSQL · SQL · OPTIMIZACIÓN',
      skills: ['PostgreSQL', 'MySQL', 'SQL', 'Modelado Relacional', 'Tuning de Queries'],
      icon: Database,
    },
    {
      id: '05',
      title: 'Cloud, DevOps & CI/CD',
      description: 'Infraestructura cloud en AWS (EC2, S3, Lambda), contenedores Docker, gestión de ramas GitFlow y pipelines automatizados en Azure DevOps.',
      indicator: 'AWS · DOCKER · AZURE DEVOPS · GITFLOW',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Azure DevOps', 'Git / GitFlow'],
      icon: ShieldCheck,
    },
    {
      id: '06',
      title: 'Testing & IA Aplicada',
      description: 'Pruebas automatizadas con JUnit y Mockito (cobertura alcanzada del 82%) e integración de modelos LLM (Llama 3.2 3B) para agilizar búsquedas y flujos.',
      indicator: 'JUNIT · MOCKITO · LLAMA 3.2 3B · PROMPTS',
      skills: ['JUnit', 'Mockito (82% cov)', 'Llama 3.2 3B', 'Prompt Engineering'],
      icon: Cpu,
    },
  ],
  en: [
    {
      id: '01',
      title: 'Java & Spring Ecosystem',
      description: 'Specialized in Java, Spring Boot, WebFlux for non-blocking reactive streams, and Spring Security. High-throughput backend logic.',
      indicator: 'JAVA · SPRING BOOT · WEBFLUX · SCALA',
      skills: ['Java', 'Spring Boot', 'Spring WebFlux', 'Spring Security', 'Scala'],
      icon: Server,
    },
    {
      id: '02',
      title: 'Software Architecture',
      description: 'Decoupled engineering under Hexagonal Architecture (Ports & Adapters), Clean Architecture, Domain-Driven Design (DDD), and Event-Driven Architecture.',
      indicator: 'HEXAGONAL · DDD · CLEAN ARCH · KAFKA',
      skills: ['Hexagonal Architecture', 'Clean Architecture', 'DDD', 'Apache Kafka'],
      icon: Layers,
    },
    {
      id: '03',
      title: 'Microservices & APIs',
      description: 'Corporate REST API engineering, strict serialization, low-latency concurrency, and resilient cross-platform contracts.',
      indicator: 'REST APIs · MICROSERVICES · CONTRACTS',
      skills: ['Microservices', 'REST APIs', 'Enterprise Integration', 'High Concurrency'],
      icon: Network,
    },
    {
      id: '04',
      title: 'Relational Databases',
      description: 'Production administration, schema design, and query optimization on PostgreSQL and MySQL with strict ACID consistency.',
      indicator: 'POSTGRESQL · MYSQL · SQL · TUNING',
      skills: ['PostgreSQL', 'MySQL', 'SQL', 'Relational Schemas', 'Query Tuning'],
      icon: Database,
    },
    {
      id: '05',
      title: 'Cloud, DevOps & CI/CD',
      description: 'Cloud deployments on AWS (EC2, S3, Lambda), Docker containerization, GitFlow branching models, and Azure DevOps pipelines.',
      indicator: 'AWS · DOCKER · AZURE DEVOPS · GITFLOW',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Azure DevOps', 'Git / GitFlow'],
      icon: ShieldCheck,
    },
    {
      id: '06',
      title: 'Testing & Applied AI',
      description: 'Automated test suites with JUnit and Mockito (up to 82% coverage) and integration of local LLM models (Llama 3.2 3B) for workflow acceleration.',
      indicator: 'JUNIT · MOCKITO · LLAMA 3.2 3B · PROMPTS',
      skills: ['JUnit', 'Mockito (82% cov)', 'Llama 3.2 3B', 'Prompt Engineering'],
      icon: Cpu,
    },
  ],
};

export default function Stack() {
  const sectionRef = useRef(null);
  const { language, t } = useLanguage();

  const capabilities = capabilitiesData[language] || capabilitiesData.es;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stack-header',
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
        '.stack-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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
      id="stack"
      ref={sectionRef}
      className="py-24 md:py-32 bg-arctic-ice border-b border-arctic-night/5 relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="stack-header max-w-2xl mb-16">
          <div className="mb-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-arctic-accent uppercase bg-white px-3.5 py-1.5 rounded-full border border-arctic-night/10 inline-flex items-center gap-2">
              <span>{t.stack.tag}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-arctic-night tracking-tight mb-4">
            {t.stack.title}{' '}
            <span className="font-serif italic font-normal text-arctic-accent">
              {t.stack.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-arctic-night/70 font-normal leading-relaxed">
            {t.stack.description}
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="stack-card card-hover group p-7 rounded-4xl bg-white border border-arctic-night/10 shadow-subtle hover:shadow-soft hover:border-arctic-accent/40 flex flex-col justify-between"
              >
                <div>
                  {/* Top line with Lucide Icon and Technical ID */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-arctic-ice text-arctic-night flex items-center justify-center group-hover:bg-arctic-accent group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-arctic-night/40 group-hover:text-arctic-accent transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-arctic-night tracking-tight mb-3 group-hover:text-arctic-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-arctic-night/70 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>

                  {/* Specific confirmed technology pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-arctic-ice text-arctic-night/80 border border-arctic-night/5 group-hover:border-arctic-accent/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Technical Badge */}
                <div className="pt-4 border-t border-arctic-night/5 flex items-center justify-between font-mono text-[11px] text-arctic-night/50">
                  <span className="tracking-wider uppercase">{item.indicator}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-arctic-night/20 group-hover:bg-arctic-accent transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Scalability note */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-arctic-night/50 tracking-wide">
            {t.stack.footerNote}
          </p>
        </div>

      </div>
    </section>
  );
}
