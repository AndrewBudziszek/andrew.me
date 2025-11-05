'use client'

import { useState } from 'react'
import Terminal from '@/components/Terminal'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  const [terminalActive, setTerminalActive] = useState(true)
  const [heroShouldAnimate, setHeroShouldAnimate] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleTerminalEnter = () => {
    setTerminalActive(false)
    // Small delay before showing hero animation
    setTimeout(() => {
      setHeroShouldAnimate(true)
      setShowContent(true)
    }, 100)
  }

  return (
    <>
      <Terminal onEnter={handleTerminalEnter} isActive={terminalActive} />
      {showContent && (
        <>
          <Hero shouldAnimate={heroShouldAnimate} />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  )
}
