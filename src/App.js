import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
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
        <div
          className='gradient-section'
          style={{
            background:
              'linear-gradient(180deg, #08020D 0%, rgba(8, 2, 13, 0.8) 38.94%, rgba(71, 18, 115, 0.8) 100%)',
          }}
        >
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
