import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      {/* Only render Navbar and SearchBar if not on the Login page */}
      {location.pathname !== '/login' && (
        <>
          <Navbar />
          <SearchBar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root should go to Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order" element={<Orders />} />
        <Route path="*" element={<Home />} /> {/* Catch-all route to Home */}
      </Routes>
      {/* Only render Footer if not on the Login page */}
      {location.pathname !== '/login' && <Footer />}
    </div>
  );
};

export default App;
