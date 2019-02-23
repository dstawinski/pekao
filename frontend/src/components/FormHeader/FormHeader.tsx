import * as React from "react";
import styles from "./FormHeader.module.scss";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class FormHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className={styles.header}>Wybierz lokalizację swojego biznesu</div>;
  }
}
