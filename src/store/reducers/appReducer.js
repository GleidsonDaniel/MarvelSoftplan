import * as types from '../actionTypes';

const initial = {
  count: 0,
  limit: 0,
  offset: 0,
  results: [],
  total: 0,
  hasMore: true,
  selectedHero: JSON.parse(localStorage.getItem('@marvelApp/selectedHero')),
  heroSeries: JSON.parse(localStorage.getItem('@marvelApp/selectHeroSeries')),
  editedHeroes: JSON.parse(localStorage.getItem('@marvelApp/editedHeroes')),
};

export default (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_HEROES:
      return {
        ...state,
        count: state.count + payload.count,
        limit: payload.limit,
        results: [...state.results, ...payload.results],
        total: payload.total,
      };
    case types.ERROR_SET_HEROES:
      return { ...state };
    case types.SELECT_HERO:
      return { ...state, selectedHero: payload };
    case types.SET_HERO_SERIES:
      return { ...state, heroSeries: payload };
    case types.SET_EDITED_HERO:
      return { ...state, editedHeroes: payload };
    case types.SET_HAS_MORE:
      return { ...state, hasMore: payload };
    default:
      return state;
  }
};
