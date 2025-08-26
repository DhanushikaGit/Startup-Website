import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© 2025 Startup. All rights reserved.</p>
        <ul className="flex items-center gap-3">
          <li>
            <a
              href="#"
              aria-label="Twitter"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:text-blue-500 hover:border-blue-500 transition"
            >
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:text-black hover:border-black transition"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:text-blue-700 hover:border-blue-700 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
