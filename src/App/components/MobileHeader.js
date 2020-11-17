import React, { useState } from "react";
import styled from "styled-components";
import { HamburgerCollapse } from "react-animated-burgers";
import { Link } from "react-router-dom";

function MobileHeader() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <>
      <Container style={{ height: navBarOpen ? "220px" : "0" }}>
        <HamburgerCollapse
          isActive={navBarOpen}
          barColor="white"
          onClick={() => setNavBarOpen(!navBarOpen)}
          style={{
            position: "fixed",
            outline: "none",
          }}
        />
        <NavContainer>
          <Link to="/" onClick={() => setNavBarOpen(false)}>
            <h1>HOME</h1>
          </Link>
          <Link to="/resume" onClick={() => setNavBarOpen(false)}>
            <h1>RESUME</h1>
          </Link>
          <Link to="/projects" onClick={() => setNavBarOpen(false)}>
            <h1>PROJECTS</h1>
          </Link>
        </NavContainer>
      </Container>
      <span style={{ margin: "32px" }} />
    </>
  );
}

export default MobileHeader;

const Container = styled.div`
  display: flex;
  width: 100vw;
  transition: 0.5s;
  background-color: #3277a8;
  position: fixed;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
  z-index: 1;
  & a {
    color: white;
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
