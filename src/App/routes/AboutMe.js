import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

import prism from "../assets/images/prism.png";
import { AB } from "../assets/JS/Me";

export default function AboutMe() {
  const slideCheck = useRef();

  useEffect(() => {
    slideCheck.current = document
      .querySelector(".about-me")
      .classList.contains("slide-enter");
  });

  function aboutMeDivs() {
    return AB.map((obj, i) => (
      <AboutMeDiv
        key={i}
        even={i % 2 === 0}
        bgImg={obj.img}
        id={i % 2 === 0 ? "inner-even" : "inner-odd"}
        slideCheck={slideCheck.current}
      >
        <p>{obj.p}</p>
      </AboutMeDiv>
    ));
  }
  return (
    <Container className="about-me" prism={prism}>
      <Header>
        <NavLink to="/">Head Back</NavLink>
      </Header>
      {aboutMeDivs()}
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

const AboutMeDiv = styled.div`
  display: flex;
  min-height: 50vh;
  width: 100%;
  align-items: center;
  background-image: ${(p) => `url(${p.bgImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  background-color: rgba(40, 44, 52, 1);
  transform: translateX(${(p) => (p.even ? "-110%" : "110%")});
  animation: ${(p) => enter(p.even)} 1s ease
    ${(p) => (p.slideCheck ? "4s" : "0s")} forwards;
  & p {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    margin: 0;
    font-size: 32px;
    padding: 0 15vw;
  }
`;

const enter = (p) => keyframes`
  from {
    transform : translateX(${p ? "-110%" : "110%"})
  }
  to {
    transform : translateX(0);
    /* box-shadow: 0 0px 20px rgba(0, 0, 0, 1); */
  }
`;
