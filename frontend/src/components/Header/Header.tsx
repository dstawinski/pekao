import { AppBar, Toolbar, Typography } from "@material-ui/core";
import * as React from "react";
import styles from "./Header.module.scss";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <AppBar
        position="static"
        color="default"
        classes={{ root: styles.appbar }}
      >
        <Toolbar classes={{ root: styles.header }}>
          {/* <div className={styles.main_title}>Centrum wiedzy PEKAO</div> */}
          <div className={styles.logo}>
            <img src="logo.jpg"></img>
          </div>
          {/* <div className={styles.authorship}>by d2VjYW1lZm9yZm9vZC4=</div> */}
        </Toolbar>
      </AppBar>
    );
  }
}
