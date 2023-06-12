import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/home/Footer"
import Header from "./components/home/header/Header"
import HomePages from "./components/pages/HomePages"
import ShopPage from "./components/pages/ShopPage"
import Blog from "./components/blog/Blog"
import Login from "./components/login/Login"
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePages} />
          <Route path='/shop' exact component={ShopPage}  />
          <Route path='/blog' exact component={Blog}  />
          <Route path='/login' exact component={Login}  />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
