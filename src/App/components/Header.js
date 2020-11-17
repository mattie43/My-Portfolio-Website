import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>HOME</h1>
      </Link>
      <Link to="/resume">
        <h1>RESUME</h1>
      </Link>
      <Link to="/projects">
        <h1>PROJECTS</h1>
      </Link>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  margin-bottom: 20px;
  & a {
    color: white;
    text-decoration: none;
  }
  & h1 {
    margin: 15px;
  }
  & h1:hover {
    transition: 0.2s;
    background: linear-gradient(45deg, #3277a8 50%, #ee6352);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
