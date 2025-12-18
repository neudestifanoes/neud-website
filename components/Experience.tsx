'use client'
import { motion } from 'framer-motion'
import { Briefcase, Brain, Code } from 'lucide-react'

const experience = [
  {
    company: "The Murty Lab",
    role: "Researcher",
    date: "Aug 2025 – Present",
    description: "Modeled large-scale fMRI and electrophysiology datasets with encoding models to study neural coding and compare DNN representations to biological responses, achieving ~40% higher RSA alignment than baseline feature models.",
    tech: "Python, PyTorch, RSA Analysis",
    icon: Brain,
    color: "text-neuro-500", 
    bg: "bg-neuro-500/10"
  },
  {
    company: "SynapseX",
    role: "Founder & President",
    date: "Oct 2024 – Present",
    description: "Founded Georgia Tech's first BCI organization (200+ members). Leading the software team in developing real-time neural interfaces.",
    tech: "Leadership, Python, EEG Processing",
    icon: Briefcase,
    color: "text-neuro-500", 
    bg: "bg-neuro-500/10"
  },
  {
    company: "NextGen Computing",
    role: "Software Developer Intern",
    date: "May 2025 – Aug 2025",
    description: "Developed full-stack internal software and web apps for 50+ clients. Optimized media pipelines using OpenCV and FFmpeg.",
    tech: "JavaScript, Python, SQL, OpenCV",
    icon: Code,
    color: "text-neuro-500", // Changed to Purple for consistency
    bg: "bg-neuro-500/10"
  }
]

export default function Experience() {
  return (
    <section className="py-20 px-6 md:px-20 relative z-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center" // Centered Header
      >
        <h2 className="text-5xl font-bold text-gray-200 tracking-tight">
          Experience
        </h2>
        <div className="w-12 h-1 bg-neuro-500 mx-auto mt-4 rounded-full opacity-80" />
      </motion.div>

      <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full ${job.color.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`} />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2">
                {job.company}
              </h3>
              <span className="text-sm font-mono text-gray-500">{job.date}</span>
            </div>
            
            <p className={`text-md font-medium mb-2 ${job.color}`}>{job.role}</p>
            
            <p className="text-gray-400 mb-4 leading-relaxed max-w-2xl">
              {job.description}
            </p>

            <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono ${job.bg} ${job.color}`}>
              {job.tech}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
