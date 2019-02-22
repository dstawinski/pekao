import * as React from "react";

export interface Props {
  children?: React.ReactNode;
}

export interface State {
}

export default class FormView extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
    };
  }

  public render() {
    return (
      <div>Form</div>
    );
  }
}
