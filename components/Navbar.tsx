'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/corporate', label: 'Corporate' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-light/95 backdrop-blur border-b border-espresso/10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <DojoMark />
            <span className="font-serif text-2xl tracking-wide text-espresso group-hover:text-sage-dark transition-colors">
              Cookie Dojo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wider uppercase text-espresso hover:text-sage-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="text-sm font-medium tracking-wider uppercase px-5 py-2.5 bg-espresso text-cream-light hover:bg-sage-dark transition-colors"
            >
              Request Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-espresso"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden py-4 border-t border-espresso/10 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium tracking-wider uppercase text-espresso hover:bg-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mx-3 mt-2 mb-2 py-3 text-center text-sm font-medium tracking-wider uppercase bg-espresso text-cream-light"
            >
              Request Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export function DojoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="23" fill="#7A8F5A" />
      {/* Bamboo stalk */}
      <path
        d="M24 12 L24 36"
        stroke="#F5EFE0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Nodes */}
      <line x1="20" y1="18" x2="28" y2="18" stroke="#F5EFE0" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="24" x2="28" y2="24" stroke="#F5EFE0" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="30" x2="28" y2="30" stroke="#F5EFE0" strokeWidth="1.5" strokeLinecap="round" />
      {/* Leaves */}
      <path
        d="M24 14 Q30 12 32 16"
        stroke="#F5EFE0"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M24 20 Q18 18 16 22"
        stroke="#F5EFE0"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
