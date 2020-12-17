import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import prism from "../assets/images/prism.png";

export default function AboutMe() {
  const slideCheck = useRef();

  useEffect(() => {
    slideCheck.current = document
      .querySelector(".about-me")
      .classList.contains("slide-enter");
  });

  return (
    <Container className="about-me" prism={prism}>
      <Header>
        <NavLink to="/">Head Back</NavLink>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  background-image: ${(p) => `url(${p.prism})`};
  background-size: 100vh;
  & a {
    color: inherit;
  }
`;

const Header = styled.div`
  width: 100%;
  background-color: #212121;
  & a {
    color: inherit;
    text-decoration: none;
  }
`;
