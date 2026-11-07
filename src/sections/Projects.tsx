'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import autoketelhuisPage from '@/assets/images/autoketelhuis-landing-page.png';
import autocentrumgelderlandPage from '@/assets/images/autocentrumgelderland-landing-page.png';
import illumicheckPage from '@/assets/images/illumicheck-landing-page.png';
import islanacakmiyimPage from '@/assets/images/islanacak-miyim-landing-page.png';
import progressiondexPage from '@/assets/images/progressiondex-landing-page.png';
import regexorcistPage from '@/assets/images/regexorcist-landing-page.png';
import yukilanlariPage from '@/assets/images/yukilanlari-landing-page.png';
import { useLanguage } from '@/components/LanguageProvider';
import { Translation } from '@/i18n/translations';
import Image from 'next/image';

type ProjectId = keyof Translation['projects']['items'];

const portfolioProjects = [
  {
    id: 'autoketelhuis' as ProjectId,
    year: '2026',
    title: "Auto 't Ketelhuis",
    badges: [
      {
        text: 'HTML',
        color:
          'inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10',
      },
      {
        text: 'CSS',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'JavaScript',
        color:
          'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
      },
    ],
    link: 'https://autoketelhuis.nl',
    image: autoketelhuisPage,
  },
  {
    id: 'autocentrumgelderland' as ProjectId,
    year: '2026',
    title: 'Autocentrum Gelderland',
    badges: [
      {
        text: 'WordPress',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Elementor',
        color:
          'inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10',
      },
      {
        text: 'TranslatePress',
        color:
          'inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10',
      },
    ],
    link: 'https://autocentrumgelderland.nl',
    image: autocentrumgelderlandPage,
  },
  {
    id: 'yukilanlari' as ProjectId,
    year: '2024',
    title: 'Yükilanları.net',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
      {
        text: 'TypeScript',
        color:
          'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
      },
      {
        text: 'MongoDB',
        color:
          'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20',
      },
      {
        text: 'WorkOS',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
    ],
    link: 'https://www.yukilanlari.net',
    image: yukilanlariPage,
  },
  {
    id: 'islanacakmiyim' as ProjectId,
    year: '2024',
    title: 'Islanacak mıyım?',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
      {
        text: 'TypeScript',
        color:
          'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
      },
      {
        text: 'Leaflet',
        color:
          'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20',
      },
    ],
    link: 'https://islanacakmiyim.vercel.app',
    image: islanacakmiyimPage,
  },
  {
    id: 'progressiondex' as ProjectId,
    year: '2024',
    title: 'Progression Dex',
    badges: [
      {
        text: 'HTML',
        color:
          'inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10',
      },
      {
        text: 'CSS',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'JavaScript',
        color:
          'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
      },
    ],
    link: 'https://www.progressiondex.com',
    image: progressiondexPage,
  },
  {
    id: 'illumicheck' as ProjectId,
    year: '2024',
    title: 'Illumicheck',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
    ],
    link: 'https://illumicheck-landing-page.vercel.app/',
    image: illumicheckPage,
  },
  {
    id: 'regexorcist' as ProjectId,
    year: '2024',
    title: 'Regexorcist',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
    ],
    link: 'https://regexorcist-landing-page.vercel.app/',
    image: regexorcistPage,
  },
];

export const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section className='pb-16 lg:py-28'>
      <div id='projectsSection' className='container'>
        <h2 className='text-3xl text-center md:text-5xl mt-6'>
          {t.projects.title}
        </h2>
        <p className='text-base text-center md:text-2xl mt-3'>
          {t.projects.subtitle}
        </p>
        <div className='mt-5 md:mt-10 flex flex-col gap-14'>
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="rounded-3xl z-0 overflow-hidden bg-white after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/25 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px` /* Stacking cards */,
              }}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='pointer-events-none items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.year}</span>
                    {project.badges.map((badge) => (
                      <span key={badge.text} className={badge.color}>
                        {badge.text}
                      </span>
                    ))}
                  </div>
                  <h3 className='text-2xl mt-2 md:text-4xl md:mt-5'>
                    {project.title}
                  </h3>
                  <h3 className='text-xs md:text-sm'>
                    {t.projects.items[project.id].smallTitle}
                  </h3>
                  <hr className='border-t-2 border-black/5 mt-4' />
                  <ul className='flex flex-col gap-2 mt-4 md:mt-5'>
                    {t.projects.items[project.id].descriptions.map((description) => (
                      <li
                        key={description}
                        className='flex gap-2 text-sm md:text-base'
                      >
                        <CheckCircleIcon className='size-5 md:size-6 shrink-0' />
                        <span>{description}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link} // Link is dynamically set from project data
                    target='_blank' // Open in new tab
                    rel='noopener noreferrer' // Security enhancement
                    className='border border-black/15 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-8'
                  >
                    <span>{t.projects.visitLiveSite}</span>
                    <ArrowUpRightIcon className='size-4' />
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className={`mt-5 mx-auto lg:mt-0 lg:w-3/5 lg:h-auto lg:absolute md:mb-5 mb-5 md:w-3/5 md:h-auto'
                        : 'lg:h-full lg:w-auto'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
