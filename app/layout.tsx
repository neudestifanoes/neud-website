import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'Neud Estifanoes | Neuro & CS',
  description: 'Portfolio of a Neuroscience and Computer Science student.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}