import { AppBar, CircularProgress, Tab, Tabs } from "@material-ui/core";
import * as React from "react";
import { postFormData } from "../../utils/postFormData";
import Map from "../Map";
import styles from "./ResultView.module.scss";

export interface Props {
  children?: React.ReactNode;
  location: Location;
}

export interface State {
  loading: boolean;
  latitude?: number;
  longitude?: number;
  tabValue: number;
}

export default class ResultView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      tabValue: 0,
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
        <AppBar position="static" classes={{
          root: styles.appbar,
        }}>
          <Tabs
            value={this.state.tabValue}
            onChange={(e, value) => this.setState({ tabValue: value })}
          >
            <Tab label="Mapa" />
            <Tab label="Statystyki" />
          </Tabs>
        </AppBar>
        {(this.state.tabValue === 0 && !this.state.loading) ? (
          <Map
            longitude={this.state.longitude || 0}
            latitude={this.state.latitude || 0}
          />
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  }
}
