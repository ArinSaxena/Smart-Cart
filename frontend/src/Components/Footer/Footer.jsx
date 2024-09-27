import cartIcon from "../Assets/footer/logo.png";
import "./Footer.css";
import InstaIcon from "../Assets/footer/instagram_icon.png";
import PinterestIcon from "../Assets//footer/pinterest_icon.png";
import WhatsappIcon from "../Assets/footer/whatsapp.png";


const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="SmartCart-logo">
        <img src={cartIcon} alt="" />
        <p>SmartCart</p>
      </div>

      <div className="details">
    
            <p>Company</p>
            <p>Products</p>
            <p>Offices</p>
            <p>About</p>
            <p>Contact</p>
      </div>

      <div className="social-media">
        <img src={InstaIcon} alt="Instagram" />
        <img src={WhatsappIcon} alt="Whatsapp" />
        <img src={PinterestIcon} alt="Pinterest" />
      </div>

      <hr/>

      <div className="CopyRight">
        <p>© 2023 by SmartCart. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
