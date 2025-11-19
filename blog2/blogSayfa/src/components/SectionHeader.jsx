const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="space-y-2">
    {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>}
    <h2 className="text-5xl font-semibold text-ink dark:text-[#AEBCCF]">{title}</h2>
    {description && <p className="text-muted dark:text-white/70">{description}</p>}
  </div>
)

export default SectionHeader

