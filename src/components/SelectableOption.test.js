import React from 'react';
import ReactDOM from 'react-dom';
import SelectableOption from './SelectableOption';

test('Mounts without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SelectableOption
      caption="TestString" isSelected={ false }
      handleClick={ (f) => f }
    />, div
  );
});
