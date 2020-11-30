import React from "react";
import styled from "styled-components";
import {
  FaCode,
  FaEye,
  FaTimes,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

import { ProjectIntro, ProjectList } from "../assests/ProjectList";
import MyButton from "../assests/MyButton";

export default function Projects() {
  function renderCards() {
    return ProjectList.map((proj, i) => (
      <Card key={i} id={proj.title}>
        <h2>{proj.title}</h2>
        <ProjectInfo i={i}>
          <img src="https://picsum.photos/1920/1080" alt="" />
          {proj.desc}
        </ProjectInfo>
        <Buttons>
          <a
            href={proj.sourceFront}
            target="_blank"
            rel="noreferrer"
            id="github-btn"
          >
            <MyButton
              background={"#00adb5"}
              hoverBG={"#282c34"}
              textColor={"#f5f5f5"}
              content={"Code"}
              icon={<FaCode size={22} />}
            />
          </a>
          <a
            href={proj.sourceFront}
            target="_blank"
            rel="noreferrer"
            id="video-btn"
          >
            <MyButton
              background={"#9d856c"}
              hoverBG={"#282c34"}
              textColor={"#f5f5f5"}
              content={"Demo"}
              icon={<FaEye size={22} />}
            />
          </a>
        </Buttons>
        {i + 1 === ProjectList.length ? null : <hr />}
      </Card>
    ));
  }

  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <Intro>{ProjectIntro}</Intro>
      <hr />
      {renderCards()}
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(40, 44, 52, 1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  align-items: center;
  padding: 20px 0;
  margin-bottom: 200px;
  & a {
    color: inherit;
  }
  & hr {
    width: 70%;
    margin: 20px;
  }
  & h2 {
    margin: 0;
    font-family: Script;
  }
`;

const Intro = styled.p`
  text-align: center;
  max-width: 100%;
  margin: 0;
  padding: 10px;
  @media (min-width: 769px) {
    max-width: 60%;
    padding: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 10px;
  & h2 {
    margin: 0 0 20px 0;
    font-family: Script;
  }
  & hr {
    margin: 40px 0 0 0;
  }
  @media (min-width: 769px) {
    max-width: 65%;
    padding: 20px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & img {
    max-width: 95%;
    margin-bottom: 20px;
  }
  @media (min-width: 769px) {
    & img {
      max-width: 50%;
      margin: ${(p) => (p.i % 2 === 0 ? "0 20px 0 0" : "0 0 0 20px")};
    }
    flex-direction: ${(p) => (p.i % 2 === 0 ? "row" : "row-reverse")};
    text-align: ${(p) => (p.i % 2 === 0 ? "right" : "left")};
    max-width: 65%;
    padding: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 20px;
  & a {
    text-decoration: none;
  }
  @media (min-width: 769px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 60%;
  }
`;
