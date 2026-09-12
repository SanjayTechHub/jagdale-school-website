export default function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center md:mb-16">
      {label ? (
        <p className={`section-label ${light ? 'text-accent-light' : ''}`}>{label}</p>
      ) : null}
      <h2 className={`text-h2 ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
      {subtitle ? (
        <p className={`mt-4 text-body ${light ? 'text-white/80' : 'text-ink-muted'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
