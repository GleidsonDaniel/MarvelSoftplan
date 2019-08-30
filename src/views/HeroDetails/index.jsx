import React from 'react';
import { Link } from 'react-router-dom';

const HeroDetails = () => {
  return (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/edit">Hero Edit</Link>
      </li>
    </React.Fragment>
  );
};

export default HeroDetails;
