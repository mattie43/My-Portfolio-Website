import React from "react";
import styled from "styled-components";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaMedium,
} from "react-icons/fa";

function Footer(props) {
  const iconSize = 50;
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
    color: white;
  }
`;
