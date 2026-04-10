import type { CSSProperties } from 'react'
import { startTransition, useState } from 'react'

import './App.css'
import { BenefitsSection } from './components/BenefitsSection'
import { ComparisonSection } from './components/ComparisonSection'
import { CTASection } from './components/CTASection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ModelShowcaseSection } from './components/ModelShowcaseSection'
import { themeMap } from './data/themes'
import type { ThemeId } from './types/theme'

function App() {
  const [activeThemeId, setActiveThemeId] = useState<ThemeId>('classic')
  const theme = themeMap[activeThemeId]

  const handleThemeChange = (themeId: ThemeId) => {
    if (themeId === activeThemeId) {
      return
    }

    startTransition(() => {
      setActiveThemeId(themeId)
    })
  }

  const themeStyle = {
    '--page-bg': theme.palette.page,
    '--page-bg-soft': theme.palette.pageSoft,
    '--section-bg': theme.palette.section,
    '--section-alt': theme.palette.sectionAlt,
    '--text-primary': theme.palette.text,
    '--text-secondary': theme.palette.textSoft,
    '--border-subtle': theme.palette.border,
    '--accent': theme.palette.accent,
    '--accent-strong': theme.palette.accentStrong,
    '--accent-soft': theme.palette.accentSoft,
    '--accent-rgb': theme.palette.accentRgb,
    '--glow-color': theme.palette.glow,
    '--glow-strong': theme.palette.glowStrong,
    '--shadow-color': theme.palette.shadow,
    '--contrast': theme.palette.contrast,
    '--dark-surface': theme.palette.dark,
    '--dark-surface-soft': theme.palette.darkSoft,
    '--grid-color': theme.palette.grid,
    '--page-backdrop': theme.palette.heroBackdrop,
    '--cta-backdrop': theme.palette.ctaBackdrop,
    '--hero-glow': `radial-gradient(circle at 50% 45%, rgba(${theme.palette.accentRgb}, 0.26), rgba(${theme.palette.accentRgb}, 0) 68%)`,
    '--card-gradient': `linear-gradient(135deg, ${theme.card.gradient[0]} 0%, ${theme.card.gradient[1]} 55%, ${theme.card.gradient[2]} 100%)`,
  } as CSSProperties

  return (
    <div className="app-shell" style={themeStyle} data-theme={activeThemeId}>
      <Header
        theme={theme}
        activeThemeId={activeThemeId}
        onThemeChange={handleThemeChange}
      />

      <main className="page-main">
        <Hero
          theme={theme}
          activeThemeId={activeThemeId}
          onThemeChange={handleThemeChange}
        />
        <BenefitsSection theme={theme} />
        <ModelShowcaseSection theme={theme} />
        <ExperienceSection theme={theme} />
        <ComparisonSection
          theme={theme}
          activeThemeId={activeThemeId}
          onThemeChange={handleThemeChange}
        />
        <CTASection theme={theme} />
      </main>

      <Footer theme={theme} />
    </div>
  )
}

export default App
