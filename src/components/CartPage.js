import React from "react";
import { Link } from "react-router-dom";

function CartPage({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  const subtotal = totalPrice.toFixed(2);

  const handleRemoveFromCart = (itemTitle) => {
    removeFromCart(itemTitle);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.
            <br />
            <Link to='/shop'>Go to Shop</Link>
        </p>
      ) : (
        <div>
          <table style={{ width: "100%", border: "1px solid #ccc" }}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(item.title)}>Remove</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>Subtotal:</td>
                <td>${subtotal}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CartPage;
