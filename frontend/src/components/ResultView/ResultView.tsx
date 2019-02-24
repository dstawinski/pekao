import mbxClient from "@mapbox/mapbox-sdk";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { AppBar, CircularProgress, Tab, Tabs } from "@material-ui/core";
import * as React from "react";
import { postFormData } from "../../utils/postFormData";
import Map from "../Map";
import Statistics from "../Statistics";
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
  geocodingClient?: any;
}

export default class ResultView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const baseClient = mbxClient({
      accessToken:
        "pk.eyJ1IjoiZHN0YXdpbnNraSIsImEiOiJjanNpNGc5aHYxcm1nM3lueGJoNDhsbDJ6In0.d4gFH60c4GFC1thcpUA0ug",
    });
    const geocodingClient = mbxGeocoding(baseClient);

    this.state = {
      loading: true,
      tabValue: 0,
      geocodingClient,
    };
  }

  public async componentDidMount() {
    try {
      console.log(this.props.location);
      const response = await postFormData({
        operation_type: (this.props.location as any).state.operation_type,
      });
      console.log(response);
      const geoResponse = await this.state.geocodingClient
        .forwardGeocode({
          query: response.data.recommended_area,
          limit: 2,
        })
        .send();
      const match = (geoResponse as any).body;
      let coords;
      if (response.data.recommended_area !== "Warszawa (Wola)") {
        coords = match.features[0].center;
      } else {
        coords = [20.98429, 52.23243];
      }
      return this.setState({
        loading: false,
        latitude: coords[1],
        longitude: coords[0],
      });
    } catch (error) {
      console.log(error);
    }
  }

  public renderTab() {
    if (this.state.tabValue === 0) {
      return (
        <Map
          longitude={this.state.longitude || 0}
          latitude={this.state.latitude || 0}
        />
      );
    } else if (this.state.tabValue === 1) {
      return <Statistics />;
    }
  }

  public render() {
    return (
      <div className={styles.result_container}>
        <AppBar
          position="static"
          classes={{
            root: styles.appbar,
          }}
        >
          <Tabs
            value={this.state.tabValue}
            onChange={(e, value) => this.setState({ tabValue: value })}
          >
            <Tab label="Mapa" />
            <Tab label="Statystyki" />
          </Tabs>
        </AppBar>
        {this.state.loading ? <CircularProgress /> : this.renderTab()}
      </div>
    );
  }
}
