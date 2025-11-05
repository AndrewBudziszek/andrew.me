'use client'

import { useEffect, useState, useCallback } from 'react'

interface TerminalProps {
  onEnter: () => void
  isActive: boolean
}

export default function Terminal({ onEnter, isActive }: TerminalProps) {
  const [cursorVisible, setCursorVisible] = useState(true)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Show prompt after a brief delay
    const promptTimer = setTimeout(() => {
      setShowPrompt(true)
    }, 1000)

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)

    return () => {
      clearTimeout(promptTimer)
      clearInterval(cursorInterval)
    }
  }, [])

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isActive && showPrompt) {
        onEnter()
      }
    },
    [onEnter, isActive, showPrompt]
  )

  useEffect(() => {
    if (isActive) {
      window.addEventListener('keydown', handleKeyPress)
      return () => window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress, isActive])

  return (
    <div
      className={`fixed inset-0 z-50 bg-dark-900 transition-all duration-1000 ease-in-out ${
        isActive
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-4xl px-8">
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 shadow-2xl select-none">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-dark-700 select-none">
              <span className="w-3 h-3 rounded-full bg-accent-500"></span>
              <span className="w-3 h-3 rounded-full bg-primary-500"></span>
              <span className="w-3 h-3 rounded-full bg-dark-400"></span>
              <span className="ml-4 text-dark-400 font-mono text-sm select-none">Terminal</span>
            </div>

            {/* Terminal content */}
            <div className="font-mono text-lg select-none">
              <div className="mb-4 select-none">
                <span className="text-accent-400 select-none">$</span>
                <span className="text-gray-300 ml-2 select-none">cat about-andrew.txt</span>
                <span
                  className={`inline-block w-2 h-5 ml-1 bg-primary-400 select-none align-middle ${
                    cursorVisible ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-150`}
                >
                </span>
              </div>

              {showPrompt && (
                <div className="mt-6 text-dark-400 text-sm animate-fade-in select-none">
                  <span className="text-accent-400 select-none">→</span> Hit <kbd className="px-2 py-1 bg-dark-700 border border-dark-600 rounded text-primary-400 select-none">Enter</kbd> to continue
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
