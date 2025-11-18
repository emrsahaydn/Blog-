import useAppSettings from '../hooks/useAppSettings.js'

const Footer = () => {
  const { content, language } = useAppSettings()
  const { contact } = content

  return (
    <footer className="bg-gray-50 py-8 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-0">
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-semibold leading-tight text-gray-900 dark:text-white">
            {language === 'en' ? (
              <>
                Let's work together on<br />your next product.
              </>
            ) : (
              <>
                Bir sonraki ürününüzde<br />birlikte çalışalım.
              </>
            )}
          </h2>
          <div className="flex items-center justify-between">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-[#AF0C48] underline"
            >
              <span>✉️</span>
              {contact.email}
            </a>
            <div className="flex gap-4 text-sm font-semibold">
              {contact.socials
                .filter((social) => social.label !== 'Portfolio')
                .map((social) => {
                  const colorMap = {
                    Github: '#00AB6B',
                    Linkedin: '#0077B5',
                  }
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                      style={{ color: colorMap[social.label] || '#5A3DF5' }}
                    >
                      {social.label}
                    </a>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

