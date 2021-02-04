import React from 'react'
import styled from 'styled-components'
import NotifsData from '../../components/notifsData'

const Wrapper = styled.div`
  border-radius: 10px;
  max-width: 500px;
  margin: 1rem auto;
`;


export default function Notifs() {
  return (
    <Wrapper>
      <NotifsData isOpen={true} />
    </Wrapper>
  )
}
