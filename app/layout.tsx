import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Andrew Budziszek - Senior Software Engineer',
  description: 'Senior Software Engineer at Rocket Money. Specializing in React Native, TypeScript, Node.js, and full-stack development. Building scalable fintech solutions.',
  keywords: ['software engineer', 'senior engineer', 'React Native', 'TypeScript', 'Node.js', 'fintech', 'mobile development', 'full-stack developer'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

