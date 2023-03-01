import i18n from 'i18next';
import fr from './translations/fr.json';
import en from './translations/en.json';
import { initReactI18next } from 'react-i18next';

const resources = { fr, en };

i18n.use(initReactI18next).init({
    resources: resources,
    //lng: 'en',
    lng: window.navigator.language,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    debug: true
});

export default i18n;