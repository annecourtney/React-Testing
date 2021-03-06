import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it("parent div should have 5 child divs", () => {
    const panel = shallow(<Panel />);

    expect(panel.find(".component-panel").children("div")).toHaveLength(5);
  });

  it("should have parent div with classname component-panel", () => {
    const panel = shallow(<Panel />);

    expect(panel.find(".component-panel")).toHaveLength(1);
  });

});