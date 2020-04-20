import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Table from './Table'


describe('Table Component', () => {
  
  configure({adapter: new Adapter()});
  let wrapper = shallow(<Table />);

  it('Should render one chart element', () => {    
    expect(wrapper.find('table').length).toBe(1)
  });

  it('Should render one card element', () => {    
    expect(wrapper.find('Card').length).toBe(1)
  });

  it('Shoult render table data', () => {
    expect(wrapper.find('td').length).toBeGreaterThan(1)
  })

  it('Shoult render table header', () => {
    expect(wrapper.find('th').length).toBe(4)
  })
});
