import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="content-container py-32 text-center">
      <span className="text-xs uppercase tracking-[0.2em] text-gold-dark">404</span>
      <h1 className="text-3xl mt-3 mb-4">Page not found</h1>
      <p className="text-navy-700/80 mb-8">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="text-sm font-medium px-5 py-2.5 bg-navy text-white rounded-sm hover:bg-navy-700 transition-colors inline-block"
      >
        Back to Home
      </Link>
    </div>
  )
}
