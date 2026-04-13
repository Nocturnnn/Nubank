import type { ReactNode } from 'react'

type BrowserFrameProps = {
  children: ReactNode
}

export function BrowserFrame({ children }: BrowserFrameProps) {
  return (
    <div className="browser-shell">
      <div className="browser-shell__toolbar" aria-hidden="true">
        <div className="browser-shell__traffic">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-shell__navicons">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-shell__address">nubank.com.br/futuro-roxo</div>

        <div className="browser-shell__toolbar-actions">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="browser-shell__body">{children}</div>
    </div>
  )
}
