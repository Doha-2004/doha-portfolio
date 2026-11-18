import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export const stagger = (delay = 0.08) => ({ hidden: {}, show: { transition: { staggerChildren: delay } } })
export const rise = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }

export function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Tag>
  )
}

export function SectionTitle({ id, children, sub }) {
  return (
    <div className="mb-12 max-w-3xl sm:mb-16">
      <h2 id={id} className="font-display text-4xl font-light leading-[1.08] tracking-tight text-mist sm:text-5xl lg:text-6xl">
        {children}
      </h2>
      {sub && <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/65 sm:text-lg">{sub}</p>}
    </div>
  )
}
