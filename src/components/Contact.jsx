import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_fqbuv15',
      'template_ud2k9zh',
      {
        from_name: form.name,
        to_name: 'Ilia',
        from_email: form.email,
        to_email: 'paterfamelias@gmail.com',
        message: form.message,
      },
      'jWvezOGdvbtSot2eq',
    ).then(() => {
      setLoading(false);
      alert(`Спасибо ${form.name}. Ваше сообщение успешно отправлено! Я свяжусь с Вами в ближайшее время`);
      setForm({name: '', email: '', message: '',});
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Произошла ошибка во время отправки сообщения. Попробуйте ещё раз позже.');
    })
  }

  return (
    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Свяжитесь со мной</p>
        <h3 className={styles.sectionHeadText}>Контакты.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label 
            className='flex flex-col'
          >
            <span className=' font-medium text-white mb-4'>Имя</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Ваше имя?"
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label 
            className='flex flex-col'
          >
            <span className=' font-medium text-white mb-4'>Email</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Ваша электронная почта?"
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label 
            className='flex flex-col'
          >
            <span className=' font-medium text-white mb-4'>Сообщение</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Что вы хотите узнать?"
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
           type='submit'
           className=' bg-tertiary py-3 px-9 outline-none w-fit font-bold text-white shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className=' xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');