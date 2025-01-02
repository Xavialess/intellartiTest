import React from 'react';
import NavLink from '../ui/NavLink';

export default function Navigation() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-center space-x-4">
        <NavLink href="#servicios">Servicios</NavLink>
        <NavLink href="#nosotros">Nosotros</NavLink>
        <NavLink href="#contacto" primary>Contacto</NavLink>
      </div>
    </div>
  );
}