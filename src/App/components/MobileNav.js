import React, { useState } from "react";
import styled from "styled-components";
import { HamburgerCollapse } from "react-animated-burgers";

function MobileHeader() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  function scrollToCenter(el) {
    document.getElementById(el).scrollIntoView({ block: "center" });
  }

  function scrollTo(bool) {
    setNavBarOpen(false);
    bool
      ? window.scrollTo(0, 0)
      : window.scrollTo(0, document.body.clientHeight);
  }

  return (
    <Container style={{ height: navBarOpen ? "250px" : "0" }}>
      <HamburgerCollapse
        isActive={navBarOpen}
        barColor="#d7b377"
        onClick={() => setNavBarOpen(!navBarOpen)}
        style={{
          position: "fixed",
          outline: "none",
        }}
      />
      <NavContainer>
        <h1 onClick={() => scrollTo(true)}>ABOUT ME</h1>
        <h1 onClick={() => scrollToCenter("projects")}>PROJECTS</h1>
        <h1 onClick={() => scrollToCenter("resume")}>RESUME</h1>
        <h1 onClick={() => scrollTo(false)}>CONTACT ME</h1>
      </NavContainer>
    </Container>
  );
}

export default MobileHeader;

const Container = styled.div`
  display: flex;
  width: 100vw;
  transition: height 0.5s;
  background-color: #4f545a;
  position: fixed;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
  z-index: 2;
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-right: 30px;
  overflow-y: hidden;
  & h1 {
    margin: 0;
  }
`;
