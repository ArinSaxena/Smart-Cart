import "./ItemCategory.css";

const Items = ({ itemInfoCategory}) => {
  return (
    <>
    <div className="item">
      <img src={itemInfoCategory.image} alt={itemInfoCategory.name} className="item-image" />
      <h3>{itemInfoCategory.name}</h3>
      <div className="price">

        <div className="old-price">₹{itemInfoCategory.old_cost}</div>
        <div className="new-price">₹{itemInfoCategory.new_cost}</div>

      </div>
    </div>
    

    
    </>
  );
};

export default Items;
