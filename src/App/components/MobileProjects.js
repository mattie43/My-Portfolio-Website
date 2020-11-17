import React from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import * as PL from "./ProjectList";

function Projects() {
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
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={5}
      >
        <Slider>
          <Slide index={0}>
            <PL.GiFinder />
          </Slide>
          <Slide index={1}>
            <PL.Whoop />
          </Slide>
          <Slide index={2}>
            <PL.Pokeiron />
          </Slide>
          <Slide index={3}>
            <PL.Viaggiamo />
          </Slide>
          <Slide index={4}>
            <PL.Sellular />
          </Slide>
        </Slider>
        <ArrowContainer>
          <ButtonBack style={{ marginRight: "15px" }}>
            <FaAngleLeft size={30} />
          </ButtonBack>
          <ButtonNext style={{ marginLeft: "15px" }}>
            <FaAngleRight size={30} />
          </ButtonNext>
        </ArrowContainer>
      </CarouselProvider>
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
  font-size: 20px;
  width: 85%;
  margin-top: 0;
  & a {
    color: white;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
