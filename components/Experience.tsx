export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Rocket Money',
      period: '2021 - Present',
      location: 'Remote',
      description: [
        'Developing iOS, Android, and web applications using React Native, Node.js, TypeScript, GraphQL, and Postgres',
        'Building scalable fintech solutions that help users manage subscriptions and save money',
        'Collaborating with cross-functional teams to deliver high-quality mobile and web experiences',
        'Working on core product features that impact millions of users',
      ],
      tech: ['React Native', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Northwestern Mutual',
      period: '2019 - 2021',
      location: 'Milwaukee, WI',
      description: [
        'Developed General Ledger and accounting applications with focus on financial accuracy and performance',
        'Implemented AWS cloud solutions and infrastructure improvements',
        'Led technical initiatives and mentored team members',
        'Collaborated with business stakeholders to deliver enterprise-level solutions',
      ],
      tech: ['React', 'TypeScript', 'AWS', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Direct Supply',
      period: '2018 - 2019',
      location: 'Milwaukee, WI',
      description: [
        'Contributed to enterprise software solutions in the healthcare technology space',
        'Developed and maintained scalable applications',
        'Participated in agile development processes and code reviews',
      ],
      tech: ['JavaScript', 'Node.js', 'React'],
    },
    {
      title: 'Full Stack Engineer II',
      company: 'Northwestern Mutual',
      period: '2017 - 2018',
      location: 'Milwaukee, WI',
      description: [
        'Focused on greenfield solutions for the Real Estate division',
        'Built new applications from the ground up using modern technologies',
        'Collaborated with product and design teams to deliver innovative solutions',
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
    },
    {
      title: 'Full Stack Engineer',
      company: 'Northwestern Mutual',
      period: '2016 - 2017',
      location: 'Milwaukee, WI',
      description: [
        'Developed investment applications and financial software',
        'Participated in digital innovation initiatives',
        'Served on the Diversity and Inclusion council',
        'Built responsive web applications using modern frameworks',
      ],
      tech: ['JavaScript', 'React', 'Node.js'],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-dark-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.05),transparent_50%)]"></div>
      
      <div className="container-max relative">
        <div className="mb-16">
          <span className="font-mono text-primary-400 text-sm mb-4 block">02. Experience</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            Where I&apos;ve{' '}
            <span className="text-gradient">worked</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-700 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-800"></div>

                  <div className="bg-dark-900 border border-dark-700 rounded-lg p-8 hover:border-primary-500/50 transition-all glow-border">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-100 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-primary-400 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-dark-400 font-mono">
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 mb-4">
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-accent-400 mt-2 text-xs">▸</span>
                            <span className="text-gray-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-dark-700">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-dark-800 border border-dark-700 text-dark-400 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
