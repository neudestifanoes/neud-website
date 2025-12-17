'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, BrainCircuit } from 'lucide-react'

const projects = [
    {
      title: "Cursor Vector Engine",
      date: "Oct 2025",
      description: "A real-time full-stack BCI system enabling hands-free cursor control using Steady-State Visual Evoked Potentials (SSVEP) from live EEG streams.",
      tech: ["React", "FastAPI", "Python", "BrainFlow", "Scikit-Learn", "WebSockets"],
      points: [
        "Optimized real-time EEG decoding latency to < 500ms using Welch-PSD feature extraction and LDA/SVM classifiers.",
        "Increased decoding accuracy from 54% to 88% by iterating through 12+ system versions to improve signal stability.",
        "Architected a modular WebSocket pipeline connecting a React stimulus interface to OpenBCI Cyton hardware."
      ],
      links: { github: "#", demo: "#" },
      color: "border-neuro-500",
      iconColor: "text-neuro-500"
    },
    {
      title: "Brain-Inspired Stock Trader",
      date: "Jun 2025",
      description: "A brain-inspired Deep Q-Learning trading system that encodes market dynamics as spikes, enabling robust decision-making in volatile conditions.",
      tech: ["Python", "PyTorch", "NumPy", "OpenAI Gym", "Matplotlib", "Time-Series Analysis"],
      points: [
        "Outperformed baseline trading strategies by ~160% cumulative return using entropy-based feature extraction.",
        "Engineered spike-train encoding to model market signals as temporally sparse neural representations, improving volatility robustness.",
        "Built a reusable, modular analysis pipeline for financial time-series data to support rapid iterative experimentation."
      ],
      links: { github: "#", demo: "#" },
      color: "border-neuro-500",
      iconColor: "text-neuro-500"
    }
  ]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 relative z-10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Centered Header */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold text-gray-200 tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-1 bg-neuro-500 mx-auto mt-4 rounded-full opacity-80" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors overflow-hidden`}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neuro-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg bg-white/5 ${project.color} border border-opacity-20`}>
                   {index === 0 ? <BrainCircuit size={24} className={project.iconColor} /> : <Code2 size={24} className={project.iconColor} />}
                </div>
                <div className="flex gap-4">
                  <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                  <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 group-hover:text-neuro-500 transition-colors">{project.title}</h3>
              <p className="text-sm font-mono text-gray-500 mb-4">{project.date}</p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="mb-6 space-y-2">
                {project.points.map((point, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start">
                    <span className="mr-2 text-neuro-500">▹</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono bg-white/5 rounded-full text-neuro-200 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}