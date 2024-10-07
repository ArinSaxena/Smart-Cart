import Hero from "../Components/Hero/Hero";
import Trending from "../Components/Trending/Trending";
import Offers from "../Components/Offers/Offers";
import Newsletter from "../Components/Newsletter/Newsletter"
import NewCollection from "../Components/NewCollection/NewCollection";

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