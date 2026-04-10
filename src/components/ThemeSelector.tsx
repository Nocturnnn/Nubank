import type { CSSProperties } from 'react'

import type { ThemeConfig, ThemeId } from '../types/theme'

type ThemeSelectorProps = {
  themes: ThemeConfig[]
  activeThemeId: ThemeId
  onSelect: (themeId: ThemeId) => void
  compact?: boolean
  className?: string
}

export function ThemeSelector({
  themes,
  activeThemeId,
  onSelect,
  compact = false,
  className,
}: ThemeSelectorProps) {
  const selectorClassName = [
    'theme-selector',
    compact ? 'theme-selector--compact' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={selectorClassName}>
      {themes.map((theme) => {
        const isActive = theme.id === activeThemeId
        const swatchStyle = {
          backgroundImage: `linear-gradient(135deg, ${theme.card.gradient[0]} 0%, ${theme.card.gradient[1]} 55%, ${theme.card.gradient[2]} 100%)`,
          boxShadow: `0 12px 28px rgba(${theme.palette.accentRgb}, 0.2)`,
        } as CSSProperties

        return (
          <button
            key={theme.id}
            type="button"
            className={`theme-selector__button ${isActive ? 'is-active' : ''}`}
            onClick={() => onSelect(theme.id)}
            aria-pressed={isActive}
          >
            <span className="theme-selector__swatch" style={swatchStyle} />
            <span className="theme-selector__text">
              <span className="theme-selector__label">{theme.label}</span>
              {!compact && (
                <span className="theme-selector__caption">{theme.mood}</span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}
