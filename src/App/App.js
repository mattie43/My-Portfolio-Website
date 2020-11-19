import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

import Home from "./components/Home";
import MobileHome from "./components/MobileHome";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Projects from "./components/Projects";
import MobileProjects from "./components/MobileProjects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [darkMode, setDarkMode] = useState(false);

  window.addEventListener("resize", () => {
    setMobile(window.innerWidth < 768);
  });

  useEffect(() => {
    if (
      document.cookie.split(";").some((item) => item.includes("dark_mode=true"))
    ) {
      setDarkMode(true);
    }
  }, []);

  function changeDarkMode() {
    document.cookie = `dark_mode=${!darkMode};`;
    setDarkMode(!darkMode);
  }

  return (
    <Router>
      <Container darkMode={darkMode}>
        {mobile ? (
          <MobileHeader darkMode={darkMode} changeDarkMode={changeDarkMode} />
        ) : (
          <Header darkMode={darkMode} changeDarkMode={changeDarkMode} />
        )}
        <Route exact={true} path="/" component={mobile ? MobileHome : Home} />
        <Route
          path="/projects"
          render={() =>
            mobile ? <MobileProjects /> : <Projects darkMode={darkMode} />
          }
        />
        <Route path="/resume" component={Resume} />
        <Footer mobile={mobile} />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: ${(props) => (props.darkMode ? "#282c34" : "white")};
  color: ${(props) => (props.darkMode ? "white" : "black")};
  transition: 0.5s ease-out;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
