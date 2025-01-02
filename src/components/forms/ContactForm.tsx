import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import SubmitButton from './SubmitButton';

export default function ContactForm() {
  const { formData, loading, handleSubmit, handleInputChange } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <FormInput
        id="name"
        label="Nombre"
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />

      <FormInput
        id="email"
        type="email"
        label="Correo Electrónico"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />

      <FormInput
        id="company"
        label="Empresa"
        value={formData.company}
        onChange={(e) => handleInputChange('company', e.target.value)}
      />

      <FormTextarea
        id="message"
        label="Mensaje"
        value={formData.message}
        onChange={(e) => handleInputChange('message', e.target.value)}
      />

      <SubmitButton loading={loading} />
    </form>
  );
}