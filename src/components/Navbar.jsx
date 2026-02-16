import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsGithub } from "react-icons/bs";
import { styles } from '../styles';
import { getNavLinks } from '../constants';
import { menu, close, myLogo } from '../assets';
import { LanguageContext, useTranslation } from '../i18n';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const navLinks = getNavLinks(language);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={myLogo}
            alt='logo'
            className='w-9 h-9 object-contain'
          />
          <p className='text-white text-[16px] font-bold cursor-pointer flex'>
            {t('navbar.title')}&nbsp;
            <span className='md:block hidden'>
              | {t('navbar.name')}
            </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row items-center gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li
            key='language-switcher'
            className='text-[16px] font-medium cursor-pointer'
          >
            <button
              onClick={toggleLanguage}
              className='px-3 py-1 rounded-md bg-tertiary hover:bg-secondary/20 transition-colors text-white font-bold'
            >
              {language === 'ru' ? 'EN' : 'RU'}
            </button>
          </li>
          <li
            key='github-link'
            className='text-[16px] font-medium cursor-pointer'
          >
            <a href="https://github.com/KimIlia91" className='h-8 w-8'>
              <BsGithub className='w-full h-full object-contain' />
            </a>
          </li>
          <li
            key="cv-link"
            className='text-[16px] font-medium cursor-pointer'
          >
            <a
              href='/CV-Kim-Ilia.pdf'
              alt="cv"
              target="_blank"
              rel="noopener noreferrer"
              className='h-8 w-8'>
              CV
            </a>
          </li>
        </ul>
      </div>
      <div className='sm:hidden flex justify-center items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-base`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li
              key='language-switcher-mobile'
              className='font-poppins w-full'
            >
              <button
                onClick={() => {
                  toggleLanguage();
                  setToggle(false);
                }}
                className='w-full px-3 py-2 rounded-md bg-tertiary hover:bg-secondary/20 transition-colors text-white font-bold text-center'
              >
                {language === 'ru' ? 'EN' : 'RU'}
              </button>
            </li>
            <li
              key={`custom-link-${navLinks.length}`}
              className='font-poppins flex gap-4 justify-between items-center'
            >
              <a href="https://github.com/KimIlia91" className='h-8 w-8'>
                <BsGithub className='w-full h-full object-contain' />
              </a>
              <a
                href='/CV-Kim-Ilia.pdf'
                alt="cv"
                target="_blank"
                rel="noopener noreferrer"
                className='h-8 w-8 font-medium cursor-pointer text-2xl'
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar