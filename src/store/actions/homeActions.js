import * as types from '../actionTypes';

export const getAllHeroes = () => ({
  type: types.SET_ALL_MARVEL_HEROES,
  payload: [],
});

export const getAllHeroesExtra = () => async dispatch => {
  await dispatch({ type: types.SET_ALL_MARVEL_HEROES, payload: [] });
};
