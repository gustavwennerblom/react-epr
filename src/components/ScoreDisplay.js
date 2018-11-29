import React from 'react';
import { Row, Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { completeReducer, scoreCalculator, getTwoLowestIndices } from './../../utils/scoreReducer.js';

const ScoreDisplay = ({ selectedState, questionBase }) => {
  const isComplete = completeReducer(selectedState);

  const scoreByQuestion = scoreCalculator(selectedState);
  const totalScore = scoreByQuestion.reduce((total, value) => total + value);

  const mainMessage = isComplete ? `Your score is ${ totalScore }` : 'Awaiting answers...';

  const lowestScoreIndices = getTwoLowestIndices(scoreByQuestion);

  const improvementAreas = ['foo', 'bar'];

  if (isComplete) {
    improvementAreas[0] = questionBase.questions[lowestScoreIndices[0]].shortName;
    improvementAreas[1] = questionBase.questions[lowestScoreIndices[1]].shortName;
  }

  const improvementMessage = `You should focus on ${ improvementAreas[0].toLowerCase() } and ${ improvementAreas[1].toLowerCase() } to improve your chances`;

  return (
    <Row className="padded-row">
      <Col sm={ 3 } />
      <Col sm={ 6 }>
        <Card>
          <CardBody>
            <CardTitle>Your score</CardTitle>
            <CardText>{ mainMessage }<br />{ isComplete && improvementMessage }</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm={ 3 } />
    </Row>
  );
};

export default ScoreDisplay;
