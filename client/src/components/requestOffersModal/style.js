import styled, { css } from 'styled-components';

export const Title = styled.span`
display: block;
text-align: center;
font-weight: 500;
padding: 1rem 0.5rem;
border-bottom: 1px solid rgba(0,0,0,0.1);
font-size: 19px;
`;

export const ModalBodyWrapper = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  overflow: auto;
`;

export const ModalBody = styled.div`
padding: 2.5rem 1rem;
display: flex;
flex-direction: column;
`;

export const ModalFooter = styled.div`
  padding: 0.5rem 0.5rem;
  border-top: 1px solid rgba(0,0,0,0.1);
  display: flex;
  justify-content: flex-end;
`;

export const Label = styled.label`
font-size: 14px;
font-weight: 500;
color: #4f4f4f;
margin-bottom: 0.25rem;
display: block;
`;

export const InputWrapper = styled.div`
  &:not(:first-child){ margin-top: 2rem; }
  position: relative;
`;

export const CancelButton = styled.span`
  padding: 0.45rem 1.5rem;
  background: #ececec;
  color: #626262;
  border-radius: 30px;
  transition: 250ms;
  cursor: pointer;
  text-align: center;
  &:hover{ background: #e3e3e3; }
`;

export const ErrorMsg = styled.span`
  // color: #FF5722;
  color: #ff3535;
  font-size: 13px;
`;

export const NoOffersMsg = styled.div`
  text-align: center;
  padding: 5rem 0.5rem;
  font-weight: 500;
`;
