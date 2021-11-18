import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TabWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  border-top: 1px solid #e9edff;
  border-bottom: 1px solid #e9edff;
  @media(min-width: 700px){
    justify-content: center;
  }
  overflow-x: auto;
`;

export const Tab = styled(Link)`
  padding: 1rem 2rem;
  display: inline-block;
  transition: 100ms;
  white-space: nowrap;
  &:not(.active):hover{
    background: rgba(0,0,0,0.045);
  }
  &.active {
    border-bottom: 2px solid #2650ff;
    color: #2650ff;
    font-weight: 500;
    background: rgba(38,80,255,0.1);
  }
`;

export const TabContent = styled.div`
  margin-top: 1.5rem;
`;
