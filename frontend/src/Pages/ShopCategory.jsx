import { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import ItemCategory from "../Components/ItemCategory/ItemCategory";
import "./CSS/ShopCategory.css";
const ShopCategory = ({ category, banner }) => {
  const products = useContext(ShopContext); // accessing the data
  const category_products = products.filter(
    (product) => product.category === category
  );

  return (
    <>
      <div className="banner">
        <img src={banner} alt={`${category} banner`} />
      </div>

      <div className="shopcategory-products">
        {category_products.map((product) => {
          return <ItemCategory itemInfoCategory={product} />;
        })}
      </div>
    </>
  );
};

export default ShopCategory;
