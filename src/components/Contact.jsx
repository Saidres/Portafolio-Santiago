import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Mail, Phone, MapPin, Building2, User, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { PERSONAL_INFO as CONTACT_CONFIG } from '../config/portfolio';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const { language, t } = useLanguage();

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
        '.contact-fade-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
  }, [language]);

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
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulación de envío y preparación de mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 md:py-36 bg-arctic-night text-white relative overflow-hidden border-t border-white/5"
    >
      {/* Ambient background light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-arctic-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-arctic-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* ==========================================================
            CTA3 — CTA ÚNICO GRANDE
           ========================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="contact-fade-item mb-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-arctic-accent uppercase bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 inline-flex items-center gap-2">
              <span>{t.contact.tag}</span>
            </span>
          </div>

          <h2 className="contact-fade-item text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {t.contact.headline}
          </h2>

          <p className="contact-fade-item text-base sm:text-xl text-white/70 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.contact.subheadline}
          </p>

          <div className="contact-fade-item">
            <a
              href="#formulario"
              className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-arctic-accent text-white shadow-accent-glow hover:bg-blue-700 transition-colors"
            >
              <span className="btn-slide-bg bg-blue-800" />
              <span className="relative z-10 flex items-center gap-2">
                {t.contact.ctaButton}
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
            <div className="mt-4 font-mono text-xs text-white/50">
              {t.contact.availabilityNote}
            </div>
          </div>
        </div>

        {/* ==========================================================
            DIRECT CONTACT INFO CARDS
           ========================================================== */}
        <div className="contact-fade-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          
          {/* Email */}
          <a
            href={`mailto:${CONTACT_CONFIG.email}`}
            className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-arctic-accent/50 hover:bg-white/10 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-arctic-accent group-hover:bg-arctic-accent group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-arctic-accent transition-colors" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase block mb-1">{t.contact.emailLabel}</span>
              <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                {CONTACT_CONFIG.email}
              </span>
            </div>
          </a>

          {/* WhatsApp / Teléfono */}
          <a
            href={CONTACT_CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase block mb-1">{t.contact.whatsappLabel}</span>
              <span className="text-xs sm:text-sm font-semibold text-white block">
                {CONTACT_CONFIG.phone}
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={CONTACT_CONFIG.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase block mb-1">{t.contact.linkedinLabel}</span>
              <span className="text-xs sm:text-sm font-semibold text-white block">
                /in/santiago-chamorro
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={CONTACT_CONFIG.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/10 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-arctic-night transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase block mb-1">{t.contact.githubLabel}</span>
              <span className="text-xs sm:text-sm font-semibold text-white block">
                github.com/Saidres
              </span>
            </div>
          </a>

        </div>

        {/* ==========================================================
            FORMULARIO DE CONTACTO LIMPIO
           ========================================================== */}
        <div
          id="formulario"
          className="contact-fade-item max-w-2xl mx-auto rounded-5xl p-8 sm:p-12 bg-white/5 border border-white/10 backdrop-blur-lg shadow-elevated"
        >
          <div className="mb-8 pb-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-sm text-white/60 font-normal">
                {t.contact.formSub}
              </p>
            </div>
            <div className="hidden sm:flex w-10 h-10 rounded-xl bg-white/10 items-center justify-center text-arctic-accent">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">{t.contact.successTitle}</h4>
              <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                {t.contact.successMsg} <strong className="text-white">{CONTACT_CONFIG.email}</strong> {t.contact.successOr} <strong className="text-white">{CONTACT_CONFIG.phone}</strong>.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`mailto:${CONTACT_CONFIG.email}?subject=Contacto%20Proyecto%20Backend&body=Hola%20Santiago,%0D%0A%0D%0AMi%20nombre%20es%20${encodeURIComponent(formData.name)}.%0D%0A${encodeURIComponent(formData.message)}`}
                  className="px-5 py-2.5 rounded-xl bg-arctic-accent text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t.contact.openMailClient}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/10 text-white/80 text-xs font-semibold hover:bg-white/20 transition-colors"
                >
                  {t.contact.resetForm}
                </button>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-medium text-white/80 mb-2">
                  {t.contact.nameLabel}
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-arctic-accent focus:border-transparent transition-all ${
                      errors.name ? 'border-rose-400 ring-1 ring-rose-400' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  <User className="absolute right-4 top-3.5 w-4 h-4 text-white/30 pointer-events-none" />
                </div>
                {errors.name && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono font-medium text-white/80 mb-2">
                  {t.contact.emailFieldLabel}
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-arctic-accent focus:border-transparent transition-all ${
                      errors.email ? 'border-rose-400 ring-1 ring-rose-400' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  <Mail className="absolute right-4 top-3.5 w-4 h-4 text-white/30 pointer-events-none" />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Empresa (Opcional) */}
              <div>
                <label htmlFor="company" className="block text-xs font-mono font-medium text-white/80 mb-2">
                  {t.contact.companyLabel}
                </label>
                <div className="relative">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.contact.companyPlaceholder}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-arctic-accent focus:border-transparent transition-all"
                  />
                  <Building2 className="absolute right-4 top-3.5 w-4 h-4 text-white/30 pointer-events-none" />
                </div>
              </div>

              {/* Cuéntame sobre tu proyecto */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-white/80 mb-2">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className={`w-full px-4 py-3.5 rounded-2xl bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-arctic-accent focus:border-transparent transition-all resize-none ${
                    errors.message ? 'border-rose-400 ring-1 ring-rose-400' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Botón de Enviar */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-magnetic w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold bg-arctic-accent text-white shadow-accent-glow hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <span className="btn-slide-bg bg-blue-800" />
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <span>{t.contact.submittingButton}</span>
                    ) : (
                      <>
                        <span>{t.contact.submitButton}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 font-mono text-[10px] text-white/40">
                <MapPin className="w-3 h-3 text-arctic-accent" />
                <span>{t.contact.locationBadge}</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
