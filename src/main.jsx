import { register } from "swiper/element-bundle";
import { createRoot } from 'react-dom/client';
import GlobalStyle from './style/global';
import { StrictMode, useEffect } from 'react';
import { Routes } from './routes';

register();
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

function initializeAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-WPZEL8451B');
}

function App() {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-WPZEL8451B";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      initializeAnalytics();
    };
  }, []); 

  return (
    <StrictMode>
      <GlobalStyle />
      <Routes />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);