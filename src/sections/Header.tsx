import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const Header = () => {
  return (
    <nav className='flex justify-between items-center h-32 px-8 md:px-20 absolute inset-x-0 top-0 z-10'>
      <div className='flex items-center gap-4'>
        <div className='text-2xl cursor-default'>Yasin Gunaydin</div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};
