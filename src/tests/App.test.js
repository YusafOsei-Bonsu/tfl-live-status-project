/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';

describe('App', () => {

  it('Should render 2 divs', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(2);
  })
});