import useAppSettings from '../hooks/useAppSettings.js'
import githubIcon from '../assets/github.png'
import linkedinIcon from '../assets/linkedin.png'

const buttonStyles = {
  primary: 'bg-primary text-white hover:bg-primary/90 dark:bg-[#E1E1FF] dark:text-[#3730A3] dark:hover:bg-[#cfc7ff]',
  outline:
    'border border-primary/40 text-primary hover:border-primary hover:bg-primary/10 dark:border-transparent dark:bg-[#383838] dark:text-[#E1E1FF] dark:hover:bg-[#4a4a4a]',
}

const buttonIcons = {
  Github: githubIcon,
  Linkedin: linkedinIcon,
}

const Hero = () => {
  const { content } = useAppSettings()
  const { hero } = content

  return (
    <section
      id="hero"
      className="grid gap-10 py-12 lg:grid-cols-[1.05fr,0.95fr]"
    >
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.4em] text-primary dark:text-[#B7AAFF]">
          <span className="h-[2px] w-14 bg-primary dark:bg-[#B7AAFF]" />
          {hero.badge}
        </div>
        <div className="space-y-2 text-4xl font-semibold leading-tight text-ink dark:text-[#AEBCCF] sm:text-5xl">
          {hero.titleLines.map((line, index) => (
            <p key={line + index} className="dark:text-[#AEBCCF]">
              {line}
            </p>
          ))}
        </div>
        <p className="max-w-xl text-base text-muted dark:text-white/70">{hero.description}</p>
        <div className="flex flex-wrap gap-3">
          {hero.buttons.map((button) => {
            const icon = buttonIcons[button.label] || null
            return (
              <a
                key={button.href}
                href={button.href}
                className={`inline-flex items-center justify-center gap-2 rounded-[6px] px-6 py-3 text-sm font-semibold transition ${buttonStyles[button.variant] || buttonStyles.outline} min-w-[120px]`}
                target={button.href.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
              >
                {icon && <img src={icon} alt={`${button.label} icon`} className="h-5 w-5" />}
                {button.label}
              </a>
            )
          })}
        </div>
        <p className="text-sm font-medium text-muted dark:text-white/60">{hero.note}</p>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-[30px] border border-black/5 dark:border-white/10">
          <img
            src={hero.image}
            alt="Emir Şahin Aydın working on laptop"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

