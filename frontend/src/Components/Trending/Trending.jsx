import './Trending.css';
import {data_trending_product} from '../Assets/data_trending_product';
import Item from '../Items/Items';

const Trending = () => {
    return (
        <div className="trending">
            <h1>TRENDING IN WOMEN</h1>
            <hr />
            <div className="trending-item">
                {data_trending_product.map((item, i) => {
                    return <Item itemInfo={item} key={i} />
                }
                )}
            </div>

        </div>
    );
}

export default Trending;