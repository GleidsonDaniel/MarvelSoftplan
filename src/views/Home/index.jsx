import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getAllHeroes } from '../../store/actions';
import Card from '../../components/Card';

const Home = ({ app: { editedHeroes, hasMore, results }, getAllHeroesAction }) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={page => {
        getAllHeroesAction({
          page,
          count: 20,
        });
      }}
      hasMore={hasMore}
      loader={<div />}
    >
      <div className="card-columns">
        {results.map(hero => {
          const editedHero = editedHeroes.find(i => i.id === hero.id);
          if (editedHero) {
            return <Card key={editedHero.id} hero={editedHero} />;
          }
          return <Card key={hero.id} hero={hero} />;
        })}
      </div>
    </InfiniteScroll>
  );
};

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispachToProps = {
  getAllHeroesAction: getAllHeroes,
};

export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Home);
