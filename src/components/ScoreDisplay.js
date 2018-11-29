import React from 'react';
import { Row, Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { completeReducer, scoreCalculator } from './../../utils/scoreReducer.js';

const ScoreDisplay = ({ selectedState }) => {
  const isComplete = completeReducer(selectedState);

  const scoreByQuestion = scoreCalculator(selectedState);
  const totalScore = scoreByQuestion.reduce((total, value) => total + value);

  const message = isComplete ? `Your score is ${ totalScore }` : 'Awaiting answers...';

  return (
    <Row className="padded-row">
      <Col sm={ 3 } />
      <Col sm={ 6 }>
        <Card>
          <CardBody>
            <CardTitle>Your score</CardTitle>
            <CardText>{ message }</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm={ 3 } />
    </Row>
  );
};

export default ScoreDisplay;
