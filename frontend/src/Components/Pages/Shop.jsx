import Hero from "../Hero/Hero";
import Trending from "../Trending/Trending";
import Offers from "../Offers/Offers";
import Newsletter from "../Newsletter/Newsletter"
import NewCollection from "../NewCollection/NewCollection";

const Shop = () => {
    return (
        <div>
           <Hero/>

           <Trending/>
           <Offers/>
           <NewCollection/>

           <Newsletter/>


        </div>
      );
}
 
export default Shop;