import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/home/Footer"
import Header from "./components/home/header/Header"
import HomePages from "./components/pages/HomePages"
import Blog from "./components/blog/Blog"
import Shop from './views/Shop';
import Create from "./views/Create"
import ViewPosts from './views/ViewPosts';
import Main from "./components/sidebar/Main"
import ProductDetails from "./components/ProductDetails"
import CartPage from "./components/CartPage";

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
  
    const handleAddToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePages} />
          <Route path='/blog' exact component={Blog}  />
               <Route path='/dashboard' exact component={Main}  />

          <Route path='/shop' exact component={Shop} />
          <Route path='/create' exact component={Create} />
          <Route path='/show' exact component={ViewPosts} />
          <Route path="/products/:title" component={ProductDetails} />
          <Route path='/cart' render={() => <CartPage cartItems={cartItems} />} />
        </Switch>
        {showCart && <CartPage cartItems={cartItems} />}
        <br /><br />
        <Footer />
      </Router>
    </>
  )
}

export default App
