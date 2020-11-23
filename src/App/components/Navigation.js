import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const [section, setSection] = useState("ABOUT");

  // console.log(document.body.clientHeight);

  window.addEventListener("scroll", () => {
    if (window.scrollY < 490) {
      setSection("ABOUT");
    } else if (window.scrollY > 890) {
      setSection("PROJECTS");
    } else if (window.scrollY > 2090) {
    }
  });

  return (
    <Container>
      <h2
        style={{ textDecoration: section === "ABOUT" ? "underline" : "none" }}
        onClick={() => window.scrollTo(0, 0)}
      >
        ABOUT ME
      </h2>
      <ProjectContainer>
        <h2
          style={{
            textDecoration: section === "PROJECTS" ? "underline" : "none",
          }}
          onClick={() => window.scrollTo(0, 900)}
        >
          PROJECTS
        </h2>
        <ProjectList>
          <h3>GiFinder</h3>
          <h3>Whoop</h3>
          <h3>Pokeiron</h3>
          <h3>Viagiammo</h3>
          <h3>Sellular</h3>
        </ProjectList>
      </ProjectContainer>
      <h2
        style={{ textDecoration: section === "RESUME" ? "underline" : "none" }}
      >
        RESUME
      </h2>
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
  margin-top: -56px;
  padding: 4px 10px;
  z-index: 1;
  background-color: #303640;
  /* c4e7d4 */
  & a {
    color: inherit;
    text-decoration: none;
  }
  & h2 {
    margin: 0;
    align-self: flex-end;
  }
  & h2:hover {
    cursor: pointer;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  :hover {
    cursor: pointer;
    & div {
      height: 114px;
    }
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 0 0 8px 8px;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  & h3 {
    margin: 0;
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
