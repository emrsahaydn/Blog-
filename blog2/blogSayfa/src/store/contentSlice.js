import { createSlice } from '@reduxjs/toolkit'
import siteContent from '../data/content.json'

const localizeValue = (value, language) => {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    if (Object.prototype.hasOwnProperty.call(value, language)) {
      return value[language]
    }
  }
  return value
}

const buildLocalizedContent = (language) => {
  const navLinks = siteContent.navLinks.map((link) => ({
    ...link,
    label: localizeValue(link.label, language),
  }))

  const hero = {
    ...siteContent.hero,
    badge: localizeValue(siteContent.hero.badge, language),
    titleLines: localizeValue(siteContent.hero.titleLines, language),
    description: localizeValue(siteContent.hero.description, language),
    note: localizeValue(siteContent.hero.note, language),
    buttons: siteContent.hero.buttons.map((btn) => ({
      ...btn,
      label: localizeValue(btn.label, language),
    })),
  }

  const skillsIntro = {
    title: localizeValue(siteContent.skillsIntro.title, language),
    description: localizeValue(siteContent.skillsIntro.description, language),
  }

  const skills = siteContent.skills.map((skill) => ({
    ...skill,
    title: localizeValue(skill.title, language),
    description: localizeValue(skill.description, language),
  }))

  const profile = {
    ...siteContent.profile,
    title: localizeValue(siteContent.profile.title, language),
    aboutTitle: localizeValue(siteContent.profile.aboutTitle, language),
    aboutText: localizeValue(siteContent.profile.aboutText, language),
    aboutSubText: localizeValue(siteContent.profile.aboutSubText, language),
    details: siteContent.profile.details.map((detail) => ({
      label: localizeValue(detail.label, language),
      value: localizeValue(detail.value, language),
    })),
  }

  const projectsIntro = {
    title: localizeValue(siteContent.projectsIntro.title, language),
    description: localizeValue(siteContent.projectsIntro.description, language),
  }

  const projects = siteContent.projects.map((project) => ({
    ...project,
    description: localizeValue(project.description, language),
  }))

  const contact = {
    ...siteContent.contact,
    title: localizeValue(siteContent.contact.title, language),
    description: localizeValue(siteContent.contact.description, language),
    apiTester: {
      ...siteContent.contact.apiTester,
      title: localizeValue(siteContent.contact.apiTester.title, language),
      button: localizeValue(siteContent.contact.apiTester.button, language),
      success: localizeValue(siteContent.contact.apiTester.success, language),
      error: localizeValue(siteContent.contact.apiTester.error, language),
    },
  }

  return {
    navLinks,
    hero,
    skillsIntro,
    skills,
    profile,
    projectsIntro,
    projects,
    contact,
  }
}

const initialLanguage = 'tr'

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    raw: siteContent,
    localized: buildLocalizedContent(initialLanguage),
  },
  reducers: {
    localizeContent: (state, action) => {
      state.localized = buildLocalizedContent(action.payload || initialLanguage)
    },
  },
})

export const { localizeContent } = contentSlice.actions
export const selectContent = (state) => state.content.localized
export default contentSlice.reducer

