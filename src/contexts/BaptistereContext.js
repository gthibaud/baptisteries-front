import React, {createContext, useEffect, useReducer} from 'react';
import axios from 'axios';

export const BaptistereContext = createContext(null);

// Fuses the previous state object with the new elements
function stateReducer(state, action) {
    return { ...state, ...action };
}

const BaptistereContextProvider = (props) => {

    const initState = {
        baptisteriesData: {},
        baptisteriesList: [],
        currentBaptistere: {},
        regions: [],
        ecclesiasticalDioceses: [],
        civilDioceses: [],
        patriarchies: [],
        provinces: [],
        buildingCategories: [],
        settlementContexts: []
    };

    const [state, dispatch] = useReducer(stateReducer, initState);

    // Initial call to retrieve data from the baptisteries api or the cache
    useEffect(() => {
        fetchBaptisteres();
    }, []);

    // Updates the list of baptisteries whenever the data changes
    useEffect(() => {
        updateBaptisteriesList();
        // eslint-disable-next-line
    }, [state.baptisteriesData]);


    // Sets the current baptistere that is focused and map
    const setCurrentFocusedBaptistere = (baptistere) => {
        baptistere.region = state.regions.filter(region => region.id === baptistere.regionId)[0].name;
        baptistere.ecclesiasticalDiocese = state.ecclesiasticalDioceses.filter(ecclesiasticalDiocese => ecclesiasticalDiocese.id === baptistere.ecclesiasticalDioceseId)[0].name;
        baptistere.civilDiocese = state.civilDioceses.filter(civilDiocese => civilDiocese.id === baptistere.civilDioceseId)[0].name;
        baptistere.patriarchy = state.patriarchies.filter(patriarchy => patriarchy.id === baptistere.patriarchyId)[0].name;
        baptistere.province = state.provinces.filter(province => province.id === baptistere.provinceId)[0].name;
        // baptistere.buildingCategory = state.buildingCategories.filter(buildingCategory => buildingCategory.id === baptistere.buildingCategoryId)[0].name;
        //baptistere.settlementContext = state.settlementContexts.filter(settlementContext => settlementContext.id === baptistere.settlementContextId)[0].name;
        dispatch({currentBaptistere: baptistere});
    };

    // Resets the current baptistere that is focused on the map view
    const detachBaptistere = () => {
        dispatch({currentBaptistere: {}});
    };

    // Updates the lists after data have changed
    const updateBaptisteriesList = () => {
        const { baptisteriesData } = state;
        dispatch({
            baptisteriesList: baptisteriesData.baptisteries || [],
            regions: baptisteriesData.regions || [],
            ecclesiasticalDioceses: baptisteriesData.ecclesiasticalDioceses || [],
            civilDioceses: baptisteriesData.civilDioceses || [],
            patriarchies: baptisteriesData.patriarchies || [],
            provinces: baptisteriesData.provinces || [],
            buildingCategories: baptisteriesData.buildingCategories || [],
            settlementContexts: baptisteriesData.settlementContexts || []
        });
    };

    // TODO : verify why these calls are fused + move this in a service file
    const fetchBaptisteres = () => {
        axios.get('http://localhost:3003/baptisteries-cache')
            .then(res => {
                dispatch({baptisteriesData: res.data});

                axios.get('http://localhost:3003/baptisteries-update')
                    .then(res => {
                        // TODO marche pas
                        if(res.data.status === "updated") {
                            console.log("chouette : ", res.data.data);
                            dispatch({baptisteriesData: res.data.data});
                        }
                    }).catch(e => {
                        console.error("error while fetching baptisteries from cache", e)
                    });
            }).catch(e => {
                console.error("error while fetching baptisteries from cache", e)
            });
    };

    return (
        <BaptistereContext.Provider value={{
            baptisteriesList: state.baptisteriesList,
            currentBaptistere: state.currentBaptistere,
            setCurrentFocusedBaptistere,
            detachBaptistere
        }}>
            {props.children}
        </BaptistereContext.Provider>
    )
};

export default BaptistereContextProvider;
