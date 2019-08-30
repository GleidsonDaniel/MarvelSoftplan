import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Header from '../../components/Header';

const Home = ({ history: { push } }) => {
  return (
    <React.Fragment>
      <Header />
      <Button onClick={() => push('/edit')}>
        <text> Hero Edit</text>
      </Button>
      <Button onClick={() => push('/details')}>
        <text> Hero Details</text>
      </Button>
    </React.Fragment>
  );
};

export default withRouter(Home);
