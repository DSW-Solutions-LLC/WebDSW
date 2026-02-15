import {
  Zap,
  Smartphone,
  Link2,
  Users,
  Code,
  Database,
  Cloud,
  Shield,
  BarChart3,
} from 'lucide-react';

// Navigation items
export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Inicio', href: '#home' },
  { id: 'services', label: 'Servicios', href: '#services' },
  { id: 'success-stories', label: 'Casos de Exito', href: '#success-stories' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
];

// Services data
export const SERVICES_DATA = [
  {
    id: 'automatizaciones',
    icon: Zap,
    title: 'Automatizaciones',
    description:
      'Workflows automatizados, formularios inteligentes y sistemas personalizados para optimizar procesos clave.',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Aplicaciones Mobile',
    description:
      'Apps nativas para iOS y Android, PWAs y prototipos funcionales con integracion a tus sistemas.',
  },
  {
    id: 'integraciones',
    icon: Link2,
    title: 'Integraciones',
    description:
      'APIs REST & GraphQL, conectores ERP/CRM/CMS y sincronizacion de datos en tiempo real.',
  },
  {
    id: 'outsourcing',
    icon: Users,
    title: 'Resource Outsourcing',
    description:
      'Equipos y perfiles especializados de forma flexible: frontend, backend, QA, DevOps y mas.',
  },
  {
    id: 'desarrollo-web',
    icon: Code,
    title: 'Desarrollo Web',
    description:
      'Sitios web modernos, plataformas a medida y micrositios interactivos con las ultimas tecnologias.',
  },
  {
    id: 'bases-de-datos',
    icon: Database,
    title: 'Bases de Datos',
    description:
      'Diseno, migracion y optimizacion de bases de datos relacionales y NoSQL para alto rendimiento.',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Infraestructura en la nube, CI/CD, contenedores y despliegues automatizados en AWS, Azure y GCP.',
  },
  {
    id: 'seguridad',
    icon: Shield,
    title: 'Seguridad',
    description:
      'Auditorias de seguridad, implementacion de mejores practicas y proteccion de datos sensibles.',
  },
  {
    id: 'analitica',
    icon: BarChart3,
    title: 'Analitica & BI',
    description:
      'Dashboards interactivos, reportes automatizados y visualizacion de datos para decisiones inteligentes.',
  },
];

// Stats data
export const STATS_DATA = [
  { id: 'years', value: 10, suffix: '+', label: 'Anos de Experiencia' },
  { id: 'clients', value: 50, suffix: '+', label: 'Clientes Satisfechos' },
  { id: 'projects', value: 100, suffix: '+', label: 'Proyectos Entregados' },
  { id: 'experts', value: 15, suffix: '+', label: 'Expertos en el Equipo' },
];

// Success Stories data (replaces PROJECTS_DATA)
export const SUCCESS_STORIES_DATA = [
  {
    id: 'story-1',
    title: 'Transformacion Digital Retail',
    description:
      'Migracion completa de plataforma e-commerce con integracion de inventario en tiempo real.',
    category: 'E-commerce',
    link: '#',
  },
  {
    id: 'story-2',
    title: 'App de Gestion Logistica',
    description:
      'Aplicacion mobile para seguimiento de envios y optimizacion de rutas de entrega.',
    category: 'Logistica',
    link: '#',
  },
  {
    id: 'story-3',
    title: 'Sistema de Reservas Online',
    description:
      'Plataforma de reservas con disponibilidad en tiempo real y pagos integrados.',
    category: 'Hoteleria',
    link: '#',
  },
  {
    id: 'story-4',
    title: 'Dashboard de Analytics',
    description:
      'Panel de control con metricas en tiempo real y reportes automatizados para toma de decisiones.',
    category: 'Business Intelligence',
    link: '#',
  },
  {
    id: 'story-5',
    title: 'Automatizacion de Procesos',
    description:
      'Workflows automatizados que redujeron tiempos operativos en un 60% para una empresa financiera.',
    category: 'Fintech',
    link: '#',
  },
  {
    id: 'story-6',
    title: 'Plataforma Educativa',
    description:
      'Sistema LMS con videoconferencia integrada, evaluaciones y seguimiento de progreso estudiantil.',
    category: 'Educacion',
    link: '#',
  },
];

// Partners data
export const PARTNERS_DATA = [
  { id: 'aws', name: 'AWS' },
  { id: 'google-cloud', name: 'Google Cloud' },
  { id: 'microsoft', name: 'Microsoft' },
  { id: 'react', name: 'React' },
  { id: 'nodejs', name: 'Node.js' },
  { id: 'salesforce', name: 'Salesforce' },
  { id: 'docker', name: 'Docker' },
  { id: 'mongodb', name: 'MongoDB' },
];

// Social media links
export const SOCIAL_LINKS = [
  { id: 'facebook', icon: 'Facebook', href: '#' },
  { id: 'instagram', icon: 'Instagram', href: '#' },
  { id: 'linkedin', icon: 'Linkedin', href: '#' },
  { id: 'youtube', icon: 'Youtube', href: '#' },
];

// Footer links
export const FOOTER_LINKS = [
  {
    title: 'Empresa',
    links: [
      { label: 'Inicio', href: '#home' },
      { label: 'Servicios', href: '#services' },
      { label: 'Casos de Exito', href: '#success-stories' },
      { label: 'Sobre Nosotros', href: '#about-us' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Automatizaciones', href: '#services' },
      { label: 'Apps Mobile', href: '#services' },
      { label: 'Integraciones', href: '#services' },
      { label: 'Cloud & DevOps', href: '#services' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Politica de Privacidad', href: '#' },
      { label: 'Aviso Legal', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
  },
];

// Company information
export const COMPANY_INFO = {
  name: 'DSW Solutions',
  email: 'contacto@dswsolutions.com',
  motto:
    'Software Factory que crea soluciones tecnologicas innovadoras. Nuestro equipo esta formado por expertos apasionados.',
  copyright: '© 2024 DSW Solutions. Todos los derechos reservados.',
};

// Form field configurations
export const FORM_FIELDS = [
  {
    id: 'firstName',
    label: 'Nombre',
    type: 'text',
    required: true,
    icon: 'User',
  },
  {
    id: 'lastName',
    label: 'Apellido',
    type: 'text',
    required: true,
    icon: 'User',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    icon: 'Mail',
  },
  {
    id: 'message',
    label: 'Mensaje',
    type: 'textarea',
    required: true,
    icon: 'MessageSquare',
  },
];
