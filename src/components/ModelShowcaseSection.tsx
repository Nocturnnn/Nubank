import { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'

import type { ThemeConfig } from '../types/theme'
import { Card3D } from './Card3D'
import { Reveal } from './Reveal'

type ModelShowcaseSectionProps = {
  theme: ThemeConfig
}

const storyBlocks = [
  {
    title: 'Arquivo GLB real',
    text: 'O cartao 3D entra como um produto real no meio da landing, em vez de ficar apenas como mockup plano.',
  },
  {
    title: 'Movimento ligado ao scroll',
    text: 'Ao descer pela secao, a peca gira, muda de profundidade e reforca o acabamento premium.',
  },
  {
    title: 'Luz adaptada ao tema',
    text: 'A iluminacao e o brilho acompanham o cartao ativo para manter o visual coerente com Classico, UV e Empresas.',
  },
]

export function ModelShowcaseSection({ theme }: ModelShowcaseSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const viewerY = useTransform(scrollYProgress, [0, 1], [56, -56])

  return (
    <section className="model-section" id="model" ref={sectionRef}>
      <div className="section-shell model-section__layout">
        <Reveal className="model-section__copy">
          <span className="section-kicker">Cartao Nubank em 3D</span>
          <h2 className="editorial-title editorial-title--compact">
            O CARTAO GANHA VOLUME E MOVIMENTO AO LONGO DA ROLAGEM
          </h2>
          <p className="editorial-text">
            A secao usa o modelo real em `src/assets/3d` para trazer mais
            materialidade ao site. Ele entra como uma peca de produto entre os
            blocos editoriais, sem quebrar a composicao limpa da pagina.
          </p>

          <div className="model-section__story">
            {storyBlocks.map((block) => (
              <article key={block.title} className="model-story-card">
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <motion.div className="model-section__viewer" style={{ y: viewerY }}>
          <div className="model-section__sticky">
            <Card3D theme={theme} progress={scrollYProgress} />
            <div className="model-stage__caption">
              <span>Cartao ativo</span>
              <strong>{theme.card.name}</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
