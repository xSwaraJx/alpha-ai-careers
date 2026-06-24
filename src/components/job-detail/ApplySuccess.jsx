import { Link } from 'react-router-dom'

export default function ApplySuccess({ onClose }) {
  return (
    <div className="text-center py-6">
      <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mx-auto mb-5">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl mb-2">Application received</h3>
      <p className="text-sm text-navy-700/80 mb-6 max-w-sm mx-auto">
        Thank you for applying to Alpha.AI. Our talent team will review your application and reach out if there's a match.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={onClose}
          className="text-sm font-medium px-5 py-2.5 border border-navy-100 rounded-sm hover:border-gold transition-colors"
        >
          Close
        </button>
        <Link
          to="/careers"
          className="text-sm font-medium px-5 py-2.5 bg-navy text-white rounded-sm hover:bg-navy-700 transition-colors"
        >
          Back to Careers
        </Link>
      </div>
    </div>
  )
}
