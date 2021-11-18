import React from 'react'
import styled from 'styled-components';

const InputWrapper = styled.div`
  &:not(:first-child){ margin-top: 2rem; }
  position: relative;
`;

const Label = styled.label`
font-size: 14px;
font-weight: 500;
color: #4f4f4f;
margin-bottom: 0.25rem;
display: block;
`;


const StyledInput = styled.input`
   padding: 0.75rem;
   border: 1px solid #e5e5e5;
   border-radius: 7px;
   &:focus{
   border-color: #333;
   outline: none;
   }
   display: block;
   width: 100%;
`;


export default function Input({ onChange, label, placeholder, value, type, name }) {
   return (
      <InputWrapper>
         <Label>{label}</Label>
         <StyledInput
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={value}
            type={type}
            name={name}
         />
      </InputWrapper> 
   )
}
