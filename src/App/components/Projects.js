import React, { useEffect } from "react";
import styled from "styled-components";
import { FaGithub, FaEye, FaWifi } from "react-icons/fa";

import * as PL from "../assests/ProjectList";

export default function Projects() {
  return (
    <Container>
      <IntroText>
        <PL.Intro />
      </IntroText>
      <SingleCard>
        <ProjectTitle>GiFinder</ProjectTitle>
        <HorizontalLine />
        <ProjectContainer>
          <LeftCard>
            <img
              src="https://images.idgesg.net/images/article/2019/07/chrome-screenshot-2-100801438-large.jpg"
              alt="GiFinder Screenshot"
              title="GiFinder"
            />
            <a
              href="https://github.com/mattie43/Mod1-FinalProject-GiFinder"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={22} />
              <span>Source Code</span>
            </a>
            <div>
              <FaEye size={22} />
              <span>Video Demo</span>
            </div>
            <div>
              <FaWifi size={22} />
              <span>Live Demo</span>
            </div>
          </LeftCard>
          <VerticalHR />
          <PL.GiFinder />
        </ProjectContainer>
      </SingleCard>
      <SingleCard>
        <PL.Whoop />
        <a
          href="https://github.com/mattie43/Mod2FinalProject/"
          target="_blank"
          rel="noreferrer"
          style={{ alignSelf: "center" }}
        >
          <FaGithub size={50} />
        </a>
      </SingleCard>
      <SingleCard>
        <PL.Pokeiron />
        <div style={{ alignSelf: "center" }}>
          <a
            href="https://github.com/mattie43/Mod3PokemonProject-FrontEnd/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={50}
              style={{ marginLeft: "20px", marginRight: "20px" }}
            />
          </a>
          <a
            href="https://github.com/islommashanlo/Mod3-Pokemon-Project-Backend"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={50} style={{ marginLeft: "20px" }} />
          </a>
        </div>
      </SingleCard>
      <SingleCard>
        <PL.Viaggiamo />
        <div style={{ alignSelf: "center" }}>
          <a
            href="https://github.com/slurio/slurio-viaggiamo-frontend-"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={50}
              style={{ marginLeft: "20px", marginRight: "20px" }}
            />
          </a>
          <a
            href="https://github.com/mattie43/Viaggiamo-Backend"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={50} style={{ marginLeft: "20px" }} />
          </a>
        </div>
      </SingleCard>
      <SingleCard>
        <PL.Sellular />
        <div style={{ alignSelf: "center" }}>
          <a
            href="https://github.com/mattie43/Sellular-Frontend"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={50}
              style={{ marginLeft: "20px", marginRight: "20px" }}
            />
          </a>
          <a
            href="https://github.com/mattie43/Sellular-Backend"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={50} style={{ marginLeft: "20px" }} />
          </a>
        </div>
      </SingleCard>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  align-self: center;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  & a {
    color: inherit;
  }
`;

const IntroText = styled.p`
  align-self: center;
  text-align: center;
  font-size: 25px;
  padding: 20px;
  margin: 0 0 20px 0;
  background-color: #282c34;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
`;

const SingleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #282c34;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
  & p {
    font-size: 25px;
    text-align: center;
    margin: 0;
    max-width: 50%;
  }
  & :nth-child(3) {
    display: flex;
    margin-top: 10px;
  }
`;

const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    max-width: 100%;
    margin-bottom: 20px;
  }
  & span {
    font-size: 20px;
    margin-left: 10px;
  }
  & svg {
    margin-bottom: -4px;
  }
  & a {
    text-decoration: none;
  }
  & a:hover {
    transform: scale(1.1);
  }
`;

const ProjectTitle = styled.h1`
  margin: 0;
`;

const ProjectContainer = styled.div`
  display: flex;
`;

const HorizontalLine = styled.hr`
  width: 90%;
  height: 1px;
  background-color: #d7b377;
  border: none;
`;

const VerticalHR = styled.div`
  width: 1px;
  height: 20px;
  background-color: #d7b377;
  /* align-self: center; */
  margin: 0 20px;
`;
