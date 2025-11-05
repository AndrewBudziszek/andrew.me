'use client'

import { useState } from 'react'

export default function About() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="section-padding bg-dark-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      <div className="container-max relative">
        <div className="mb-16">
          <span className="font-mono text-primary-400 text-sm mb-4 block">01. About</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            Building things that{' '}
            <span className="text-gradient">matter</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {/* Photo */}
              <div className="mb-8">
                <div className="relative w-64 h-64 mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg blur-xl"></div>
                  <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-dark-700 bg-dark-800">
                    {!imageError ? (
                      <img
                        src="/profile.jpg"
                        alt="Andrew Budziszek"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-dark-800">
                        <div className="text-center p-6">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                            <span className="text-4xl font-bold text-white">AB</span>
                          </div>
                          <p className="text-dark-400 font-mono text-sm">Add profile.jpg to /public</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-lg text-primary-400 leading-relaxed">
                Hi there! 👋
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                 I'm Andrew, a software engineer crafting savings experiences for millions of users 
                at <span className="text-primary-400"><a href="https://www.rocketmoney.com" target="_blank" rel="noopener noreferrer">Rocket Money</a></span>. I help build 
                high performance apps and processes using React Native, TypeScript, and a solid (sometimes) AWS stack that helps millions manage their finances.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey spans from fintech startups to enterprise financial systems 
                at Northwestern Mutual. I've worked on everything from greenfield 
                projects to legacy modernization, always with a focus on clean code 
                and thoughtful architecture.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not shipping features, I'm exploring new technologies, 
                hanging out with my goldendoodle, Fern, and thinking about how to make the world a better place.
              </p>
            </div>

            <div className="bg-dark-800 border border-dark-700 rounded-lg p-8 glow-border">
              <div className="mb-6">
                <span className="font-mono text-primary-400 text-sm">Education</span>
                <div className="mt-3">
                  <h4 className="font-bold text-gray-100 text-lg">
                    Computer Science
                  </h4>
                  <p className="text-gray-400 text-sm font-mono mt-1">
                    University of Wisconsin-Milwaukee
                  </p>
                  <p className="text-dark-400 text-xs font-mono mt-1">
                    2012 → 2016
                  </p>
                </div>
              </div>

              <div>
                <span className="font-mono text-primary-400 text-sm">Certifications</span>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">▸</span>
                    <div>
                      <p className="text-gray-200 font-medium">
                        AWS Certified Cloud Practitioner
                      </p>
                      <p className="text-dark-400 text-xs font-mono mt-1">
                        July 2020
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">▸</span>
                    <div>
                      <p className="text-gray-200 font-medium">
                        Certified SAFe 4 Scrum Master
                      </p>
                      <p className="text-dark-400 text-xs font-mono mt-1">
                        June 2019
                      </p>
                    </div>
                    
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">▸</span>
                    <div>
                      <p className="text-gray-200 font-medium">
                        Management Leadership Certificate - LSU
                      </p>
                      <p className="text-dark-400 text-xs font-mono mt-1">
                        December 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
