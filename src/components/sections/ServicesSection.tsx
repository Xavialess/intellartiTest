import React from 'react';
import { Code, Bot, Brain } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Desarrollo de Software',
    description: 'Creamos aplicaciones web y móviles personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.',
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'Integración de IA',
    description: 'Implementamos soluciones de IA como chatbots, sistemas RAG y agentes inteligentes para automatizar y optimizar tus procesos.',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Consultoría Tecnológica',
    description: 'Brindamos asesoramiento experto en software e inteligencia artificial para guiar tu transformación digital.',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Nuestros Servicios</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}