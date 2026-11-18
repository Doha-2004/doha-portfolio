import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}

const ids = links.map(([id]) => id)


export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => {
      window.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-500 ${
        scrolled || open ? 'bg-ink/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#home" className="font-display text-xl font-semibold tracking-tight text-mist" onClick={() => setOpen(false)}>
          Doha<span className="text-lilac">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'page' : undefined}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-mist/70 transition-colors hover:text-mist aria-[current=page]:text-mist"
              >
                {active === id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-fg/[0.08]" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary hidden !min-h-[42px] !px-5 !text-sm md:inline-flex">
          Hire me
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-fg/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'calc(100dvh - 4rem)', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pt-6">
              {links.map(([id, label], i) => (
                <motion.li key={id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.05 }}>
                  <a href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-fg/10 py-4 font-display text-3xl font-light text-mist">
                    {label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-6">
                <a href="/Doha_Emad_CV.pdf" download="Doha_Emad_CV.pdf" onClick={() => setOpen(false)} className="btn btn-primary w-full">Download CV</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
