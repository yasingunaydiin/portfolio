'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import GitHubIcon from '@/assets/icons/github_logo.png';
import LinkedInIcon from '@/assets/icons/linkedin_logo.png';
import { useLanguage } from '@/components/LanguageProvider';
import Image from 'next/image';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <div id='contactSection' className='py-16 pt-14 lg:py-24'>
      <div className='container'>
        <div className='py-8 px-10 rounded-3xl outline-black/25 outline outline-2 text-center'>
          <h2 className='text-2xl font-semibold'>{t.contact.title}</h2>
          <p className='text-sm mt-2'>{t.contact.subtitle}</p>

          <div className='flex justify-center gap-4 mt-6'>
            <a
              href='https://www.linkedin.com/in/yasin-gunaydin-b45466204/'
              target='_blank'
            >
              <Image src={LinkedInIcon} alt='LinkedIn Icon' width={32} />
            </a>
            <a href='https://github.com/yasingunaydiin' target='_blank'>
              <Image src={GitHubIcon} alt='GitHub Icon' width={32} />
            </a>
          </div>

          <a
            href='mailto:y.gunaydinmail@gmail.com'
            className='inline-flex items-center gap-2 border border-black/50 px-6 h-10 rounded-xl mt-8'
          >
            <span className='font-semibold'>{t.contact.emailMe}</span>
            <ArrowUpRightIcon className='w-4 h-4' />
          </a>
        </div>
      </div>
    </div>
  );
};
