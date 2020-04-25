import React, { useContext } from 'react'
import { BaptistereContext } from '../contexts/BaptistereContext';

const Menu = () => {

    const { baptistere } = useContext(BaptistereContext);

    return (
        <div className="menu">
            <div className="menu-box">
                <div className="menu-content">
                    {/* <h2>Cartographie</h2> */}
                    <h1>Map of Paleochristian Baptisteries in the Mediterranean Sea</h1>
                    <h2>You can move, zoom and click on any pin on the map to access baptistery details.</h2>
                    {baptistere.id &&
                        <div className="baptistere">
                            <h3>{baptistere.name}</h3>
                            <h4>Location information</h4>
                            <p>Lon : {baptistere.longitude} — Lat : {baptistere.latitude}</p>
                            <p>Region : {baptistere.region}</p>
                            <p>Province : {baptistere.province}</p>
                            <p>Civil diocese : {baptistere.civilDiocese}</p>
                            <p>Ecclesiastical diocese : {baptistere.ecclesiasticalDiocese}</p>
                            <p>Patriarchy diocese : {baptistere.patriarchy}</p>
                            <h4>Usage dates</h4>
                            <p>Starting year : {baptistere.startingYear}</p>
                            <p>Final year : {baptistere.finalYear}</p>
                            {/* <p>Building category : {baptistere.buildingCategory}</p> */}
                            <h4>Technical specifications</h4>
                            <p>Settlement context : {baptistere.settlementContext}</p>
                            <p>Number of additional basins : {baptistere.numberOfAdditionalBasins}</p>
                            <p>Maximum depth : {baptistere.maximumDepth}</p>
                            <p>Maximum preserved depth : {baptistere.maximumPreservedDepth}</p>
                            <p>Description of main font dimensions : {baptistere.descriptionOfMainFontDimensions}</p>
                            <p>Description of adjoining rooms : {baptistere.adjoiningRoomsDescription}</p>
                            <p>Exclusively from historical sources : {baptistere.exclusivelyFromHistoricalSources}</p>
                        </div>}
                    <p className="small-note">© Lucia Orlandi — {(new Date().getFullYear())}</p>
                </div>
            </div>
        </div>
    );
}

export default Menu;