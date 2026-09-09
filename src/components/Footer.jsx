import React from 'react';
import { Terminal, Shield, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  return (
    <footer className="bg-arctic-night text-white pt-16 pb-12 rounded-t-[3rem] sm:rounded-t-[4rem] border-t border-white/10 relative z-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Identity (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-arctic-accent text-white flex items-center justify-center font-mono text-xs font-semibold">
                SC
              </span>
              <span className="font-bold text-lg tracking-tight text-white">
                Santiago Chamorro
              </span>
            </div>
            <p className="text-xs text-white/60 font-mono tracking-wide">
              {language === 'es' ? 'Ingeniero de Software Backend · +3 Años Exp.' : 'Backend Software Engineer · +3 Yrs Exp.'}
            </p>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs font-normal">
              {t.footer.bio}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-white/40 pt-1">
              <MapPin className="w-3.5 h-3.5 text-arctic-accent" />
              <span>{t.footer.location}</span>
            </div>
          </div>

          {/* Column 2: Navegación (Cols 5-6) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 font-semibold mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-white/70">
              <li>
                <a href="#hero" className="hover:text-arctic-accent transition-colors">
                  {t.navbar.home}
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-arctic-accent transition-colors">
                  {t.navbar.about}
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-arctic-accent transition-colors">
                  {t.navbar.experience}
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-arctic-accent transition-colors">
                  {t.navbar.stack}
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-arctic-accent transition-colors">
                  {t.navbar.methodology}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-arctic-accent transition-colors">
                  {t.navbar.projects}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-arctic-accent transition-colors">
                  {t.navbar.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Áreas Técnicas (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 font-semibold mb-4">
              {t.footer.areasTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-arctic-accent" />
                <span>Java & Spring Boot</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-arctic-accent" />
                <span>Spring WebFlux (Reactivo)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-arctic-accent" />
                <span>Arquitectura Hexagonal & DDD</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-arctic-accent" />
                <span>PostgreSQL, MySQL & AWS</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-arctic-accent" />
                <span>Testing (JUnit / Mockito 82%)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto directo & Enlaces (Cols 10-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 font-semibold mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <a
                href="mailto:santiago.chamorro@outlook.com"
                className="block text-white/70 hover:text-arctic-accent transition-colors truncate"
              >
                santiago.chamorro@outlook.com
              </a>
              <a
                href="https://wa.me/573158528714"
                target="_blank"
                rel="noreferrer"
                className="block text-white/70 hover:text-emerald-400 transition-colors"
              >
                +57 315 852 8714
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-chamorro-634a42251"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/70 hover:text-blue-400 transition-colors pt-1"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Saidres"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/Saidres</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: System indicator, brand and copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-white/80 font-medium">{t.footer.activeSystem}</span>
            <span className="text-white/20">|</span>
            <span>Santiago Chamorro · Portfolio</span>
          </div>

          <div>
            <span>© {currentYear} Santiago Andrés Chamorro Pineda. {t.footer.rights}</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
