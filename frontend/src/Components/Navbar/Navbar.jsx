import {React,useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";

const Navbar = () => {

    const [menu,setMenu] = useState("shopAll");

  return (
    <div className="Nav">
      <div className="App-logo">
        <img src={Logo} alt="Logo" />
        <h2>SmartCart</h2>
      </div>

        <ul className="Navigation">
        <li onClick={() => {setMenu("shopAll")}}><Link to="/" className="Nav-Link">Shop All </Link> {menu ==="shopAll" ?<hr/> : <></>} </li>
        <li onClick={() => {setMenu("shopMen")}}><Link to="/men" className="Nav-Link">Shop Men </Link> {menu ==="shopMen" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("shopWomen")}}><Link to="/women" className="Nav-Link">Shop Women </Link>{menu ==="shopWomen" ? <hr/> :<></>}</li>
        <li onClick={() => {setMenu("shopKids")}}><Link to="/kid" className="Nav-Link">Shop Kids </Link> {menu ==="shopKids" ? <hr/> : <></>} </li>
        <li onClick={() => {setMenu("contact")}}><Link to="/contact" className="Nav-Link">Contact </Link>{menu =="contact" ? <hr/> : <></>}</li>
        </ul>

      <div className="Auth">
       <Link to="/login"> <button className="Signin-btn">Sign in</button></Link>
        <Link to="/cart"><img className="Cart" src={cartIcon} alt="Cart" /></Link>
        <div className="count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
