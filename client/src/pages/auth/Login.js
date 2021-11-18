/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import styled from "styled-components";
import LoginButtons from "./components/LoginButtons";
import SignAgreementText from "../../components/signAgreementText";
import Footer from "../../components/footer";
import constants from "../../constants";
import Input from "../../components/input";
import { Button } from "../../components/button";
import { useFormik } from "formik";

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
  @media (max-width: 350px) {
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
  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: (val) => {
      console.log(val);
    },
  });

  return (
    <>
      <Wrapper>
        <LoginCard>
          <TitleWrapper>
            <Title> Start using {constants.APP_NAME} </Title>
            <SubTitle>Wether you are new or an existing user</SubTitle>
            <SubTitle>
              just click a button and start using {constants.APP_NAME}.
            </SubTitle>
          </TitleWrapper>
          <form
            onSubmit={formik.handleSubmit}
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <Input
              onChange={formik.handleChange}
              name="phone"
              placeholder="11234567"
              type="text"
              label="phone number"
            />
            <Input
              onChange={formik.handleChange}
              name="password"
              placeholder="•••••••••"
              type="password"
              label="password"
            />
            <br />
            <br />
            <Button> Get started </Button>
          </form>
          {/* <LoginButtons /> */}
          <SignAgreementText />
        </LoginCard>
      </Wrapper>
      <Footer />
    </>
  );
}
