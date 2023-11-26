import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { LANGUAGES } from '@/constants/languages'
import en from '../../../public/locales/en.json'
import vi from '../../../public/locales/vi.json'
import { convertLanguageJsonToObject } from './translation'

export const translationsJson = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
}

export const translation = convertLanguageJsonToObject(en)

export const i18n = i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    lng: `${window.localStorage.getItem('i18nextLng') || LANGUAGES.en}`,
    debug: !import.meta.env.PROD,
    returnNull: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })
