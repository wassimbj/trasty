import React from 'react';
import styled from 'styled-components';
import LoginButtons from './components/LoginButtons';
import SignAgreementText from '../../components/signAgreementText';
import Footer from '../../components/footer';

const Wrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 8rem;
`;

const LoginCard = styled.div`
  padding: 1rem;
`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 40px;
  color: #24292e;
  @media(max-width: 350px){
    font-size: 30px;
  }
`;

const SubTitle = styled.span`
  display: block;
  text-align: center;
  font-size: 15px;
  color: #878787;
  margin 0.25rem 0;
`;

export default function Login() {
  return (
   <>
    <Wrapper>
      <LoginCard>
        <TitleWrapper>
          <Title> Start using Trusty </Title>
          <SubTitle>Wether you are new or an existing user</SubTitle>
          <SubTitle>just click a button and start using trusti.</SubTitle>
        </TitleWrapper>
        <LoginButtons />
        <SignAgreementText />
      </LoginCard>
    </Wrapper>
    <Footer />
   </>
  );
}
