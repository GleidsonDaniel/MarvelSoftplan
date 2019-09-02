import React from 'react';
import { shallow } from '../../Enzyme';

import Header from '../../components/Header';

describe('Header component', () => {
  test('render Header component', () => {
    const props = {
      push: jest.fn(),
      searchHeroes: {},
      heroSearch: {},
      setHeroSearchAction: jest.fn(),
      selectHeroAction: jest.fn(),
    };
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.exists()).toBeTruthy();
    // expect(wrapper.find('Header').length);
  });
});
