import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const BaptistereContext = createContext(null);

const BaptistereContextProvider = (props) => {

    const [baptisteries, setBaptisteries] = useState({});
    const [baptistere, setBaptistere] = useState({});
    const [points, setPoints] = useState([]);

    const updateBaptistere = (baptistere) => {
        // call the fetch function to update eventually if new baptisteries
        baptistere.region = baptisteries.regions.filter(region => region.id === baptistere.regionId)[0].name;
        baptistere.ecclesiasticalDiocese = baptisteries.ecclesiasticalDioceses.filter(ecclesiasticalDiocese => ecclesiasticalDiocese.id === baptistere.ecclesiasticalDioceseId)[0].name;
        baptistere.civilDiocese = baptisteries.civilDioceses.filter(civilDiocese => civilDiocese.id === baptistere.civilDioceseId)[0].name;
        baptistere.patriarchy = baptisteries.patriarchies.filter(patriarchy => patriarchy.id === baptistere.patriarchyId)[0].name;
        baptistere.province = baptisteries.provinces.filter(province => province.id === baptistere.provinceId)[0].name;
        // baptistere.buildingCategory = baptisteries.buildingCategories.filter(buildingCategory => buildingCategory.id === baptistere.buildingCategoryId)[0].name;
        //baptistere.settlementContext = baptisteries.settlementContextes.filter(settlementContext => settlementContext.id === baptistere.settlementContextId)[0].name;
        setBaptistere(baptistere);
    }

    const detachBaptistere = () => {
        setBaptistere({});
    }

    const updatePoints = () => {
        setPoints(baptisteries.baptisteries || [])
    }

    const fetchBaptisteres = () => {
        axios.get('http://localhost:3003/baptisteries-cache')
            .then(res => {
                setBaptisteries(res.data)
                axios.get('http://localhost:3003/baptisteries-update')
                    .then(res => {
                        // TODO marche pas
                        if(res.data.status === "updated") {
                            console.log("chouette : ", res.data.data)
                            setBaptisteries(res.data.data)
                        }
                    }).catch(e => {
                        console.error("error while fetching baptisteries from cache", e)
                    });
            }).catch(e => {
                console.error("error while fetching baptisteries from cache", e)
            });
    }

    useEffect(() => {
        fetchBaptisteres()
    }, [])

    useEffect(() => {
        updatePoints()
        // eslint-disable-next-line
    }, [baptisteries])

    return (
        <BaptistereContext.Provider value={{ baptistere, points, updateBaptistere, detachBaptistere }}>
            {props.children}
        </BaptistereContext.Provider>
    )
};

export default BaptistereContextProvider;
