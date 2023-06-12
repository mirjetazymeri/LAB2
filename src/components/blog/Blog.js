import React from 'react';
import Portfolio from './Portfolio'
import './assets/css/bootstrap.min.css';
import './assets/css/agency.min.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Story from './Story';
function Blog() {
  // const portfolioLinks = [
  //   {
  //     title: 'Photos by:',
  //     caption: 'Simon Edgar'
  //   },
  //   {
  //     title: 'Photos by:',
  //     caption: 'Ellie Maria'
  //   },
  //   {
  //     title: 'Potos by:',
  //     caption: 'Lena Marvel'
  //   },
  //   {
  //     title: 'Photos by:',
  //     caption: 'George Martin'
  //   },
  //   {
  //     title: 'Photos by:',
  //     caption: 'Jonas Ui'
  //   },
  //   {
  //     title: 'Photos by: ',
  //     caption: 'Amelia Senn'
  //   },
  //   {
  //     title: 'Photos by:',
  //     caption: 'Anna West'
  //   }
  // ]
  const [portfolioData, setPortfolioData] = useState([]);
  
  useEffect(() => {
    axios.get('https://localhost:7221/api/stories1')
      .then(response => {
        setPortfolioData(response.data);
      })
      .catch(error => {
        console.error('Error fetching portfolio data:', error);
      });
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item- m-1">
                    
                </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Photo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">Stories</a>
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
           
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Read Our Stories!</div>
        <div className="intro-heading text-uppercase">GET INSPIRED BY THESE AMAZING TRAVELERS</div>
       
      </div>
    </div>
  </header>

  

  <Portfolio portfolioLinks={portfolioData}></Portfolio>



<Story />


  
  
  
  

    </div>
  );
}

export default Blog;
