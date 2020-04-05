import React from 'react';
import { NavLink } from 'react-router-dom';

const Mind = () => {
  return (
    <div className="flex-container">
      <div>
        <NavLink to="/breath">Breathe </NavLink>
        <span role="img" aria-label="breath">
          🗣
        </span>
      </div>
      <div>
        <NavLink to="/gratitude">Gratitude</NavLink>
        <span role="img" aria-label="gratitude">
          😌
        </span>
      </div>
      <div>
        <NavLink to="/meditate">Meditate</NavLink>
        <span role="img" aria-label="meditate">
          ☀️
        </span>
      </div>
      <div>
        <NavLink to="/yoga">Yoga</NavLink>
        <span role="img" aria-label="yoga">
          🧎
        </span>
      </div>
      <div>
        <NavLink to="/nature">Nature</NavLink>
        <span role="img" aria-label="nature">
          🌳
        </span>
      </div>
      <div>
        <NavLink to="/joy">Joy</NavLink>
        <span role="img" aria-label="joy">
          😄
        </span>
      </div>
    </div>
  );
};

export default Mind;
