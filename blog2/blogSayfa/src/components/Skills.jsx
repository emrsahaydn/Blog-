import SectionHeader from './SectionHeader.jsx'
import useAppSettings from '../hooks/useAppSettings.js'

const Skills = () => {
  const { content } = useAppSettings()

  return (
    <section
      id="skills"
      className="rounded-3xl bg-white p-8"
    >
      <SectionHeader title={content.skillsIntro.title} description={content.skillsIntro.description} />
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {content.skills.map((skill) => (
          <article
            key={skill.id}
            className="flex h-full flex-col justify-between pb-6 text-muted dark:text-white/70"
          >
            <h3 className="mb-3 text-xl font-semibold text-ink dark:text-white">{skill.title}</h3>
            <p className="text-sm leading-relaxed">{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills

