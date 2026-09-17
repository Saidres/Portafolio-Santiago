import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-sans selection:bg-brand-500 selection:text-white overflow-x-hidden transition-colors duration-300">
          {/* Subtle noise texture */}
          <div className="noise-overlay" aria-hidden="true" />

          {/* 1. Navbar con selector de tema e idioma */}
          <Navbar />

          <main>
            {/* 2. Hero con botón directo a Proyectos */}
            <Hero />

            {/* 3. Descripción de mí y formación */}
            <About />

            {/* 4. Mis proyectos reales con filtros y enlaces a GitHub */}
            <Projects />

            {/* 5. Mi experiencia profesional y logros en producción */}
            <Experience />

            {/* 6. Canales directos de contacto y mensaje */}
            <Contact />
          </main>

          {/* 7. Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
