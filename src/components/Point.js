import React, { useContext } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { BaptistereContext } from '../contexts/BaptistereContext';

const Point = (props) => {
    const { data } = props;

    const { updateBaptistere } = useContext(BaptistereContext);

    const long = parseFloat(data.longitude.replace(',', '.'));
    const lat = parseFloat(data.latitude.replace(',', '.'));

    return long && lat && data.name ? (
        <Marker position={[lat, long]} onClick={() => updateBaptistere(data)}>
            <Popup>
                <h3>{data.name}</h3>
            </Popup>
        </Marker>
    ) : null;
};

export default Point;

