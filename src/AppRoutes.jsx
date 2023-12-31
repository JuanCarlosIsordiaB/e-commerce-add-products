import {BrowserRouter, Routes,Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { AddProduct } from './pages/AddProduct';
import { Product } from './pages/Product';
import { Store } from './store/store';

export const AppRoutes = () => {
  return (
    <Store>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='create' element={<AddProduct />} />
        <Route path='view/:productId' element={<Product />} />
      </Routes>
      </BrowserRouter>
    </Store>
    
  )
}
