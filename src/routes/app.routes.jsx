import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Redefine } from '../pages/redefine';
import { Product } from '../pages/product';
import { Forgot } from '../pages/forgot';
import { Search } from '../pages/index';
import { Order } from '../pages/order';
import { Home } from '../pages/home';
import { User } from '../pages/user';

export function AppRoutes() {
  const [asLogin, setAsLogin] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/order' element={<Order />}/>
      <Route path='/forgot' element={<Forgot />}/>
      <Route path='/preview/:id' element={<Product />}/>
      <Route path='/search/:index' element={<Search />}/>
      <Route path='/reset-password/:token' element={<Redefine />}/>
      { asLogin ? <Route path='/user/:local' element={<User />}/> : null}
    </Routes>
  )
}