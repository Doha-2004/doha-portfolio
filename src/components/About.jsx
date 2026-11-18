import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { about } from '../data/cv.js'
import { Reveal, SectionTitle, stagger, rise } from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle id="about-title">{about.heading}</SectionTitle>
          <Reveal className="hidden items-start gap-4 rounded-3xl border border-fg/10 bg-fg/[0.03] p-6 lg:flex">
            <GraduationCap className="mt-1 shrink-0 text-lilac" size={22} />
            <p className="text-[15px] leading-relaxed text-mist/70">{about.teaching}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="max-w-2xl font-display text-xl font-light leading-[1.6] text-mist/85 sm:text-2xl">{p}</p>
              </Reveal>
            ))}
          </div>

          <motion.dl variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {about.stats.map((s, i) => (
              <motion.div key={s.label} variants={rise} className={`rounded-3xl border border-fg/10 p-6 ${i === 1 ? 'bg-lilac/10 sm:translate-y-6' : 'bg-fg/[0.03]'}`}>
                <dd className="font-display text-5xl font-light text-lilac">{s.value}</dd>
                <dt className="mt-3 text-sm leading-snug text-mist/65">{s.label}</dt>
              </motion.div>
            ))}
          </motion.dl>

          <Reveal className="mt-14 flex items-start gap-4 rounded-3xl border border-fg/10 bg-fg/[0.03] p-6 sm:mt-16 lg:hidden">
            <GraduationCap className="mt-1 shrink-0 text-lilac" size={22} />
            <p className="text-[15px] leading-relaxed text-mist/70">{about.teaching}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
