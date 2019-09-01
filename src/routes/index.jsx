import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
const Header = lazy(() => import('../components/Header'));

// Pages
const Home = lazy(() => import('../views/Home'));
const HeroDetails = lazy(() => import('../views/HeroDetails'));

const Routes = () => (
  <Suspense fallback={<div className="lds-dual-ring" />}>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details" exact component={HeroDetails} />
    </Switch>
  </Suspense>
);

export default Routes;
