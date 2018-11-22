import React from 'react';
import ReactDOM from 'react-dom';

// const TestDiv = () => <div>This is a test component</div>;

class TestDiv extends React.Component {
  constructor() {
    super();
    this.state = { title: 'MyTitle' };
  }

  render() {
    return (
      <div>This is a test component { this.state.title }</div>
    );
  }
}

const wrapper = document.getElementById('react-entry');
wrapper ? ReactDOM.render(<TestDiv />, wrapper) : false;

export default TestDiv;
