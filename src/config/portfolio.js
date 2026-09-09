/**
 * Configuración centralizada del portfolio de Santiago Andrés Chamorro Pineda
 * Basado en la Hoja de Vida y trayectoria profesional verificada.
 */

export const PERSONAL_INFO = {
  fullName: 'Santiago Andrés Chamorro Pineda',
  shortName: 'Santiago Chamorro',
  initials: 'SC',
  title: 'Ingeniero de Software Backend',
  specialization: 'Java, Spring Boot, WebFlux & Arquitectura Hexagonal',
  experienceYears: '+3 años',
  email: 'santiago.chamorro@outlook.com',
  phone: '+57 315 852 8714',
  whatsappUrl: 'https://wa.me/573158528714',
  linkedinUrl: 'https://www.linkedin.com/in/santiago-chamorro-634a42251',
  githubUrl: 'https://github.com/Saidres',
  location: 'Pasto, Nariño, Colombia',
  availability: 'Disponible para oportunidades Backend y proyectos de alto impacto (Remoto / Presencial)',
  education: [
    {
      degree: 'Ingeniería de Software',
      institution: 'Universidad Cooperativa de Colombia, Pasto',
      period: '2021 – 2025',
    },
    {
      degree: 'Diseño de software y sistemas basados en IA',
      institution: 'DeepLearning.AI',
      period: '08/2026',
    },
    {
      degree: 'Certificado de Inglés B1 (MCER)',
      institution: 'Universidad de Nariño, Pasto',
      period: '08/2022',
    },
  ],
};

export const EXPERIENCES = [
  {
    company: 'Servitec E.D.S',
    role: 'Ingeniero de Software — Proyecto de Optimización de Inventario con IA',
    period: '04/2026 – 06/2026',
    location: 'Pasto, Colombia',
    type: 'Proyecto Especial',
    summary: 'Desarrollo e integración de un chatbot inteligente con el modelo Llama 3.2 3B para consulta de inventario en lenguaje natural.',
    highlights: [
      'Desarrollo de un chatbot con el modelo Llama 3.2 3B para consultar el inventario de la empresa en lenguaje natural, a solicitud del negocio.',
      'Integración del chatbot con los sistemas internos existentes para que las respuestas reflejaran el inventario real y actualizado.',
      'Diseño y ajuste de prompts del modelo para mejorar la precisión y relevancia de las respuestas ante distintas formas de preguntar.',
    ],
    tags: ['Llama 3.2 3B', 'Python', 'APIs REST', 'Prompt Engineering', 'Integración'],
    badge: 'IA APLICADA',
  },
  {
    company: 'Seguros SURA',
    role: 'Ingeniero de Software Backend',
    period: '02/2025 – 02/2026',
    location: 'Medellín (Remoto)',
    type: 'Corporativo',
    summary: 'Migración arquitectónica, microservicios reactivos en alta concurrencia y pruebas automatizadas en plataformas corporativas.',
    highlights: [
      'Migración de microservicios de Scala a Java bajo Arquitectura Hexagonal, reduciendo el tiempo de despliegue en un 15%.',
      'Implementación de servicios reactivos con Spring WebFlux, mejorando hasta 35% los tiempos de respuesta en escenarios de alta concurrencia.',
      'Aumento de la cobertura de pruebas automatizadas del 62% al 82% utilizando JUnit y Mockito.',
      'Diseño e implementación de servicios REST para integración entre sistemas internos de plataformas corporativas.',
      'Uso de herramientas de Inteligencia Artificial para análisis de arquitecturas y flujos, identificando cuellos de botella e ineficiencias.',
      'Gestión de incidencias técnicas en producción y despliegue continuo mediante Azure DevOps.',
    ],
    tags: ['Java', 'Spring Boot', 'WebFlux', 'Arquitectura Hexagonal', 'JUnit', 'Mockito', 'Azure DevOps'],
    badge: 'ALTA CONCURRENCIA',
  },
  {
    company: 'Servitec E.D.S',
    role: 'Ingeniero de Software',
    period: '02/2024 – 02/2025',
    location: 'Pasto, Colombia',
    type: 'Producción & Datos',
    summary: 'Administración de bases de datos relacionales en producción, mecanismos de seguridad y automatización de procesos operativos.',
    highlights: [
      'Administración y optimización de bases de datos PostgreSQL y MySQL para plataformas en producción.',
      'Implementación de mecanismos de autenticación y control de acceso, reforzando la seguridad de las aplicaciones.',
      'Integración de sistemas mediante APIs REST y automatización de procesos internos, mejorando la eficiencia operativa.',
      'Soporte técnico y resolución de incidencias relacionadas con aplicaciones y bases de datos en ambientes productivos.',
    ],
    tags: ['PostgreSQL', 'MySQL', 'APIs REST', 'Seguridad', 'Automatización'],
    badge: 'PRODUCCIÓN',
  },
  {
    company: 'Desarrollador Web Freelance',
    role: 'Redinfoco · KeySafe · Academix',
    period: '02/2023 – 02/2024',
    location: 'Pasto, Colombia',
    type: 'Independiente',
    summary: 'Desarrollo de aplicaciones web, APIs REST y modelado de datos a medida para clientes independientes.',
    highlights: [
      'Desarrollo de aplicaciones web y APIs REST con Django, Python y PostgreSQL para clientes independientes.',
      'Diseño de paneles administrativos y sistemas de gestión, incluyendo autenticación, autorización y administración de usuarios.',
      'Modelado de bases de datos relacionales y automatización de procesos empresariales mediante soluciones a medida.',
    ],
    tags: ['Python', 'Django', 'PostgreSQL', 'Modelado Relacional', 'REST APIs'],
    badge: 'ARQUITECTURA WEB',
  },
];

import projectsData from '../data/projects.json';

export const PROJECTS = projectsData;

export const TECHNICAL_METRICS = [
  {
    id: 'exp',
    tag: 'TRAYECTORIA',
    value: '+3',
    numValue: 3,
    prefix: '+',
    suffix: '',
    title: 'Años de experiencia',
    description: 'Diseñando y manteniendo servicios y APIs en entornos corporativos ágiles.',
  },
  {
    id: 'speed',
    tag: 'ALTA CONCURRENCIA',
    value: '+35%',
    numValue: 35,
    prefix: '+',
    suffix: '%',
    title: 'Tiempos de respuesta',
    description: 'Optimización de rendimiento mediante servicios reactivos con Spring WebFlux en SURA.',
  },
  {
    id: 'coverage',
    tag: 'CALIDAD DE CÓDIGO',
    value: '82%',
    numValue: 82,
    prefix: '',
    suffix: '%',
    title: 'Cobertura de pruebas',
    description: 'Elevada desde 62% con JUnit y Mockito para máxima estabilidad en producción.',
  },
  {
    id: 'deploy',
    tag: 'OPTIMIZACIÓN DEPLOY',
    value: '-15%',
    numValue: 15,
    prefix: '-',
    suffix: '%',
    title: 'Tiempo de despliegue',
    description: 'Logrado tras la migración arquitectónica a Java bajo Arquitectura Hexagonal.',
  },
];
