import useAppSettings from '../hooks/useAppSettings.js'
import SectionHeader from './SectionHeader.jsx'

const Projects = () => {
  const { content } = useAppSettings()

  return (
    <section
      id="projects"
      className="rounded-3xl bg-white p-8"
    >
      <SectionHeader title={content.projectsIntro.title} description={content.projectsIntro.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {content.projects.map((project) => (
          <article key={project.id} className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-white/5">
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" loading="lazy" />
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-xl font-semibold text-ink dark:text-white">{project.title}</h3>
              <p className="text-sm text-muted dark:text-white/70">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary dark:bg-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between gap-3 text-sm font-semibold text-primary">
                <a href={project.github} target="_blank" rel="noreferrer" className="hover:underline">
                  Github
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="hover:underline">
                  View Site
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

