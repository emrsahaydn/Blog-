import useAppSettings from '../hooks/useAppSettings.js'

const Navbar = () => {
  const { content, language, toggleLanguage, theme, toggleTheme } = useAppSettings()

  return (
    <header className="relative z-10 flex flex-col gap-4 px-4 py-2 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-lg font-semibold text-primary">
          EA
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted md:w-auto md:items-end">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <span>Dark Mode</span>
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-[#d9d4ff] transition"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
                  theme === 'dark' ? 'translate-x-6 bg-primary' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <span className="text-muted">|</span>
          <button onClick={toggleLanguage} className="text-primary">
            {language === 'tr' ? 'ENGLISH' : "TÜRKÇE'YE GEÇ"}
          </button>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted dark:text-white/60">
          {content.navLinks
            .filter((link) => link.id !== 'contact')
            .map((link) => (
              <a key={link.id} href={link.href} className="hover:text-primary">
                {link.label}
              </a>
            ))}
          <a
            href="#contact"
            className="rounded-[6px] border border-primary/40 px-3 py-1.5 text-xs font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
          >
            {language === 'tr' ? 'Beni işe al' : 'Hire me'}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

