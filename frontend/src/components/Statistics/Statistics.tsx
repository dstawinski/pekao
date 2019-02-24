import * as React from "react";
import styles from "./Statistics.module.scss";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class Statistics extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <div className={styles.header}>TUTAJ SĄ STATYSTYKI TWOJEJ FIRMY</div>
        <div className={styles.plot_container}>
          <img className={styles.plot} src="plot.png" />
          <img className={styles.plot} src="plot.png" />
        </div>
      </div>
    );
  }
}
