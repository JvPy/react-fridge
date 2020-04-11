import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Root from './components/Root/Root';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

describe('App (main) Component', () => {
  
  configure({adapter: new Adapter()});

  it('Should render main navbar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Navbar />)).toBe(true);
  });

  it('Should render root component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Root />)).toBe(true);
  });

  it('Should render main footer componet', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

});
