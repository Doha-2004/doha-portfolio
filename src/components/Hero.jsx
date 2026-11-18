import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, Download, MousePointer2 } from 'lucide-react'
import { profile } from '../data/cv.js'

const ease = [0.22, 1, 0.36, 1]

function Word({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, ease, delay }}>
        {children}
      </motion.span>
    </span>
  )
}

function RotatingRole() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative inline-block h-[1.35em] overflow-hidden align-bottom text-lilac" aria-live="off">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[i]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="block whitespace-nowrap"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const chips = [
  { t: 'React.js', cls: 'left-[-4%] top-[12%]', d: 0 },
  { t: 'REST APIs', cls: 'right-[-2%] top-[34%]', d: 1.2 },
  { t: 'ASP.NET Core integration', cls: 'left-[-10%] bottom-[16%] hidden sm:inline-flex', d: 0.6 },
  { t: 'Vite', cls: 'right-[2%] bottom-[6%]', d: 1.8 },
]

function Portrait() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <div className="relative mx-auto w-[min(72vw,300px)] sm:w-[340px] lg:w-[min(34vw,460px)]" style={{ perspective: 1000 }}>
      <motion.div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-lilac/20 blur-3xl"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />

      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, aspectRatio: '3 / 4', transformStyle: 'preserve-3d' }}
        className="group relative will-change-transform"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, clipPath: 'inset(100% -20% -20% -20%)' }}
          animate={{ opacity: 1, clipPath: 'inset(-20% -20% -20% -20%)' }}
          transition={{ duration: 1.3, ease, delay: 0.35 }}
        >
          <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-[2rem] border border-lilac/40 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5 sm:translate-x-4 sm:translate-y-4" />
          <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-ink-2 ring-1 ring-fg/15">
            <img
              src="/images/doha-sm.webp"
              srcSet="/images/doha-sm.webp 543w, /images/doha.webp 1086w"
              sizes="(min-width:1024px) 460px, (min-width:640px) 340px, 300px"
              width="1086"
              height="1448"
              alt="Portrait of Doha Emad"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07112A]/55 via-transparent to-transparent" />
          </div>
        </motion.div>

        {chips.map((c) => (
          <motion.span
            key={c.t}
            className={`chip absolute z-10 whitespace-nowrap bg-ink/80 text-[13px] font-semibold backdrop-blur-md ${c.cls}`}
            style={{ translateZ: 40 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{ opacity: { delay: 1.5 + c.d * 0.2 }, scale: { delay: 1.5 + c.d * 0.2 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: c.d } }}
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blush" />
            {c.t}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="grain relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32" aria-labelledby="hero-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-lilac-deep/25 blur-[110px]" animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute -bottom-52 -left-40 h-[30rem] w-[30rem] rounded-full bg-blush/15 blur-[120px]" animate={{ x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="order-1">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mb-5 flex items-center gap-3 text-sm font-medium text-mist/70 sm:text-base">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lilac/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lilac" />
            </span>
            Open to on-site and remote junior roles
          </motion.p>

          <h1 id="hero-title" className="font-display text-[clamp(3.6rem,13vw,8.5rem)] font-light leading-[0.92] tracking-[-0.03em] text-mist">
            <span className="sr-only">{profile.name}, {profile.title}</span>
            <span aria-hidden="true">
              <Word delay={0.3}>Doha</Word>
              <Word delay={0.45}><span className="italic text-lilac">Emad</span></Word>
            </span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8, ease }} className="mt-7 font-display text-2xl font-light text-mist sm:text-3xl">
            {profile.title}
            <span className="mt-1 block">building <RotatingRole /></span>
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8, ease }} className="mt-5 max-w-xl text-base leading-relaxed text-mist/65 sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8, ease }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn btn-primary">View projects <ArrowDown size={18} /></a>
            <a href="#contact" className="btn btn-ghost">Contact me</a>
            <a href="/Doha_Emad_CV.pdf" download="Doha_Emad_CV.pdf" className="btn btn-ghost"><Download size={18} /> Download CV</a>
          </motion.div>
        </div>

        <div className="order-2 pb-6">
          <Portrait />
        </div>
      </div>

      <motion.a href="#about" aria-label="Scroll to About" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-mist/50 lg:flex">
        <MousePointer2 size={14} /> Scroll
      </motion.a>
    </section>
  )
}
