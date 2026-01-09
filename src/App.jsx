import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import ProductList from './Components/ProductList';
import CartItem from './Components/CartItem';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;