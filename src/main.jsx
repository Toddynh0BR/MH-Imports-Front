import { register } from "swiper/element-bundle";
import { createRoot } from 'react-dom/client'
import GlobalStyle from './style/global';
import { StrictMode } from 'react';

register();
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import { Routes } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
      <Routes />
  </StrictMode>,
)
