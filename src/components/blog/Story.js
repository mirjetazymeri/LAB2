import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
function Story(){
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

  return(
    <section className="page-section" id="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Stories</h2>
        <h3 className="section-subheading text-muted">...</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <ul className="timeline">
          {portfolioData.map((item, index) => (
            <li key={index} className={index % 2 === 0 ? '' : 'timeline-inverted'}>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={item.image} alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>{item.name}</h4>
                  <h4 className="subheading">{item.car}</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>Be Part
                <br />Of Our
                <br />Story!</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
}
export default Story;