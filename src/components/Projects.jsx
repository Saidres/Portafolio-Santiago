import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, 
  Terminal, 
  Layers, 
  Sparkles, 
  ExternalLink,
  Code2,
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import projectsData from '../data/projects.json';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ projects = projectsData }) {
  const sectionRef = useRef(null);
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const getLocalized = (field) => {
    if (typeof field === 'object' && field !== null) {
      return field[language] || field.es || '';
    }
    return field || '';
  };

  const categories = [
    { id: 'all', label: language === 'en' ? 'All Projects' : 'Todos los Proyectos' },
    { id: 'java', label: 'Java & Spring Boot' },
    { id: 'ai', label: 'IA & Python' },
    { id: 'microservices', label: 'Microservicios' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'java') {
      return p.technologies.some((tech) => tech.toLowerCase().includes('java') || tech.toLowerCase().includes('spring'));
    }
    if (activeFilter === 'ai') {
      return p.technologies.some((tech) => tech.toLowerCase().includes('llama') || tech.toLowerCase().includes('python'));
    }
    if (activeFilter === 'microservices') {
      return p.technologies.some((tech) => tech.toLowerCase().includes('microservicios') || tech.toLowerCase().includes('hexagonal') || tech.toLowerCase().includes('rest'));
    }
    return true;
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-bento-card',
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
  }, [activeFilter]);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50/50 dark:bg-dark-bg border-b border-slate-200/80 dark:border-dark-border/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase bg-brand-50 dark:bg-brand-950/40 px-3.5 py-1.5 rounded-full border border-brand-200 dark:border-brand-500/30 inline-flex items-center gap-2">
              <span>{t.projects?.tag || '03 / PROYECTOS & ARQUITECTURA'}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mt-4">
              {t.projects?.title || 'Sistemas construidos para'}{' '}
              <span className="bg-gradient-to-r from-brand-600 to-brand-purple dark:from-brand-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {t.projects?.titleHighlight || 'durar & escalar.'}
              </span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-dark-surface rounded-xl font-mono text-xs self-start md:self-auto border border-slate-200/60 dark:border-dark-border">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-white dark:bg-brand-600 text-slate-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={project.id}
                className={`project-bento-card bento-card spotlight-card p-6 sm:p-8 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top bar: Company & Category */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 dark:border-dark-border/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-500" />
                      <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
                        {project.company}
                      </span>
                    </div>
                    <span className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-dark-border">
                      {getLocalized(project.category)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {getLocalized(project.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {getLocalized(project.description)}
                  </p>
                </div>

                <div>
                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-dark-border/60 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-dark-surface border border-slate-200/70 dark:border-dark-border text-[11px] font-mono text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.repositoryUrl || 'https://github.com/Saidres'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{language === 'en' ? 'Inspect Repository' : 'Ver Repositorio'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <span className="font-mono text-[10px] text-slate-400">
                      {project.company.includes('SURA') ? 'Corporate Microservice' : 'Production System'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
