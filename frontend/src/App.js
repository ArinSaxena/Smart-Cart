import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/Banner/banner_men.png";
import women_banner from "./Components/Assets/Banner/banner_women.png";
import kid_banner from "./Components/Assets/Banner/banner_kid.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="Men" banner={men_banner} />}/>
          <Route path="/women" element={<ShopCategory category="Women" banner={women_banner} />} />
          <Route path="/kid" element={<ShopCategory category="Kid" banner={kid_banner}/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
