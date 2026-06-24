import { motion } from 'framer-motion'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

const milestones = [
  { year: '2019', label: 'Alpha.AI founded in New York by a team of quantitative researchers and engineers.' },
  { year: '2021', label: 'Opened our London office to serve European financial institutions.' },
  { year: '2023', label: 'Launched our Risk Analytics platform, now used across three continents.' },
  { year: '2025', label: 'Opened our Bengaluru office, growing our global engineering footprint.' },
]

export default function Timeline() {
  return (
    <SectionWrapper className="bg-slate-50 py-20">
      <div className="content-container">
        <SectionHeading eyebrow="Our Journey" title="Milestones" />
        <div className="mt-8 space-y-0">
          {milestones.map((m, index) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex gap-6 py-5 border-b border-navy-50 last:border-b-0"
            >
              <span className="font-serif text-xl text-gold-dark w-20 flex-shrink-0">{m.year}</span>
              <p className="text-navy-700/90">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
