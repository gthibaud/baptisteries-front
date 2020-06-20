import React, { useContext } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { BaptistereContext } from "../contexts/BaptistereContext";
import Diamond from "../images/Diamond";
import Circle from "../images/Circle";
import Rectangle from "../images/Rectangle";
import Dot from "../images/Dot";
import ReactDOMServer from "react-dom/server";

const Point = ({ data }) => {
  const { setCurrentFocusedBaptistere } = useContext(BaptistereContext);

  const long = parseFloat(data.longitude.replace(",", "."));
  const lat = parseFloat(data.latitude.replace(",", "."));

  const markerSize = () => {
    if (data.exclusivelyFromHistoricalSources) {
      return 12;
    }
    switch (data.coordinatesAccuracy) {
      case 0:
        return 24;
      case 1:
        return 40;
      case 2:
        return 50;
      case 3:
        return 60;
      default:
        return 0;
    }
  };

  const pointSize = markerSize();

  const centuryIndex = (year) => Math.round(1 + (year - 1) / 100);

  const pointColor = (startingDate, endDate) => {
    const startingIndex = centuryIndex(startingDate);
    const finalIndex = centuryIndex(endDate);
    const indexGap = finalIndex - startingIndex;

    if (indexGap === 0) {
      return "#FF7E79";
    }
    if (indexGap === 1 && startingIndex === 3) {
      return "#76D6FF";
    }
    if (indexGap === 1 && startingIndex === 4) {
      return "#D783FF";
    }
    if (indexGap === 1 && startingIndex === 6) {
      return "#A4FB79";
    }
    return "#FFFC79";
  };

  const markerShape = () => {
    const color = pointColor(data.startingYear, data.finalYear);
    if (data.exclusivelyFromHistoricalSources) {
      return ReactDOMServer.renderToString(<Dot fill={color} />);
    }
    switch (data.recordReliability) {
      case 1:
        return ReactDOMServer.renderToString(
          <Diamond fill={color} size={pointSize} />
        );
      case 2:
        return ReactDOMServer.renderToString(
          <Circle fill={color} size={pointSize} />
        );
      case 3:
        return ReactDOMServer.renderToString(
          <Rectangle fill={color} size={pointSize} />
        );
    }
  };

  const pointIcon = L.divIcon({
    className: "test",
    html: markerShape(),
    iconSize: [pointSize, pointSize],
    iconAnchor: [pointSize / 2, pointSize / 2],
    popupAnchor: [0, 0],
  });

  return long && lat && data.name ? (
    <Marker
      icon={pointIcon}
      position={[lat, long]}
      onClick={() => setCurrentFocusedBaptistere(data)}
    >
      <Popup>
        <h3>{data.name}</h3>
      </Popup>
    </Marker>
  ) : (
    <></>
  );
};

export default Point;
