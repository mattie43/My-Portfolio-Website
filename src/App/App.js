import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import Home from "./components/Home";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [windowsWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <Router>
      <Container>
        {windowsWidth > 575 ? <Header /> : <MobileHeader />}
        <Route exact={true} path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`;
