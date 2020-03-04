/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import App from '../containers/App';
import TflHeader from '../components/TflHeader';
import TflLine from '../components/TflLine';

describe('App', () => {
  let wrapper;

  // Tests if the main and flex-container div are being rendered
  test('Should render 2 divs', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(2)
});

  // Tests if the TflHeader instance gets rendered
  test('should render the TflHeader instance', () => {
    wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<TflHeader />)).toBeTruthy();
  });
  
});