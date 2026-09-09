import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FolderGit2, ArrowUpRight, ExternalLink, Terminal, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import projectsData from '../data/projects.json';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ projects = projectsData }) {
  const sectionRef = useRef(null);
  const { language, t } = useLanguage();

  const getLocalized = (field) => {
    if (typeof field === 'object' && field !== null) {
      return field[language] || field.es || '';
    }
    return field || '';
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-header',
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
        '.projects-card-container',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const hasProjects = projects && projects.length > 0;

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-24 md:py-32 bg-arctic-ice border-b border-arctic-night/5 relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="projects-header max-w-2xl mb-16">
          <div className="mb-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-arctic-accent uppercase bg-white px-3.5 py-1.5 rounded-full border border-arctic-night/10 inline-flex items-center gap-2">
              <span>{t.projects.tag}</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-arctic-night tracking-tight mb-4">
            {t.projects.title}{' '}
            <span className="font-serif italic font-normal text-arctic-accent">
              {t.projects.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-arctic-night/70 font-normal leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        {/* Dynamic Content: Empty State vs Populated Projects */}
        <div className="projects-card-container">
          {!hasProjects ? (
            /* ESTADO VACÍO ELEGANTE, INTENCIONAL Y EDITORIAL */
            <div className="p-8 sm:p-14 rounded-5xl bg-white border border-arctic-night/10 shadow-soft relative overflow-hidden">
              
              {/* Subtle background technical grid */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #1A56DB 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left explanation */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-arctic-accent animate-pulse" />
                    <span className="font-mono text-xs font-semibold text-arctic-accent tracking-wider uppercase">
                      {t.projects.emptyBadge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-arctic-night tracking-tight mb-4">
                    {t.projects.emptyTitle}
                  </h3>

                  <p className="text-base text-arctic-night/70 leading-relaxed mb-8 max-w-lg font-normal">
                    {t.projects.emptyDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-arctic-night/60">
                    <span className="px-3 py-1.5 rounded-lg bg-arctic-ice border border-arctic-night/10">
                      {t.projects.tagRestful}
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-arctic-ice border border-arctic-night/10">
                      {t.projects.tagMaintainable}
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-arctic-ice border border-arctic-night/10">
                      {t.projects.tagCleanArch}
                    </span>
                  </div>
                </div>

                {/* Right Abstract Visual: Wireframe Pipeline Structure */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-3xl bg-arctic-ice border border-arctic-night/10 shadow-subtle space-y-3">
                    
                    <div className="flex items-center justify-between pb-3 border-b border-arctic-night/10 font-mono text-[11px] text-arctic-night/50">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-arctic-accent" />
                        {t.projects.cardRepo}
                      </span>
                      <span>PREVIEW</span>
                    </div>

                    {/* Placeholder architectural cards representing slots ready to be filled */}
                    <div className="p-3.5 rounded-2xl bg-white border border-dashed border-arctic-night/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-arctic-ice flex items-center justify-center text-arctic-night/50">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-arctic-night">{t.projects.project1Title}</div>
                          <div className="font-mono text-[10px] text-arctic-night/40">{t.projects.project1Status}</div>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] font-semibold text-arctic-accent">
                        {t.projects.cardPending}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/60 border border-dashed border-arctic-night/15 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-arctic-ice/60 flex items-center justify-center text-arctic-night/30">
                          <FolderGit2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-arctic-night/50">{t.projects.project2Title}</div>
                          <div className="font-mono text-[10px] text-arctic-night/30">{t.projects.project2Status}</div>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-arctic-night/40">
                        {t.projects.cardUpcoming}
                      </span>
                    </div>

                    <div className="pt-2 text-center">
                      <span className="font-mono text-[10px] text-arctic-night/50">
                        {t.projects.cardFooter}
                      </span>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* RENDERIZADO CUANDO SE AGREGUEN PROYECTOS REALES */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => {
                const localizedTitle = getLocalized(project.title);
                const localizedCategory = getLocalized(project.category);
                const localizedDesc = getLocalized(project.description);

                return (
                  <article
                    key={project.id || localizedTitle}
                    className="card-hover group rounded-4xl bg-white border border-arctic-night/10 overflow-hidden shadow-subtle flex flex-col justify-between"
                  >
                    <div>
                      {project.image && (
                        <div className="h-56 w-full overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={localizedTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-arctic-night/80 backdrop-blur-md text-white font-mono text-xs px-3 py-1 rounded-full">
                            {localizedCategory}
                          </div>
                        </div>
                      )}
                      <div className="p-7">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-xs text-arctic-accent uppercase font-semibold">
                            {localizedCategory}
                          </span>
                          {project.company && (
                            <span className="font-mono text-[10px] text-arctic-night/60 bg-arctic-ice px-2 py-0.5 rounded border border-arctic-night/10 font-medium">
                              {project.company}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-arctic-night mb-3">
                          {localizedTitle}
                        </h3>
                        <p className="text-sm text-arctic-night/70 leading-relaxed mb-6 font-normal">
                          {localizedDesc}
                        </p>
                        {project.technologies && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-arctic-ice text-arctic-night/80 border border-arctic-night/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-7 pt-0 flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-arctic-accent hover:underline"
                        >
                          {t.projects.viewDemo} <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.repositoryUrl && (
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-arctic-night/70 hover:text-arctic-night"
                        >
                          {t.projects.viewCode} <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
