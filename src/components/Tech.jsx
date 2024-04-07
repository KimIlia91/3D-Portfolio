import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn } from '../utils/motion';


const TechBall = ({
  index,
  icon,
  name,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
      whileHover={{ scale: 1.1 }}
      title={name}
    >
        <div
          key={`technology-point-${index}`}
          className='rounded-full border-4 p-5 overflow-hidden'
        >
          <img src={icon} alt={`${name}-icon`} className='w-20 h-20 object-contain' />
        </div>
    </motion.div>
  )
}

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <div className='flex flex-row gap-6 flex-wrap justify-center'>
        {technologies.map((technology, index) => (
          <TechBall key={`tech-${index}`} index={index} icon={technology.icon} name={technology.name} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, '');