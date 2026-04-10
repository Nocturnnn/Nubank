import type { ThemeConfig } from '../types/theme'
import { Icon } from './icons'
import { Reveal } from './Reveal'

type BenefitsSectionProps = {
  theme: ThemeConfig
}

export function BenefitsSection({ theme }: BenefitsSectionProps) {
  const featured = theme.benefits.slice(0, 3)

  return (
    <section className="benefits-section" id="benefits">
      <div id="security" className="section-anchor" />
      <div className="section-shell">
        <Reveal className="benefits-strip">
          {featured.map((benefit) => (
            <article key={`${theme.id}-${benefit.title}`} className="benefits-strip__item">
              <div className="benefits-strip__icon">
                <Icon name={benefit.icon} />
              </div>
              <div className="benefits-strip__copy">
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
