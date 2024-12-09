import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../Lang/en.json';
import ko from '../Lang/ko.json';
import {getBrowserLanguage} from "./PazerModule.tsx";
type TranslationResources = Record<string, { translation: Record<string, string> }>
const resources: TranslationResources = {
    en: { translation: en },
    ko: { translation: ko },
}
export default i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getBrowserLanguage(),
        fallbackLng: getBrowserLanguage,
        interpolation: {
            escapeValue: false,
        },
    })