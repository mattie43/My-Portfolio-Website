import React from "react";
import styled from "styled-components";

import * as PL from "./ProjectList";

function Projects() {
  window.addEventListener("scroll", (e) => {});

  return (
    <Container>
      <Text>
        In my 15 weeks at{" "}
        <a href="https://flatironschool.com/" target="_blank" rel="noreferrer">
          Flatiron School
        </a>
        , I have created five apps using Ruby, Rails, Javascript, React, and
        React Native. Four of those apps were done with a partner, with the
        final app being a solo project. I've also created a web automation bot
        in Python that my brother uses to create tee times for the weekends.
        Demo video and Github links are on the bottom of each description.
      </Text>
      <CardContainer>
        <iframe
          width="2300"
          height="500"
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
        <PL.GiFinder />
      </CardContainer>
      <CardContainer>
        <PL.Whoop />
      </CardContainer>
      <CardContainer>
        <PL.Pokeiron />
      </CardContainer>
      <CardContainer>
        <PL.Viaggiamo />
      </CardContainer>
      <CardContainer>
        <PL.Sellular />
      </CardContainer>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Text = styled.p`
  align-self: center;
  text-align: center;
  font-size: 25px;
  width: 85%;
  margin-top: 0;
  & a {
    color: white;
  }
`;

const CardContainer = styled.div`
  display: flex;
  margin: 50px;
`;
