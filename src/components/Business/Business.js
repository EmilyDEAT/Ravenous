import React from "react";
import "./Business.css";

const Business = ({ business }) => (
  <div className="business">
    <div className="business-container-img">
      <img src={business.imageSrc} alt={business.name} />
    </div>
    <h2 className="business-title">{business.name}</h2>
    <div className="business-description">
      <div className="business-address">
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>
          {business.state} {business.zipCode}
        </p>
      </div>
      <div className="business-info">
        <p className="business-category">{business.category}</p>
        <p className="business-rating">{business.rating} stars</p>
        <p className="business-review">{business.reviewCount} reviews</p>
      </div>
    </div>
  </div>
);

export default Business;
