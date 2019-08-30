import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import HeroDetails from '../views/HeroDetails';
import HeroEdit from '../views/HeroEdit';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details" exact component={HeroDetails} />
      <Route path="/edit" exact component={HeroEdit} />
    </Switch>
  );
};

export default Routes;
