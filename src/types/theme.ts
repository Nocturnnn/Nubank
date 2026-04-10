export type ThemeId = 'classic' | 'ultraviolet' | 'business'

export type IconName =
  | 'shield'
  | 'chart'
  | 'world'
  | 'orbit'
  | 'spark'
  | 'lock'
  | 'flash'
  | 'briefcase'
  | 'layers'
  | 'vault'

export interface ThemeConfig {
  id: ThemeId
  label: string
  shortLabel: string
  mood: string
  description: string
  palette: {
    page: string
    pageSoft: string
    section: string
    sectionAlt: string
    text: string
    textSoft: string
    border: string
    accent: string
    accentStrong: string
    accentSoft: string
    accentRgb: string
    glow: string
    glowStrong: string
    shadow: string
    contrast: string
    dark: string
    darkSoft: string
    grid: string
    heroBackdrop: string
    ctaBackdrop: string
  }
  hero: {
    eyebrow: string
    title: string
    titleAccent: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  badges: string[]
  metrics: Array<{
    label: string
    value: string
  }>
  benefits: Array<{
    title: string
    text: string
    icon: IconName
  }>
  experience: {
    eyebrow: string
    title: string
    description: string
    list: string[]
    balanceLabel: string
    balanceValue: string
    savingsLabel: string
    savingsValue: string
    spendLabel: string
    spendValue: string
    chartPoints: number[]
    chartLabels: string[]
  }
  comparison: {
    eyebrow: string
    title: string
    description: string
    statLabel: string
    statValue: string
    statCaption: string
    perks: string[]
  }
  card: {
    name: string
    edition: string
    holder: string
    number: string
    signature: string
    gradient: [string, string, string]
    body: string
    edge: string
    back: string
    sheen: string
    ink: string
    softInk: string
    chip: string
    chipLine: string
    ring: string
    mark: string
    overlay: string
  }
  cta: {
    eyebrow: string
    title: string
    description: string
    inputPlaceholder: string
    button: string
  }
}
