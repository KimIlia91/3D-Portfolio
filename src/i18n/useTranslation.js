import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];

    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key];
      } else {
        return path;
      }
    }

    return value || path;
  };

  return { t, language };
};
