import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 90])

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-navy text-white">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.08]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </motion.div>

      <div className="content-container relative py-28 md:py-36">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-gold"
        >
          Careers at Alpha.AI
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-medium text-3xl md:text-[2.75rem] mt-5 mb-6 max-w-2xl leading-[1.2]"
        >
          Intelligence, built with judgment.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-navy-100/80 max-w-xl text-base md:text-lg mb-10"
        >
          Alpha.AI builds the artificial intelligence systems trusted by the world's leading financial
          institutions. Join a team where rigor, responsibility, and ambition meet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/careers"
            className="px-6 py-3 bg-gold text-navy-900 text-sm font-semibold rounded-sm hover:bg-gold-light transition-colors"
          >
            Explore Open Roles
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-white/30 text-white text-sm font-semibold rounded-sm hover:border-gold hover:text-gold transition-colors"
          >
            Our Mission
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
