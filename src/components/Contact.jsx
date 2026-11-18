import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/cv.js'
import { Reveal } from './Reveal.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard unavailable: the mailto link still works */ }
  }

  const rows = [
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Github, label: 'github.com/Doha-2004', href: profile.github, ext: true },
    { icon: Linkedin, label: 'LinkedIn profile', href: profile.linkedin, ext: true },
    { icon: MapPin, label: profile.location },
  ]

  return (
    <section id="contact" className="grain section relative overflow-hidden" aria-labelledby="contact-title">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-lilac-deep/20 blur-[120px]" />
      <div className="container-x">
        <Reveal>
          <h2 id="contact-title" className="max-w-4xl font-display text-[clamp(2.8rem,9vw,6.5rem)] font-light leading-[0.98] tracking-tight text-mist">
            Looking for a junior front-end developer? <span className="italic text-lilac">Let's talk.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={`mailto:${profile.email}`} className="btn btn-primary !min-h-[56px] !px-8 !text-base">
            <Mail size={20} /> {profile.email}
          </a>
          <button type="button" onClick={copy} className="btn btn-ghost !min-h-[56px]" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={copied ? 'c' : 'n'} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }} className="inline-flex items-center gap-2">
                {copied ? <><Check size={18} /> Copied</> : <><Copy size={18} /> Copy email</>}
              </motion.span>
            </AnimatePresence>
          </button>
          <a href="/Doha_Emad_CV.pdf" download="Doha_Emad_CV.pdf" className="btn btn-ghost !min-h-[56px]">
            <Download size={18} /> Download CV
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rows.map(({ icon: I, label, href, ext }) => {
              const inner = (<><I size={20} className="shrink-0 text-lilac" /><span className="break-all text-[15px]">{label}</span></>)
              const cls = 'flex items-center gap-3 rounded-2xl border border-fg/10 bg-fg/[0.03] px-5 py-4 text-mist/85'
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={`${cls} transition-colors hover:border-lilac/60 hover:bg-lilac/10`}>{inner}</a>
                  ) : <div className={cls}>{inner}</div>}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
