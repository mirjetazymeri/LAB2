import React, { useState } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 180)
  })
  return (
    <>
      <header className='header'>
        <div className='container flex'>
          <div className='logo'>
            <img src='assets/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/shop'>Shop</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <a href='http://localhost:8080/aboutus'>About Us</a>
              </li>
                   <li>
              <a href="http://localhost:8080/createContacts">Contactt</a>
              </li>
   <li>
                <a href="https://localhost:7221/Identity/Account/Login">Login</a>
              </li>
              <li className='icon'>
                <a href="/cart">
                  <ShoppingCartIcon className='HeaderIcon' />
                </a>
              </li>
            </ul>
          </div>
          <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
