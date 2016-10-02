import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import jsdom from 'jsdom'
import Nest from '../components/Nest';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('Component : Nest', () => {

  it('always passes', () => {
    expect(true).toEqual(true)
  })

  it('renders', () => {
    expect(
      shallow(
        <Nest />
      ).length
    ).toEqual(1);
  });

  it('Checks the classname', () => {
    expect(
      shallow(
        <Nest number='12' />
      ).find('#test-div').prop('className')
    ).toEqual('even');
  });

  it('calls componentDidMount', () => {
    sinon.spy(Nest.prototype, 'componentDidMount');
    const wrapper = mount(<Nest />);
    expect(Nest.prototype.componentDidMount.callCount).toEqual(1);
    Nest.prototype.componentDidMount.restore();
  });

  it('calls dummyFunction', () => {
    sinon.spy(Nest.prototype, 'dummyFunction');
    const wrapper = mount(<Nest />);
    expect(Nest.prototype.dummyFunction.callCount).toEqual(2);
  });
});
