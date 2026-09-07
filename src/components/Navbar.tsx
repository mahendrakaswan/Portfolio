'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'writing', href: '#writing' },
  { label: 'connect', href: '#connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#e8e2d9]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-medium text-[#1a1816] hover:text-[#c26a3f] transition-colors"
        >
          mahendra
        </a>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-[#8a8078] hover:text-[#c26a3f] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
