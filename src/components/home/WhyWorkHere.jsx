import { motion } from 'framer-motion'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

const highlights = [
  {
    title: 'Rigor over hype',
    description: 'We measure success in model accuracy and client trust, not headlines. Every release goes through rigorous validation.',
  },
  {
    title: 'Global, regulated scale',
    description: 'Our systems run inside some of the most heavily regulated financial institutions in the world, across three continents.',
  },
  {
    title: 'Ownership from day one',
    description: 'Graduates and interns ship real production work. Seniority is earned through impact, not tenure alone.',
  },
  {
    title: 'Responsible by design',
    description: 'Compliance and explainability are built into our engineering process, not bolted on afterward.',
  },
]

export default function WhyWorkHere() {
  return (
    <SectionWrapper className="bg-slate-50 py-20">
      <div className="content-container">
        <SectionHeading eyebrow="Why Alpha.AI" title="A different kind of AI company" align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-navy-50 rounded-sm p-6 card-shadow"
            >
              <div className="w-8 h-[2px] bg-gold mb-4" />
              <h3 className="text-base mb-2">{item.title}</h3>
              <p className="text-sm text-navy-700/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
