import React from 'react';
import ReactDOM from 'react-dom';
import OptionRow from './OptionRow';
import { mount } from 'enzyme';

test('Mounts without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <OptionRow
      selectedState={ [false, false, true] } handleSelection={ (f) => f }
      qId="0" options={ ['test1', 'test2', 'test3'] }
    />,
    div
  );
});

test('Invokes onClick', () => {
  const _click = jest.fn();
  mount(
    <OptionRow
      selectedState={ [true, false, false] } handleSelection={ _click }
      qId="1" options={ ['test1', 'test2', 'test3'] }
    />
  )
  .find('.selectableOption')
  .first()
  .simulate('click');
  expect(_click).toBeCalled();
});
