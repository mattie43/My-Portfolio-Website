import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { RouteTransitionProvider } from "react-route-transition";

import AboutMe from "./components/AboutMe";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      {/* <RouteTransitionProvider> */}

      <Route path="/about" component={AboutMe} />
      <Route path="/" component={Home} />
      {/* </RouteTransitionProvider> */}
    </BrowserRouter>
  );
}
