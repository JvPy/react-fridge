import React from 'react';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Navbar from './Navbar'


describe('Navbar Component', () => {
  
  configure({adapter: new Adapter()});

  it('Should render one nav element', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.someWhere(n => n.hasClass('flex-row')))
  });


});
