import * as React from "react";
import Form from "../Form";
import styles from "./FormView.module.scss";

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
      <div className={styles.form_view}>
        <Form/>
      </div>
    );
  }
}
