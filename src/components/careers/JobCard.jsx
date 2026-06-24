import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function JobCard({ job }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to={`/careers/${job.id}`}
        className="block border border-navy-50 rounded-sm p-6 card-shadow hover:border-gold transition-colors group"
      >
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-lg group-hover:text-gold-dark transition-colors">{job.title}</h3>
          <span className="text-xs whitespace-nowrap text-navy-700 border border-navy-100 rounded-full px-3 py-1">
            {job.employmentType}
          </span>
        </div>

        <p className="text-sm text-navy-700/80 mb-4">{job.summary}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-navy-700">
          <span className="inline-flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {job.location}
          </span>
          <span className="w-1 h-1 rounded-full bg-navy-100" />
          <span>{job.sector}</span>
        </div>
      </Link>
    </motion.div>
  )
}
