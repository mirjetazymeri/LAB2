import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="buttons-container">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="view-product-btn">View Product</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
