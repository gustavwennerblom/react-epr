import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import { shallow, mount } from 'enzyme';

test('Mounts without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// DOES NOT WORK
/*
test('Click event propagates to top', () => {
  const _click = jest.fn();
  mount(<App />)
  .find('.selectableOption')
  .first()
  .simulate('click');
  expect(_click).toBeCalled();
  ;
});
*/
