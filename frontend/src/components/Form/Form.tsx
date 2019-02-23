import * as React from "react";
import FormFields from "../FormFields";
import FormHeader from "../FormHeader";
import styles from "./Form.module.scss";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className={styles.form}>
        <FormHeader />
        <FormFields />
      </div>
    );
  }
}
