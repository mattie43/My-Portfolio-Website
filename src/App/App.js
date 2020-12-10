import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";

export default function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={4000} classNames="slide" key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
