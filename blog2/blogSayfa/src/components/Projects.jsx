import useAppSettings from '../hooks/useAppSettings.js'
import SectionHeader from './SectionHeader.jsx'

const Projects = () => {
  const { content } = useAppSettings()

  return (
    <section
      id="projects"
      className="py-12 dark:bg-[#252128]"
    >
      <SectionHeader title={content.projectsIntro.title} description={content.projectsIntro.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {content.projects.map((project) => (
          <article
            key={project.id}
            className="p-6"
          >
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" loading="lazy" />
            <div className="mt-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-[#4338CA] dark:text-[#CFCBFF]">{project.title}</h3>
              <p className="text-sm text-muted dark:text-white/70">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-[#4338CA] px-3 py-1 text-xs font-semibold text-[#4338CA] dark:border-[#8F88FF] dark:text-[#8F88FF]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between gap-3 text-sm font-semibold text-[#4338CA] dark:text-[#E1E1FF]">
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

