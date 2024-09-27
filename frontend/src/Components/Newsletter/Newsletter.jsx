import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div>
        <h1 className="heading">Get Exclusive Offers In Your Inbox</h1>
      </div>

      <div>
        <p className="description">Subscribe to our newsletter and stay on top of fashion</p>
      </div>
      <div className="button">
        <input type="text" placeholder="Enter email here" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
