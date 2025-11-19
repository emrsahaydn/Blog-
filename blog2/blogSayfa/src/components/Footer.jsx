import useAppSettings from '../hooks/useAppSettings.js'

const Footer = () => {
  const { content, language } = useAppSettings()
  const { contact } = content

  return (
    <footer className="bg-[#F9F9F9] py-10 dark:bg-[#141414]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-0">
        <div className="flex-1 space-y-8">
          <h2 className="mb-4 text-3xl font-semibold leading-tight text-gray-900 dark:text-[#AEBCCF]">
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
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-[#AF0C48] dark:text-[#BAB2E7] no-underline"
            >
              <span>👉</span>
              <span>{contact.email}</span>
            </a>
            <div className="flex flex-wrap items-center gap-4 text-[18px] font-semibold">
              <span className="text-gray-900 dark:text-[#AEBCCF]">Personal Blog</span>
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
                      className="hover:text-primary"
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

