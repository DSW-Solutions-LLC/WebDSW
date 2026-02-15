import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import SuccessStories from './components/sections/SuccessStories';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <SuccessStories />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
