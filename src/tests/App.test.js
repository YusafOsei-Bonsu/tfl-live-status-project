const React = require('react');
const { shallow } = require('enzyme');
const { render } = require("@testing-library/react");
const { App } = require('../containers/App');

describe('App component', () => {
  it('Should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});