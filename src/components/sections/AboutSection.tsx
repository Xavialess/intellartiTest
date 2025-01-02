import React from 'react';
import { Target, Rocket } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const aboutItems = [
  {
    Icon: Target,
    title: 'Misión',
    description: 'Proporcionar soluciones modernas a cada problema empresarial aprovechando el poder de la IA y el desarrollo, de manera rápida y con alta calidad.',
  },
  {
    Icon: Rocket,
    title: 'Visión',
    description: 'Convertirnos en el principal promotor de aplicaciones de IA en el país, liderando la transformación digital de las empresas.',
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Nuestra Esencia</SectionTitle>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {aboutItems.map((item, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <item.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              alt="Equipo de trabajo"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}