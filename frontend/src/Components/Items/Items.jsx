import "./Items.css";

const Items = ({ itemInfo }) => {
  console.log(itemInfo.image);
  return (
    <>
        <div className="itemAll">
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
        </div>
    </>
  );
};

export default Items;
