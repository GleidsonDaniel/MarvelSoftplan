import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getHeroSeries } from '../store/actions';

const RenderSeries = ({ series, getHeroSeriesAction, app }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    getHeroSeriesAction(series);
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  if (app.heroSeries && app.heroSeries.length) {
    return (
      <Carousel interval={null} activeIndex={index} direction={direction} onSelect={handleSelect}>
        {app.heroSeries.length &&
          app.heroSeries.map(serie => {
            return (
              <Carousel.Item key={serie.id}>
                <img
                  alt={serie.title}
                  className="d-block w-100"
                  src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                />
                {/* <Carousel.Caption>
                  <h3 className="hero_caroussel_text">{serie.title}</h3>
                </Carousel.Caption> */}
              </Carousel.Item>
            );
          })}
      </Carousel>
    );
  }
  if (app.heroSeries && app.heroSeries.length === 0) {
    return <div className="lds-dual-ring" />;
  }
  return <p>Este personagem não contem series disponiveis</p>;
};

const mapDispachToProps = {
  getHeroSeriesAction: getHeroSeries,
};

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(
  mapStateToProps,
  mapDispachToProps,
)(RenderSeries);
