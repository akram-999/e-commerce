import Home from './pages/home'
import Products from './pages/products'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Product from './pages/product'
import Login from './pages/login'
import Register from './pages/register'
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/products' element={<Products />} />
           <Route path='/products/:id' element={<Product />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/cart' element={<Cart />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
        </Routes>
    
  );
}

export default App;
