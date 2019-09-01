import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectHero } from '../store/actions';

const HeroCard = ({ history: { push }, hero, selectHeroAction }) => (
  <Card onClick={() => selectHeroAction(hero, push)} className="hero_card">
    <Card.Img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
    <Card.Body>
      <Card.Title className="hero_card_title">{hero.name}</Card.Title>
    </Card.Body>
  </Card>
);

HeroCard.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
  selectHeroAction: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapDispachToProps = {
  selectHeroAction: selectHero,
};

export default withRouter(
  connect(
    null,
    mapDispachToProps,
  )(HeroCard),
);
