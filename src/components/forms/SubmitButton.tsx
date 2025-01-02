import React from 'react';
import { Send } from 'lucide-react';

interface SubmitButtonProps {
  loading: boolean;
}

export default function SubmitButton({ loading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
    >
      {loading ? 'Enviando...' : (
        <>
          Enviar Mensaje
          <Send className="w-4 h-4" />
        </>
      )}
    </button>
  );
}