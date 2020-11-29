import React from "react";
import styled from "styled-components";
import { FaMinus, FaChevronDown } from "react-icons/fa";

import headshot from "../images/headshot.jpg";

export default function AboutMe() {
  function scrollToWork() {
    document.getElementById("projects").scrollIntoView({ block: "center" });
  }

  return (
    <Container>
      <Card>
        <Img src={headshot} />
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
      </Card>
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
  height: 100vh;
  width: 80%;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    width: 65%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(40, 44, 52, 0.95);
  align-items: center;
  padding: 20px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
  width: 100%;
  @media (min-width: 769px) {
    justify-content: space-evenly;
    flex-direction: row;
    height: 55%;
  }
`;

const Img = styled.img`
  max-width: 90%;
  max-height: 80%;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);
  @media (min-width: 769px) {
    max-width: 45%;
  }
`;

const Info = styled.div`
  text-align: center;
  & p {
    margin-bottom: 0;
  }
  & div {
    display: flex;
    align-items: center;
    & span {
      font-family: TitilliumBold;
      font-size: 2em;
      font-weight: bold;
      margin: 10px 20px 0 20px;
      line-height: 1.2;
      letter-spacing: 0.35rem;
    }
  }
  @media (min-width: 769px) {
    font-size: 30px;
    max-width: 50%;
  }
`;

const WorkButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 2rem;
  cursor: pointer;
  & svg {
    margin: 0 10px;
    animation: upDown 0.7s infinite alternate linear;
  }
  @keyframes upDown {
    from {
      transform: translateY(-5px);
    }
    to {
      transform: translateY(5px);
    }
  }
`;
