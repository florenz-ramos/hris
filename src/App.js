import './App.css';
import Headers from './components/landing-page/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pricing from './components/pricing-page/Pricing';
import MainPage from './components/landing-page/MainPage';
import Feature from './components/feature-page/Feature';
import ContactUs from './components/contact-us-page/ContactUs';

function App() {
  return (
  <>

     <BrowserRouter basename='/hris'>
      <Headers/>
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="features" element={<Feature />} />
          <Route path='contact-us' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
