import _ from 'lodash';

import * as types from '../actionTypes';
import { getCharacters, getSeries } from '../../services';

export const getAllHeroes = param => async (dispatch, getState) => {
  await dispatch({ type: types.SET_HAS_MORE, payload: false });
  const {
    app: { total, count },
  } = getState();
  try {
    const {
      data: { data },
    } = await getCharacters(param, count);
    await dispatch([
      { type: types.SET_HEROES, payload: data },
      { type: types.SET_HAS_MORE, payload: total >= count },
    ]);
    await console.tron.log(param, data);
  } catch (error) {
    dispatch([{ type: types.ERROR_SET_HEROES }, { type: types.SET_HAS_MORE, payload: false }]);
  }
};

export const getUniqueHero = () => async dispatch => {
  await dispatch({ type: types.SET_UNIQUE_HERO, payload: [] });
};

export const selectHero = (hero, push) => async dispatch => {
  await dispatch([
    {
      type: types.SELECT_HERO,
      payload: hero,
    },
    {
      type: types.SET_HERO_SERIES,
      payload: [],
    },
  ]);
  await localStorage.setItem('@marvelApp/selectedHero', JSON.stringify(hero));
  await push('/details');
};

export const getHeroSeries = seriesList => async dispatch => {
  const {
    data: {
      data: { results },
    },
  } = await getSeries(seriesList.collectionURI);
  await dispatch({
    type: types.SET_HERO_SERIES,
    payload: results.length ? results : null,
  });
  await localStorage.setItem('@marvelApp/selectHeroSeries', JSON.stringify(results));
};

export const setEditedHero = (newHero, oldHero) => async (dispatch, getState) => {
  const { app } = getState();
  if (!_.isEqual(newHero, oldHero)) {
    if (app.editedHeroes) {
      const allHeroes = app.editedHeroes.filter(i => {
        if (i && i.id != newHero.id) return i;
      });
      await dispatch([
        { type: types.SET_EDITED_HERO, payload: [...allHeroes, { ...newHero }] },
        {
          type: types.SELECT_HERO,
          payload: newHero,
        },
      ]);
      await localStorage.setItem(
        '@marvelApp/editedHeroes',
        JSON.stringify([...allHeroes, { ...newHero }]),
      );
    } else {
      await dispatch({ type: types.SET_EDITED_HERO, payload: newHero });
      await localStorage.setItem('@marvelApp/editedHeroes', JSON.stringify([newHero]));
    }
  }
};
