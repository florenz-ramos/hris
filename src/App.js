import logo from './logo.svg';
import './App.css';
import Headers from './components/landing-page/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pricing from './components/pricing-page/Pricing';
import MainPage from './components/landing-page/MainPage';

function App() {
  return (
  <>

     <BrowserRouter basename='/hris'>
      <Headers/>
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
