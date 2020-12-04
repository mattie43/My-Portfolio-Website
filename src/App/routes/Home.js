import React from "react";
import styled from "styled-components";

import IntroImage from "../components/IntroImage";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import ResumeContact from "../components/ResumeContact";
import Links from "../components/Links";
import Prism from "../assests/images/prism.png";

export default function Home() {
  return (
    <Container img={Prism}>
      <IntroImage />
      <Projects />
      <ResumeContact />
      <Navigation />
      <Links />
    </Container>
  );
}

const Container = styled.div`
  color: #f5f5f5;
  background-color: #353535;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  font-size: 1.4rem;
  background-image: ${(p) => `url('${p.img}')`};
  background-size: 100vh;
  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;
