import { CircularProgress } from "@material-ui/core";
import * as React from "react";
import { postFormData } from "../../utils/postFormData";
import Result from "../Result";
import styles from "./ResultView.module.scss";

export interface Props {
  children?: React.ReactNode;
  location: Location;
}

export interface State {
  loading: boolean;
  latitude?: number;
  longitude?: number;
}

export default class ResultView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  public async componentDidMount() {
    try {
      const response = await postFormData({
        operation_type: (this.props.location as any).selections
          .selectedShopType,
        profile: (this.props.location as any).selections.selectedTargetType,
        revenue: (this.props.location as any).selections.selectedRevenueType,
      });
      const coords = response.data;
    } catch (error) {
      console.log(error);
    }

    return this.setState({
      loading: false,
      latitude: 52.279847,
      longitude: 20.945189,
    });
  }

  public render() {
    return (
      <div className={styles.result_container}>
        {this.state.loading ? (
          <CircularProgress />
        ) : (
          <Result
            longitude={this.state.longitude || 0}
            latitude={this.state.latitude || 0}
          />
        )}
      </div>
    );
  }
}
