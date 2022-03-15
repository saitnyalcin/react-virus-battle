import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SkeletonComponent from "./SkeletonComponent";

const Body = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      {visible ? (
        <div>
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
        </div>
      ) : (
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
            <NavLink to="/veggies">Eat veggies</NavLink>
            <span role="img" aria-label="veggies">
              🥗
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
