import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '@/app/components/link'
import { Project } from '@/app/types/projects'

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="featured" title="Featured projects" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Are you interested?</span>
          <Link href="/projects" className="inline-flex">
            See all
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
