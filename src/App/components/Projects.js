import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

import * as PL from "../assests/ProjectList";

export default function Projects() {
  const darkMode = useSelector((state) => state.darkMode);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);
  const [card5, setCard5] = useState(false);

  window.addEventListener("scroll", () => {
    if (!card2 && window.scrollY > 490) {
      setCard2(true);
    } else if (!card3 && window.scrollY > 1390) {
      setCard3(true);
    } else if (!card4 && window.scrollY > 2090) {
      setCard4(true);
    } else if (!card5 && window.scrollY > 2990) {
      setCard5(true);
    }
  });

  return (
    <Container>
      <IntroText darkMode={darkMode}>
        <PL.Intro />
      </IntroText>
      <CardContainer style={{ backgroundColor: "#984447" }}>
        <ProjectTitle>GiFinder</ProjectTitle>
        <iframe
          width="7000"
          height="600"
          title="GiFinder"
          src="https://www.youtube.com/embed/mzcHALqESIw?list=PL9qahmMHuxzSpTHbPNJfLlLN1HpzKNH2A"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            marginRight: "50px",
          }}
        />
        <CardPanel>
          <PL.GiFinder />
          <a
            href="https://github.com/mattie43/Mod1-FinalProject-GiFinder"
            target="_blank"
            rel="noreferrer"
            style={{ alignSelf: "center" }}
          >
            <FaGithub size={50} />
          </a>
        </CardPanel>
      </CardContainer>
      <CardContainer
        style={{ opacity: card2 ? 1 : 0, backgroundColor: "#5c95ff" }}
      >
        <ProjectTitle>Whoop</ProjectTitle>
        <CardPanel>
          <PL.Whoop />
          <a
            href="https://github.com/mattie43/Mod2FinalProject/"
            target="_blank"
            rel="noreferrer"
            style={{ alignSelf: "center" }}
          >
            <FaGithub size={50} />
          </a>
        </CardPanel>
      </CardContainer>
      <CardContainer
        style={{ opacity: card3 ? 1 : 0, backgroundColor: "#468c98" }}
      >
        <ProjectTitle>Pokeiron</ProjectTitle>
        <CardPanel>
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
        </CardPanel>
      </CardContainer>
      <CardContainer
        style={{ opacity: card4 ? 1 : 0, backgroundColor: "#9c528b" }}
      >
        <ProjectTitle>Viaggiamo</ProjectTitle>
        <CardPanel>
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
        </CardPanel>
      </CardContainer>
      <CardContainer
        style={{ opacity: card5 ? 1 : 0, backgroundColor: "#9e6240" }}
      >
        <ProjectTitle>$ellular</ProjectTitle>
        <CardPanel>
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
        </CardPanel>
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & a {
    color: inherit;
  }
`;

const IntroText = styled.p`
  background-color: ${(props) => (props.darkMode ? "#303640" : "#dedede")};
  padding: 2% 10%;
  height: 20vh;
  align-self: center;
  text-align: center;
  font-size: 25px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
`;

const CardContainer = styled.div`
  display: flex;
  position: relative;
  height: 70vh;
  margin: 30px 0;
  padding: 30px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  transition: opacity 1s ease-in;
  align-items: center;
  & p {
    font-size: 25px;
    text-align: center;
  }
`;

const CardPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h1`
  position: absolute;
  top: 0;
  margin-top: 5px;
  left: 45%;
`;
