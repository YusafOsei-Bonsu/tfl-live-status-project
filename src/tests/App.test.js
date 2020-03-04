/* eslint-disable no-unused-vars */
import React from 'react';
import jasmineEnzyme from 'jasmine-enzyme';
import { mount, shallow, render } from 'enzyme';
const App = require('../containers/App');

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme()
    wrapper = render(<App />);
  });

  it('Should render the title', () => {
    expect(wrapper).toContainMatchingElement('h1');
  })
});