import useAppSettings from '../hooks/useAppSettings.js'

const Contact = () => {
  const { content, language } = useAppSettings()
  const { contact } = content

  return (
    <section id="contact" className="bg-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-ink dark:text-white">
            {contact.title[language]}
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-[#ff6b35] underline"
          >
            <span>✉️</span>
            {contact.email}
          </a>
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
              alt="Emir Şahin Aydın avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 text-right text-sm font-semibold">
            {contact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

