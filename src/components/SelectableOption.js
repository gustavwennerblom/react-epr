import React from 'react';
// import { compose, setDisplayName, withHandlers } from 'recompose';
import { Col } from 'reactstrap';

const SelectableOption = ({
  // props
  caption,
  isSelected,
  // handlers
  handleClick,
  id,
}) => {
  // console.log(`SelectableOption with id ${ id } has isSelected value ${ isSelected }`);
  if (isSelected) {
    return (
      <Col
        sm={ 2 } className="selectableOption selected"
        onClick={ handleClick } id={ id }
      >{ caption }</Col>);
  }
  return (
    <Col
      sm={ 2 } className="selectableOption"
      onClick={ handleClick } id={ id }
    >{ caption }</Col>);
};

export default SelectableOption;
