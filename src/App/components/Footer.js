import React, { useState } from "react";
import styled from "styled-components";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaMedium,
  FaEnvelopeSquare,
} from "react-icons/fa";

function Footer(props) {
  const [emailCopied, setEmailCopied] = useState(false);
  const iconSize = 50;

  function copyEmail() {
    // navigator.clipboard.writeText("ericksenm93@ymail.com");

    const textField = document.createElement("textarea");
    textField.innerText = "ericksenm93@ymail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  }

  return (
    <Container style={{ width: props.mobile ? "100vw" : "60vw" }}>
      <a href="https://github.com/mattie43" target="_blank" rel="noreferrer">
        <FaGithubSquare size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/matt-ericksen-4195ab1b1/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={iconSize} />
      </a>
      <a
        href="https://twitter.com/MattEricksen6"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare size={iconSize} />
      </a>
      <a
        href="https://ericksenm93.medium.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FaMedium size={iconSize} />
      </a>
      <EmailContainer>
        <ToolTip style={{ opacity: emailCopied ? 1 : 0 }}>
          Email Copied!
        </ToolTip>
        <FaEnvelopeSquare size={iconSize} onClick={copyEmail} />
      </EmailContainer>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
  & a {
    color: inherit;
  }
`;

const EmailContainer = styled.div`
  position: relative;
  & :nth-child(2):hover {
    cursor: pointer;
  }
`;

const ToolTip = styled.span`
  position: absolute;
  z-index: 1;
  width: 95px;
  top: -38px;
  left: -28px;
  background-color: #555;
  color: #fff;
  border-radius: 6px;
  padding: 4px;
  transition: opacity 0.3s;
`;
