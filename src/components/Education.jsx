import { Languages, School } from 'lucide-react'
import { education as ed } from '../data/cv.js'
import { Reveal, SectionTitle } from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="edu-title">
      <div className="container-x">
        <SectionTitle id="edu-title">Education and languages.</SectionTitle>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-fg/10 bg-gradient-to-br from-ink-3 to-ink-2 p-7 sm:p-10">
            <School className="text-lilac" size={28} strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-3xl font-light leading-tight text-mist sm:text-4xl">{ed.degree}</h3>
            <p className="mt-3 text-mist/70">{ed.focus}</p>
            <p className="mt-1 text-mist/70">{ed.school}</p>
            <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
              <div><dt className="text-sm text-mist/50">Graduated</dt><dd className="font-display text-3xl font-light text-lilac">{ed.year}</dd></div>
              {ed.showGpa && <div><dt className="text-sm text-mist/50">GPA</dt><dd className="font-display text-3xl font-light text-lilac">{ed.gpa}</dd></div>}
            </dl>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] border border-fg/10 bg-fg/[0.03] p-7 sm:p-10">
            <Languages className="text-lilac" size={28} strokeWidth={1.5} />
            {ed.languages.map((l) => (
              <div key={l.name} className="mt-6">
                <h3 className="font-display text-3xl font-light text-mist">{l.name}</h3>
                <p className="mt-2 text-mist/70">{l.level}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
