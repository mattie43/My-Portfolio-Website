import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2>ABOUT ME</h2>
      <h2>RESUME</h2>
      <h2>PROJECTS</h2>
      {/* <ModeContainer
        darkMode={darkMode}
        onClick={() => dispatch({ type: "DARK_MODE" })}
      >
        <FaMoon id="moon" size={30} />
        <FaSun id="sun" size={30} />
      </ModeContainer> */}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 50%;
  margin: -56px 4px 0 0;
  z-index: 1;
  & a {
    color: inherit;
    text-decoration: none;
  }
  & h2 {
    margin: 0;
    align-self: flex-end;
  }
`;

const ModeContainer = styled.div`
  position: relative;
  align-self: center;
  overflow: hidden;
  width: 30px;
  height: 30px;
  & svg:hover {
    opacity: 0.6;
    cursor: pointer;
  }
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
