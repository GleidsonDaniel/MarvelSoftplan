import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HeroDetails = ({ history: { push } }) => {
  return (
    <React.Fragment>
      <Button onClick={() => push('/')}>
        <text>Home</text>
      </Button>
      <Button onClick={() => push('/edit')}>
        <text>Hero Edit</text>
      </Button>
    </React.Fragment>
  );
};

export default withRouter(HeroDetails);
