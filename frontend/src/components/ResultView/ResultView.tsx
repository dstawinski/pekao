import * as React from "react";

export interface Props {
  children?: React.ReactNode;
  location: Location;
}

export interface State {
}

export default class ResultView extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
    };
  }

  public render() {
    return (
      <div>{ this.props.children }</div>
    );
  }
}
