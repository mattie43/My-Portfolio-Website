import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AboutMe from "./routes/AboutMe";
import Home from "./routes/Home";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
      </Switch>
    </AnimatePresence>
  );
}
