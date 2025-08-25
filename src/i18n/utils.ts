import trTranslations from './tr.json';
import enTranslations from './en.json';

const translations = {
  tr: trTranslations,
  en: enTranslations,
};

export function getTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.tr;
}

export function t(locale: string, key: string) {
  const trans = getTranslations(locale);
  const keys = key.split('.');
  let result: any = trans;
  
  for (const k of keys) {
    result = result?.[k];
  }
  
  return result || key;
}