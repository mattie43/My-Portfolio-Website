import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaEye,
  FaTimes,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

import { ProjectIntro, ProjectList } from "../assests/ProjectList";

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
            <FaGithub size={22} />
            Code
          </a>
          <a
            href={proj.sourceFront}
            target="_blank"
            rel="noreferrer"
            id="video-btn"
          >
            <FaEye size={22} />
            Demo
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
  max-width: 60%;
  margin: 0;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65%;
  padding: 20px;
  & h2 {
    margin: 0 0 20px 0;
    font-family: Script;
  }
  & hr {
    margin: 40px 0 0 0;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.i % 2 === 0 ? "row" : "row-reverse")};
  text-align: ${(p) => (p.i % 2 === 0 ? "right" : "left")};
  align-items: center;
  & img {
    max-width: 50%;
    margin: ${(p) => (p.i % 2 === 0 ? "0 20px 0 0" : "0 0 0 20px")};
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  margin-top: 20px;
  & a {
    font-size: 1.4rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 300ms ease all;
    padding: 2px 8px;
  }
  & #github-btn {
    position: relative;
    background: #00adb5;
  }
  & #video-btn {
    position: relative;
    background: #9d856c;
  }
  & #github-btn:hover {
    background: rgba(40, 44, 52, 1);
    color: #00adb5;
  }
  & #video-btn:hover {
    background: rgba(40, 44, 52, 1);
    color: #9d856c;
  }
  & a:before,
  a:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    transition: 600ms ease all;
  }
  & #github-btn:before,
  #github-btn:after {
    background: #00adb5;
  }
  & #video-btn:before,
  #video-btn:after {
    background: #9d856c;
  }
  & a:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  & a:hover:before,
  a:hover:after {
    width: 100%;
    transition: 600ms ease all;
  }
  & svg {
    margin-right: 8px;
  }
`;
