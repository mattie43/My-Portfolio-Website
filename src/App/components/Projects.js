import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaEye, FaWifi, FaTimes } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { ProjectList } from "../assests/ProjectList";

export default function Projects() {
  const [imgOpen, setImgOpen] = useState(false);

  function renderProjects() {
    return ProjectList.map((project, i) => (
      <SingleCard key={i} id={project.title}>
        <h1>{project.title}</h1>
        <HorizontalLine />
        <CardContainer>
          <LeftCard>
            <img
              src={project.img}
              alt={project.title + " Screenshot"}
              title={project.title}
              onClick={() => setImgOpen(project.img)}
            />

            <AwesomeButton
              href={project.sourceFront}
              target="_blank"
              rel="noreferrer"
              className="githubBtn"
            >
              <FaGithub size={22} />
              <span>
                {project.sourceBack ? "Source Code (FE)" : "Source Code"}
              </span>
            </AwesomeButton>
            {project.sourceBack ? (
              <AwesomeButton
                href={project.sourceBack}
                target="_blank"
                rel="noreferrer"
                className="githubBtn"
              >
                <FaGithub size={22} />
                <span>Source Code (BE)</span>
              </AwesomeButton>
            ) : null}
            {project.video ? (
              <AwesomeButton
                href={project.video}
                target="_blank"
                rel="noreferrer"
                className="videoBtn"
              >
                <FaEye size={22} />
                <span>Video Demo</span>
              </AwesomeButton>
            ) : null}
            {project.live ? (
              <AwesomeButton
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="liveBtn"
              >
                <FaWifi size={22} />
                <span>Live Demo</span>
              </AwesomeButton>
            ) : null}
          </LeftCard>
          <VerticalHR />
          <p>{project.desc}</p>
        </CardContainer>
      </SingleCard>
    ));
  }

  function modal() {
    return (
      <Modal imgOpen={imgOpen}>
        <img src={imgOpen ? imgOpen : null} alt="" />
        <FaTimes size={50} onClick={() => setImgOpen(false)} />
      </Modal>
    );
  }

  return (
    <>
      {modal()}
      <Container>
        <IntroText id="projects">
          <h2>PROJECTS</h2>
          In my 15 weeks at{" "}
          <a
            href="https://flatironschool.com/"
            target="_blank"
            rel="noreferrer"
          >
            Flatiron School
          </a>
          , I have created five apps using Ruby, Rails, Javascript, React, and
          React Native. Four of those apps were done with a partner, with the
          final app being a solo project. I've also created a web automation bot
          in Python that my brother uses to create tee times for the weekends.
          Demo video and Github links are on the bottom of each description.
        </IntroText>
        {renderProjects()}
      </Container>
    </>
  );
}

const Modal = styled.div`
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(40, 44, 52, 0.7);
  transform: ${(p) => (p.imgOpen ? "scale(1)" : "scale(0)")};
  & svg {
    position: absolute;
    z-index: 3;
    top: 20px;
    right: 30px;
    cursor: pointer;
  }
  & img {
    display: flex;
    position: fixed;
    max-height: 70vh;
    max-width: 70vw;
    transform: ${(p) => (p.imgOpen ? "scale(1)" : "scale(0)")};
    transition: transform 0.2s linear;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-self: center;
  align-items: center;
  justify-content: center;
  & a {
    color: inherit;
  }
  @media (min-width: 769px) {
    width: 65%;
  }
`;

const IntroText = styled.div`
  align-self: center;
  text-align: center;
  padding: 20px;
  margin: 0 0 20px 0;
  background-color: rgba(40, 44, 52, 0.95);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
  & h2 {
    margin: 0;
  }
`;

const SingleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  background-color: rgba(40, 44, 52, 0.95);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
  & p {
    text-align: center;
    margin: 0;
    @media (min-width: 769px) {
      max-width: 50%;
    }
  }
  & h1 {
    margin: 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 15px;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & a {
    margin-bottom: 6px;
  }
  & .aws-btn {
    --button-default-height: 34px;
    --button-default-font-size: 18px;
    --button-default-border-radius: 0px;
    --button-horizontal-padding: 6px;
    --button-raise-level: 3px;
    --button-hover-pressure: 2;
    --transform-speed: 0.185s;
    --button-primary-color-light: #d4d9e4;
    --button-primary-border: none;
  }
  & .githubBtn {
    --button-primary-color: #50545a;
    --button-primary-color-hover: #60666e;
    --button-primary-color-dark: #282a2e;
  }
  & .videoBtn {
    --button-primary-color: #2d72ba;
    --button-primary-color-hover: #3c8fe8;
    --button-primary-color-dark: #173a5e;
  }
  & .liveBtn {
    --button-primary-color: #00ab6c;
    --button-primary-color-hover: #08c781;
    --button-primary-color-dark: #004028;
  }
  & img {
    max-width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
    cursor: pointer;
    @media (min-width: 769px) {
      margin-top: 0;
    }
  }
`;

const HorizontalLine = styled.hr`
  width: 85%;
  height: 1px;
  background-color: #d7b377;
  border: none;
`;

const VerticalHR = styled.div`
  width: 1px;
  max-height: 34vh;
  height: 500px;
  background-color: #d7b377;
  align-self: center;
  margin: 0 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
