import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

export default function MissionTeaser() {
  return (
    <SectionWrapper className="content-container py-28">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <SectionHeading eyebrow="Our Mission" title="Why Alpha.AI exists" />
        <p className="text-lg text-navy-700/90 leading-relaxed">
          We believe artificial intelligence should make the world's financial systems more accurate, more fair,
          and more accountable, not just faster. Alpha.AI was founded on the conviction that the institutions
          managing the world's capital deserve AI systems built with the same rigor they apply to their own
          decisions. Every model we ship is designed to be explainable, auditable, and worthy of trust.
        </p>
      </div>
    </SectionWrapper>
  )
}
