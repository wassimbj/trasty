import styled from 'styled-components';

export const TravelerInfo = styled.div`
  display: flex;
  align-items: center;
  
  & img {
    width: 50px;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
  }
  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 0.5rem;
    & span { white-space: nowrap; text-overflow: ellipsis; }
    & .name { font-weight: 600; }
  }
`;

export const RequestButton = styled.button`
  color: #2650ff;
  background: rgba(38,80,255,0.15);
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 50px;
  transition: 250ms;

  &:hover{
    background: rgba(38,80,255,0.20);
  }
`;

export const Card = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TripDetails = styled.div`
  @media(max-width: 361px){
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`;

export const LocationDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const TripDate = styled.span`
  font-size: 15px;
  color: gray;
`;
