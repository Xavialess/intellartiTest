import React from 'react';
import FormLabel from './FormLabel';

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({ 
  id, 
  label, 
  value, 
  type = 'text',
  onChange 
}: FormInputProps) {
  return (
    <div>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <input
        type={type}
        id={id}
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}