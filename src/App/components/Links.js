import React, { useState } from "react";
import styled from "styled-components";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaMedium,
  FaEnvelopeSquare,
} from "react-icons/fa";

function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const iconSize = 50;

  return (
    <Container>
      <ContactContainer>
        <h2>GitHub</h2>
        <FaGithubSquare size={iconSize} />
      </ContactContainer>
      <ContactContainer>
        <h2>LinkedIn</h2>
        <FaLinkedin size={iconSize} />
      </ContactContainer>
      <ContactContainer>
        <h2>Twitter</h2>
        <FaTwitterSquare size={iconSize} />
      </ContactContainer>
      <ContactContainer>
        <h2>Medium</h2>
        <FaMedium size={iconSize} />
      </ContactContainer>
      <ContactContainer>
        <h2>E-Mail</h2>
        <FaEnvelopeSquare size={iconSize} />
      </ContactContainer>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 50%;
  margin-top: -125px;
`;

const ContactContainer = styled.div`
  margin-left: 2px;
  display: flex;
  align-items: center;
  height: 50px;
  & h2 {
    background-color: #4ecdc4;
    color: black;
    font-family: TitilliumBold;
    height: 42px;
    overflow: hidden;
    width: 0;
    transition: 0.3s ease-out;
    border-radius: 4px;
    text-align: center;
    white-space: nowrap;
  }
  :hover {
    cursor: pointer;
    & h2 {
      width: 100px;
      padding: 0 10px;
      margin-left: 2px;
    }
  }
`;
