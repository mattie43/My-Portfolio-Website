import React, { useState } from "react";
import styled from "styled-components";
import { HamburgerCollapse } from "react-animated-burgers";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

function MobileHeader(props) {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <>
      <ModeContainer
        darkMode={darkMode}
        onClick={() => dispatch({ type: "DARK_MODE" })}
      >
        <FaMoon id="moon" size={32} />
        <FaSun id="sun" size={32} />
      </ModeContainer>
      <Container style={{ height: navBarOpen ? "220px" : "0" }}>
        <HamburgerCollapse
          isActive={navBarOpen}
          barColor={darkMode ? "white" : "black"}
          onClick={() => setNavBarOpen(!navBarOpen)}
          style={{
            position: "fixed",
            outline: "none",
          }}
        />
        <NavContainer>
          <Link to="/" onClick={() => setNavBarOpen(false)}>
            <h1>ABOUT ME</h1>
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
  transition: height 0.5s;
  background-color: #3277a8;
  position: fixed;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
  z-index: 1;
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

const ModeContainer = styled.div`
  position: fixed;
  top: 12px;
  right: 12px;
  overflow: hidden;
  width: 32px;
  height: 32px;
  #sun {
    position: absolute;
    top: ${(props) => (props.darkMode ? "-50px" : "0px")};
    transition: top 0.5s;
  }
  #moon {
    position: absolute;
    top: ${(props) => (props.darkMode ? "0px" : "50px")};
    transition: top 0.5s;
  }
`;
