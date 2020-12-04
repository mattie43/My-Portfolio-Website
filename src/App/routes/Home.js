import React from "react";
import styled from "styled-components";

import IntroImage from "../components/IntroImage";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import ResumeContact from "../components/ResumeContact";
import Links from "../components/Links";

export default function Home() {
  return (
    <Container className="home">
      <IntroImage />
      <Projects />
      <ResumeContact />
      <Navigation />
      <Links />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;
