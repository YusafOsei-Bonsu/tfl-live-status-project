/* Ensures Enzyme is loaded up */
import jasmineEnzyme from 'jasmine-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => jasmineEnzyme());