import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import AboutMe from "./routes/AboutMe";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={AboutMe} />
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}
