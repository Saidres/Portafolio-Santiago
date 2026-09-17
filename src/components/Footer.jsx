import React from 'react';
import { Terminal, Shield, ArrowUpRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-950 dark:bg-[#060911] text-white pt-16 pb-12 border-t border-slate-800/80 relative z-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                SC
              </span>
              <span className="font-heading font-bold text-lg tracking-tight text-white">
                Santiago Chamorro
              </span>
            </div>

            <p className="text-xs text-brand-400 font-mono tracking-wide">
              {language === 'es' ? 'Ingeniero de Software Backend · +3 Años Exp.' : 'Backend Software Engineer · +3 Yrs Exp.'}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              {t.footer?.bio || 'Construcción de sistemas backend robustos, microservicios reactivos y arquitecturas desacopladas preparadas para alta concurrencia y evolución continua.'}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>{t.footer?.location || 'Pasto, Colombia · Modalidad Remota Corporativa'}</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
              {t.footer?.navTitle || 'NAVEGACIÓN'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300">
              <li>
                <a href="#hero" className="hover:text-brand-400 transition-colors">
                  {t.navbar.home}
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-brand-400 transition-colors">
                  {t.navbar.about}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-brand-400 transition-colors">
                  {t.navbar.projects}
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-brand-400 transition-colors">
                  {t.navbar.experience}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-brand-400 transition-colors">
                  {t.navbar.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture & Specialization Focus (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
              {language === 'en' ? 'SPECIALIZATION FOCUS' : 'ESPECIALIDAD // FOCO'}
            </h4>
            
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
              <div className="flex items-center justify-between text-[11px] font-semibold text-brand-400">
                <span>SPRING BOOT & WEBFLUX</span>
                <span>NON-BLOCKING</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {language === 'en'
                  ? 'Decoupled systems with Hexagonal Architecture, high-throughput reactive Netty workers, and 82% unit test coverage.'
                  : 'Sistemas desacoplados bajo Arquitectura Hexagonal, workers reactivos de alto rendimiento y 82% de cobertura de pruebas.'}
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                <span>DDD · TDD · CLEAN ARCH</span>
                <span className="text-emerald-400 font-semibold">99.99% STABLE</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} Santiago Andrés Chamorro Pineda · UI/UX Pro Max Edition.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Saidres"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/santiago-chamorro-634a42251"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
