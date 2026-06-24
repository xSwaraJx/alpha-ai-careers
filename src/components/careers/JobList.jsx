import JobCard from './JobCard'

export default function JobList({ jobs }) {
  if (jobs.length === 0) {
    return (
      <div className="border border-dashed border-navy-100 rounded-sm p-12 text-center">
        <p className="text-navy-700">No roles match your search. Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
