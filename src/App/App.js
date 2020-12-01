import styled from "styled-components";

import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import ResumeContact from "./components/ResumeContact";
import Links from "./components/Links";
import prism from "./images/prism.png";

function App() {
  return (
    <Container prism={`url(${prism})`}>
      <Navigation />
      <Links />
      <AboutMe />
      <Projects />
      <ResumeContact />
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
  font-size: 1.4rem;
  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
  background-image: ${(p) => p.prism};
  background-size: 100vh;
`;
