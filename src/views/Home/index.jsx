import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <li>
        <Link to="/edit">Hero Edit</Link>
      </li>
      <li>
        <Link to="/details">Hero Details</Link>
      </li>
    </React.Fragment>
  );
};

export default Home;
