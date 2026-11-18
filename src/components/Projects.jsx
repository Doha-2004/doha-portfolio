import { motion } from 'framer-motion'
import { ArrowUpRight, Boxes, BookOpen, Car, Dices, Github, Trophy } from 'lucide-react'
import { projects } from '../data/cv.js'
import { SectionTitle, stagger, rise } from './Reveal.jsx'

const icons = { trophy: Trophy, book: BookOpen, dice: Dices, car: Car, boxes: Boxes }

function Card({ p, index }) {
  const Icon = icons[p.icon] || Boxes
  const big = index === 0
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <motion.article
      variants={rise}
      onPointerMove={onMove}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-fg/10 bg-ink-2/70 p-6 sm:p-9 ${big ? 'lg:col-span-2 lg:flex-row lg:gap-12' : ''}`}
    >
      <div aria-hidden="true" className="spot pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className={`relative ${big ? 'lg:w-[44%]' : ''}`}>
        <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-lilac/30 bg-lilac/10 text-lilac transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
          <Icon size={26} strokeWidth={1.6} />
        </div>
        {p.featured && <span className="mb-3 inline-block rounded-full bg-blush/15 px-3 py-1 text-xs font-semibold text-blush">Live on Vercel</span>}
        <h3 className={`font-display font-light leading-tight text-mist ${big ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{p.name}</h3>
        <p className="mt-2 text-sm font-semibold text-lilac">{p.kind}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-mist/70">{p.desc}</p>
      </div>

      <div className={`relative flex flex-1 flex-col ${big ? 'lg:justify-between' : 'mt-6'}`}>
        <ul className={`space-y-2.5 ${big ? 'mt-6 lg:mt-0' : ''}`}>
          {p.features.map((f) => (
            <li key={f} className="flex gap-3 text-sm leading-relaxed text-mist/75">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lilac" />
              {f}
            </li>
          ))}
        </ul>

        <div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.tech.map((t) => <li key={t} className="chip text-xs">{t}</li>)}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-[44px] !px-5 !text-sm">
                Live demo <ArrowUpRight size={16} />
                <span className="sr-only"> of {p.name} (opens in a new tab)</span>
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-[44px] !px-5 !text-sm">
                <Github size={16} /> GitHub
                <span className="sr-only"> repository of {p.name} (opens in a new tab)</span>
              </a>
            )}
            {!p.live && !p.github && <span className="text-sm text-mist/45">Client work, no public link</span>}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section bg-ink-2/60" aria-labelledby="projects-title">
      <div className="container-x">
        <SectionTitle id="projects-title" sub="Three live React apps first, then platform work and a C# console project.">Selected projects.</SectionTitle>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => <Card key={p.name} p={p} index={i} />)}
        </motion.div>
      </div>
    </section>
  )
}
