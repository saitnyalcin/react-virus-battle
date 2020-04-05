import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SkeletonComponent from './SkeletonComponent';

const Mind = () => {
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
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Mind;
