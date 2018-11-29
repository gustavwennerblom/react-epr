import React from 'react';
import SelectableOption from './SelectableOption';
import { Row, Col } from 'reactstrap';

const OptionRow = ({
  // props
  qId, questionTitle, options, selectedState,
  // handlers
  handleSelection,
}) => {
  const renderOption = (isSelected, optionIndex) => {
    return (
      <SelectableOption
        caption={ options[optionIndex] } isSelected={ isSelected }
        handleClick={ (ev) => handleSelection(qId, optionIndex, ev) } key={ 'o' + optionIndex }
      />
    );
  };

  return (
    <Row className="optionRow">
      <Col sm={ 2 }>{ questionTitle }</Col>
      { selectedState.map((selected, optionIndex) => renderOption(selected, optionIndex)) }
    </Row>
  );
};

export default OptionRow;
