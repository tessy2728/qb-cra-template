import React from 'react';
import styled from 'styled-components/macro';
const Wrapper = styled.div`

`;
export const Radio = ({
  id,
  label,
  className,
  isSelected,
  ...restOf
}) => {
  return <Wrapper className={className}>
      <input type="radio" id={id} checked={isSelected} {...restOf} />
      <label htmlFor={id}> {label} </label>
    </Wrapper>;
};