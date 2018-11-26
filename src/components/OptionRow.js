import React from 'react';
import SelectableOption from './SelectableOption';
import { Container, Row } from 'reactstrap';

const OptionRow = ({selectedState, handleSelection}) => {
  const renderOption = (i, caption, isSelected) => {
    return (
      <SelectableOption
        caption={ caption } isSelected={ isSelected }
        handleClick={ () => handleSelection(i) } key={ i }
      />
    );
  };

  return (
    <Container>
      <Row>
        { selectedState.map((selected, index) => renderOption(index, 'Hello Globe', selected)) }
      </Row>
    </Container>
  );
};

export default OptionRow;
