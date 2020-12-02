import React, { useState } from "react";
import styled from "styled-components";
import { HamburgerCollapse } from "react-animated-burgers";
import { throttle } from "lodash";

const NavigationObjs = [
  {
    name: "ABOUT ME",
    id: "about",
  },
  {
    name: "PROJECTS",
    id: "projects",
  },
  {
    name: "RESUME /",
    id: "resume",
  },
  {
    name: "CONTACT",
    id: "resume",
  },
];

export default function Navigation() {
  const [section, setSection] = useState("about");
  const [navOpen, setNavOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", throttle(checkVisible, 300));
  window.addEventListener("scroll", throttle(checkSection, 300));
  window.onclick = (e) => checkClick(e);

  function checkClick(e) {
    if (e.target.id === "nav-burger" || e.target.closest("#nav-burger")) {
    } else if (navOpen && e.target.id !== "navigation") {
      setNavOpen(false);
    }
  }

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
    setNavOpen(false);
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
      <h2
        key={i}
        onClick={() => scrollToID(obj.id)}
        style={{
          color: section === obj.id ? "#282c34" : "#f5f5f5",
        }}
      >
        {obj.name}
      </h2>
    ));
  }

  return (
    <Container navOpen={navOpen} visible={visible} id="navigation">
      <NavContainer navOpen={navOpen}>{renderNav()}</NavContainer>
      <HamburgerCollapse
        isActive={navOpen}
        barColor="#f5f5f5"
        onClick={() => setNavOpen(!navOpen)}
        id="nav-burger"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 3;
  width: 100%;
  & button {
    background: #5090fe;
    transition: transform 0.7s ease;
    transform: ${(p) => (p.visible ? "translateX(0)" : "translateX(100%)")};
    outline: none;
    margin: 0;
    padding: 6px 10px;
    position: absolute;
    top: 0;
    right: 0;
    & div {
      margin-bottom: -3px;
    }
  }
  @media (min-width: 769px) {
    width: auto;
    right: 0;
    top: 50%;
    transition: transform 0.7s ease;
    transform: ${(p) =>
      p.navOpen ? "translate(0, -50%)" : "translate(0, -50%)"};
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  transition: 0.7s ease;
  background: ${(p) => (p.navOpen ? "#5090fe" : "transparent")};
  transform: ${(p) => (p.navOpen ? "translateY(0)" : "translateY(-100%)")};
  & h2 {
    align-self: center;
    margin: -5px;
    transition: opacity 0.7s ease;
    opacity: ${(p) => (p.navOpen ? "1" : "0")};
  }
  @media (min-width: 769px) {
    transform: ${(p) => (p.navOpen ? "translateX(0)" : "translateX(100%)")};
    & h2 {
      align-self: auto;
      font-size: 2rem;
      padding: 0 68px 0 20px;
    }
  }
`;
