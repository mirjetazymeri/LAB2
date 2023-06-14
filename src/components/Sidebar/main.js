import React from 'react';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          {/* Rest of the dashboard content */}
        </div>
      </div>
    </div>
  );
};

export default Main;