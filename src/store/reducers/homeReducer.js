import * as types from '../actionTypes';

const initial = {
  heroes: '',
};

export default (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_ALL_MARVEL_HEROES:
      return { ...state, heroes: payload };
    default:
      return state;
  }
};
