import PillButton from '../shared/PillButton'

export default function FilterPanel({
  locations,
  sectors,
  location,
  sector,
  onLocationChange,
  onSectorChange,
}) {
  return (
    <aside className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gold-dark mb-3">Location</p>
        <div className="flex flex-wrap gap-2">
          {locations.map((loc) => (
            <PillButton
              key={loc}
              label={loc}
              active={location === loc}
              onClick={() => onLocationChange(loc)}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gold-dark mb-3">Sector</p>
        <div className="flex flex-wrap gap-2">
          {sectors.map((sec) => (
            <PillButton
              key={sec}
              label={sec}
              active={sector === sec}
              onClick={() => onSectorChange(sec)}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}
