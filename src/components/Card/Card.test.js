import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Card from './Card'


describe('Card Component', () => {
  
  configure({adapter: new Adapter()});

  it('Should render one div element', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('div').length).toBe(1)
  });

  it('Should render one element with card class', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('.card').length).toBe(1)
  });
});
