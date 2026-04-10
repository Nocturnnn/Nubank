import { themeList } from '../data/themes'
import type { ThemeConfig, ThemeId } from '../types/theme'
import { Reveal } from './Reveal'
import { ThemeSelector } from './ThemeSelector'

type ComparisonSectionProps = {
  theme: ThemeConfig
  activeThemeId: ThemeId
  onThemeChange: (themeId: ThemeId) => void
}

function buildChart(theme: ThemeConfig) {
  const width = 360
  const height = 240
  const points = theme.experience.chartPoints
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = Math.max(max - min, 1)

  const solid = points.map((point, index) => {
    const x = 34 + (index * (width - 68)) / (points.length - 1)
    const y = height - 34 - ((point - min) / range) * (height - 76)
    return { x, y }
  })

  const dashed = points.map((_, index) => {
    const mirrored = points[(index + 2) % points.length]
    const x = 34 + (index * (width - 68)) / (points.length - 1)
    const y = height - 34 - ((mirrored - min) / range) * (height - 90)
    return { x, y }
  })

  const solidPath = solid
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ')

  const dashedPath = dashed
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ')

  return { solid, solidPath, dashedPath }
}

export function ComparisonSection({
  theme,
  activeThemeId,
  onThemeChange,
}: ComparisonSectionProps) {
  const { solid, solidPath, dashedPath } = buildChart(theme)

  return (
    <section className="comparison-section section-shell" id="cards">
      <div id="business" className="section-anchor" />

      <Reveal className="editorial-row editorial-row--expenses">
        <div className="editorial-copy">
          <h2 className="editorial-title">CONTROLE SEUS GASTOS COM MAIS CLAREZA</h2>
          <p className="editorial-text">
            A mesma composicao se adapta ao cartao escolhido. O tom muda, mas o
            foco continua em leitura simples, ritmo limpo e sensacao de produto real.
          </p>

          <div className="expense-widget">
            <article className="expense-widget__main">
              <span>Gastos</span>
              <strong>1,325.00</strong>
              <small>USD</small>
              <p>-2.5% em relacao a semana anterior</p>
            </article>

            <article className="expense-widget__side expense-widget__side--dark">
              <span>Shopping</span>
              <strong>$225.00</strong>
            </article>

            <article className="expense-widget__side expense-widget__side--theme">
              <span>Caixinha</span>
              <strong>$100.00</strong>
            </article>
          </div>

          <div className="comparison-selector">
            <span className="comparison-selector__label">Escolha o cartao</span>
            <ThemeSelector
              themes={themeList}
              activeThemeId={activeThemeId}
              onSelect={onThemeChange}
              compact
              className="theme-selector--editorial"
            />
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-card__header">
            <span>Semana</span>
            <span>USD</span>
          </div>

          <svg viewBox="0 0 360 240" className="chart-card__svg" aria-hidden="true">
            <path
              d={dashedPath}
              fill="none"
              stroke="rgba(84, 84, 84, 0.28)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="8 9"
            />
            <path
              d={solidPath}
              fill="none"
              stroke="#f05b39"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {solid.map((point) => (
              <circle
                key={`${theme.id}-${point.x}-${point.y}`}
                cx={point.x}
                cy={point.y}
                r="4.2"
                fill="#ffffff"
                stroke="#f05b39"
                strokeWidth="2"
              />
            ))}
          </svg>

          <div className="chart-card__labels">
            {theme.experience.chartLabels.map((label) => (
              <span key={`${theme.id}-${label}`}>{label}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
