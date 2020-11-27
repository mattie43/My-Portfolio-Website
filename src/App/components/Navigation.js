import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [section, setSection] = useState("ABOUT");
  const [projSection, setProjSection] = useState(0);

  let scrolling = false;

  window.onscroll = () => {
    scrolling = true;
  };

  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      checkScroll();
    }
  }, 300);

  function cardVisible(id) {
    const elem = document.getElementById(id);
    const bounding = elem.getBoundingClientRect();
    return bounding.top < window.innerHeight / 2;
  }

  function scrollToCenter(el) {
    document.getElementById(el).scrollIntoView({ block: "center" });
  }

  function checkScroll() {
    if (cardVisible("$ellular")) {
      setProjSection(5);
    } else if (cardVisible("Viaggiamo")) {
      setProjSection(4);
    } else if (cardVisible("Pokeiron")) {
      setProjSection(3);
    } else if (cardVisible("Whoop")) {
      setProjSection(2);
    } else if (cardVisible("GiFinder")) {
      setProjSection(1);
    } else {
      setProjSection(0);
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setSection("CONTACT");
    } else if (cardVisible("resume")) {
      setSection("RESUME");
      setProjSection(0);
    } else if (cardVisible("projects")) {
      setSection("PROJECTS");
    } else {
      setSection("ABOUT");
    }
  }

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
          onClick={() => scrollToCenter("projects")}
        >
          PROJECTS
        </h2>
        <ProjectList>
          <h3
            style={{
              textDecoration: projSection === 1 ? "underline" : "none",
            }}
            onClick={() => scrollToCenter("GiFinder")}
          >
            GiFinder
          </h3>
          <h3
            style={{
              textDecoration: projSection === 2 ? "underline" : "none",
            }}
            onClick={() => scrollToCenter("Whoop")}
          >
            Whoop
          </h3>
          <h3
            style={{
              textDecoration: projSection === 3 ? "underline" : "none",
            }}
            onClick={() => scrollToCenter("Pokeiron")}
          >
            Pokeiron
          </h3>
          <h3
            style={{
              textDecoration: projSection === 4 ? "underline" : "none",
            }}
            onClick={() => scrollToCenter("Viaggiamo")}
          >
            Viaggiamo
          </h3>
          <h3
            style={{
              textDecoration: projSection === 5 ? "underline" : "none",
            }}
            onClick={() => scrollToCenter("$ellular")}
          >
            Sellular
          </h3>
        </ProjectList>
      </ProjectContainer>
      <h2
        style={{ textDecoration: section === "RESUME" ? "underline" : "none" }}
        onClick={() => scrollToCenter("resume")}
      >
        RESUME
      </h2>
      <h2
        style={{
          textDecoration: section === "CONTACT" ? "underline" : "none",
        }}
        onClick={() => window.scrollTo(0, document.body.clientHeight)}
      >
        CONTACT ME
      </h2>
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
  margin-top: -86px;
  padding: 4px 10px;
  z-index: 1;
  background-color: #303640;
  font-size: 18px;
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
      height: 164px;
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
