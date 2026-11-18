import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/cv.js'

export default function Footer() {
  const links = [
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ]
  return (
    <footer className="border-t border-fg/10 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-mist/50">© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.</p>
        <ul className="flex gap-2">
          {links.map(({ icon: I, href, label }) => (
            <li key={label}>
              <a href={href} aria-label={label} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="grid h-11 w-11 place-items-center rounded-full border border-fg/10 text-mist/70 transition-colors hover:border-lilac/60 hover:text-lilac">
                <I size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
