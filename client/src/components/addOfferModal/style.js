import styled from 'styled-components';

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
padding: 1rem 0.5rem;
border-top: 1px solid rgba(0,0,0,0.1);
display: flex;
justify-content: space-between;
`;

export const Input = styled.input`
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

export const NotesTextarea = styled.textarea`
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

export const Label = styled.label`
font-size: 14px;
font-weight: 500;
color: #4f4f4f;
margin-bottom: 0.25rem;
display: block;
`;

export const InputWrapper = styled.div`
&:not(:first-child){ margin-top: 2rem; }
`;

export const CreateOfferButton = styled.button`
padding: 0.65rem 1.5rem;
background: #2650ff;
border-radius: 30px;
color: #fff;
transition: 250ms;
cursor: pointer;
&:hover{ background: #0a37f3; }
width: 75%;
margin-right: 0.5rem;
font-weight: 500;
`;

export const CancelButton = styled.span`
padding: 0.65rem 1.5rem;
background: #dedede;
color: #626262;
border-radius: 30px;
transition: 250ms;
cursor: pointer;
text-align: center;
&:hover{ background: #cecece; }
`;