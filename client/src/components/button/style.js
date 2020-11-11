import styled from 'styled-components';

export const StyledButton = styled.button`
   display: ${(props) => props.display || 'inline-block'};
   width: ${(props) => props.btnWidth || '100%'};
   color: white;
   text-align: center;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 20px;
   background: linear-gradient(rgb(38, 80, 255), rgb(0, 49, 255)) rgb(38, 80, 255);
   outline: none;
   padding: 0.75rem;
   border-radius: 5px;
   transition: background 500ms ease-in-out;
   &:hover{
      background: rgb(0, 49, 255);
   }
   ${(props) => props.customStyles};
`;

export const StyledWhiteButton = styled.button`
   display: ${(props) => props.display || 'inline-block'};
   width: ${(props) => props.btnWidth || '100%'};
   text-align: center;
   color: rgb(38, 80, 255);
   background: transparent;
   border: 2px solid rgb(38, 80, 255);
   outline: none;
   padding: 0.75rem;
   border-radius: 5px;
   transition: 250ms ease-in-out;
   ${(props) => props.customStyles};
   &:hover{
      color: white;
      background: rgb(38, 80, 255);
   }

`;
