import styled, { createGlobalStyle, css } from 'styled-components';

export const ModalGlobalStyle = createGlobalStyle`
  body, html {
    overflow-y: hidden !important;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  width: 540px; // small by default
  z-index: 15;
  margin: 0 0.5rem;
  ${(props) =>
    props.size === "md"
      ? css`
          width: 720px;
        `
      : props.size === "lg"
      ? css`
          width: 900px;
        `
      : null}
  border-radius: 20px;
  background: #fff;
  display: flex;
  max-height: calc(100vh - 32px);
  overflow: auto;
  overflow-x: hidden;
  animation: zoomIn 45ms;
  @keyframes zoomIn {
    from {
      transform: scale(1.13);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const ModalContentWrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;


export const Title = styled.span`
display: block;
text-align: center;
font-weight: 500;
padding: 1rem 0.5rem;
border-bottom: 1px solid rgba(0,0,0,0.1);
font-size: 19px;
`;

export const BodyWrapper = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  overflow: auto;
`;

export const Body = styled.div`
padding: 2.5rem 1rem;
display: flex;
flex-direction: column;
`;

export const Footer = styled.div`
padding: 1rem 0.5rem;
border-top: 1px solid rgba(0,0,0,0.1);
display: flex;
justify-content: space-between;
`;
