import React from 'react';
import styled, { css } from 'styled-components';

const StepsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  padding: 1.5rem 0;
`;

const StepNumber = styled.span`
  width: 23px;
  height: 23px;
  font-size: 13px;
  padding: 0.15rem;
  color: #828282;
  background: #dddddd;
  border-radius: 50px;
  display: block;
  margin: 0 auto;
  text-align: center;
`;

const StepItem = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 0.35rem 1.3rem;
  border-radius: 5px;
  color: gray;
  &:hover{ background: rgba(0,0,0,0.035); }
  ${(props) => props.isActive && css`
    ${StepNumber}{
      color: #ffffff;
      background: #2650ff;
    }
    color: #2650ff;
  `}
`;

export default function StepsHeader({ onClickStep, activeStep }) {
  return (
    <StepsHeaderWrapper>
      <StepItem isActive={activeStep === 1} onClick={() => onClickStep(1)}>
        <StepNumber> 1 </StepNumber>
        Product
      </StepItem>
      <StepItem isActive={activeStep === 2} onClick={() => onClickStep(2)}>
        <StepNumber> 2 </StepNumber>
        Delivery
      </StepItem>
      <StepItem isActive={activeStep === 3} onClick={() => onClickStep(3)}>
        <StepNumber> 3 </StepNumber>
        Summary
      </StepItem>
    </StepsHeaderWrapper>
  );
}
