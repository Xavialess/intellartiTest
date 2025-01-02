import React from 'react';
import FormLabel from './FormLabel';

interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextarea({ 
  id, 
  label, 
  value, 
  onChange 
}: FormTextareaProps) {
  return (
    <div>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <textarea
        id={id}
        required
        rows={4}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}