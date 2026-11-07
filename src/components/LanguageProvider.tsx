'use client';
import { Language, Translation, translations } from '@/i18n/translations';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load the saved language after the first render to avoid hydration errors
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language | null;
      if (savedLanguage && savedLanguage in translations) {
        setLanguage(savedLanguage);
      }
    } catch {}
  }, []);

  // Remember the choice and update <html lang>
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('language', language);
    } catch {}
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
