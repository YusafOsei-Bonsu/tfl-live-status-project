/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import App, { getData } from '../containers/App';
import TflHeader from '../components/TflHeader';
import Axios from 'axios';

describe('App', () => {
  let wrapper;

  // Tests if the main and flex-container div are being rendered
  test('Should render 2 divs', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(2)
});

  // Tests if the TflHeader instance gets rendered
  test('Should render the TflHeader instance', () => {
    wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<TflHeader />)).toBeTruthy();
  });
  
  // Tests if the component's state gets loaded
  test("Should load the component's state", async () => {
    wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('tflLines')).toBeTruthy();
    expect(wrapper.state('tflLineColour')).toBeTruthy();
  });

  // Tests if the API Call gets the tfl line statuses
  test('should should return data about each Tfl line service', () => {
    const appId = process.env.REACT_APP_ID;
    const appKey = process.env.REACT_APP_KEY;
    Axios.get(`https://api.tfl.gov.uk/Line/Mode/tube%2Cdlr%2Coverground%2Ctram/Status?app_id=${appId}&app_key=${appKey}`)
    .then(res => {
      expect(res.data).toHaveLength(14)
    }).catch(err => console.log(err));
  });
});