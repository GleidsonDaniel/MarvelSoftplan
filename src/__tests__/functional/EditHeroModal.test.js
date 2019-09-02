import React from 'react';
import { shallow } from '../../Enzyme';

import { EditHeroModal } from '../../components';

describe('Header component', () => {
  test('render EditHeroModalComponent component', () => {
    const props = {
      history: { push: {} },
      hero: {},
      selectHeroAction: jest.fn(),
    };
    const wrapper = shallow(<EditHeroModal {...props} />);
    expect(wrapper.exists()).toBeTruthy();
    // expect(wrapper.find('Header').length);
  });
});
