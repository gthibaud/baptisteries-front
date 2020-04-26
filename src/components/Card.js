import React, { useContext } from 'react'
import { Map, ZoomControl, TileLayer } from 'react-leaflet'
import Point from './Point'
import data from './../data/data.json'
import api_key from './../data/api_key.json'
import { BaptistereContext } from '../contexts/BaptistereContext'

const Card = () => {

    const { detachBaptistere } = useContext(BaptistereContext);

    return (
        <Map center={[25, 37.2]} zoom={5} zoomControl={false} onClick={(e) => detachBaptistere()}>
            <TileLayer
                attribution='&amp;copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributor'
                url={`https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=${api_key.value}`}
            />
            <ZoomControl position="topright" />

            {data.baptisteries.map(baptistere => {
                return <Point data={baptistere} key={baptistere.id} />
            })}
        </Map>
    );
}

export default Card;