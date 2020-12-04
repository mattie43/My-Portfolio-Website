import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import IntroImage from "../components/IntroImage";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import ResumeContact from "../components/ResumeContact";
import Links from "../components/Links";

export default function Home() {
  const pageVariant = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100%",
    },
  };

  const spring = {
    type: "spring",
    damping: 15,
    stiffness: 150,
    duration: 0.6,
  };

  return (
    <Container
      initial="out"
      animate="in"
      exit="out"
      transition={spring}
      variants={pageVariant}
    >
      <Navigation />
      <Links />
      <IntroImage />
      <Projects />
      <ResumeContact />
    </Container>
  );
}

const Container = styled(motion.div)`
  color: #f5f5f5;
  background-color: #353535;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  font-size: 1.4rem;
  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;
