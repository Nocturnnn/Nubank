import type { ThemeConfig } from '../types/theme'

type FooterProps = {
  theme: ThemeConfig
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid" aria-hidden="true" />

      <div className="section-shell footer-panel">
        <div className="footer-brand">
          <a className="brand-mark brand-mark--footer" href="#top">
            <span className="brand-mark__text">
              NU<span>BANK</span>
            </span>
          </a>
          <strong>Produto ativo: {theme.label}</strong>
          <p>
            Sao Paulo, Brasil
            <br />
            Conta, cartao e experiencia digital
          </p>
          <span className="footer-copyright">
            Copyright (c) 2026 Nubank. All rights reserved.
          </span>
        </div>

        <div className="footer-column">
          <h3>Nubank</h3>
          <a href="#benefits">Cartoes</a>
          <a href="#model">Cartao 3D</a>
          <a href="#cta">Convite</a>
        </div>

        <div className="footer-column">
          <h3>Produtos</h3>
          <a href="#experience">Caixinhas</a>
          <a href="#cards">Nu Empresas</a>
          <a href="#cards">Ultravioleta</a>
        </div>

        <div className="footer-column">
          <h3>Informacoes</h3>
          <a href="#top">Termos</a>
          <a href="#top">Privacidade</a>
          <a href="#top">Seguranca</a>
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            f
          </a>
          <a href="https://www.x.com" target="_blank" rel="noreferrer">
            x
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            i
          </a>
        </div>
      </div>
    </footer>
  )
}
