import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

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
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div 
            onClick={() => window.open(source_code_link, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={source_code_link_icon}
              alt='github'
              className='w-6 h-6 object-contain'
            />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <a href={site_link}>
          <h3 className='text-white font-bold text-2xl hover:underline'>{name}</h3>
        </a>
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Мои работы</p>
        <h2 className={styles.heroHeadText}>Проекты</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Следующие проекты демонстрируют мои навыки и опыт посредством
          примеров моих работ. Каждый проект кратко описан с
          ссылки на репозитории кода и живые демонстрации. Это отражает мой
          умение решать сложные задачи, работать с разными технологиями,
          и эффективно управлять проектами.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '');