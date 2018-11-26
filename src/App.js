import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OptionRow from './components/OptionRow';

class App extends React.Component {
  constructor() {
    super();
    this.handleSelection = this.handleSelection.bind(this);
    this.state = {
      title: 'My Title',
      isSelected: [false, false, false],
    };
  }

  handleSelection(index, ev) {
    console.log(index);
    //console.log(ev.target.value);
    const newSelected = this.state.isSelected;
    newSelected.fill(false);
    newSelected[index] = true;
    this.setState({
      isSelected: newSelected,
    });
  }

  render() {
    return (
      <div>
        <OptionRow handleSelection={ this.handleSelection } selectedState={ this.state.isSelected } />
      </div>
    );
  }
}

export default App;
