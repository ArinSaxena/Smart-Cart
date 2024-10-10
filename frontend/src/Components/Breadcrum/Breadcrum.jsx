import arrow_icon from "../Assets/breadcrum/breadcrum_arrow.png";
import "./Breadcrum.css";

const Breadcrum = ({product}) => {
    console.log(product);
    return (  
        <div>
            <div className="breadcrum">
                <a href="/">HOME</a>
                <img src={arrow_icon} alt="arrow" />
                <a href={`/${product.category.toLowerCase()}`}>SHOP {product.category.toUpperCase()}</a>
                <img src={arrow_icon} alt="arrow" />
                <span>{product.name}</span>
            </div>
        </div>
    );
}
 
export default Breadcrum;