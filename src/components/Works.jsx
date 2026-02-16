import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { getProjects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useTranslation } from '../i18n';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link_icon,
  source_code_link,
  site_link,
}) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img src={image} alt={name} className='w-full h-full object-contain bg-gray-900 rounded-2xl' />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
          {site_link && (
            <div
              onClick={() => window.open(site_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              title='Посетить сайт'
            >
              <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
              </svg>
            </div>
          )}
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={source_code_link_icon}
                alt='git'
                className='w-6 h-6 object-contain'
              />
            </div>
          )}
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-2xl'>{name}</h3>
        <p className='mt-2 text-secondary text-sm'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
)

const Works = () => {
  const { t, language } = useTranslation();
  const projects = getProjects(language);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('projects.subtitle')}</p>
        <h2 className={styles.heroHeadText}>{t('projects.title')}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t('projects.description')}
        </motion.p>
      </div>
      <div className='mt-20 flex justify-center flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '');