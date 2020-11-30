import styled from "styled-components";
import { useEffect, useState } from "react";

import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import MobileNav from "./components/MobileNav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import Links from "./components/Links";
import prism from "./images/prism.png";

function App() {
  const [mobile, setMobile] = useState(window.innerWidth < 769);
  const [navBarOpen, setNavBarOpen] = useState(false);

  window.addEventListener("resize", () => {
    setMobile(window.innerWidth < 769);
  });

  function checkNav(e) {
    if (!e.target.closest(".navbar")) {
      setNavBarOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", (e) => checkNav(e));
    return () => {
      window.removeEventListener("click", checkNav);
    };
  }, []);

  return (
    <Container prism={`url(${prism})`}>
      {mobile ? (
        <MobileNav navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      ) : (
        <Navigation />
      )}
      <Links />
      <AboutMe />
      <Projects />
      <Resume />
      <ContactForm />
      {mobile ? <span style={{ margin: "27px" }} /> : null}
    </Container>
  );
}

export default App;

const Container = styled.div`
  color: #f5f5f5;
  background-color: #353535;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  background-image: ${(p) => p.prism};
  background-size: 100vh;

  @media (min-width: 769px) {
    font-size: 25px;
  }
  @media (min-width: 1921px) {
    font-size: 40px;
  }
`;
