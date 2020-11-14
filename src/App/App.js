import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import Home from "./components/Home";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";

function App() {
  const [windowsWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <Router>
      <Container>
        {windowsWidth > 575 ? <Header /> : <MobileHeader />}
        <Route path="/" component={Home} />
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
  font-size: calc(10px + 2vmin);
  color: white;
`;
