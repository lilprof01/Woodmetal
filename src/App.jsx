import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './cartcontext';
import ScrollToTop from './scroll';
import Header from './components/header';
import Footer from './components/footer';
import TopBtn from './components/Topbtn';
import NewPage from './pages/NewPage';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Test from './pages/Testpage';

function App() {

  return (
    <CartProvider>
      <ScrollToTop />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/NewPage" element={<NewPage />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Testpage" element={<Test />} />
          </Routes>
        <TopBtn />
        <Footer />
      <ScrollToTop />
    </CartProvider>
  )
}

export default App
