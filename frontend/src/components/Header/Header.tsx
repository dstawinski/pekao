import { AppBar, Toolbar, Typography } from "@material-ui/core";

import * as React from "react";

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
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Eventify
            </Typography>
            <Typography variant="h6" color="inherit">
              by d2VjYW1lZm9yZm9vZC4=
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
