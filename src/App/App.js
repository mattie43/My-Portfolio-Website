import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

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

  window.addEventListener("resize", () => {
    setMobile(window.innerWidth < 768);
  });

  return (
    <Router>
      <Container>
        {mobile ? <MobileHeader /> : <Header />}
        <Route exact={true} path="/" component={mobile ? MobileHome : Home} />
        <Route
          path="/projects"
          component={mobile ? MobileProjects : Projects}
        />
        <Route path="/resume" component={Resume} />
        <Footer mobile={mobile} />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  color: white;
`;
