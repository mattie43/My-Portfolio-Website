import React from "react";
import { Route, withRouter } from "react-router-dom";
import { AnimatedSwitch } from "./AnimatedSwitch";

/**
 * The ".page" class is key to animating a full page and not receive bumps while
 * animating pages in/out. It is position: fixed to allow the animation to play
 * without the DOM elements messing up.
 *
 * Try to remove .page to see the effect.
 */
const PageOne = () => (
  <div className="page pink">
    <h1>Hello PageOne</h1>
  </div>
);
const PageTwo = () => (
  <div className="page green">
    <h1>Hello PageTwo</h1>
  </div>
);

const routes = [
  {
    component: PageOne,
    path: "/",
  },
  {
    component: PageTwo,
    path: "/two",
  },
];

const Routes = withRouter(({ location }) => {
  return (
    <AnimatedSwitch location={location}>
      {routes.map((route) => {
        return (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </AnimatedSwitch>
  );
});

export default Routes;
