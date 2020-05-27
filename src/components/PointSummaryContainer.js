import React, { useContext } from 'react'
import { BaptistereContext } from '../contexts/BaptistereContext';

const PointSummaryContainer = () => {

    const { currentBaptistere } = useContext(BaptistereContext);

    return (
        <div className="menu">
            <div className="menu-box">
                <div className="menu-content">
                    {/* <h2>Cartographie</h2> */}
                    <h1>Map of Paleochristian Baptisteries in the Mediterranean Sea</h1>
                    <h2>You can move, zoom and click on any pin on the map to access baptistery details.</h2>
                    {currentBaptistere.id &&
                        <div className="baptistere">
                            <h3>{currentBaptistere.name}</h3>
                            <h4>Location information</h4>
                            <p>Lon : {currentBaptistere.longitude} — Lat : {currentBaptistere.latitude}</p>
                            <p>Region : {currentBaptistere.region}</p>
                            <p>Province : {currentBaptistere.province}</p>
                            <p>Civil diocese : {currentBaptistere.civilDiocese}</p>
                            <p>Ecclesiastical diocese : {currentBaptistere.ecclesiasticalDiocese}</p>
                            <p>Patriarchy diocese : {currentBaptistere.patriarchy}</p>
                            <h4>Usage dates</h4>
                            <p>Starting year : {currentBaptistere.startingYear}</p>
                            <p>Final year : {currentBaptistere.finalYear}</p>
                            <p>Building category : {currentBaptistere.buildingCategory}</p>
                            <h4>Technical specifications</h4>
                            <p>Settlement context : {currentBaptistere.settlementContext}</p>
                            <p>Number of additional basins : {currentBaptistere.numberOfAdditionalBasins}</p>
                            <p>Maximum depth : {currentBaptistere.maximumDepth}</p>
                            <p>Maximum preserved depth : {currentBaptistere.maximumPreservedDepth}</p>
                            <p>Description of main font dimensions : {currentBaptistere.descriptionOfMainFontDimensions}</p>
                            <p>Description of adjoining rooms : {currentBaptistere.adjoiningRoomsDescription}</p>
                            <p>Exclusively from historical sources : {currentBaptistere.exclusivelyFromHistoricalSources}</p>
                        </div>}
                    <p className="small-note">© Lucia Orlandi — {(new Date().getFullYear())}</p>
                </div>
            </div>
        </div>
    );
};

export default PointSummaryContainer;