import React, { useState } from "react";
import styled from "styled-components";

import AboutMe from "../components/AboutMe";
import IntroImage from "../components/IntroImage";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import ResumeContact from "../components/ResumeContact";
import Links from "../components/Links";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [stopAnimation, setStopAnimation] = useState(false);
  const [aboutMeOpen, setAboutMeOpen] = useState(false);

  return (
    <Container className="home">
      <IntroImage
        visible={visible}
        stopAnimation={stopAnimation}
        setStopAnimation={setStopAnimation}
      />
      <AboutMe aboutMeOpen={aboutMeOpen} setAboutMeOpen={setAboutMeOpen} />
      <Projects />
      <ResumeContact />
      <Navigation
        visible={visible}
        setVisible={setVisible}
        stopAnimation={stopAnimation}
        setStopAnimation={setStopAnimation}
        setAboutMeOpen={setAboutMeOpen}
      />
      <Links visible={visible} setVisible={setVisible} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;
