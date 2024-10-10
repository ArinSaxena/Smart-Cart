import "./Items.css";
import {Link} from "react-router-dom";

const Items = ({ itemInfo }) => {
  console.log(itemInfo.id);
  return (
    <>
        <div className="itemAll">
          <Link to={`/product/${itemInfo.id}`}>
          <img
            src={itemInfo.image}
            alt={itemInfo.name}
            className="item-imageAll"
          />
          <h3>{itemInfo.name}</h3>
          <div className="priceAll">
            <div className="old-priceAll">₹{itemInfo.old_cost}</div>
            <div className="new-priceAll">₹{itemInfo.new_cost}</div>
          </div>
          </Link>
        </div>
    </>
  );
};

export default Items;
