import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutMe() {
  const pageVariant = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100%",
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
      <NavLink to="/">testing router</NavLink>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: salmon;
  & a {
    color: inherit;
  }
`;
