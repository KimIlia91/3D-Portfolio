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
        <h2 className={styles.heroHeadText}>Меня зовут <span className='text-[#915eff]'>Илья</span></h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      > 
        Я начинающий программист, с опытом в C# .NET и React NextJS. В данный момент я заинтересован в веб-разработке, однако мои амбиции выходят далеко за рамки фронтенда. Моя цель — стать полноценным full-stack разработчиком, владея как внешними, так и внутренними аспектами разработки приложений. Меня мотивирует создание высоконагруженных систем с сложной архитектурой, охватывая как бекенд, так и пользовательский интерфейс. С опытом работы в C# и JS я стремлюсь к постоянному росту навыков и их применению на практике. Я уверен, что будущее откроет множество возможностей для развития, творчества и финансового успеха! 
        <br /> <br />
        В настоящее время я активно ищу возможности для практики, где смогу утвердить свои знания и получить новый опыт. Готов внести свой вклад и обучаться на практике, чтобы стать еще более квалифицированным разработчиком.
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