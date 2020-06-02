import React, { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { BaptistereContext } from '../contexts/BaptistereContext';
import Diamond from '../images/Diamond';
import Circle from '../images/Circle';
import Rectangle from '../images/Rectangle';
import Dot from '../images/Dot';
import ReactDOMServer from 'react-dom/server';

const Point = ({ data }) => {

    const { setCurrentFocusedBaptistere } = useContext(BaptistereContext);

    const long = parseFloat(data.longitude.replace(',', '.'));
    const lat = parseFloat(data.latitude.replace(',', '.'));

    const markerSize = () => {
        if (data.exclusivelyFromHistoricalSources) {
            return 12
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
        }
    }

    const pointSize = markerSize();

    const markerShape = () => {
        if (data.exclusivelyFromHistoricalSources) {
            return ReactDOMServer.renderToString(<Dot color="true" />);
        }
        switch (data.recordReliability) {
            case 1:
                return ReactDOMServer.renderToString(<Diamond color="true" size={pointSize} />);
            case 2:
                return ReactDOMServer.renderToString(<Circle color="true" size={pointSize} />);
            case 3:
                return ReactDOMServer.renderToString(<Rectangle color="true" size={pointSize} />);
        }
    }

    const pointIcon = L.divIcon({
        className: "test",
        html: markerShape(),
        iconSize: [pointSize, pointSize],
        iconAnchor: [pointSize / 2, pointSize / 2],
        popupAnchor: [0, 0]
    });

    return long && lat && data.name ? (
        <Marker icon={pointIcon} position={[lat, long]} onClick={() => setCurrentFocusedBaptistere(data)}>
            <Popup>
                <h3>{data.name}</h3>
            </Popup>
        </Marker>
    ) : <></>;
};

export default Point;

