import type { CSSProperties } from 'react'

import { motion } from 'framer-motion'

import { themeList } from '../data/themes'
import type { ThemeConfig, ThemeId } from '../types/theme'
import { Reveal } from './Reveal'
import { ThemeSelector } from './ThemeSelector'

type HeroProps = {
  theme: ThemeConfig
  activeThemeId: ThemeId
  onThemeChange: (themeId: ThemeId) => void
}

const heroCards = [
  { themeId: 'classic' as const, className: 'hero-card hero-card--left' },
  { themeId: 'ultraviolet' as const, className: 'hero-card hero-card--center' },
  { themeId: 'business' as const, className: 'hero-card hero-card--right' },
]

const heroBadgesLeft = ['Seguro', 'Controle']
const heroBadgesRight = ['Privado', 'Rendimento']

export function Hero({ activeThemeId, onThemeChange }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="section-shell hero__shell">
        <Reveal className="hero__intro">
          <span className="hero__eyebrow">Conta, cartao e app com a cara do Nubank</span>
          <h1 className="hero__title">
            CONTROLE SUA
            <span>VIDA FINANCEIRA</span>
          </h1>
          <p className="hero__lead">
            Tres cartoes no hero, uma identidade forte e o restante da pagina
            reagindo ao tema que voce escolher.
          </p>
        </Reveal>

        <div className="hero__decor" aria-hidden="true">
          <span className="hero__line hero__line--left" />
          <span className="hero__line hero__line--right" />
        </div>

        <motion.div
          className="hero__badge-cluster hero__badge-cluster--left"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          {heroBadgesLeft.map((badge, index) => (
            <span key={badge} className={`hero-badge hero-badge--tone-${index + 1}`}>
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="hero__badge-cluster hero__badge-cluster--right"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          {heroBadgesRight.map((badge, index) => (
            <span key={badge} className={`hero-badge hero-badge--tone-${index + 3}`}>
              {badge}
            </span>
          ))}
        </motion.div>

        <div className="hero__floor">
          <div className="hero__grid" aria-hidden="true" />

          <div className="hero__fan">
            {heroCards.map((item, index) => {
              const cardTheme = themeList.find((entry) => entry.id === item.themeId)

              if (!cardTheme) {
                return null
              }

              const cardStyle = {
                backgroundImage: `linear-gradient(180deg, ${cardTheme.card.gradient[0]} 0%, ${cardTheme.card.gradient[1]} 56%, ${cardTheme.card.gradient[2]} 100%)`,
                '--card-shadow': `rgba(${cardTheme.palette.accentRgb}, 0.2)`,
              } as CSSProperties

              return (
                <motion.article
                  key={item.themeId}
                  className={`${item.className} ${
                    activeThemeId === item.themeId ? 'is-active' : ''
                  }`}
                  style={cardStyle}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.12 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="hero-card__signal" />
                  <div className="hero-card__body">
                    <span>NUBANK</span>
                    <strong>{cardTheme.card.name}</strong>
                    <p>{cardTheme.card.number}</p>
                    <small>{cardTheme.label}</small>
                  </div>
                </motion.article>
              )
            })}

            <div className="hero__coin" aria-hidden="true">
              <span>Nu</span>
            </div>
          </div>
        </div>

        <Reveal className="hero__theme-selector" delay={0.1}>
          <ThemeSelector
            themes={themeList}
            activeThemeId={activeThemeId}
            onSelect={onThemeChange}
            compact
            className="theme-selector--hero"
          />
          <p className="hero__selector-copy">
            Escolha um cartao para trocar paleta, graficos, acentos e atmosfera
            do restante da landing.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
