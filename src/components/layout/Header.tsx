import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          <Navigation />
        </div>
      </nav>
    </header>
  );
}