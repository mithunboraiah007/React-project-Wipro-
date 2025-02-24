import React from "react";
import "./Card.css"; // Import CSS file

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?s=612x612&w=0&k=20&c=Jaun3vYekdy6aBcqq5uDQp_neNp5jmdLZXZAqqhcjk8=" 
        alt="House"
        className="card-image"
      />
      <div className="card-details">
        <p className="card-address">123 Main St, Phoenix, AZ, USA</p>
        <h2 className="card-price">$280k - $310k</h2>
        <span className="card-score">Score: 85%</span>
      </div>
    </div>
  );
};

export default Card;
