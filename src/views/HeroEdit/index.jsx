import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HeroEdit = ({ history: { push } }) => {
  return (
    <React.Fragment>
      <Button onClick={() => push('/')}>
        <text>Home</text>
      </Button>
      <Button onClick={() => push('/details')}>
        <text> Hero Details</text>
      </Button>
    </React.Fragment>
  );
};

export default withRouter(HeroEdit);
