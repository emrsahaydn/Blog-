import useAppSettings from '../hooks/useAppSettings.js'

const Profile = () => {
  const { content } = useAppSettings()
  const { profile } = content

  return (
    <section id="profile" className="py-12 dark:bg-[#252128]">
      <div className="space-y-10">
        <h2 className="text-5xl font-semibold text-ink dark:text-[#AEBCCF]">{profile.title}</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-2xl font-semibold text-[#4338CA] dark:text-[#B7AAFF]">{profile.title}</p>
            <dl className="mt-6 space-y-4 text-sm text-muted dark:text-white/70">
              {profile.details.map((detail) => (
                <div key={detail.label} className="flex gap-3 pb-3">
                  <dt className="w-32 font-semibold text-ink dark:text-[#AEBCCF]">{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#4338CA] dark:text-[#B7AAFF]">{profile.aboutTitle}</p>
            <p className="mt-4 text-base text-muted dark:text-white/80">{profile.aboutText}</p>
            <p className="mt-4 text-sm font-medium text-primary">{profile.aboutSubText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile

