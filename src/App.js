import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/home/Footer"
import Header from "./components/home/header/Header"
import HomePages from "./components/pages/HomePages"
import ShopPage from "./components/pages/ShopPage"


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePages} />
          <Route path='/shop' exact component={ShopPage}  />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
