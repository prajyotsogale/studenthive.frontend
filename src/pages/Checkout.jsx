import React from "react";
import "../styles/checkout.scss";

const Header = () => (
  <div className="header">
    <a href="#" className="back-link">
      &#8592;
    </a>
    <h1>Request to Book</h1>
  </div>
);

const TripDetails = () => (
  <div className="trip-details">
    <h2>Your Trip</h2>
    <div className="detail-row">
      <div className="detail-header">
        <div>
          <p className="detail-label">Dates</p>
          <p>23–28 Mar</p>
        </div>
        <a href="#" className="link-edit">Edit</a>
      </div>
    </div>
    <div className="detail-row">
      <div className="detail-header">
        <div>
          <p className="detail-label">Guests</p>
          <p>1 guest</p>
        </div>
        <a href="#" className="link-edit">Edit</a>
      </div>
    </div>
  </div>
);

const LoginSection = () => (
  <div className="login-section">
    <h2>Log in or sign up to book</h2>
    <div className="input-container">
      <div className="select-country">
        <div className="label-country">India (+91)</div>
      </div>
      <input
        type="tel"
        className="input-phone"
        placeholder="Phone number"
      />
    </div>
    <p className="text-disclaimer">
      We'll call or text you to confirm your number. Standard message and data
      rates apply.
    </p>
    <button className="button-continue">Continue</button>
  </div>
);

const PropertyCard = () => (
  <div className="card-property">
    <div className="info-property">
      <div className="image-property">
        <img
          src="https://via.placeholder.com/96"
          alt="Property"
        />
      </div>
      <div>
        <h3 className="name-property">Hemals Homestay @Cyan</h3>
        <p className="type-property">Room in farm stay</p>
        <p className="rating-property">
          <span className="icon-star">★</span> 4.91 (33 reviews) • <span className="label-superhost">Superhost</span>
        </p>
      </div>
    </div>
  </div>
);

const PriceDetails = () => (
  <div className="details-price">
    <h3>Price Details</h3>
    <div className="row-price border-bottom">
      <span>₹4,000 x 5 nights</span>
      <span>₹20,000</span>
    </div>
    <div className="row-price border-bottom">
      <span>Service fee</span>
      <span>₹2,823.54</span>
    </div>
    <div className="row-price border-bottom">
      <span>Taxes</span>
      <span>₹2,400</span>
    </div>
    <div className="row-price text-total">
      <span>Total (INR)</span>
      <span>₹25,223.54</span>
    </div>
  </div>
);

const RequestToBookPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="main-content">
          <TripDetails />
          <LoginSection />
        </div>
        <div className="sidebar">
          <PropertyCard />
          <PriceDetails />
        </div>
      </div>
    </div>
  );
};

export default RequestToBookPage;