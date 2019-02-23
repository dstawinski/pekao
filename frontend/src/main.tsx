import CssBaseline from "@material-ui/core/CssBaseline";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { Routes } from "./routes";
import { ApplicationState } from "./store";

// Separate props from state and props from dispatch to their own interfaces.

interface PropsFromDispatch {
  [key: string]: any;
}

// Any additional component props go here.
interface OwnProps {
  store: Store<ApplicationState>;
  history: History;
}

// Create an intersection type of the component props and our Redux props.
type AllProps = PropsFromDispatch & OwnProps;

export class Main extends React.Component<AllProps> {
  public render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
