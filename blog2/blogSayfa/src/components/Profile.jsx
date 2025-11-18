import useAppSettings from '../hooks/useAppSettings.js'
import SectionHeader from './SectionHeader.jsx'

const Profile = () => {
  const { content } = useAppSettings()
  const { profile } = content

  return (
    <section
      id="profile"
      className="rounded-3xl bg-white p-8"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionHeader title={profile.title} />
          <dl className="mt-8 space-y-4 text-sm text-muted dark:text-white/70">
            {profile.details.map((detail) => (
              <div key={detail.label} className="flex gap-3 pb-3">
                <dt className="w-32 font-semibold text-ink dark:text-white">{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-2xl bg-white p-6 dark:bg-white/10">
          <h3 className="text-2xl font-semibold text-ink dark:text-white">{profile.aboutTitle}</h3>
          <p className="mt-4 text-base text-muted dark:text-white/80">{profile.aboutText}</p>
          <p className="mt-4 text-sm font-medium text-primary">{profile.aboutSubText}</p>
        </div>
      </div>
    </section>
  )
}

export default Profile

