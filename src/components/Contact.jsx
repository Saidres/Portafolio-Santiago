import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles,
  User,
  Building2
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { PERSONAL_INFO as CONTACT_CONFIG } from '../config/portfolio';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const { language, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-bento-item',
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
  }, [language]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = t.contact.errorName;
    if (!formData.email.trim()) {
      errs.email = t.contact.errorEmail;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = t.contact.errorEmailInvalid;
    }
    if (!formData.message.trim()) {
      errs.message = t.contact.errorMessage;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 dark:bg-dark-bg border-b border-slate-200/80 dark:border-dark-border/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase bg-brand-50 dark:bg-brand-950/40 px-3.5 py-1.5 rounded-full border border-brand-200 dark:border-brand-500/30 inline-flex items-center gap-2">
            <span>{t.contact.tag}</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mt-4">
            {t.contact.headline || t.contact.title || (language === 'en' ? 'Have a project in' : '¿Tienes un proyecto en')}{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-purple dark:from-brand-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {t.contact.titleHighlight || (language === 'en' ? 'mind?' : 'mente?')}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mt-3">
            {t.contact.subheadline || t.contact.description}
          </p>
        </div>

        {/* Bento Grid: Contact Direct + Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Access Bento Cards (5 cols) */}
          <div className="contact-bento-item lg:col-span-5 space-y-5">
            
            {/* Direct Channels Card */}
            <div className="bento-card spotlight-card p-6 sm:p-7">
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-500" />
                <span>{language === 'en' ? 'Direct Channels' : 'Canales Directos'}</span>
              </h3>

              <div className="space-y-3.5">
                
                {/* Email with copy button */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">EMAIL</span>
                      <a 
                        href={`mailto:${CONTACT_CONFIG.email}`} 
                        className="text-xs font-semibold text-slate-900 dark:text-white hover:text-brand-500 truncate block"
                      >
                        {CONTACT_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-300 hover:text-brand-500 cursor-pointer shrink-0 transition-colors"
                    title="Copiar email"
                    aria-label="Copiar email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* WhatsApp */}
                <a
                  href={CONTACT_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border flex items-center justify-between gap-3 group hover:border-emerald-400/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">WHATSAPP / TEL</span>
                      <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {CONTACT_CONFIG.phone}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={CONTACT_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border flex items-center justify-between gap-3 group hover:border-brand-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">LINKEDIN</span>
                      <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                        santiago-chamorro-634a42251
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={CONTACT_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/60 dark:border-dark-border flex items-center justify-between gap-3 group hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">GITHUB</span>
                      <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                        github.com/Saidres
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                </a>

              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="bento-card p-6 bg-slate-100/70 dark:bg-dark-surface/70 border border-slate-200/70 dark:border-dark-border">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>ESTADO: DISPONIBLE</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-2">
                {CONTACT_CONFIG.availability}
              </p>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {CONTACT_CONFIG.location}
              </span>
            </div>

          </div>

          {/* Right Column: Web Message Form Bento Card (7 cols) */}
          <div className="contact-bento-item lg:col-span-7">
            <div className="bento-card spotlight-card p-7 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-dark-border/60">
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-500" />
                  <span>{t.contact.formTitle}</span>
                </h3>
                <span className="font-mono text-[10px] text-slate-400">
                  DIRECT BACKEND DISPATCH
                </span>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/30 text-center animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {t.contact.successMessage}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {language === 'en' ? 'I will get back to you shortly.' : 'Me pondré en contacto contigo a la mayor brevedad.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.nameLabel} *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.namePlaceholder}
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none transition-all ${
                            errors.name ? 'border-red-400' : 'border-slate-200 dark:border-dark-border'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <span className="text-[11px] text-red-500 font-mono mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.emailLabel} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPlaceholder}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none transition-all ${
                          errors.email ? 'border-red-400' : 'border-slate-200 dark:border-dark-border'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-500 font-mono mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.contact.companyPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.messageLabel} *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none resize-none transition-all ${
                        errors.message ? 'border-red-400' : 'border-slate-200 dark:border-dark-border'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-500 font-mono mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-magnetic w-full py-3.5 px-6 rounded-xl font-heading font-semibold text-sm bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 text-white shadow-accent-glow flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Enviando mensaje...</span>
                      </span>
                    ) : (
                      <>
                        <span>{t.contact.submitButton}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
