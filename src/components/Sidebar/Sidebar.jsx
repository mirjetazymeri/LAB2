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
            Section 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#section2">
            Section 2
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#section3">
            Section 3
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;