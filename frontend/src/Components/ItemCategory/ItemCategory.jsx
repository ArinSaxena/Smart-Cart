import "./ItemCategory.css";
import {Link} from "react-router-dom";

const Items = ({ itemInfoCategory}) => {
  return (
    <>
    <div className="item">
      <Link to={`/product/${itemInfoCategory.id}`}>
      <img src={itemInfoCategory.image} alt={itemInfoCategory.name} className="item-image" />
      <h3>{itemInfoCategory.name}</h3>
      <div className="price">

        <div className="old-price">₹{itemInfoCategory.old_cost}</div>
        <div className="new-price">₹{itemInfoCategory.new_cost}</div>

      </div>
      </Link>
    </div>
    

    
    </>
  );
};

export default Items;
