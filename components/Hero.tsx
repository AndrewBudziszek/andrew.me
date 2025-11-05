'use client'

import { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useTyping } from '@/hooks/useTyping'

interface HeroProps {
  shouldAnimate: boolean
}

export default function Hero({ shouldAnimate }: HeroProps) {
  const [showTerminal, setShowTerminal] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  // Terminal command typing
  const terminalCommand = '$ cat about-andrew.txt'
  const { displayedText: terminalText, isTyping: isTerminalTyping } = useTyping(
    terminalCommand,
    30,
    shouldAnimate ? 200 : 0
  )

  // Terminal output typing
  const terminalOutput = 'Building fintech experiences for humans'
  const { displayedText: outputText, isTyping: isOutputTyping } = useTyping(
    terminalOutput,
    40,
    shouldAnimate ? terminalCommand.length * 30 + 500 : 0
  )

  // Name typing
  const firstName = 'Andrew'
  const lastName = 'Budziszek'
  const { displayedText: firstNameText } = useTyping(
    firstName,
    60,
    shouldAnimate ? terminalCommand.length * 30 + terminalOutput.length * 40 + 800 : 0
  )
  const { displayedText: lastNameText } = useTyping(
    lastName,
    60,
    shouldAnimate ? terminalCommand.length * 30 + terminalOutput.length * 40 + firstName.length * 60 + 1000 : 0
  )

  // Title typing
  const title = 'Senior Software Engineer'
  const { displayedText: titleText } = useTyping(
    title,
    50,
    shouldAnimate ? terminalCommand.length * 30 + terminalOutput.length * 40 + firstName.length * 60 + lastName.length * 60 + 1200 : 0
  )

  // Tags typing
  const tags = 'React Native • TypeScript • Node.js'
  const { displayedText: tagsText } = useTyping(
    tags,
    30,
    shouldAnimate ? terminalCommand.length * 30 + terminalOutput.length * 40 + firstName.length * 60 + lastName.length * 60 + title.length * 50 + 1400 : 0
  )

  // Description typing
  const descriptionBeforeCraft = "Crafting mobile and web experiences that help millions manage their finances. Passionate about combining AI with the craft of building software to "
  const descriptionAfterCraft = "create meaningful experiences for humans."
  const fullDescription = descriptionBeforeCraft + descriptionAfterCraft
  const { displayedText: descriptionText } = useTyping(
    fullDescription,
    20,
    shouldAnimate ? terminalCommand.length * 30 + terminalOutput.length * 40 + firstName.length * 60 + lastName.length * 60 + title.length * 50 + tags.length * 30 + 1600 : 0
  )

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setShowTerminal(true)
        setShowContent(true)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setShowTerminal(true)
      setShowContent(true)
    }
  }, [shouldAnimate])

  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Show buttons 1 second after description finishes typing
  useEffect(() => {
    if (descriptionText === fullDescription) {
      const timer = setTimeout(() => {
        setShowButtons(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setShowButtons(false)
    }
  }, [descriptionText, fullDescription])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container-max text-center relative z-10">
        {/* Terminal-style intro - now smaller */}
        <div
          className={`mb-8 flex justify-center transition-all duration-700 ${
            showTerminal
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          <div className="code-block text-left max-w-md select-none">
            <div className="flex items-center gap-2 mb-2 text-dark-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-500"></span>
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              <span className="w-2 h-2 rounded-full bg-dark-400"></span>
            </div>
            <div className="text-primary-400 font-mono select-none">
              <span className="text-accent-400 select-none">$</span> <span className="select-none">{terminalText}</span>
              {(isTerminalTyping || isOutputTyping) && (
                <span
                  className={`inline-block w-2 h-4 ml-1 bg-primary-400 select-none align-middle ${
                    cursorVisible ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-150`}
                >
                </span>
              )}
            </div>
            {terminalText === terminalCommand && (
              <div className="mt-2 text-gray-300 font-mono select-none">
                <span className="select-none">{outputText}</span>
                {isOutputTyping && (
                  <span
                    className={`inline-block w-2 h-4 ml-1 bg-accent-400 select-none align-middle ${
                      cursorVisible ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-150`}
                  >
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {showContent && (
          <div className="space-y-8 select-none">
            {/* Name */}
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-gray-100 font-mono select-none">{firstNameText}</span>
              {firstNameText === firstName && (
                <>
                  <br />
                  <span className="text-gradient font-mono select-none">{lastNameText}</span>
                  {lastNameText === lastName && (
                    <span
                      className={`inline-block w-3 h-12 ml-2 bg-primary-400 select-none align-middle ${
                        cursorVisible ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-150`}
                    >
                    </span>
                  )}
                </>
              )}
            </h1>

            {/* Title */}
            {lastNameText === lastName && (
              <div className="mb-8 select-none">
                <h2 className="text-xl md:text-2xl text-gray-400 font-mono mb-2 select-none">
                  {titleText}
                  {titleText !== title && (
                    <span
                      className={`inline-block w-2 h-5 ml-1 bg-primary-400 select-none align-middle ${
                        cursorVisible ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-150`}
                    >
                    </span>
                  )}
                </h2>
                {titleText === title && (
                  <div className="flex items-center justify-center gap-2 text-dark-400 font-mono text-sm select-none">
                    {tagsText}
                    {tagsText !== tags && (
                      <span
                        className={`inline-block w-1 h-4 ml-1 bg-accent-400 select-none align-middle ${
                          cursorVisible ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-150`}
                      >
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            {tagsText === tags && (
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-mono select-none">
                {descriptionText.length <= descriptionBeforeCraft.length ? (
                  <>
                    {descriptionText}
                    <span
                      className={`inline-block w-2 h-5 ml-1 bg-accent-400 select-none align-middle ${
                        cursorVisible ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-150`}
                    >
                    </span>
                  </>
                ) : (
                  <>
                    {descriptionBeforeCraft}
                    <span className="text-primary-400 select-none">
                      {descriptionText.slice(descriptionBeforeCraft.length)}
                      {descriptionText !== fullDescription && (
                        <span
                          className={`inline-block w-2 h-5 ml-1 bg-accent-400 select-none align-middle ${
                            cursorVisible ? 'opacity-100' : 'opacity-0'
                          } transition-opacity duration-150`}
                        >
                        </span>
                      )}
                    </span>
                  </>
                )}
              </p>
            )}

            {/* Buttons - show after description is done and 1s delay */}
            {showButtons && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
                <a
                  href="https://www.linkedin.com/in/andrew-budziszek-929a1663/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg hover:from-primary-500 hover:to-primary-600 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-lg shadow-primary-500/20"
                >
                  <FaLinkedin className="text-lg" />
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
                <a
                  href="#contact"
                  className="group px-8 py-4 border-2 border-dark-600 rounded-lg hover:border-primary-500 transition-all transform hover:scale-105 flex items-center space-x-3 bg-dark-800/50 backdrop-blur-sm"
                >
                  <FaEnvelope className="text-lg" />
                  <span className="font-medium">Get in Touch</span>
                </a>
              </div>
            )}

            {/* Scroll indicator */}
            {showButtons && (
              <div className="mt-20 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
                <a 
                  href="#about" 
                  className="inline-flex flex-col items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors group"
                >
                  <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
                  <div className="w-6 h-10 border-2 border-dark-600 rounded-full flex items-start justify-center p-2 group-hover:border-primary-500 transition-colors">
                    <div className="w-1 h-3 bg-primary-500 rounded-full animate-float"></div>
                  </div>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
