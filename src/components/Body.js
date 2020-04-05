import React from 'react';
import { NavLink } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex-container">
      <div>
        <NavLink to="/move">Move</NavLink>
        <span role="img" aria-label="move">
          🏃🏻
        </span>
      </div>
      <div>
        <NavLink to="/eat">Eat Well</NavLink>
        <span role="img" aria-label="eat">
          🍽
        </span>
      </div>
      <div>
        <NavLink to="/hydrate">Hydrate Well</NavLink>
        <span role="img" aria-label="hydrate">
          💧
        </span>
      </div>
      <div>
        <NavLink to="/tune">Tune hunger</NavLink>
        <span role="img" aria-label="tune">
          🍔
        </span>
      </div>
      <div>
        <NavLink to="/sleep">Sleep Well</NavLink>
        <span role="img" aria-label="sleep">
          😴
        </span>
      </div>
      <div>
        <NavLink to="/veggies">Eat more veggies</NavLink>
        <span role="img" aria-label="veggies">
          🥗
        </span>
      </div>
    </div>
  );
};

export default Body;
