import handRight from '../assets/Direita.png'
import handLeft from '../assets/Esquerda.png'

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__grid" />
      <div className="hero-visual__glow" />
      <div className="hero-visual__vignette" />
      <div className="hero-visual__crosshair hero-visual__crosshair--vertical" />
      <div className="hero-visual__crosshair hero-visual__crosshair--horizontal" />

      <div className="hero-hand-wrap hero-hand-wrap--left">
        <span className="hero-hand__backlight" />
        <img className="hero-hand" src={handLeft} alt="" draggable={false} />
      </div>

      <div className="hero-hand-wrap hero-hand-wrap--right">
        <span className="hero-hand__backlight" />
        <img className="hero-hand" src={handRight} alt="" draggable={false} />
      </div>

      <div className="hero-visual__spark" />

      <div className="hero-card-wrap">
        <div className="hero-card__aura" />

        <article className="hero-card">
          <div className="hero-card__mesh" />
          <div className="hero-card__shine" />

          <div className="hero-card__header">
            <div className="hero-card__brand">
              <span className="hero-card__brand-mark">nu</span>
              <span>Ultravioleta</span>
            </div>

            <div className="hero-card__wireless">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="hero-card__center">
            <span className="hero-card__label">Nubank Ultravioleta</span>
            <strong>1,25% de cashback crescendo sem expirar</strong>
            <p>Uma presença premium no ponto exato em que design e controle se encontram.</p>
          </div>

          <span className="hero-card__monogram">nu</span>

          <div className="hero-card__footer">
            <div>
              <span>metal premium</span>
              <strong>mastercard black</strong>
            </div>
            <div>
              <span>gerencie no app</span>
              <strong>100% digital</strong>
            </div>
          </div>
        </article>
      </div>

      <div className="hero-visual__footer">
        <div className="hero-visual__trust">
          <span>Em parceria com</span>
          <i>Nu</i>
          <i>UV</i>
          <i>131mi+</i>
        </div>

        <p className="hero-visual__microcopy">
          Elevando sua vida financeira com um único ecossistema.
        </p>
      </div>
    </div>
  )
}
