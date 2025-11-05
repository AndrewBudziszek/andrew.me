import { useState, useEffect } from 'react'

export function useTyping(text: string, speed: number = 50, delay: number = 0) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (!text) return

    let timeoutId: NodeJS.Timeout
    let currentIndex = 0

    const startTyping = () => {
      setIsTyping(true)
      
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeoutId = setTimeout(typeNextChar, speed)
        } else {
          setIsTyping(false)
        }
      }

      // Initial delay
      timeoutId = setTimeout(typeNextChar, delay)
    }

    startTyping()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [text, speed, delay])

  return { displayedText, isTyping }
}

