import hero from "../Assets/hero_image.png";
import Arrow from "../Assets/arrow_icon.png";
import handIcon from "../Assets/hand_icon.png"
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-img">
      <div className="hero-left">
        <div className="hand">
            <img className="handimg"src={handIcon} alt="Handicon" />
          <p className="coll-info">new </p>
        </div>
        <div>
          <p className="coll-info">collections</p>
          <p className="coll-info">for smart gen</p>
        </div>
        <button className="Latest-info">
          Latest Collection <img src={Arrow} alt="" />
        </button>
      </div>
      <div className="image">
        <img className="image" src={hero} alt="herrImage" />
      </div>
    </div>
  );
};

export default Hero;
