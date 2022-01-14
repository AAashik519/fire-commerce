import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import CartPages from './pages/CartPages';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import React from "react";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './stylesheets/layout.css'
import './stylesheets/products.css'
import './stylesheets/authentication.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    < >
      <ToastContainer />
      <BrowserRouter >
        <Routes>
          <Route path ='/' exact element ={ <HomePage />} />
          <Route path ='/cart' element ={ <CartPages/>} />
          <Route path ='/productinfo/:productId' element ={ <ProductPage/>} />
          <Route path ='/login' element ={ <LoginPage />} />
          <Route path ='/register' element ={ <RegisterPage/>} />
           
           
        </Routes>
      </BrowserRouter>
  
    </>
  );
}

export default App;
