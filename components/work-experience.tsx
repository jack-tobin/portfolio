'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'

export type WorkExperience = {
  company: string
  title: string
  location: string
  start: string
  end: string
  link: string
  id: string
  description: string
  stack: string[]
}

interface WorkExperienceCardProps {
  job: WorkExperience
}

const WorkExperienceCard = ({ job }: WorkExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  const handleExternalLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(job.link, '_blank', 'noopener,noreferrer')
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
            <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
            <div className="mb-1 flex items-center gap-0">
              <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
              <button
                onClick={handleExternalLinkClick}
                className="rounded-full p-1 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                title={`Visit ${job.company} website`}
              >
                <ExternalLinkIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
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
                  <div>
                    <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Dates
                    </h5>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>

                  <div>
                    <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Description
                    </h5>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {job.description}
                    </p>
                  </div>

                  <div>
                    <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Location
                    </h5>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {job.location}
                    </p>
                  </div>

                  {job.stack.length > 0 && (
                    <div>
                      <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Stack
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {job.stack.map((tech, index) => (
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

interface WorkExperienceSectionProps {
  experiences: WorkExperience[]
}

export const WorkExperienceSection = ({
  experiences,
}: WorkExperienceSectionProps) => {
  return (
    <div className="flex flex-col space-y-2">
      {experiences.map((job) => (
        <WorkExperienceCard key={job.id} job={job} />
      ))}
    </div>
  )
}
