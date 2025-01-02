import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}

export default function NavLink({ href, children, primary }: NavLinkProps) {
  return primary ? (
    <a
      href={href}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    >
      {children}
    </a>
  ) : (
    <a
      href={href}
      className="text-gray-700 hover:text-blue-600 px-3 py-2"
    >
      {children}
    </a>
  );
}