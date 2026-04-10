import type { ThemeConfig } from '../types/theme'
import { Reveal } from './Reveal'

type ExperienceSectionProps = {
  theme: ThemeConfig
}

export function ExperienceSection({ theme }: ExperienceSectionProps) {
  return (
    <section className="experience-section section-shell" id="experience">
      <Reveal className="editorial-row editorial-row--goals">
        <div className="editorial-copy">
          <h2 className="editorial-title">PLANEJE METAS PARA O FUTURO</h2>
          <p className="editorial-text">
            Organize objetivos, acompanhe o rendimento das caixinhas e mantenha
            sua reserva sempre visivel dentro do ecossistema Nubank.
          </p>

          <ul className="editorial-list editorial-list--violet">
            <li>Crie metas para viagens, emergencias e novos projetos</li>
            <li>Acompanhe cada caixinha com uma leitura simples</li>
            <li>Mantenha a reserva separada da rotina do cartao</li>
          </ul>
        </div>

        <div className="budget-widget">
          <h3>Alocacao de metas</h3>

          <article className="budget-ticket">
            <div className="budget-ticket__head">
              <span className="budget-ticket__dot" />
              <span>Caixinha principal</span>
            </div>
            <div className="budget-ticket__amount">
              <strong>{theme.experience.savingsValue.replace('R$ ', '')}</strong>
              <span>BRL</span>
            </div>
            <div className="budget-ticket__meta">
              <span>Ultima atualizacao:</span>
              <span>17 - 09 - 2026</span>
            </div>
          </article>

          <article className="budget-ticket budget-ticket--offset">
            <div className="budget-ticket__head">
              <span className="budget-ticket__dot budget-ticket__dot--alt" />
              <span>Objetivo secundario</span>
            </div>
            <div className="budget-ticket__amount">
              <strong>{theme.experience.spendValue.replace('R$ ', '')}</strong>
              <span>BRL</span>
            </div>
            <div className="budget-ticket__meta">
              <span>Ultima atualizacao:</span>
              <span>01 - 03 - 2027</span>
            </div>
          </article>
        </div>
      </Reveal>

      <Reveal className="editorial-row editorial-row--exchange" delay={0.08}>
        <div className="transfer-widget">
          <h3>Transferencia internacional</h3>

          <div className="transfer-card">
            <div className="transfer-card__row">
              <span className="transfer-card__currency">USD</span>
              <span className="transfer-card__caret">v</span>
            </div>
            <div className="transfer-card__value">1</div>
            <div className="transfer-card__meta">Moeda de origem</div>
          </div>

          <div className="transfer-card transfer-card--floating">
            <div className="transfer-card__row">
              <span className="transfer-card__currency">BRL</span>
              <span className="transfer-card__caret">v</span>
            </div>
            <div className="transfer-card__value">5,920</div>
            <div className="transfer-card__meta">Conversao estimada</div>
          </div>

          <button type="button" className="transfer-widget__swap" aria-label="Swap currencies">
            &lt;&gt;
          </button>
        </div>

        <div className="editorial-copy">
          <h2 className="editorial-title">CAMBIO COMPETITIVO</h2>
          <p className="editorial-text">
            O Nubank pode manter o cambio em uma leitura leve, facil de
            entender e pronta para quem precisa viajar ou transferir.
          </p>

          <ul className="editorial-list editorial-list--coral">
            <li>Contexto claro para a conversao antes da confirmacao</li>
            <li>Atualizacao diaria para acompanhar o mercado</li>
            <li>Menos atrito na hora de enviar ou receber</li>
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
