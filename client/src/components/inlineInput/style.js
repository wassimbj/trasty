import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
   padding: 0.35rem 0.75rem;
   border-radius: 5px;
   transition: 300ms ease-in-out;
   display: flex;
   align-items: center;
   width: ${(props) => props.width || '100%'};
   ${(props) => (props.initStyles ? css` ${props.initStyles} ` : '')}


   @media(max-width: 425px){
      width: 100%;
   }

   & span {
      color: #222222;
      display: block;
      margin-right: 0.25rem;
      white-space: nowrap;
   }
`;

export const Input = styled.input`
   padding: 10px;
   background: transparent;
   border-radius: 6px;
   outline: none;
   width: ${(props) => props.width || '100%'};
`;
