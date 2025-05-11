import './App.css';
import Header from './components/Header';
import CarouselBanners from './components/CarruselBanner';
import Solutions from './components/Solutions';
import Apps from './components/Apps/Apps';
import Projects from './components/Projects/Projects';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SectionDivider from './components/common/SectionDivider';

function App() {
  return (
    <div>
      <Header className="z-0" />
      <CarouselBanners />
      <Solutions />
      <SectionDivider />
      <Apps />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
