import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import SandBox from './pages/SandBox';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/category' element={<Category />} />
      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/sandbox' element={<SandBox />} />
    </Routes>
  );
}

export default App;
