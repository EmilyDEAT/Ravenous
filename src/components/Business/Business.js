import React from "react";
import "./Business.css";

const Business = ({
  imageSrc,
  name,
  address,
  city,
  state,
  zipCode,
  category,
  rating,
  reviewCount
}) => (
  <div className="business">
    <div className="business-container-img">
      <img src={imageSrc} alt={name} />
    </div>
    <h2 className="business-title">{name}</h2>
    <div className="business-description">
      <div className="business-address">
        <p>{address}</p>
        <p>{city}</p>
        <p>
          {state} {zipCode}
        </p>
      </div>
      <div className="business-info">
        <p className="business-category">{category}</p>
        <p className="business-rating">{rating} stars</p>
        <p className="business-review">{reviewCount} reviews</p>
      </div>
    </div>
  </div>
);

export default Business;
