import React from 'react';
import { shallow } from '../../Enzyme';

import { Card } from '../../components';

describe('Card component', () => {
  test('render Card component', () => {
    const props = {
      push: jest.fn(),
      searchHeroes: {},
      heroSearch: {},
      setHeroSearchAction: jest.fn(),
      selectHeroAction: jest.fn(),
    };
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.exists()).toBeTruthy();
    // expect(wrapper.find('Header').length);
  });
});
