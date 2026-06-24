import { useMemo, useState } from 'react'
import { jobs } from '../data/jobs'
import { filterJobs } from '../utils/filterJobs'
import SearchBar from '../components/careers/SearchBar'
import FilterPanel from '../components/careers/FilterPanel'
import JobList from '../components/careers/JobList'
import SectionWrapper from '../components/shared/SectionWrapper'

export default function Careers() {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('All')
  const [sector, setSector] = useState('All')

  const locations = useMemo(() => ['All', ...new Set(jobs.map((j) => j.location))], [])
  const sectors = useMemo(() => ['All', ...new Set(jobs.map((j) => j.sector))], [])

  const filteredJobs = useMemo(
    () => filterJobs(jobs, { keyword, location, sector }),
    [keyword, location, sector],
  )

  return (
    <div>
      <div className="bg-navy text-white py-16">
        <div className="content-container">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">Careers</span>
          <h1 className="text-white font-medium text-2xl md:text-3xl mt-3 mb-4">Open Roles at Alpha.AI</h1>
          <p className="text-navy-100/80 max-w-xl">
            Search our current openings by keyword, or narrow down by location and sector.
          </p>
        </div>
      </div>

      <SectionWrapper className="content-container py-10">
        <div className="mb-6 max-w-2xl">
          <SearchBar value={keyword} onChange={setKeyword} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <div>
            <p className="text-sm text-navy-700 mb-4">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'role' : 'roles'} found
            </p>
            <JobList jobs={filteredJobs} />
          </div>

          <FilterPanel
            locations={locations}
            sectors={sectors}
            location={location}
            sector={sector}
            onLocationChange={setLocation}
            onSectorChange={setSector}
          />
        </div>
      </SectionWrapper>
    </div>
  )
}
