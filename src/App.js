 
import './App.css';
import Header from './components/Header'; 
import CarouselBanners from './components/CarruselBanner';
import Solutions from './components/Solutions';
import ContactUs from './components/ContactUs';

 



function App() {
  return (
    <div >
      <div className="border-gradient"></div>
      <Header />  
      <CarouselBanners />        
      <Solutions />
      <ContactUs />      
    </div>
  );
}

export default App;
