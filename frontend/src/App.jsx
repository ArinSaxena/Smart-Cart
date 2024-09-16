import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Pages/Cart";
import Contact from "./Components/Pages/Contact";
import LoginSignup from "./Components/Pages/LoginSignup";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/" element={<Shop/>}/>
        <Route path="/men" element={<ShopCategory category="Men"/>}/>
        <Route path="/women" element={<ShopCategory category="Women"/>}/>

        <Route path="/kids" element={<ShopCategory category="Kids"/>}/>

      </Routes>
      <Footer/>

    </div>
    
    </BrowserRouter>
  );
}

export default App;
