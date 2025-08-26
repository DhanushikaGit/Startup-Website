import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-gray-200 py-10 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          © 2025 Startup. All rights reserved.
        </p>

        <ul className="flex items-center gap-4">
          <li>
            <a
              href="#"
              aria-label="Twitter"
              className="flex items-center justify-center rounded-full bg-white shadow p-3 text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-300"
            >
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="GitHub"
              className="flex items-center justify-center rounded-full bg-white shadow p-3 text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex items-center justify-center rounded-full bg-white shadow p-3 text-blue-700 hover:text-white hover:bg-blue-700 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
