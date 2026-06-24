import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="content-container py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-lg font-semibold mb-3">
            Alpha<span className="text-gold">.AI</span>
          </p>
          <p className="text-sm text-navy-100/80 max-w-xs">
            Building the responsible intelligence behind the world's financial institutions.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Company</p>
          <ul className="space-y-2 text-sm text-navy-100/80">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/" className="hover:text-white">Home</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Offices</p>
          <ul className="space-y-2 text-sm text-navy-100/80">
            <li>New York</li>
            <li>London</li>
            <li>Bengaluru</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="content-container py-5 text-xs text-navy-100/60">
          © {new Date().getFullYear()} Alpha.AI. This is a fictional demo company for illustrative purposes only.
        </div>
      </div>
    </footer>
  )
}
