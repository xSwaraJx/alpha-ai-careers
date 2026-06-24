import { motion } from 'framer-motion'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

const values = [
  {
    title: 'Precision',
    description: 'We hold ourselves to the same standard of accuracy we ask our clients to trust their decisions to.',
  },
  {
    title: 'Accountability',
    description: 'Every model we build is explainable and auditable. Accountability is a feature, not an afterthought.',
  },
  {
    title: 'Long-term thinking',
    description: 'We build relationships and systems meant to last decades, not quarters.',
  },
]

export default function ValuesGrid() {
  return (
    <SectionWrapper className="content-container py-28">
      <SectionHeading eyebrow="Our Values" title="What guides our work" align="center" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-t-2 border-gold pt-5"
          >
            <h3 className="text-xl mb-2">{value.title}</h3>
            <p className="text-navy-700/80 leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
