import React from 'react';
import { Row, Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import ScoreReducer from './../../utils/scoreReducer.js';

const ScoreDisplay = ({ selectedState }) => {
  let a = [false, true]
  let score = ScoreReducer([false, true]);
  let score2 = selectedState[0].reduce((total, value)=>total || value)
  console.log(score);
  console.log(score2);

  return (
    <Row className="padded-row">
      <Col sm={ 3 } />
      <Col sm={ 6 }>
        <Card>
          <CardBody>
            <CardTitle>Your score</CardTitle>
            <CardText>Fully done is</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm={ 3 } />
    </Row>
  );
};

export default ScoreDisplay;
