import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';

const App = () => {
  return (
    <main className='font-display w-full sm:max-w-7xl sm:mx-auto overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage/>}></Route>
      </Routes>
      {/* footer */}
      <Footer />
    </main>
  )
}

export default App