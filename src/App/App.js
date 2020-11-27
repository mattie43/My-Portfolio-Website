import styled from "styled-components";
import { useEffect, useState } from "react";

import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import MobileNav from "./components/MobileNav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import Links from "./components/Links";
import galaxy from "./images/purpleGalaxy3.jpg";

function App() {
  const [mobile, setMobile] = useState(window.innerWidth < 769);
  const [navBarOpen, setNavBarOpen] = useState(false);

  window.addEventListener("resize", () => {
    setMobile(window.innerWidth < 769);
  });

  function isMobileSafari() {
    return (
      navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
      navigator.userAgent.match(/AppleWebKit/)
    );
  }

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
    <Container bgIMG={isMobileSafari() ? null : `url(${galaxy})`}>
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
  color: #d7b377;
  background-color: #f5f5f5;
  transition: color 0.5s ease-out;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  background-image: ${(p) => p.bgIMG};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 150vh;
  background-position-x: center;

  @media (min-width: 769px) {
    font-size: 25px;
    background-size: cover;
  }
  @media (min-width: 1921px) {
    font-size: 40px;
  }
`;
