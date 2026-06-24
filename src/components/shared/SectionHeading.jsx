import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignment} mb-10`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl mb-3">{title}</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="h-[2px] w-16 bg-gold origin-left"
      />
    </div>
  )
}
