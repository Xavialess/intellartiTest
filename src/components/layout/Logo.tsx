import React from 'react';
import { Brain } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center gap-2">
      <Brain className="w-8 h-8 text-blue-600" />
      <span className="text-2xl font-bold text-blue-600">Intellarti</span>
    </div>
  );
}