import React from 'react';
// import './App.css';
import TestDiv from './components/TestDiv';
import SelectableOption from './components/SelectableOption';

class App extends React.Component {
  constructor() {
    super();
    this.handleSelection = this.handleSelection.bind(this);
    this.state = {
      title: 'My Title',
      isSelected: false,
    };
  }

  handleSelection(ev) {
    const currentSelected = this.state.isSelected;
    this.setState({
      isSelected: !currentSelected,
    });
  }

  render() {
    return (
      <div>        
        <SelectableOption
          caption="Hello World" id="FooBar"
          handleClick={ this.handleSelection } 
          isSelected={ this.state.isSelected }
          
        />
      </div>
    );
  }
}

export default App;
