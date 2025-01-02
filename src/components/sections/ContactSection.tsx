import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from '../forms/ContactForm';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionTitle>Conversemos sobre tu Proyecto</SectionTitle>
          <p className="text-gray-600 mt-4">
            ¿Listo para transformar tu negocio? Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}