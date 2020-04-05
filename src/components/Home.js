import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="wrapper">
      <h1>What do you want to accomplish today?</h1>
      <div className="page-mind">
        <NavLink to="/mind" style={{ color: '#FFF' }}>
          <div>
            Nourish Mind{' '}
            <span role="img" aria-label="mind">
              🧠
            </span>
          </div>
        </NavLink>
      </div>
      <div className="page-body">
        <NavLink to="/body" style={{ color: '#FFF' }}>
          <div>
            Nourish Body
            <span role="img" aria-label="body">
              💪🏻
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
