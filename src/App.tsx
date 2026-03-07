import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import { Home, Products, Checkout, Awards, News, About, Contact, Services, FAQ, Testimonials } from './pages';
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
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
