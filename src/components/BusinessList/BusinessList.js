import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

const business = [
  {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90
},
{
  imageSrc:
    "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
  name: "Teriyakiki",
  address: "12 Salmon Street",
  city: "New-York",
  state: "NY",
  zipCode: "10101",
  category: "Japanese",
  rating: 4.2,
  reviewCount: 120
},
{
  imageSrc:"https://cdn.pixabay.com/photo/2018/09/14/11/12/food-3676796__480.jpg",
  name: "Le Boucher français",
  address: "234 Long Street",
  city: "New-York",
  state: "NY",
  zipCode: "10101",
  category: "French",
  rating: 4.5,
  reviewCount: 56
},
{
  imageSrc:"https://cdn.pixabay.com/photo/2015/04/20/13/25/burger-731298_1280.jpg",
  name: "Burger Temple",
  address: "1025 Steak Avenue",
  city: "Brooklyn",
  state: "NY",
  zipCode: "10101",
  category: "American",
  rating: 3.2,
  reviewCount: 1000
}];

const BusinessList = () => (
  <div className="businessList-container">
    {business.map(item => (
      <Business {...item} />
    ))}

  </div>
);

export default BusinessList;