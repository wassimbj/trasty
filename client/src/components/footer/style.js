import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(0,0,0,0.05);
  padding: 0.5rem 1rem;
  border-top: 1px solid rgba(0,0,0,0.085);

  ${(props) => props.marinTop && css`
    margin-top: ${props.marinTop}
  `}
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`;

export const Links = styled.div`
& a {
  color: rgba(0,0,0,0.5);
  &:hover{ color: #000 }
  display: inline-block;
  &:not(:first-child){ margin-left: 0.65rem; }
  font-size: 14px;
}
`;

export const SocialLink = styled.a`
 display: inline-block;
 margin-left: 0.75rem;
 color: #555555;
 transition: 250ms;
 &:hover{ color: #333; }
`;

export const PreferenceWrapper = styled.div`
border-top: 1px solid rgba(255,255,255,0.065);
text-align: center;
display: flex;
justify-content: flex-end;
align-items: flex-end;
flex-wrap: wrap;
color: #666;
& div{
  display: flex;
  align-items: center;
  &:not(:last-child){ margin-right: 1rem; }
}
@media(max-width: 720px){ justify-content: end; }
@media(max-width: 666px){ margin-top: 1rem; }
`;

export const PreferenceSelect = styled.select`
background: transparent;
${(props) => css` width: ${props.width} `};
appearance: none;
border-radius: 50px;
background: rgba(0,0,0,0.045);
padding: 5px 30px;
padding-right: 0;
margin-left: -28px;
cursor: pointer;
&:focus{
  outline: none;
  background: rgba(0,0,0,0.075);
  color: #333;
}
`;

export const SelectCurrency = styled.span`
  text-align: left;
  width: 15px;
  font-size: 18px;
  font-weight: 600;
`;
