import { useEffect, useState } from 'react'
import './App.css'
import { BrowserFrame } from './components/BrowserFrame'
import { HeroVisual } from './components/HeroVisual'
import { NuLogo } from './components/NuLogo'
import {
  experienceCards,
  impactStats,
  navItems,
  partnerBrands,
  roiMetrics,
  roiMoments,
  securityPillars,
  spotlightItems,
} from './content'

function App() {
  const [introPhase, setIntroPhase] = useState<'intro' | 'revealing' | 'done'>(
    'intro',
  )

  useEffect(() => {
    const revealTimer = window.setTimeout(() => {
      setIntroPhase('revealing')
    }, 1700)

    const finishTimer = window.setTimeout(() => {
      setIntroPhase('done')
    }, 2800)

    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(finishTimer)
    }
  }, [])

  useEffect(() => {
    if (introPhase !== 'done') {
      return
    }

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal'),
    )

    if (!revealItems.length) {
      return
    }

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('reveal--visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('reveal--visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [introPhase])

  const isSiteVisible = introPhase !== 'intro'
  const isIntroVisible = introPhase !== 'done'

  const roiChartTop = 34
  const roiChartBottom = 152
  const roiChartBaseline = 168
  const roiChartStartX = 72
  const roiChartStepX = 116

  const roiChartPoints = roiMoments.map((item, index) => {
    const x = roiChartStartX + roiChartStepX * index
    const y =
      roiChartBottom -
      (item.value / 100) * (roiChartBottom - roiChartTop)

    return {
      ...item,
      x,
      y,
    }
  })

  const roiLinePath = roiChartPoints
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ')

  const roiAreaPath = [
    `M ${roiChartPoints[0]?.x ?? 0} ${roiChartBaseline}`,
    ...roiChartPoints.map((point) => `L ${point.x} ${point.y}`),
    `L ${roiChartPoints[roiChartPoints.length - 1]?.x ?? 0} ${roiChartBaseline}`,
    'Z',
  ].join(' ')

  return (
    <div className="app-shell">
      {isIntroVisible ? (
        <div
          className={`intro-overlay ${
            introPhase === 'revealing' ? 'intro-overlay--exit' : ''
          }`}
          aria-hidden="true"
        >
          <div className="intro-overlay__noise" />
          <div className="intro-overlay__gradient intro-overlay__gradient--left" />
          <div className="intro-overlay__gradient intro-overlay__gradient--right" />
          <div className="intro-overlay__halo" />

          <div className="intro-overlay__content">
            <span className="intro-overlay__eyebrow">O futuro começa no roxo</span>
            <span className="intro-overlay__mark">NU</span>
          </div>
        </div>
      ) : null}

      <div className={`site-layer ${isSiteVisible ? 'site-layer--visible' : ''}`}>
        <BrowserFrame>
          <div className="announcement-bar reveal reveal--1">
            <span className="announcement-bar__tag">Nu 2026</span>
            <p>Uma experiência mais fluida, premium e cinematográfica.</p>
            <a href="#impacto">Ver impacto</a>
          </div>

          <header className="site-header reveal reveal--2">
            <nav className="site-nav" aria-label="Navegação principal">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <NuLogo />

            <div className="site-actions">
              <div className="site-search" aria-hidden="true">
                <span className="site-search__icon" />
                Buscar
              </div>
              <a className="text-action" href="#seguranca">
                Segurança
              </a>
              <a className="button button--ghost button--small" href="#cta">
                Quero ser Nubank
              </a>
            </div>
          </header>

          <main className="landing">
            <section className="hero reveal reveal--3" id="hero">
              <div className="hero-stage">
                <div className="hero__intro">
                  <span className="eyebrow">para o próximo século</span>
                  <h1>O futuro da experiência financeira segura.</h1>
                  <p>
                    Um hero desenhado para causar impacto imediato: duas mãos quase
                    se encontram e o Nubank Ultravioleta domina o centro da cena com
                    profundidade, brilho controlado e tensão visual.
                  </p>

                  <div className="hero__actions">
                    <a className="button button--primary" href="#cta">
                      Quero meu Ultravioleta
                    </a>
                    <a className="button button--secondary" href="#experiencia">
                      Como funciona
                    </a>
                  </div>
                </div>

                <HeroVisual />
              </div>

              <ul className="hero__highlights reveal reveal--4" aria-label="Destaques da experiência">
                {spotlightItems.map((item) => (
                  <li key={item.title}>
                    <span>{item.title}</span>
                    <strong>{item.description}</strong>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="partner-marquee reveal reveal--4"
              aria-label="Marcas parceiras do ecossistema Nubank"
            >
              <div className="partner-marquee__intro">
                <span className="eyebrow">ecossistema conectado</span>
                <p>Parcerias que expandem a experiência do Nubank para além do cartão.</p>
              </div>

              <div className="partner-marquee__viewport">
                <div className="partner-marquee__track">
                  {[...partnerBrands, ...partnerBrands].map((brand, index) => (
                    <div key={`${brand}-${index}`} className="partner-marquee__item">
                      <span className="partner-marquee__dot" />
                      <span>{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section metrics reveal reveal--5" id="impacto">
              <div className="section-heading">
                <span className="eyebrow">escala com propósito</span>
                <h2>Quando o Nu cresce, a vida financeira fica mais simples.</h2>
                <p>
                  A estrutura da landing já valoriza prova social, impacto real e a
                  sensação de confiança que a marca construiu na América Latina.
                </p>
              </div>

              <div className="stats-grid">
                {impactStats.map((stat, index) => (
                  <article
                    key={stat.value}
                    className={`stat-card reveal reveal--${Math.min(index + 4, 8)}`}
                  >
                    <span className="stat-card__value">{stat.value}</span>
                    <p>{stat.label}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section experience reveal reveal--6" id="experiencia">
              <div className="section-heading section-heading--inline">
                <div>
                  <span className="eyebrow">narrativa do produto</span>
                  <h2>Tudo precisa parecer premium sem deixar de ser claro no primeiro olhar.</h2>
                </div>
                <p>
                  O layout foi separado em blocos que combinam conversão, benefício e
                  atmosfera visual para sustentar uma landing page forte de ponta a
                  ponta.
                </p>
              </div>

              <div className="experience-grid">
                {experienceCards.map((card, index) => (
                  <article
                    key={card.title}
                    className={`experience-card reveal reveal--${Math.min(index + 4, 8)}`}
                  >
                    <span className="experience-card__index">0{index + 1}</span>
                    <span className="experience-card__eyebrow">{card.eyebrow}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <ul className="tag-list" aria-label={card.title}>
                      {card.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="roi-showcase reveal reveal--7">
                <div className="roi-showcase__copy">
                  <span className="eyebrow">ROI da experiência</span>
                  <h3>Uma visualização bonita do valor que o design certo pode destravar.</h3>
                  <p>
                    O bloco de ROI traduz impacto em linguagem visual: mais interesse,
                    mais adesão ao premium e menos fricção em etapas decisivas da
                    jornada.
                  </p>

                  <div className="roi-showcase__metrics">
                    {roiMetrics.map((metric) => (
                      <article key={metric.value} className="roi-metric">
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="roi-panel">
                  <div className="roi-panel__header">
                    <div>
                      <span className="roi-panel__eyebrow">projeção visual</span>
                      <strong>ROI do ecossistema Nubank</strong>
                    </div>
                    <span className="roi-panel__badge">Ultravioleta</span>
                  </div>

                  <div className="roi-chart">
                    <div className="roi-chart__glow" />
                    <div className="roi-chart__grid" />
                    <svg
                      className="roi-chart__svg"
                      viewBox="0 0 520 260"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="roi-area-gradient"
                          x1="0%"
                          x2="0%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#d8b8ff" stopOpacity="0.26" />
                          <stop offset="100%" stopColor="#820ad1" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                          id="roi-line-gradient"
                          x1="0%"
                          x2="100%"
                          y1="0%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#c693ff" />
                          <stop offset="100%" stopColor="#f2e0ff" />
                        </linearGradient>
                      </defs>

                      <path className="roi-chart__area" d={roiAreaPath} />
                      <path className="roi-chart__line-shadow" d={roiLinePath} />
                      <path className="roi-chart__line" d={roiLinePath} />

                      {roiChartPoints.map((point) => (
                        <g
                          key={point.label}
                          className="roi-chart__point-group"
                          transform={`translate(${point.x} ${point.y})`}
                        >
                          <circle className="roi-chart__point-ring" r="18" />
                          <circle className="roi-chart__point" r="6" />
                          <text className="roi-chart__value" x="0" y="-26">
                            {point.value}%
                          </text>
                        </g>
                      ))}
                    </svg>

                    <div className="roi-chart__bars">
                      {roiMoments.map((item) => (
                        <div key={item.label} className="roi-bar">
                          <div className="roi-bar__track">
                            <span
                              className="roi-bar__fill"
                              style={{ height: `${item.value}%` }}
                            />
                          </div>
                          <span className="roi-bar__value">{item.value}%</span>
                          <strong>{item.label}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="roi-panel__footer">
                    <div>
                      <span>ticket premium</span>
                      <strong>mais valor por relação</strong>
                    </div>
                    <div>
                      <span>leituras instantâneas</span>
                      <strong>menos ruído, mais ação</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section manifesto reveal reveal--7" id="seguranca">
              <div className="manifesto__panel reveal reveal--6">
                <span className="eyebrow">segurança sem atrito</span>
                <h2>Visual imersivo, leitura instantânea e confiança perceptível.</h2>
                <p>
                  A landing segue a lógica que tornou o Nu tão forte: reduzir ruído,
                  destacar o que importa e transformar jornadas complexas em gestos
                  simples.
                </p>
              </div>

              <div className="manifesto__panel manifesto__panel--list reveal reveal--7">
                <h3>Pilares para a próxima camada do site</h3>
                <ul className="feature-list">
                  {securityPillars.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section closing reveal reveal--8" id="cta">
              <div className="closing__content">
                <span className="eyebrow">próximo passo</span>
                <h2>Entre para uma experiência financeira que parece ficção, mas funciona no agora.</h2>
                <p>
                  Uma base pronta para receber animações mais avançadas, conteúdo de
                  produto detalhado, provas sociais e assets proprietários do Nubank.
                </p>
              </div>

              <a className="button button--primary button--large closing__action" href="#hero">
                Voltar ao topo
              </a>
            </section>
          </main>
        </BrowserFrame>
      </div>
    </div>
  )
}

export default App
