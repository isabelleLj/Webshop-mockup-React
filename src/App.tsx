import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail.tsx";
import Header from "./Header";
import Footer from "./Footer.tsx";
import ProductList from "./components/ProductList.tsx";
import PromoBanner from "./components/PromoBanner";
import Navigation from "./components/Navigation.tsx";
import NotFound from "./components/NotFound.tsx";
import About from "./components/About.tsx";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

//PascalCasing: Namnger komponenter med stor bokstav i början i bla React.
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                //title är namnet på prop:en och "Min webbplats är värdet"
                title="IsaBean webshop"
                subtitle="My first React project!"
              />
              <PromoBanner message="20% discount on all groceries" />
              <ProductList />
            </>
          }
        />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer year={2026} title="Isabelle Ljunggren" />
    </div>
  );
}

export default App;
