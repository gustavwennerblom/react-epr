import React from 'react';
import { Col } from 'reactstrap';

const SelectableOption = ({
  // props
  caption,
  isSelected,
  // handlers
  handleClick,
}) => {
  return (
    <Col
      sm={ 2 } className={ isSelected ? 'selected selectableOption' : 'selectableOption' }
      onClick={ handleClick }
    > { caption} </Col>
  );
};

export default SelectableOption;
