import useAppSettings from '../hooks/useAppSettings.js'

const Navbar = () => {
  const { content, language, toggleLanguage, theme, toggleTheme } = useAppSettings()

  return (
    <header className="relative z-10 flex flex-col gap-4 px-4 py-2 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-lg font-semibold text-primary dark:bg-[#4731D3] dark:text-[#8F88FF]">
          EA
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3 text-[10px] font-semibold tracking-[0.3em] text-muted md:w-auto md:items-end">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-4 w-9 items-center rounded-full transition ${
                theme === 'dark' ? 'bg-[#2B2535]' : 'bg-[#4338CA]'
              }`}
            >
              <span
                className={`inline-flex h-3.5 w-3.5 transform items-center justify-center rounded-full shadow transition ${
                  theme === 'dark' ? 'translate-x-5 bg-[#FFE97F] text-[#4B3C7A]' : 'translate-x-1 bg-[#FFE97F]'
                }`}
              >
                {theme === 'dark' ? '🌙' : ''}
              </span>
            </button>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
              {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
            </span>
          </div>
          <span className="text-muted">|</span>
          <button onClick={toggleLanguage} className="text-primary">
            {language === 'tr' ? 'ENGLISH' : "TÜRKÇE'YE GEÇ"}
          </button>
        </div>
        <nav className="flex flex-wrap items-center gap-[3rem] text-[0.65rem] font-medium text-muted dark:text-white/60">
          {content.navLinks
            .filter((link) => link.id !== 'contact')
            .map((link) => (
              <a key={link.id} href={link.href} className="normal-case capitalize hover:text-primary">
                {link.label}
              </a>
            ))}
          <a
            href="#contact"
            className={`rounded-[6px] border px-3 py-1.5 text-[0.65rem] font-semibold transition ${
              theme === 'dark'
                ? 'border-white/30 bg-white text-[#3730A3]'
                : 'border-primary/40 text-primary hover:border-primary hover:bg-primary/5'
            }`}
          >
            {language === 'tr' ? 'Beni işe al' : 'Hire me'}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

