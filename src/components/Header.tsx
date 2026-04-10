import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { themeList } from '../data/themes'
import type { ThemeConfig, ThemeId } from '../types/theme'
import { ThemeSelector } from './ThemeSelector'

type HeaderProps = {
  theme: ThemeConfig
  activeThemeId: ThemeId
  onThemeChange: (themeId: ThemeId) => void
}

const navLinks = [
  { href: '#benefits', label: 'Cartoes' },
  { href: '#model', label: '3D' },
  { href: '#experience', label: 'Beneficios' },
  { href: '#cards', label: 'Empresas' },
]

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="5.25" />
      <path d="m15.1 15.1 3.4 3.4" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.25" />
      <path d="M6.75 18.5c1.7-2.4 3.45-3.5 5.25-3.5s3.55 1.1 5.25 3.5" />
    </svg>
  )
}

export function Header({ theme, activeThemeId, onThemeChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="section-shell">
        <div className="site-header__bar">
          <a className="brand-mark" href="#top" aria-label="Nubank">
            <span className="brand-mark__text">
              NU<span>BANK</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="site-icon-button" href="#cards" aria-label="Search">
              <SearchIcon />
            </a>
            <a className="site-icon-button" href="#cta" aria-label="Profile">
              <ProfileIcon />
            </a>

            <button
              type="button"
              className="nav-toggle"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-panel__copy">
                <span className="section-kicker">{theme.description}</span>
              </div>

              <nav className="mobile-panel__nav" aria-label="Mobile menu">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                ))}
              </nav>

              <ThemeSelector
                themes={themeList}
                activeThemeId={activeThemeId}
                onSelect={(themeId) => {
                  onThemeChange(themeId)
                  closeMenu()
                }}
                compact
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
