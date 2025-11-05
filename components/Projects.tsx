export default function Projects() {
  const projects = [
    {
      title: 'Rocket Money',
      subtitle: 'Mobile App',
      description:
        'Cross-platform mobile application helping millions manage subscriptions and save money. Features real-time transaction monitoring, subscription cancellation, and financial insights.',
      technologies: ['React Native', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL'],
      github: '#',
      live: 'https://www.rocketmoney.com',
      featured: true,
    },
    {
      title: 'Financial Dashboard',
      subtitle: 'Enterprise Platform',
      description:
        'Enterprise-level financial dashboard for General Ledger and accounting applications. Real-time financial insights and reporting capabilities.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Real Estate Platform',
      subtitle: 'Greenfield Project',
      description:
        'Greenfield application for real estate portfolio management. Built from the ground up with modern architecture, featuring property management and financial tracking.',
      technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Investment Suite',
      subtitle: 'Full-Stack Platform',
      description:
        'Full-stack investment management platform with responsive web interface and mobile support. Features portfolio tracking, market analysis, and investment recommendations.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: false,
    },
  ]

  return (
    <section id="projects" className="section-padding bg-dark-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.05),transparent_50%)]"></div>
      
      <div className="container-max relative">
        <div className="mb-16">
          <span className="font-mono text-primary-400 text-sm mb-4 block">04. Projects</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            Things I've{' '}
            <span className="text-gradient">built</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-dark-900 border border-dark-700 rounded-lg p-8 hover:border-primary-500/50 transition-all glow-border group ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-100">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs font-mono rounded">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-dark-400 font-mono text-sm">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-800 border border-dark-700 text-dark-400 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-dark-700">
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-primary-400 transition-colors font-mono text-sm flex items-center gap-2"
                    >
                      <span>View Code</span>
                      <span>→</span>
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent-400 transition-colors font-mono text-sm flex items-center gap-2"
                    >
                      <span>Live Demo</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
