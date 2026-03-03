import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Awards from './pages/Awards';
import News from './pages/News';
import About from './pages/About';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="awards" element={<Awards />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
