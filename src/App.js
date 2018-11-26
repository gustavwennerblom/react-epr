import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OptionRow from './components/OptionRow';
import questionSetup from './config/questionSetup.json';

class App extends React.Component {
  constructor() {
    super();
    this.questionBase = questionSetup;

    // Create a state holding array for selections based on the question model
    const initialSelectedArray = [];
    for (let i = 0; i < this.questionBase.questions.length; i++) {
      initialSelectedArray[i] = Array(this.questionBase.questions[i].options.length).fill(false);
    }
    console.log(initialSelectedArray);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = {
      isSelected: initialSelectedArray,
    };
  }

  handleSelection(qId, optionIndex, ev) {
    console.log(qId, optionIndex);
    console.log(ev.target);
    this.setState((prevState) => {
      const newSelected = prevState.isSelected;
      newSelected[qId].fill(false);
      newSelected[qId][optionIndex] = true;
      return ({isSelected: newSelected});
    });
  }

  renderRow(qObj, rowIndex) {
    return (
      <OptionRow
        handleSelection={ this.handleSelection } selectedState={ this.state.isSelected[rowIndex] }
        questionTitle={ qObj.questionTitle } options={ qObj.options }
        qId={ rowIndex } key={ 'q' + rowIndex }
      />
    );
  }

  render() {
    return (
      <div>
        { this.questionBase.questions.map((qObj, qIndex) => this.renderRow(qObj, qIndex))}
      </div>

    );
  }
}

export default App;
