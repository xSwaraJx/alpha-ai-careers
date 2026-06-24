export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-700/50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search roles by keyword, e.g. "engineer", "intern", "design"'
        className="w-full pl-11 pr-4 py-3.5 border border-navy-100 rounded-sm text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
      />
    </div>
  )
}
