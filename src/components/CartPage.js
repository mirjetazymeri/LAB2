import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function CartPage({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  const subtotal = totalPrice.toFixed(2);

  const handleRemoveFromCart = (itemTitle) => {
    removeFromCart(itemTitle);
  };

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cartItems.items})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url); // Forwarding user to Stripe
        }
    });
}

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty.
          <br />
          <Link to="/shop">Go to Shop</Link>
        </p>
      ) : (
        <div>
          <table style={{ width: '100%', border: '1px solid #ccc' }}>
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
                  <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
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
