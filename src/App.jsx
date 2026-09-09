import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Stack from './components/Stack';
import MicroUIs from './components/MicroUIs';
import Projects from './components/Projects';
import Metrics from './components/Metrics';
import Manifesto from './components/Manifesto';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-arctic-white text-arctic-night font-sans selection:bg-arctic-accent selection:text-white overflow-x-hidden">
        {/* Procedural Subtle SVG Noise Texture Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* 1. Floating Island Navbar with Language Switcher */}
        <Navbar />

        <main>
          {/* 2. Hero — Statement Personal H5 */}
          <Hero />

          {/* 3. Sobre Mí — 01 / SOBRE MÍ */}
          <About />

          {/* 4. Trayectoria Profesional — Seguros SURA, Servitec, Freelance */}
          <Experience />

          {/* 5. Stack & Enfoque — Java, Spring Boot, WebFlux, Hexagonal, DBs, AWS */}
          <Stack />

          {/* 6, 7, 8. Micro-UIs: F7 Mini Dashboard, F9 Comparador, F3 Calendario Cursor */}
          <MicroUIs />

          {/* 9. Proyectos — Llama 3.2 3B, Microservicios Reactivos, Django APIs */}
          <Projects />

          {/* 10. Métricas de Impacto — SP4 (+3 años, +35% velocidad, 82% tests, -15% deploy) */}
          <Metrics />

          {/* 11. Manifiesto — M2 Cita Fullscreen */}
          <Manifesto />

          {/* 12. Contacto Directo & Formulario Web */}
          <Contact />
        </main>

        {/* 13. Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
