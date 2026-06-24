export function filterJobs(jobs, { keyword = '', location = 'All', sector = 'All' } = {}) {
  const normalizedKeyword = keyword.trim().toLowerCase()

  return jobs.filter((job) => {
    const matchesKeyword =
      normalizedKeyword === '' ||
      job.title.toLowerCase().includes(normalizedKeyword) ||
      job.summary.toLowerCase().includes(normalizedKeyword) ||
      job.description.toLowerCase().includes(normalizedKeyword)

    const matchesLocation = location === 'All' || job.location === location
    const matchesSector = sector === 'All' || job.sector === sector

    return matchesKeyword && matchesLocation && matchesSector
  })
}
