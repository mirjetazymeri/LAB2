import React from 'react';
import Card from './Card';
import './style.css'
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="card-container">
        <Card
          title="Product 1"
          description="This is a description of product 1."
          imageUrl={image1}
        />
        <Card
          title="Product 2"
          description="This is a description of product 2."
          imageUrl={image2}
        />
        <Card
          title="Product 3"
          description="This is a description of product 3."
          imageUrl={image3}
        />
        
      </div>
    </div>
  );
};

export default Shop;
