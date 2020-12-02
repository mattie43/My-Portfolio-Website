import React from "react";
import styled from "styled-components";
import { FaMinus, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import tempHS from "../assests/images/tempHS.png";
import flower from "../assests/images/moroccan-flower-dark.png";

export default function AboutMe() {
  function scrollToWork() {
    document.getElementById("projects").scrollIntoView();
  }

  return (
    <Container img={`url(${flower})`}>
      <Info>
        <p>Hey, I'm</p>
        <div>
          <FaMinus size={30} />
          <span>
            Matt <br />
            Ericksen
          </span>
          <FaMinus size={30} />
        </div>
      </Info>
      <Link to="/about">
        <AboutMeButton>
          About Me
          <FaChevronRight size={35} />
        </AboutMeButton>
      </Link>
      <WorkButton onClick={scrollToWork}>
        <FaChevronDown size={35} />
        My Work
      </WorkButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: ${(p) => p.img};
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  & a {
    color: inherit;
  }
`;

const Info = styled.div`
  text-align: center;
  font-family: Script;
  font-size: 1rem;
  & p {
    margin: 0;
  }
  & div {
    display: flex;
    align-items: center;
    & span {
      font-size: 3em;
      font-weight: bold;
      margin: 20px 40px;
      line-height: 1.2;
      letter-spacing: 0.35rem;
    }
    & svg {
      transform: scaleX(2);
    }
  }
  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;

const WorkButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 40px;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  :hover {
    color: #eb9509;
    transition: 0.4s ease;
  }
  & svg {
    animation: wave 0.6s infinite alternate ease;
    margin-right: 10px;
  }
  @keyframes wave {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(10px);
    }
  }
  @media (min-width: 769px) {
    bottom: 20px;
  }
`;

const AboutMeButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 40px;
  right: 20px;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  :hover {
    color: #eb9509;
    transition: 0.4s ease;
  }
  & svg {
    animation: slide 0.6s infinite alternate ease;
  }
  @keyframes slide {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(10px);
    }
  }
  @media (min-width: 769px) {
    bottom: 20px;
  }
`;
