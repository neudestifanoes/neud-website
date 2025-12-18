'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, FileText, Mail } from 'lucide-react'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#0a0a0a] text-white selection:bg-neuro-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative z-10">
        
        {/* Background Gradient Mesh (Subtle "Brain Fog") */}
        <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] bg-neuro-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-cyber-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Main Content: Centered & Minimal */}
        <div className="text-center max-w-4xl z-10">
          
          {/* Name: Big & Bold */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-6"
          >
            Neud Estifanoes
          </motion.h1>

          {/* Subtext: Monospaced & Technical */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-2xl text-gray-400 font-mono"
          >
            CS + Neuroscience @ <span className="text-white font-semibold">Georgia Tech</span>
          </motion.p>

          {/* Links Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-10 flex justify-center gap-6"
          >
            {/* Resume Button */}
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105"
            >
              <FileText size={18} className="text-gray-300 group-hover:text-neuro-500 transition-colors"/>
              
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/neudestifanoes" 
              target="_blank"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105 group"
            >
              <Github size={20} className="text-gray-300 group-hover:text-cyber-500 transition-colors" />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/neud-estifanoes-389453254" 
              target="_blank"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105 group"
            >
              <Linkedin size={20} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
            </a>

            {/* Email (Optional but recommended) */}
            <a 
              href="mailto:neudestifanoes@gmail.com" 
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105 group"
            >
              <Mail size={20} className="text-gray-300 group-hover:text-neuro-500 transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 animate-bounce text-gray-600"
        >
          <ArrowDown size={20} />
        </motion.div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <Experience />

      {/* ================= PROJECTS SECTION ================= */}
      <Projects />

      {/* ================= FOOTER ================= */}
      <footer className="py-8 text-center text-gray-800 font-mono text-xs">
        <p>© 2025 Neud Estifanoes</p>
      </footer>

    </main>
  )
}
