import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({
  index,
  title,
  icon,
}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Про меня</p>
        <h2 className={styles.heroHeadText}>Меня зовут Илья.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        В данный момент увлечен веб-разработкой. Не ограничиваюсь только фронтендом - я стремлюсь стать full-stack разработчиком, охватывая как внешние, так и внутренние аспекты приложений. Я мечтаю создавать высоконагруженные системы со сложной архитектурой, охватывая не только бекенд, но и нагруженные пользовательские интерфейсы. С опытом в C# и JS я надеюсь наращивать свои навыки и переносить их в реальные проекты. Уверен, что в будущем принесет много возможностей для творчества, роста и денежного благополучия!

        В настоящее время я активно ищу возможности для практики, где смогу проверить свои знания и приобрести новый практический опыт. Готов внести свой вклад и учиться на практике, чтобы стать еще более квалифицированным разработчиком.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');