import React, { useState } from "react";
import styled from "styled-components";
import { HamburgerCollapse } from "react-animated-burgers";
import { throttle } from "lodash";

const NavigationObjs = [
  {
    name: "About Me",
    id: "about",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Resume /",
    id: "resume",
  },
  {
    name: "Contact",
    id: "resume",
  },
];

export default function Navigation() {
  const [section, setSection] = useState("about");
  const [navOpen, setNavOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", throttle(checkVisible, 300));
  window.addEventListener("scroll", throttle(checkSection, 300));

  function checkSection() {
    if (sectionVisible("resume")) {
      setSection("resume");
    } else if (sectionVisible("projects")) {
      setSection("projects");
    } else {
      setSection("about");
    }
    function sectionVisible(id) {
      const el = document.getElementById(id);
      return el.getBoundingClientRect().top < window.innerHeight / 2;
    }
  }

  function checkVisible() {
    const el = document.querySelector("#projects");
    if (!visible && el.getBoundingClientRect().top < window.innerHeight / 2) {
      setVisible(true);
    } else if (
      visible &&
      el.getBoundingClientRect().top > window.innerHeight / 2
    ) {
      setVisible(false);
      setNavOpen(false);
    }
  }

  function scrollToID(id) {
    if (window.matchMedia("(max-width: 769px)").matches) {
      setNavOpen(false);
    }
    switch (id) {
      case "about":
        window.scrollTo(0, 0);
        break;
      case "projects":
        document.getElementById("projects").scrollIntoView();
        break;
      default:
        window.scrollTo(0, document.body.scrollHeight);
        break;
    }
  }

  function renderNav() {
    return NavigationObjs.map((obj, i) => (
      <div key={i}>
        <h2
          onClick={() => scrollToID(obj.id)}
          style={{
            color: section === obj.id ? "#282c34" : "#f5f5f5",
          }}
        >
          {obj.name}
        </h2>
      </div>
    ));
  }

  return (
    <Container navOpen={navOpen} visible={visible}>
      <HamburgerCollapse
        isActive={navOpen}
        barColor="#f5f5f5"
        onClick={() => setNavOpen(!navOpen)}
      />
      <NavContainer>{renderNav()}</NavContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: ${(p) => (p.navOpen ? "#5090fe" : "none")};
  width: ${(p) => (p.navOpen ? "calc(100vw - 60px)" : "0")};
  transform: ${(p) => (p.visible ? "translateX(0)" : "translateX(100%)")};
  white-space: nowrap;
  overflow: hidden;
  transition: 0.6s ease;
  padding: 30px 0 20px 60px;
  & button {
    position: absolute;
    top: 0;
    right: 0;
    left: auto;
    outline: none;
    padding: 10px;
    background-color: #5090fe;
    transition: 0.6s ease;
  }
  & h2 {
    margin: -7px;
    padding-left: 55%;
    text-transform: uppercase;
    cursor: pointer;
    font-family: TitilliumBold;
    font-size: 32px;
    transition: 0.6s ease;
    opacity: ${(p) => (p.navOpen ? "1" : "0")};
  }
  @media (min-width: 769px) {
    top: 50%;
    width: ${(p) => (p.navOpen ? "200px" : "0")};
    transform: ${(p) =>
      p.visible ? "translate(0, -50%)" : "translate(100%, -50%)"};
    & button {
      right: auto;
      left: 0;
    }
    & h2 {
      padding-left: 12px;
    }
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
