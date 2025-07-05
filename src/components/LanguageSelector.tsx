
import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { languages, Language } from '@/utils/translations';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <select 
      className="bg-blue-50 border border-blue-300 rounded px-2 py-1 text-xs font-medium ml-2"
      value={language}
      onChange={handleLanguageChange}
    >
      {Object.entries(languages).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
