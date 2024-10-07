import "./Trending.css";
import { data_trending_product_women } from "../Assets/data_trending_product_women";
import Item from "../Items/Items";
import { data_trending_product_men } from "../Assets/data_trending_product_men";
import { data_trending_product_kid } from "../Assets/data_trending_product_kid";
 

const Trending = () => {
  return (
    <>
      <div className="trending">
        <h1>TRENDING IN WOMEN</h1>
        <hr />
        <div className="trending-item">
          {data_trending_product_women.map((item, i) => {
            return <Item itemInfo={item} key={i} />;
          })}
        </div>
      </div>


      <div className="trending">
        <h1>TRENDING IN MEN</h1>
        <hr />
        <div className="trending-item">
          {data_trending_product_men.map((item, i) => {
            return <Item itemInfo={item} key={i} />;
          })}
        </div>
      </div>


      <div className="trending">
        <h1>TRENDING IN KID</h1>
        <hr />
        <div className="trending-item">
          {data_trending_product_kid.map((item, i) => {
            return <Item itemInfo={item} key={i} />;
          })}
        </div>
      </div>


      
    </>
  );
};

export default Trending;
