import { New_collection } from "../Assets/New_collection";
import "./NewCollection.css";
import Item from "../Items/Items";

const NewCollection = (itemInfo) => {
  return (
    <div className="trending">
      <h1>New Collection</h1>
      <hr />

      <div className="trending-item">
        {New_collection.map((item, i) => {
          return <Item itemInfo={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default NewCollection;
