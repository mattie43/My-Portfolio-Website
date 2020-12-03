import React, { useState } from "react";
import styled from "styled-components";
import { FaCode, FaEye } from "react-icons/fa";

import { ProjectIntro, ProjectList } from "../assests/JS/ProjectList";
import MyButton from "./MyButton";
import ModalView from "./ModalView";

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);

  function renderCards() {
    return ProjectList.map((proj, i) => (
      <Card key={i} id={proj.title}>
        <h2>{proj.title}</h2>
        <ProjectInfo i={i}>
          <ImgControl
            onClick={() => setOpenModal(proj.imgs)}
            square={proj.title === "$ellular"}
          >
            <img src={proj.imgs[0]} alt="" />
            <span>More Images</span>
          </ImgControl>
          <p>{proj.desc}</p>
        </ProjectInfo>
        <ButtonContainer>
          <a href={proj.sourceFront} target="_blank" rel="noreferrer">
            <MyButton
              background={"#00adb5"}
              hoverBG={"#282c34"}
              textColor={"#f5f5f5"}
              content={proj.sourceBack ? "Code (FE)" : "Code"}
              icon={<FaCode size={22} />}
            />
          </a>
          {proj.sourceBack ? (
            <a href={proj.sourceBack} target="_blank" rel="noreferrer">
              <MyButton
                background={"#ff6e5e"}
                hoverBG={"#282c34"}
                textColor={"#f5f5f5"}
                content={"Code (BE)"}
                icon={<FaCode size={22} />}
              />
            </a>
          ) : null}
          {proj.video ? (
            <a href={proj.video} target="_blank" rel="noreferrer">
              <MyButton
                background={"#9d856c"}
                hoverBG={"#282c34"}
                textColor={"#f5f5f5"}
                content={"Demo"}
                icon={<FaEye size={22} />}
              />
            </a>
          ) : null}
        </ButtonContainer>
        {i + 1 === ProjectList.length ? null : <hr />}
      </Card>
    ));
  }

  return (
    <>
      {openModal ? (
        <ModalView imgs={openModal} setOpenModal={setOpenModal} />
      ) : null}
      <ProjectsContainer id="projects">
        <h2>Projects</h2>
        <Intro>{ProjectIntro}</Intro>
        <hr />
        {renderCards()}
      </ProjectsContainer>
    </>
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
    padding: 20px;
  }
`;

const ImgControl = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  & img {
    max-width: 95%;
    margin: auto;
    margin-bottom: 10px;
    transition: transform ease-out 0.8s;
  }
  & span {
    position: absolute;
    color: #f5f5f5;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity ease-out 250ms;
  }
  ::before,
  ::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 1.3rem;
    right: 1.3rem;
    bottom: 1.3rem;
    left: 1.3rem;
    transition: transform ease-out 250ms;
  }
  ::before {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    transform: scale(0, 1);
  }
  ::after {
    border-left: 1px solid white;
    border-right: 1px solid white;
    transform: scale(1, 0);
  }
  :hover {
    & img {
      opacity: 0.4;
      transform: scale(1.05);
    }
    & span {
      opacity: 1;
    }
    ::before {
      transform: scale(1.05, 1);
    }
    ::after {
      transform: ${(p) => (p.square ? "scale(1, 1.05)" : "scale(1, 1.09)")};
    }
  }
  @media (min-width: 769px) {
    max-width: 50%;
    & img {
      max-width: 100%;
      margin-bottom: 0;
    }
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & p {
    padding: 0;
    margin: 0;
  }
  @media (min-width: 769px) {
    & p {
      margin: ${(p) => (p.i % 2 === 0 ? "0 0 0 20px" : "0 20px 0 0")};
      max-width: 50%;
    }
    flex-direction: ${(p) => (p.i % 2 === 0 ? "row" : "row-reverse")};
    text-align: ${(p) => (p.i % 2 === 0 ? "right" : "left")};
    max-width: 65%;
    padding: 20px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 20px;
  & a {
    margin-bottom: 6px;
    text-decoration: none;
    align-self: center;
  }
  @media (min-width: 769px) {
    flex-direction: row;
    width: 80%;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    width: 60%;
  }
`;
