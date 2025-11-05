export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      icon: '</>',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Swift', 'Kotlin'],
    },
    {
      category: 'Frameworks & Libraries',
      icon: '⚛️',
      skills: [
        'React',
        'React Native',
        'Next.js',
        'Node.js',
        'Express',
        'GraphQL',
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        'AWS',
        'PostgreSQL',
        'Docker',
        'Git',
        'CI/CD',
        'GitHub Copilot',
        'Cursor',
        'Claude',
        'iOS Development',
        'Android Development',
      ],
    },
    {
      category: 'Practices',
      icon: '📋',
      skills: [
        'Agile/Scrum',
        'SAFe',
        'Code Review',
        'System Design',
        'Full-Stack Development',
        'Mobile Development',
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-dark-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.03),transparent_50%)]"></div>
      
      <div className="container-max relative">
        <div className="mb-16">
          <span className="font-mono text-primary-400 text-sm mb-4 block">03. Skills</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            <span className="text-gradient">Technologies</span> I work with
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-dark-800 border border-dark-700 rounded-lg p-8 hover:border-primary-500/50 transition-all glow-border group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-100 font-mono">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-dark-900 border border-dark-700 text-gray-300 rounded text-sm font-mono hover:border-primary-500/50 hover:text-primary-400 transition-all group-hover:border-primary-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
