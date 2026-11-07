'use client';
import FlagGB from '@/assets/icons/flag-gb.svg';
import FlagNL from '@/assets/icons/flag-nl.svg';
import FlagTR from '@/assets/icons/flag-tr.svg';
import { useLanguage } from '@/components/LanguageProvider';
import { Language } from '@/i18n/translations';
import { twMerge } from 'tailwind-merge';

const languages: {
  code: Language;
  label: string;
  flag: React.ElementType;
}[] = [
  { code: 'en', label: 'English', flag: FlagGB },
  { code: 'nl', label: 'Nederlands', flag: FlagNL },
  { code: 'tr', label: 'Türkçe', flag: FlagTR },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className='flex items-center gap-2'>
      {languages.map((item) => {
        const Flag = item.flag;
        return (
          <button
            key={item.code}
            onClick={() => setLanguage(item.code)}
            aria-label={item.label}
            aria-pressed={language === item.code}
            title={item.label}
            className={twMerge(
              'rounded-sm overflow-hidden outline outline-2 outline-offset-1 transition-opacity duration-300 ease-in-out',
              language === item.code
                ? 'opacity-100 outline-black/25'
                : 'opacity-50 outline-transparent hover:opacity-100'
            )}
          >
            <Flag className='w-6 h-4 block' />
          </button>
        );
      })}
    </div>
  );
};
