import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../button";
import { Modal, ModalBody, ModalBodyWrapper } from "../modal";

const Text = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 20px;
  font-weight: 600;
`;

const GetStarted = styled(Link)`
   width: 200px;
   margin: 0 auto;
`

export default function AuthModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <ModalBodyWrapper>
        <ModalBody>
          <Text> Login to start with trasty </Text>
          <GetStarted to="/start">
             <Button>Get Started</Button>
          </GetStarted>
        </ModalBody>
      </ModalBodyWrapper>
    </Modal>
  );
}
