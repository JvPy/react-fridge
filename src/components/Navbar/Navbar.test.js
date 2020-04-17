import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Navbar from './Navbar'


describe('Navbar Component', () => {
  
  configure({adapter: new Adapter()});

  it('Should render one nav element', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('Should render one ul element', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('Should render three li element', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('li').length).toBe(3);
  });


});
