import React, { useState, createContext } from 'react';
import data from './../data/data.json';

export const BaptistereContext = createContext();

const BaptistereContextProvider = (props) => {

    const [baptistere, setBaptistere] = useState({});

    const updateBaptistere = (baptistere) => {
        baptistere.region = data.regions.filter(region => region.id === baptistere.regionId)[0].name;
        baptistere.ecclesiasticalDiocese = data.ecclesiasticalDioceses.filter(ecclesiasticalDiocese => ecclesiasticalDiocese.id === baptistere.ecclesiasticalDioceseId)[0].name;
        baptistere.civilDiocese = data.civilDioceses.filter(civilDiocese => civilDiocese.id === baptistere.civilDioceseId)[0].name;
        baptistere.patriarchy = data.patriarchies.filter(patriarchy => patriarchy.id === baptistere.patriarchyId)[0].name;
        baptistere.province = data.provinces.filter(province => province.id === baptistere.provinceId)[0].name;
        // baptistere.buildingCategory = data.buildingCategories.filter(buildingCategory => buildingCategory.id === baptistere.buildingCategoryId)[0].name;
        baptistere.settlementContext = data.settlementContextes.filter(settlementContext => settlementContext.id === baptistere.settlementContextId)[0].name;
        setBaptistere(baptistere);
    }

    const detachBaptistere = () => {
        setBaptistere({});
    }

    return (
        <BaptistereContext.Provider value={{ baptistere, updateBaptistere, detachBaptistere }}>
            {props.children}
        </BaptistereContext.Provider>
    );
}

export default BaptistereContextProvider;