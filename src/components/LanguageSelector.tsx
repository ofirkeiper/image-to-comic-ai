
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '../contexts/TranslationContext';
import { languages, Language } from '../utils/translations';

const LanguageSelector = () => {
  const { language, setLanguage } = useTranslation();

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="bg-blue-50 border border-blue-300 rounded px-3 py-2 text-xs font-medium min-w-[100px]">
        <SelectValue>
          {languages.find(lang => lang.code === language)?.flag} {languages.find(lang => lang.code === language)?.code.toUpperCase()}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white border border-blue-300 rounded shadow-lg z-50">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} className="flex items-center gap-2 px-3 py-2 hover:bg-blue-50 cursor-pointer">
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
