import styled from 'styled-components';

export const SearchLocationCard = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow:
    0 12px 28px 0 rgba(0,0,0,0.2),
    0 2px 4px 0 rgba(0,0,0,0.1),
    inset 0 0 0 1px rgba(255,255,255,0.5);
  padding: 0.5rem;
  border-radius: 6px;
  background: white;
  z-index: 10;
`;

export const Msg = styled.span`
  display: block; color: gray;
  text-align: center;
  padding: 1rem 0.5rem;
`;

export const LocationItem = styled.div`
  padding: 0.65rem 1rem;
  border-radius: 5px;
  &:hover{ background: rgba(0,0,0,0.05) }
  cursor: pointer;
  position: relative;
  & input {
    cursor: pointer;
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    opacity: 0;
  }
`;
