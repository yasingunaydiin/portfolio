'use client';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import memojiImage from '@/assets/images/memoji-computer2.png';
import { useLanguage } from '@/components/LanguageProvider';
import Image from 'next/image';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const projectSection = document.getElementById('projectsSection');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactSection');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='py-28 ml-2 md:py-52 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className='size-[700px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-indigo-300/5 shadow-[0_0_80px_inset] shadow-white'></div>
        <div className='size-[850px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-indigo-300/5 shadow-[0_0_80px_inset] shadow-white'></div>
        <div className='size-[1050px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-indigo-300/5 shadow-[0_0_80px_inset] shadow-white'></div>
        <div className='size-[1250px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-indigo-300/5 shadow-[0_0_80px_inset] shadow-white'></div>
      </div>
      <div className='container max-w-[900px]'>
        <div className='flex flex-col items-center mb-2'>
          <Image
            src={memojiImage}
            className='size-[100px] md:size-[150px]'
            alt='Person peeking from behind laptop'
          />
          <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 animate-pulse'>
            {t.hero.availableForWork}
          </span>
        </div>
        <p className='text-4xl font-light text-center md:text-5xl'>
          {t.hero.intro}
          <span className='group relative inline-block'>
            <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
              {t.hero.introHover}
            </span>
          </span>
        </p>
        <div className='buttons flex flex-col md:flex-row md:mt-20 justify-center items-center mt-16 gap-3'>
          <button
            className='inline-flex items-center gap-2 border border-black/15 px-6 h-10 rounded-xl z-20'
            onClick={scrollToProjects}
          >
            <span className='font-semibold'>{t.hero.exploreMyWork}</span>
            <ArrowDown className='size-4' />
          </button>
          <button
            className='inline-flex items-center gap-2 border border-black/15 px-6 h-10 rounded-xl z-20'
            onClick={scrollToContact}
          >
            <span>👋🏻</span>
            <span className='font-semibold'>{t.hero.letsConnect}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
