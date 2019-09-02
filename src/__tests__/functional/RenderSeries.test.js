import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { shallow } from '../../Enzyme';

import { RenderSeries } from '../../components';

const mockStore = configureMockStore();
const store = mockStore({});

describe('RenderSeries component', () => {
  test('render RenderSeries component', () => {
    const props = {
      push: jest.fn(),
      searchHeroes: {},
      heroSearch: {},
      setHeroSearchAction: jest.fn(),
      selectHeroAction: jest.fn(),
    };
    const wrapper = shallow(
      <Provider store={store}>
        <RenderSeries {...props} />
      </Provider>,
    );
    expect(wrapper.exists()).toBeTruthy();
    // expect(wrapper.find('Header').length);
  });
});
