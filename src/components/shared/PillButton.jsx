export default function PillButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
        active
          ? 'bg-navy text-white border-navy'
          : 'bg-white text-navy-700 border-navy-100 hover:border-gold hover:text-navy'
      }`}
    >
      {label}
    </button>
  )
}
