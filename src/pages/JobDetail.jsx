import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobs } from '../data/jobs'
import ApplyModal from '../components/job-detail/ApplyModal'
import NotFound from './NotFound'
import SectionWrapper from '../components/shared/SectionWrapper'

export default function JobDetail() {
  const { id } = useParams()
  const job = jobs.find((j) => j.id === id)
  const [applyOpen, setApplyOpen] = useState(false)

  if (!job) return <NotFound />

  return (
    <div>
      <div className="bg-navy text-white py-20">
        <div className="content-container">
          <Link to="/careers" className="flex w-fit text-sm text-gold hover:text-gold-light items-center gap-1 mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all roles
          </Link>
          <span className="block text-xs uppercase tracking-[0.2em] text-gold">{job.sector}</span>
          <h1 className="text-white font-medium text-2xl md:text-3xl mt-3 mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-navy-100/80">
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.employmentType}</span>
            <span>•</span>
            <span>Posted {new Date(job.postedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      <SectionWrapper className="content-container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl mb-4">About the role</h2>
              <p className="text-navy-700/90 leading-relaxed">{job.description}</p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Responsibilities</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-navy-700/90">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Qualifications</h2>
              <ul className="space-y-2">
                {job.qualifications.map((item) => (
                  <li key={item} className="flex gap-3 text-navy-700/90">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside>
            <div className="sticky top-24 border border-navy-50 rounded-sm p-6 card-shadow">
              <p className="text-sm text-navy-700/80 mb-4">Ready to take the next step?</p>
              <button
                type="button"
                onClick={() => setApplyOpen(true)}
                className="w-full py-3 bg-navy text-white text-sm font-medium rounded-sm hover:bg-navy-700 transition-colors mb-3"
              >
                Apply Now
              </button>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
                  <span key={tag} className="text-xs border border-navy-100 rounded-full px-3 py-1 text-navy-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </SectionWrapper>

      {applyOpen && <ApplyModal job={job} onClose={() => setApplyOpen(false)} />}
    </div>
  )
}
