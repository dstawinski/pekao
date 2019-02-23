import { CssBaseline } from "@material-ui/core";
import * as React from "react";
import FormView from "../FormView";
import Header from "../Header";
import styles from "./MainView.module.scss";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class MainView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={styles.main_view}>
          <Header />
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
