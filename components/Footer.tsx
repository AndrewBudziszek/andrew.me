import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-700 py-12">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-dark-400 font-mono text-sm">
              © {new Date().getFullYear()} Andrew Budziszek
            </p>
            <p className="text-dark-500 text-xs font-mono mt-1">
              Built with Next.js & TypeScript
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/andrew-budziszek-929a1663/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/AndrewBudziszek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-dark-400 hover:text-accent-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
