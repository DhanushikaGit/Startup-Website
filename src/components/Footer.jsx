export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© 2025 Startup. All rights reserved.</p>
        <ul className="flex items-center gap-3">
          <li><a href="#" aria-label="Twitter" className="rounded-lg border px-3 py-2">Twitter</a></li>
          <li><a href="#" aria-label="GitHub" className="rounded-lg border px-3 py-2">GitHub</a></li>
          <li><a href="#" aria-label="LinkedIn" className="rounded-lg border px-3 py-2">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  )
}
