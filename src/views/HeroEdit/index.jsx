import React from 'react';
import { Link } from 'react-router-dom';

const HeroEdit = () => {
  return (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/details">Hero Details</Link>
      </li>
    </React.Fragment>
  );
};

export default HeroEdit;
