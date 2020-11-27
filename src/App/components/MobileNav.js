import React from "react";
import styled from "styled-components";
import { HamburgerCollapse } from "react-animated-burgers";

function MobileHeader(props) {
  // const [navBarOpen, setNavBarOpen] = useState(false);

  function scrollTo(input) {
    props.setNavBarOpen(false);
    switch (input) {
      case "projects":
        document.getElementById("projects").scrollIntoView({ block: "center" });
        break;
      case "resume":
        document.getElementById("resume").scrollIntoView({ block: "center" });
        break;
      case "top":
        window.scrollTo(0, 0);
        break;
      case "bottom":
        window.scrollTo(0, document.body.clientHeight);
        break;
      default:
        break;
    }
  }

  return (
    <Container className="navbar">
      <HamburgerCollapse
        isActive={props.navBarOpen}
        barColor="#d7b377"
        onClick={() => props.setNavBarOpen(!props.navBarOpen)}
      />
      <NavContainer open={props.navBarOpen}>
        <h1 onClick={() => scrollTo("top")}>ABOUT ME</h1>
        <h1 onClick={() => scrollTo("projects")}>PROJECTS</h1>
        <h1 onClick={() => scrollTo("resume")}>RESUME</h1>
        <h1 onClick={() => scrollTo("bottom")}>CONTACT ME</h1>
      </NavContainer>
    </Container>
  );
}

export default MobileHeader;

const Container = styled.div`
  display: flex;
  width: 100vw;
  position: fixed;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
  z-index: 2;
  & a {
    color: inherit;
    text-decoration: none;
  }
  & button {
    position: fixed;
    outline: none;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-right: 20px;
  overflow-y: hidden;
  background-color: #4f545a;
  transition: height 0.5s;
  height: ${(p) => (p.open ? "250px" : "0")};
  & h1 {
    margin: 0;
  }
`;
