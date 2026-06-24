import { Link } from 'react-router-dom'
import ValuesGrid from '../components/about/ValuesGrid'
import Timeline from '../components/about/Timeline'

export default function About() {
  return (
    <div>
      <div className="bg-navy text-white py-20">
        <div className="content-container">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">About Alpha.AI</span>
          <h1 className="text-white font-medium text-2xl md:text-3xl mt-3 mb-5 max-w-2xl leading-snug">
            Intelligence built for institutions that can't afford to be wrong.
          </h1>
          <p className="text-navy-100/80 max-w-xl mb-8">
            Alpha.AI designs and deploys artificial intelligence systems for the world's leading financial
            institutions, built on a foundation of rigor, accountability, and long-term trust.
          </p>
          <Link
            to="/careers"
            className="px-6 py-3 bg-gold text-navy-900 text-sm font-semibold rounded-sm hover:bg-gold-light transition-colors inline-block"
          >
            Join Our Team
          </Link>
        </div>
      </div>

      <ValuesGrid />
      <Timeline />
    </div>
  )
}
