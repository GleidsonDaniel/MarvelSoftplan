import React from 'react';
import { shallow } from '../../Enzyme';

import { Card } from '../../components';

describe('Header component', () => {
  test('deve incluir o componente Header', () => {
    const props = {
      push: jest.fn(),
      searchHeroes: {},
      heroSearch: {},
      setHeroSearchAction: jest.fn(),
      selectHeroAction: jest.fn(),
    };
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('Header').length);
  });
});
