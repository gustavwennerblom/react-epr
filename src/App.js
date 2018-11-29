import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OptionRow from './components/OptionRow';
import questionSetup from './config/questionSetup.json';
import { Container } from 'reactstrap';
import ScoreDisplay from './components/ScoreDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.questionBase = questionSetup;

    // Create a state holding array for selections based on the question model
    const initialSelectedArray = [];
    for (let i = 0; i < this.questionBase.questions.length; i++) {
      initialSelectedArray[i] = Array(this.questionBase.questions[i].options.length).fill(false);
    }
    this.handleSelection = this.handleSelection.bind(this);
    this.state = {
      isSelected: initialSelectedArray,
    };
  }

  handleSelection(qId, optionIndex, ev) {
    // console.log(qId, optionIndex);
    // console.log(ev.target);
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
      <Container className="wrapper">
        <h1>{ this.questionBase.title }</h1>
        { this.questionBase.questions.map((qObj, qIndex) => this.renderRow(qObj, qIndex))}
        <ScoreDisplay selectedState={ this.state.isSelected } questionBase={ this.questionBase } />
      </Container>

    );
  }
}

export default App;
