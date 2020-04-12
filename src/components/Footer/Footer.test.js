import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Footer from './Footer'


describe('Footer Component', () => {
  
  configure({adapter: new Adapter()});

  it('Should render one nav element', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.someWhere(n => n.hasClass('flex-row')))
  });


});
