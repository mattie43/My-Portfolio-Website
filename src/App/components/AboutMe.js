import React from "react";
import styled from "styled-components";
import { FaMinus, FaChevronDown } from "react-icons/fa";

import tempHS from "../images/tempHS.png";

export default function AboutMe() {
  function scrollToWork() {
    document.getElementById("projects").scrollIntoView();
  }

  return (
    <Container img={`url(${tempHS})`}>
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
`;

const Info = styled.div`
  text-align: center;
  font-family: Script;
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
    font-size: 30px;
  }
`;

const WorkButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  :hover {
    color: #00adb5;
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
`;
