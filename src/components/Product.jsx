import React, { useState, useEffect } from "react";
import postServices from "../services/postServices";
import { Link } from "react-router-dom";
import '../style/Products.css';

function Product() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await postServices.getPosts();
    setPosts(response.data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container_product_card">
      {posts.length > 0 &&
        posts.map((post) => (
          <div className="product_card" key={post._id}>
            <div className="top_card">
              <img
                src={"http://127.0.0.1:8000/api/postImages/" + post.image}
                alt={post.title}
                className="product_image"
              />
              <span className="product_price">${post.price}</span>
            </div>
            <div className="bottom_card">
              <div className="product_name">
                <h6>{post.title}</h6>
              </div>
              <div className="product_description">
                <p>{post.description}</p>
              </div>
              <Link to={`/products/${post.title}`} className="cta_view_product">
                View Product
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Product;
