import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Header = ({ history: { push } }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={() => push('/')}>Marvel Softplan</Navbar.Brand>
      <Form style={{ alignContent: 'flex-end' }} inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default withRouter(Header);
