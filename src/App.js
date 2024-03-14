 
import './App.css';
import Header from './components/Header'; 
import CarouselBanners from './components/CarruselBanner';
import Solutions from './components/Solutions';

 



function App() {
  return (
    <div >
      <div className="border-gradient"></div>
      <Header />  
      <CarouselBanners />        
      <Solutions />   
    </div>
  );
}

export default App;
