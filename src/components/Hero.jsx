import { motion } from 'framer-motion';
import { styles } from '../styles';
import { promo } from '../assets';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <>
      <div className={`${styles.paddingX} mx-auto flex flex-row justify-center flex-wrap items-start gap-5`}>
        <div className='flex items-center mt-24 flex-wrap justify-center xl:gap-20'>
          <motion.div variants={fadeIn('up', 'spring', 0.5, 1.5)}>
            <div className='flex gap-4'>
              <div className='flex flex-col justify-center items-center mt-4'>
                <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                <div className='w-1 sm:h-80 h-40 violet-gradient' />
              </div>
              <div>
                <h1 className={`${styles.heroHeadText}`}>
                  <span className='text-[#915eff]'>Илья Ким</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-[520px]`}>
                  WEB-разработчик из города Бишкек <br />
                  специализирующийся на разработке <br /> веб-приложений и сайтов
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('up', 'spring', 1, 1.5)}>
            <img src={promo} alt="promo" className='w-[420px] h-[420px] object-contain' />
          </motion.div>
        </div>
      </div>
      <div className='absolute xs:bottom-0 bottom-14 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full mb-1 bg-secondary'
            />
          </div>
        </a>
      </div>
    </>
  )
}

export default SectionWrapper(Hero, '', 'relative w-full mx-auto');