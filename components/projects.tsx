'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ExternalLinkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  GithubIcon,
} from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'

export type Project = {
  name: string
  description: string
  link: string | null
  id: string
  github: string
  stack: string[]
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
      onClick={handleCardClick}
    >
      <Spotlight
        className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={64}
      />
      <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
        <div className="relative flex w-full flex-row items-start justify-between">
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <h4 className="font-normal dark:text-zinc-100">{project.name}</h4>
              <div className="flex items-center gap-1">
                {project.link && (
                  <button
                    onClick={(e) => handleLinkClick(e, project.link!)}
                    className="rounded-full p-1 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                    title={`Visit ${project.name} live demo`}
                  >
                    <ExternalLinkIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  </button>
                )}
                <button
                  onClick={(e) => handleLinkClick(e, project.github)}
                  className="rounded-full p-1 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  title={`View ${project.name} on GitHub`}
                >
                  <GithubIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                </button>
              </div>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {project.description}
            </p>
          </div>
          <div className="ml-4 flex items-center gap-2">
            {isExpanded ? (
              <ChevronUpIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            )}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-700">
                <div className="space-y-3">
                  {project.stack.length > 0 && (
                    <div>
                      <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Stack
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <h5 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Links
                    </h5>
                    <div className="flex flex-col gap-1 text-sm">
                      {project.link && (
                        <button
                          onClick={(e) => handleLinkClick(e, project.link!)}
                          className="flex items-center gap-2 text-left text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                        >
                          <ExternalLinkIcon className="h-3 w-3" />
                          Live demo
                        </button>
                      )}
                      <button
                        onClick={(e) => handleLinkClick(e, project.github)}
                        className="flex items-center gap-2 text-left text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                      >
                        <GithubIcon className="h-3 w-3" />
                        Source code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

interface ProjectsSectionProps {
  projects: Project[]
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <div className="flex flex-col space-y-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
