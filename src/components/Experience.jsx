import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { experience } from '../data/cv.js'
import { Reveal, SectionTitle } from './Reveal.jsx'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.2 })

  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <div className="container-x">
        <SectionTitle id="exp-title" sub="Teaching, and front-end work on four platforms.">Where I have been building.</SectionTitle>

        <ol ref={ref} className="relative ml-3 space-y-12 sm:ml-0 sm:pl-0">
          <span aria-hidden="true" className="absolute bottom-2 left-0 top-2 w-px bg-fg/10 sm:left-[11.5rem]" />
          <motion.span aria-hidden="true" style={{ scaleY }} className="absolute bottom-2 left-0 top-2 w-px origin-top bg-gradient-to-b from-lilac to-blush sm:left-[11.5rem]" />

          {experience.map((e, i) => (
            <li key={i} className="relative pl-8 sm:grid sm:grid-cols-[11.5rem_1fr] sm:gap-0 sm:pl-0">
              <Reveal className="mb-2 text-sm font-semibold text-lilac sm:mb-0 sm:pr-10 sm:pt-1 sm:text-right">{e.when}</Reveal>
              <span aria-hidden="true" className="absolute -left-[5px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-lilac bg-ink sm:left-[11.5rem] sm:-ml-[5px]" />
              <Reveal delay={0.05} className="sm:pl-10">
                <h3 className="font-display text-2xl font-light text-mist sm:text-3xl">{e.role}</h3>
                <p className="mt-1 text-[15px] font-semibold text-mist/60">{e.org}</p>
                <ul className="mt-4 max-w-2xl space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-mist/70">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-lilac/60" />
                      {p}
                    </li>
                  ))}
                </ul>
                {e.tech.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {e.tech.map((t) => <li key={t} className="chip text-[13px]">{t}</li>)}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
