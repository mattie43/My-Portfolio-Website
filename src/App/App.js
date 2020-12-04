import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import AboutMe from "./routes/AboutMe";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
    </BrowserRouter>
  );
}
