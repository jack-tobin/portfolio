'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { EMAIL, SOCIAL_LINKS } from './data'

export function Header() {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'github':
        return <Github className="h-5 w-5" />
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Jack Tobin, CFA
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Financial Technologist
        </TextEffect>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={1}
        >
          London, UK
        </TextEffect>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href={`mailto:${EMAIL}`}
          className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
          title="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.link}
            className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {getIcon(link.label)}
          </a>
        ))}
      </div>
    </header>
  )
}
