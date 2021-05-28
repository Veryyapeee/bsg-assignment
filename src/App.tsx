import React, { Suspense } from "react";

import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import Splash from "Pages/Splash/Splash";
import Page404 from "Pages/Page404/Page404";
import LoginTemplate from "Templates/loginTemplate/loginTemplate";

const Login = React.lazy(() => import("Pages/Login/Login"));
const ProtectedRoute = React.lazy(() => import("Routes/ProtectedRoute"));
const Home = React.lazy(() => import("Pages/Home/Home"));
const Player = React.lazy(() => import("Pages/Player/Player"));

function App() {
  return (
    <Suspense fallback={<Splash />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          path="/logged/(.+)"
          render={() => (
            <LoginTemplate>
              <Switch>
                <ProtectedRoute
                  path="/logged/videos/:videoId"
                  component={Player}
                />
                <ProtectedRoute path="/logged/videos" component={Home} />
                <Route render={() => <Redirect to="/not-found" />} />
              </Switch>
            </LoginTemplate>
          )}
        />
        <Route path="/not-found" component={Page404} />
        <Route render={() => <Redirect to="/not-found" />} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
