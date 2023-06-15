import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
     <div className="header">
      <h2>ADMIN DASHBOARD</h2>
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="https://localhost:7221/Stories">
            Create Blog Stories
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/create">
            Add a product
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/show">
            Show Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:8080/listContacts">
            Feedbacks
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
