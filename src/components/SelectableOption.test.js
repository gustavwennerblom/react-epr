import React from 'react';
import ReactDOM from 'react-dom';
import SelectableOption from './SelectableOption';
import { shallow } from 'enzyme';

test('Mounts without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SelectableOption
      caption="TestString" isSelected={ false }
      handleClick={ (f) => f }
    />, div
  );
});

test('Invokes onClick', () => {
  const _click = jest.fn();
  shallow(
    <SelectableOption
      handleClick={ _click } caption="Test"
      isSelected={ false }
    />
  )
  .find('.selectableOption')
  .simulate('click');
  expect(_click).toBeCalled();
});

