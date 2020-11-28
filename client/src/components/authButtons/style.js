import styled from 'styled-components';

export const StyledAuthButton = styled.a`
  display: flex;
  flex: 1 1 0%;
  z-index: 3;
  align-self: flex-start;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  border-radius: 32px;
  padding: 0.5rem 1rem;
  padding-right: 2rem;
  font-size: 15px;
  font-weight: 600;
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: 250ms;
  
  & span { margin-left: 2rem; }
  &:hover{ box-shadow: 0 0 12px rgba(0,0,0,0.25); }
`;

export const StyledFacebookButton = styled(StyledAuthButton)`
  background: rgb(59, 89, 152);
  color: rgb(255, 255, 255);
`;

export const StyledGoogleButton = styled(StyledAuthButton)`
  background: rgb(234, 67, 53);
  color: rgb(255, 255, 255);
`;
