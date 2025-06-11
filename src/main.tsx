import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css';
import './styles/global.css';
import Home from './app/Home/Home.tsx'
import Header from './components/layout/Header/index.tsx';
import Footer from './components/layout/Footer/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
)
