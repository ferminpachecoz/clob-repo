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
      <Route path='/preview/ferminpacheco.site/' exact element={<Home />} />
      <Route path='/preview/ferminpacheco.site/category' element={<Category />} />
      <Route path='/preview/ferminpacheco.site/product' element={<Product />} />
      <Route path='/preview/ferminpacheco.site/cart' element={<Cart />} />
      <Route path='/preview/ferminpacheco.site/login' element={<Login />} />
      <Route path='/preview/ferminpacheco.site/contact' element={<Contact />} />
      <Route path='/preview/ferminpacheco.site/admin' element={<Admin />} />
      <Route path='/preview/ferminpacheco.site/sandbox' element={<SandBox />} />
    </Routes>
  );
}

export default App;
