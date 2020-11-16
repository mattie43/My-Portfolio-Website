import React from "react";
import styled from "styled-components";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaMedium,
} from "react-icons/fa";

function Footer() {
  const iconSize = 50;
  return (
    <Container>
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
  justify-content: space-around;
  width: 100vw;
  margin-top: 5px;
  & a {
    color: white;
  }
`;
