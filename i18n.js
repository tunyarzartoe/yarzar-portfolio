// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          // Define your translations here
          "Welcome to my app": "Welcome to my app",
          // More translation key-value pairs...
        },
      },
      // Define translations for other languages if needed
    },
    lng: "en", // Set the default language
    fallbackLng: "en", // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
