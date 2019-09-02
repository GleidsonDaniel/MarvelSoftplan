import React from 'react';
import { shallow } from '../../Enzyme';

import Header from '../../components/Header';

describe('Header component', () => {
  test('deve incluir o componente Header', () => {
    const props = {
      push: jest.fn(),
      searchHeroes: {},
      heroSearch: {},
      setHeroSearchAction: jest.fn(),
      selectHeroAction: jest.fn(),
    };
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('Header').length);
  });
});
