import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ShippingDetails from './pages/ShippingDetails/ShippingDetails';
import Login from './pages/Login/Login';
import Payment from './pages/Payment/Payment';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path='/products' element={< Products/>}></Route>
      <Route path='/product-details' element={< ProductDetails/>}></Route>
      <Route path='/shopping-cart' element={< ShoppingCart/>}></Route>
      <Route path='/payment' element={<Payment />}></Route>
      <Route path='/shipping-details' element={< ShippingDetails/>}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
