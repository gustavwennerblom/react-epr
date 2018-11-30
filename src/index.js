/* eslint-disable no-unused-vars */
// import TestDiv from './components/TestDiv';
// import SelectableOption
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const runScript = () => {
  // eslint-disable-next-line no-unused-expressions
  ReactDOM.render(<App />, document.getElementById('react-entry'))
};

// `DOMContentLoaded` may fire before your script has a chance to run, so check before adding a listener
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runScript);
} else {
  // `DOMContentLoaded` already fired
  runScript();
}
