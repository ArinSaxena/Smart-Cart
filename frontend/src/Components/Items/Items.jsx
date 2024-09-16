import "./Items.css"

const Items = ({ itemInfo }) => {
  return (
    <div className="item">
      <img src={itemInfo.image} alt={itemInfo.name} className="item-image" />
      <h3>{itemInfo.name}</h3>
      <div className="price">

        <div className="old-price">₹{itemInfo.old_cost}</div>
        <div className="new-price">₹{itemInfo.new_cost}</div>

      </div>
    </div>
  );
};

export default Items;
