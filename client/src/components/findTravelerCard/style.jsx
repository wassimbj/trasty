import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 950px;
  margin-top: ${(props) => props.marginTop};
  ${(props) => props.customStyle}
`;

export const LocationsSeachCard = styled.div`
  background: white;
  padding: 0.25rem 0.5rem;
  box-shadow: 0 3px 25px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  @media(max-width: 425px){
   justify-content: center;
  }
  border-left: 4px solid rgb(38, 80, 255);
  border-right: 4px solid rgb(38, 80, 255);
`;

export const SearchBtn = styled.button`
  display: inline-block;
  background: linear-gradient(rgb(38,80,255),rgb(0,49,255)) rgb(38,80,255);
  color: white;
  outline: none;
  text-align: center;
  padding: 0.75rem 0.75rem;
  border-radius: 5px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.15);
  transition: 500ms;
  &:hover{
    background: rgb(0,49,255);
  }

  @media(max-width: 560px){
      width: 100%;
      margin-top: 1rem;
  }
`;

export const SwitchIcon = styled.span`
   color: #999;
   display: inline-block;
   border-radius: 50px;
   padding: 6px;
   cursor: pointer;
   transition: 250ms ease-in-out;

   &:hover {
      background: #efefef;
   }
`;

// export const SearchInput = styled.input`
//    padding: 10px;
//    background: transparent;
//    border-radius: 6px;
//    outline: none;
//    width: 100%;
// `;

// export const SelectLocation = styled.div`
//    padding: 0.35rem 0.75rem;
//    border-radius: 5px;
//    transition: 300ms ease-in-out;
//    display: flex;
//    align-items: center;
//    width: 35%;
//    &:hover {
//       background: #ededee;
//    }

//    @media(max-width: 425px){
//       width: 100%;
//    }

//    & span {
//       color: #222222;
//       display: block;
//       margin-right: 0.25rem;
//    }

// `;
