import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/home/Footer';
import Header from './components/home/header/Header';
import HomePages from './components/pages/HomePages';
import Blog from './components/blog/Blog';
import Shop from './views/Shop';
import Create from './views/Create';
import Main from './components/Sidebar/Main';
import ViewPosts from './views/ViewPosts';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import Success from './pages/Success';
import Cancel from './pages/Cancel';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (itemTitle) => {
    const updatedCartItems = cartItems.filter((item) => item.title !== itemTitle);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/dashboard" exact component={Main} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/create" exact component={Create} />
          <Route path="/show" exact component={ViewPosts} />
          <Route path="/success" exact component={Success} />
          <Route path="/cancel" exact component={Cancel} />

          <Route
            path="/products/:title"
            render={(props) => (
              <ProductDetails {...props} onAddToCart={handleAddToCart} />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <CartPage cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
