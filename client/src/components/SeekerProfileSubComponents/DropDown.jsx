import React, { useState } from 'react';
import styled from 'styled-components';

import schema from '../constants.jsx';

const Select = styled.select`
  height: 4vh;
  width: max(10vw, 100px);
  font: inherit;
  margin: 1vh 0;
  border: 2px solid ${schema.primary};
  padding-left: .5vw;
`;

const Option = styled.option`
`;

const DropDown = ({ setInterestLevel }) => {
  const [selected, setSelected] = useState('0');

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelected(value);
    setInterestLevel(value);
  };

  return (
    <Select id="interest-select" value={selected} onChange={handleSelect}>
      <Option value="0" selected>Show All</Option>
      <Option value="3">Extremely Interested</Option>
      <Option value="2">Very Interested</Option>
      <Option value="1">Interested</Option>
    </Select>
  );
};

export default DropDown;
