import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import HumidityChart from './HumidityChart'


describe('HumidityChart Component', () => {
  
  configure({adapter: new Adapter()});

  it('Should render one chart element', () => {
    let wrapper = shallow(<HumidityChart />);
    
    expect(wrapper.find('canvas').length).toBe(1)
  });

  it('Should render one card element', () => {
    let wrapper = shallow(<HumidityChart />);
    
    expect(wrapper.find('Card').length).toBe(1)
  });

});
