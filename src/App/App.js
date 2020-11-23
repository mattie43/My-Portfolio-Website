import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

import AboutMe from "./components/AboutMe";
import MobileHome from "./components/MobileHome";
import Navigation from "./components/Navigation";
import MobileHeader from "./components/MobileHeader";
import Projects from "./components/Projects";
import MobileProjects from "./components/MobileProjects";
import Resume from "./components/Resume";
import MobileFooter from "./components/MobileFooter";
import Links from "./components/Links";
import galaxy from "./images/purpleGalaxy3.jpg";

function App() {
  const darkMode = useSelector((state) => state.darkMode);
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  window.addEventListener("resize", () => {
    setMobile(window.innerWidth < 768);
  });

  return (
    // <Router>
    //   <Container
    //     darkMode={darkMode}
    //     style={{ backgroundImage: `url(${galaxy})` }}
    //   >
    //     {mobile ? <MobileHeader /> : <Navigation />}
    //     <Route exact={true} path="/" component={mobile ? MobileHome : Home} />
    //     <Route
    //       path="/projects"
    //       component={mobile ? MobileProjects : Projects}
    //     />
    //     <Route path="/resume" component={Resume} />
    //     {mobile ? <MobileFooter /> : <Links />}
    //   </Container>
    // </Router>
    <Container
      darkMode={darkMode}
      style={{ backgroundImage: `url(${galaxy})` }}
    >
      {mobile ? <MobileHeader /> : <Navigation />}
      {mobile ? <MobileHome /> : <AboutMe />}
      {mobile ? <MobileProjects /> : <Projects />}
      {mobile ? <MobileFooter /> : <Links />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  /* background-color: ${(props) => (props.darkMode ? "#282c34" : "white")}; */
  color: #d7b377;
  transition: color 0.5s ease-out;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;
