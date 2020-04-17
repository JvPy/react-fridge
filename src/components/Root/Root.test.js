import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Root from './Root'


describe('Root Component', () => {
  
  configure({adapter: new Adapter()});

  it('Should render one chart element', () => {
    let wrapper = shallow(<Root />);
    
    expect(wrapper.find('HumidityChart').length).toBe(1)
  });


});
