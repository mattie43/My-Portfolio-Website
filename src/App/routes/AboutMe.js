import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function AboutMe() {
  return (
    <Container className="about-me">
      <NavLink to="/">testing router</NavLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: salmon;
  & a {
    color: inherit;
  }
`;
