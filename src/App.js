 
import './App.css';
import Header from './components/Header'; 
import CarouselBanners from './components/CarruselBanner';
import Solutions from './components/Solutions';
import Apps from './components/Apps';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';

 
function App() {
  return (
    <div >
     
      <Header className="z-0" />  
      <CarouselBanners  />        
      <Solutions />
      <Apps />
      <Projects />
      <ContactUs />      
    </div>
  );
}

export default App;


