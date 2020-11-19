import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

function Header(props) {
  return (
    <Container>
      <Link to="/">
        <LinkContainer>
          <h1>ABOUT ME</h1>
          <h1>ABOUT ME</h1>
        </LinkContainer>
      </Link>
      <Link to="/resume">
        <LinkContainer>
          <h1>RESUME</h1>
          <h1>RESUME</h1>
        </LinkContainer>
      </Link>
      <Link to="/projects">
        <LinkContainer>
          <h1>PROJECTS</h1>
          <h1>PROJECTS</h1>
        </LinkContainer>
      </Link>
      <ModeContainer darkMode={props.darkMode} onClick={props.changeDarkMode}>
        <FaMoon id="moon" size={30} />
        <FaSun id="sun" size={30} />
      </ModeContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const LinkContainer = styled.div`
  display: grid;
  & h1 {
    margin: 0;
    grid-column: 1;
    grid-row: 1;
    transition: opacity 0.2s linear;
  }
  & :nth-child(1) {
    background-image: linear-gradient(
      45deg,
      #d50f0f 33%,
      #ffffff 33%,
      #ffffff 66%,
      #1620ed 66%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  :hover {
    & :nth-child(2) {
      opacity: 0;
    }
  }
`;

const ModeContainer = styled.div`
  position: relative;
  align-self: center;
  overflow: hidden;
  width: 30px;
  height: 30px;
  #sun {
    position: absolute;
    top: ${(props) => (props.darkMode ? "-50px" : "0px")};
    transition: 0.5s;
  }
  #moon {
    position: absolute;
    top: ${(props) => (props.darkMode ? "0px" : "50px")};
    transition: 0.5s;
  }
`;
