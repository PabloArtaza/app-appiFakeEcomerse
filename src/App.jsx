import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Producst";
import About from './components/About'
import Contact from './components/Contact'
import Modal from "./components/Modal";
import { ProductosProvider } from "./Context/ProductsContext";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ProductosProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Products />} />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/:id" element={ <Modal />} />
        </Routes>
      </ProductosProvider>
    </div>
  );
};

export default App;
