import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from './components';
import { Spinner } from './components';
import { styles } from './styles';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern md:py-20 bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
