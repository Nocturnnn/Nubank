import type { ThemeConfig } from '../types/theme'
import { Reveal } from './Reveal'

type CTASectionProps = {
  theme: ThemeConfig
}

export function CTASection({ theme }: CTASectionProps) {
  return (
    <section className="cta-section" id="cta">
      <div className="section-shell">
        <Reveal>
          <div className="cta-panel">
            <div className="cta-panel__copy">
              <h2 className="cta-panel__title">TESTE A EXPERIENCIA NUBANK</h2>
              <p className="cta-panel__description">
                Receba o walkthrough completo, veja como o tema muda a interface
                e acompanhe as proximas evolucoes do cartao no site.
              </p>
            </div>

            <form className="cta-form" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={theme.cta.inputPlaceholder}
              />
              <button type="submit" className="cta-form__submit" aria-label="Submit">
                &gt;
              </button>
            </form>

            <div className="cta-panel__footer">
              <label className="cta-check">
                <input type="checkbox" />
                <span>Quero receber as proximas atualizacoes do projeto Nubank</span>
              </label>
              <a href="#top">Ajuda</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
