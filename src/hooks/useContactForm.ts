import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { supabase } from '../lib/supabase';
import type { ContactForm } from '../types/contact';

const initialState: ContactForm = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactForm>(initialState);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      toast.success('Mensaje enviado correctamente');
      setFormData(initialState);
    } catch (error) {
      toast.error('Error al enviar el mensaje');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    handleSubmit,
    handleInputChange,
  };
}