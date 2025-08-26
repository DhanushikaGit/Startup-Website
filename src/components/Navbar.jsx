import { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeId }) {
  const [open, setOpen] = useState(false);

  // Link style: stable background, text changes on hover
  const linkClass = (id) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300
     ${
       activeId === id
         ? 'bg-blue-600 text-white'
         : 'bg-gray-100 text-gray-700 hover:text-blue-600'
     }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-gray-900"
        >
          <span className="inline-block h-8 w-8 rounded-xl bg-blue-600 text-white grid place-items-center shadow">
            ⚡
          </span>
          <span>Startup</span>
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={linkClass(item.id)}
                aria-current={activeId === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-gray-200 bg-gray-100`}
      >
        <ul className="mx-auto max-w-6xl px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={linkClass(item.id)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
