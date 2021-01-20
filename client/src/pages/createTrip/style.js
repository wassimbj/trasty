import styled, { css } from 'styled-components';

export const CreateCard = styled.div`
  padding: 1rem;
  border-radius: 6px;
  max-width: 500px;
  margin: 0 auto 2rem;
`;

export const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 3rem;
`;

export const TripImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 0.65rem 1rem;
  border-radius: 5px;
  background: #fff;
  &::placeholder{color: #999;}
  display: block;
  width: 100%;
  transition: 250ms ease-in-out;
  border: 1px solid rgba(0,0,0,0.15);
  &:hover{ border: 1px solid rgba(0,0,0,0.25); }
  &:focus{ border: 1px solid rgba(0,0,0,0.5); outline: none }
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => css`
   ${props.customStyles}
  `}
`;

export const InputBlock = styled.div`
  margin-bottom: 2.5rem;
  position: relative;
  & label{
    color: #333333;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 0.5rem;
    display: block;
  }
  ${(props) => css`
    ${props.customStyles}
  `}
`;

export const InputLabel = styled.label`
  color: #333333;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 0.5rem;
  display: block;
`;

export const WaitingSelect = styled.select`
  padding: 1rem;
  appearance: none;
  // width: 230px;
  display: block;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.15);
  transition: 250ms;
  &:hover{ border: 1px solid rgba(0,0,0,0.25); }
  &:focus{
    border: 1px solid rgba(0,0,0,0.5);
    outline: none;
  }
`;

export const ErrorMsg = styled.span`
  color: #ff5858;
  font-size: 13px;
  display: block;
`;
