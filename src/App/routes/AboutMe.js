import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

import prism from "../assets/images/prism.png";
import DG from "../assets/images/dg.webp";
import Blue from "../assets/images/moroccan-flower-dark.png";
import Purple from "../assets/images/purpleGalaxy.jpg";

export default function AboutMe() {
  const slideCheck = useRef();

  useEffect(() => {
    slideCheck.current = document
      .querySelector(".about-me")
      .classList.contains("slide-enter");
  });

  function aboutMeDivs() {
    return [DG, Blue, Purple].map((img, i) => (
      <AboutMeDiv
        key={i}
        even={i % 2 === 0}
        bgImg={img}
        id={i % 2 === 0 ? "inner-even" : "inner-odd"}
        slideCheck={slideCheck.current}
      >
        <p>
          Culpa excepteur ea aliquip eu. Incididunt consequat consectetur dolor
          qui fugiat consequat eiusmod ex aliqua mollit commodo Lorem aliqua.
          Fugiat ad dolore eiusmod dolore fugiat. Adipisicing labore tempor sunt
          reprehenderit culpa aute cupidatat sit est. Ex pariatur incididunt
          cillum qui esse ad ipsum Lorem nostrud ea aliquip elit ullamco. Elit
          nisi quis consectetur elit minim aute. Ad ea enim fugiat mollit.
        </p>
      </AboutMeDiv>
    ));
  }
  return (
    <Container className="about-me" prism={prism}>
      <NavLink to="/">testing router</NavLink>
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

const AboutMeDiv = styled.div`
  display: flex;
  margin: 20px 0;
  min-height: 70vh;
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
    margin: 0;
    padding: 15px;
  }
`;

const enter = (p) => keyframes`
  from {
    transform : translateX(${p ? "-110%" : "110%"})
  }
  to {
    transform : translateX(0);
    box-shadow: 0 0px 20px rgba(0, 0, 0, 1);
  }
`;
