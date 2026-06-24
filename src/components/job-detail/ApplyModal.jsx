import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ApplySuccess from './ApplySuccess'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ApplyModal({ job, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = {}
    if (!name.trim()) nextErrors.name = 'Name is required.'
    if (!email.trim()) nextErrors.email = 'Email is required.'
    else if (!EMAIL_REGEX.test(email.trim())) nextErrors.email = 'Enter a valid email address.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-navy-900/50 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-sm max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {submitted ? (
            <ApplySuccess onClose={onClose} />
          ) : (
            <>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-dark">Apply for</span>
                  <h3 className="text-xl mt-1">{job.title}</h3>
                </div>
                <button type="button" onClick={onClose} aria-label="Close" className="text-navy-700 hover:text-navy">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Full name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-2.5 border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold ${
                      errors.name ? 'border-red-400' : 'border-navy-100 focus:border-gold'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2.5 border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold ${
                      errors.email ? 'border-red-400' : 'border-navy-100 focus:border-gold'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Cover note <span className="text-navy-700/60 font-normal">(optional)</span>
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-navy-100 rounded-sm text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-navy text-white text-sm font-medium rounded-sm hover:bg-navy-700 transition-colors"
                >
                  Submit Application
                </button>
                <p className="text-xs text-navy-700/60 text-center">
                  This is a demo form. No application data is actually submitted or stored.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
