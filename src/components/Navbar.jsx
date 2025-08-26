import { useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeId }) {
  const [open, setOpen] = useState(false)

  const linkClass = (id) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition ${
      activeId === id ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
      >
        <a href="#home" className="flex items-center gap-2 font-semibold" aria-label="Go to home">
          <span className="inline-block h-8 w-8 rounded-xl bg-gray-900 text-white grid place-items-center">⚡</span>
          <span>Startup</span>
        </a>

        <button
          className="md:hidden p-2 rounded-lg border border-gray-300"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? '✕' : '☰'}
        </button>

        <ul className="hidden md:flex items-center gap-1">
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

      <div id="mobile-menu" className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-gray-100`}>
        <ul className="mx-auto max-w-6xl px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
