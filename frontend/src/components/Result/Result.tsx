import mapboxgl from "mapbox-gl";
import * as React from "react";
import styles from "./Result.module.scss";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZHN0YXdpbnNraSIsImEiOiJjanNpNGc5aHYxcm1nM3lueGJoNDhsbDJ6In0.d4gFH60c4GFC1thcpUA0ug";

export interface Props {
  children?: React.ReactNode;
  latitude: number;
  longitude: number;
}

export interface State {
  lng: number;
  lat: number;
  zoom: number;
}

export default class Result extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: this.props.longitude,
      lat: this.props.latitude,
      zoom: 12,
    };
  }

  public componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: (this as any).mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom,
    });

    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng,
        lat,
        zoom: map.getZoom(),
      });
    });

    map.on("load", () => {
      map.resize();
    });

    // const el = document.createElement("div");
    // el.className = styles.marker;

    // make a marker for each feature and add to the map
    new mapboxgl.Marker()
      .setLngLat([this.props.longitude, this.props.latitude])
      .addTo(map);
  }

  public render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div className={styles.map_container}>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div
          ref={(el) => ((this as any).mapContainer = el)}
          className={styles.map}
        />
      </div>
    );
  }
}
