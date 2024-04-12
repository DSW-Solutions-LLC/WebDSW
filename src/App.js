 
import './App.css';
import Header from './components/Header'; 
import CarouselBanners from './components/CarruselBanner';
import Solutions from './components/Solutions';
import ContactUs from './components/ContactUs';

 
function App() {
  return (
    <div >
     
      <Header className="z-0" />  
      <CarouselBanners  />        
      <Solutions />
      <ContactUs />      
    </div>
  );
}

export default App;


