'use client'

import { useState } from 'react'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle form submission here
    // You can integrate with a service like Formspree, EmailJS, or your backend
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-dark-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      <div className="container-max relative">
        <div className="mb-16">
          <span className="font-mono text-primary-400 text-sm mb-4 block">05. Contact</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            Let's{' '}
            <span className="text-gradient">connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mt-6">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6 font-mono">
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I typically 
                respond within 24-48 hours.
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/andrew-budziszek-929a1663/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-dark-800 border border-dark-700 rounded-lg hover:border-primary-500/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <FaLinkedin className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-100 font-medium">LinkedIn</div>
                    <div className="text-dark-400 text-sm font-mono">Professional Network</div>
                  </div>
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="group flex items-center gap-4 p-4 bg-dark-800 border border-dark-700 rounded-lg hover:border-accent-500/50 transition-all"
                >
                  <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center group-hover:bg-accent-500/30 transition-colors">
                    <FaEnvelope className="text-accent-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-100 font-medium">Email</div>
                    <div className="text-dark-400 text-sm font-mono">Direct Message</div>
                  </div>
                </a>
                <a
                  href="https://github.com/AndrewBudziszek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-dark-800 border border-dark-700 rounded-lg hover:border-primary-500/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <FaGithub className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-100 font-medium">GitHub</div>
                    <div className="text-dark-400 text-sm font-mono">Code & Projects</div>
                  </div>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2 font-mono"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-100 placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-mono"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2 font-mono"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-100 placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-mono"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2 font-mono"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-100 placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-mono resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg hover:from-primary-500 hover:to-primary-600 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed font-mono"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
