import { Link } from 'react-router-dom'
import { jobs } from '../../data/jobs'
import JobCard from '../careers/JobCard'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

export default function RolesTeaser() {
  const featured = jobs.slice(0, 3)

  return (
    <SectionWrapper className="content-container py-20">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-2">
        <SectionHeading eyebrow="Open Roles" title="Featured opportunities" />
        <Link
          to="/careers"
          className="text-sm font-medium text-navy hover:text-gold-dark transition-colors mb-10"
        >
          View all roles →
        </Link>
      </div>

      <div className="space-y-4">
        {featured.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </SectionWrapper>
  )
}
