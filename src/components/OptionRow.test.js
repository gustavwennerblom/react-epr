import React from 'react';
import ReactDOM from 'react-dom';
import OptionRow from './OptionRow';

test('Mounts without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <OptionRow selectedState={ [false, false, true] } handleSelection={ (f) => f } />,
    div
  );
});