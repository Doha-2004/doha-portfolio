import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skills } from '../data/cv.js'
import { SectionTitle, Reveal } from './Reveal.jsx'

export default function Skills() {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  const onKey = (e) => {
    const n = skills.length
    let next = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (active + 1) % n
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (active - 1 + n) % n
    if (next !== null) {
      e.preventDefault()
      setActive(next)
      refs.current[next]?.focus()
    }
  }

  return (
    <section id="skills" className="section bg-ink-2/60" aria-labelledby="skills-title">
      <div className="container-x">
        <SectionTitle id="skills-title" sub="Pick a category to see what I work with.">The toolbox, grouped by what it does.</SectionTitle>

        <Reveal className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-14">
          <div role="tablist" aria-label="Skill categories" onKeyDown={onKey}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {skills.map((s, i) => (
              <button
                key={s.name}
                ref={(el) => (refs.current[i] = el)}
                role="tab"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls="skill-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative shrink-0 rounded-full px-5 py-3 text-left text-[15px] font-semibold transition-colors lg:rounded-2xl lg:py-4 ${active === i ? 'text-on-accent' : 'text-mist/70 hover:text-mist'}`}
              >
                {active === i && <motion.span layoutId="skill-bg" className="absolute inset-0 -z-0 rounded-full bg-lilac lg:rounded-2xl" transition={{ type: 'spring', stiffness: 380, damping: 34 }} />}
                <span className="relative z-10 flex items-center justify-between gap-4">
                  {s.name}
                  <span className={`hidden text-xs font-medium lg:inline ${active === i ? 'text-on-accent/70' : 'text-mist/35'}`}>{s.items.length}</span>
                </span>
              </button>
            ))}
          </div>

          <div id="skill-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="min-h-[260px] rounded-[2rem] border border-fg/10 bg-ink/70 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.ul key={active} className="flex flex-wrap gap-3"
                initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.15 } }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045 } } }}>
                {skills[active].items.map((it) => (
                  <motion.li key={it} variants={{ hidden: { opacity: 0, y: 14, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1 } }}
                    whileHover={{ y: -4 }} data-hover
                    className="rounded-2xl border border-fg/10 bg-fg/[0.04] px-5 py-3 font-display text-lg font-light text-mist transition-colors hover:border-lilac/60 hover:bg-lilac/10 sm:text-xl">
                    {it}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
