import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import CheckoutForm from "./pages/CheckoutForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/cart" element={<Checkout />} />
      <Route path="/checkout" element={<CheckoutForm />} />
    </Routes>
  );
}

export default App;