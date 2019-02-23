import * as React from "react";
import { Route, Switch } from "react-router-dom";

import FormView from "./components/FormView";
import MainView from "./components/MainView";
import ResultView from "./components/ResultView";

// If your app is big + you have routes with a lot of components, you should consider
// code-splitting your routes! If you bundle stuff up with Webpack, I recommend `react-loadable`.
//
// $ yarn add react-loadable
// $ yarn add --dev @types/react-loadable
//
// The given `pages/` directory provides an example of a directory structure that's easily
// code-splittable.

export const Routes: React.SFC = () => (
  <React.Fragment>
    <MainView>
      <Switch>
        <Route exact path="/" component={FormView} />
        <Route path="/result" component={ResultView}/>
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </MainView>
  </React.Fragment>
);
