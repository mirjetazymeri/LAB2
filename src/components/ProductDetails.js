import React, { useState, useEffect } from "react";
import postServices from "../services/postServices";
import "../style/ViewProduct.css";

function ProductDetails({ match }) {
  const [product, setProduct] = useState(null);
  const productTitle = match.params.title;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await postServices.getProductByTitle(productTitle);
        setProduct(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productTitle]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-left">
        <img
          src={"http://127.0.0.1:8000/api/postImages/" + product.image}
          alt={product.title}
          className="product-image"
        />
        <h1 className="product-title">{product.title}</h1>
      </div>
      <div className="product-details-right">
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-brand">Brand: {product.brand}</p>
        <p className="product-stock">Stock: {product.countInStock}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
