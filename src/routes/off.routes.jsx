import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Closed } from '../pages/closed';
import { ERROR404 } from '../pages/404';

export function OffRoutes() {
  const [asLogin, setAsLogin] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Closed />}/>
      <Route path='*' element={<ERROR404 />}/>
    </Routes>
  )
}