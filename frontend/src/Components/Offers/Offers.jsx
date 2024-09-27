import Exclusive_img from "../Assets/exclusive_image.png";
import "./Offers.css";

const Offers = () => {
    return ( 
        <div className="Offers-section">

            <div className="Offers-left">
           <h1>Exclusive</h1>
           <h1>Only For You</h1>
           <p>ON THE BEST SELLERS</p>

           <button>Check them out</button>
            </div>
            <div className="Offers-right">
                <img src={Exclusive_img} alt="exclusive-image" className="exc-image"/>

            </div>

        </div>
     );
}
 
export default Offers;