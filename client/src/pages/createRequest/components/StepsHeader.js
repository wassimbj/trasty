import React from 'react';
import styled, { css } from 'styled-components';

const StepsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow-x: auto;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.1);
`;

const StepNumber = styled.span`
  width: 21px;
  height: 21px;
  font-size: 12px;
  padding: 0.15rem;
  color: #828282;
  background: #dddddd;
  border-radius: 50px;
  display: block;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
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
    font-weight: 500;
  `}

  @media(max-width: 340px){
    font-size: 13px;
  }
`;

export default function StepsHeader({ onClickStep, activeStep }) {
  return (
    <StepsHeaderWrapper>
      <StepItem isActive={activeStep <= 3} onClick={() => onClickStep(1)}>
        <StepNumber> 1 </StepNumber>
        Product
      </StepItem>
      <StepItem isActive={activeStep === 2 || activeStep === 3} onClick={() => onClickStep(2)}>
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
