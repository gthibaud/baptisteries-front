import React, { useContext } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { BaptistereContext } from "../contexts/BaptistereContext";
import Diamond from "../images/Diamond";
import Circle from "../images/Circle";
import Rectangle from "../images/Rectangle";
import Dot from "../images/Dot";
import ReactDOMServer from "react-dom/server";
import Typography from "@material-ui/core/Typography";

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
        const res = {
            index: "",
            color: "rgb(255, 252, 121)"
        }

        if (startingDate >= 201 && endDate <= 300) {
            res.index = "3"
            res.color = "rgb(255, 126, 121)"
        } else if (startingDate >= 301 && endDate <= 400) {
            res.index = "4"
            res.color = "rgb(255, 126, 121)"
        } else if (startingDate >= 401 && endDate <= 500) {
            res.index = "5"
            res.color = "rgb(255, 126, 121)"
        } else if (startingDate >= 501 && endDate <= 600) {
            res.index = "6"
            res.color = "rgb(255, 126, 121)"
        } else if (startingDate >= 601 && endDate <= 700) {
            res.index = "7"
            res.color = "rgb(255, 126, 121)"
        } else if (startingDate >= 301 && endDate <= 500) {
            res.color = "rgb(215, 131, 255)"
        } else if (startingDate >= 401 && endDate <= 600) {
            res.color = "rgb(158, 204, 255)"
        } else if (startingDate >= 501 && endDate <= 700) {
            res.color = "rgb(164, 251, 121)"
        } else if (startingDate >= 601 && endDate <= 800) {
            res.color = "rgb(100,100,100)"
        }
        return res;
    };

    const markerShape = () => {
        const fill = pointColor(data.startingYear, data.finalYear);
        if (data.exclusivelyFromHistoricalSources) {
            return ReactDOMServer.renderToString(<Dot fill={fill.color} />);
        }
        switch (data.recordReliability) {
            case 1:
                return ReactDOMServer.renderToString(
                    <Diamond fill={fill.color} text={fill.index} size={pointSize} />
                );
            case 2:
                return ReactDOMServer.renderToString(
                    <Circle fill={fill.color} text={fill.index} size={pointSize} />
                );
            case 3:
                return ReactDOMServer.renderToString(
                    <Rectangle fill={fill.color} text={fill.index} size={pointSize} />
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
                <Typography variant={"h3"}>{data.name}</Typography>
            </Popup>
        </Marker>
    ) : (
            <></>
        );
};

export default Point;
