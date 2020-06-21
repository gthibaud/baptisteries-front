import React, { useContext } from "react";
import { Map, ZoomControl, TileLayer } from "react-leaflet";
import Point from "./Point";
import api_key from "./../data/api_key.json";
import { BaptistereContext } from "../contexts/BaptistereContext";
import MapLegend from "./MapLegend";
import { FilterContext } from "../contexts/FilterContext";
import FiltresContainer from "./FiltresContainer";

const Card = () => {
  const { detachBaptistere } = useContext(BaptistereContext);
  const { baptisteriesFiltered } = useContext(FilterContext);

  return (
    <>
      <Map
        center={[38, 20]}
        zoom={5}
        zoomControl={false}
        onClick={() => detachBaptistere()}
      >
        <TileLayer
          attribution='&amp;copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributor'
          url={`https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=${api_key.value}`}
        />
        <ZoomControl position="topright" />

        {baptisteriesFiltered.map((baptistere) => (
          <Point data={baptistere} key={baptistere.id} />
        ))}

        <MapLegend />
      </Map>
      <FiltresContainer />
    </>
  );
};

export default Card;
