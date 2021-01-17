import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";

export const BaptistereContext = createContext(null);

// Fuses the previous state object with the new elements
function stateReducer(state, action) {
    return { ...state, ...action };
}

const BaptistereContextProvider = ({ children }) => {
    const { language } = useContext(GlobalContext);

    const initState = {
        baptisteriesData: {},
        baptisteriesList: [],
        currentBaptistere: {},
        currentBaptisteres: [],
        datingCriteria: [],
        regions: [],
        ecclesiasticalDioceses: [],
        civilDioceses: [],
        patriarchies: [],
        provinces: [],
        buildingCategories: [],
        settlementContexts: [],
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
    }, [state.baptisteriesData, language]);

    // Sets the current baptistere that is focused and map
    const setCurrentFocusedBaptistere = (baptistere) => {
        dispatch({ currentBaptistere: baptistere });
    };

    // Sets the current baptisteres that is focused and map
    const setCurrentFocusedBaptisteres = (data) => {
        const lng = data.longitude;
        const lat = data.latitude;
        const positionnedBaptisteriesList = state.baptisteriesList.filter(bp => bp.longitude === lng && bp.latitude === lat)
        dispatch({ currentBaptisteres: positionnedBaptisteriesList });
    };

    // Resets the current baptistere that is focused on the map view
    const detachBaptistere = () => {
        dispatch({ currentBaptisteres: {} });
    };

    // Updates the lists after data have changed
    const updateBaptisteriesList = () => {
        const { baptisteriesData } = state;

        const baptisteriesList = baptisteriesData.baptisteries || [];
        const datingCriteria = baptisteriesData.datingCriteria || [];
        const regions = baptisteriesData.regions || [];
        const ecclesiasticalDioceses =
            baptisteriesData.ecclesiasticalDioceses || [];
        const civilDioceses = baptisteriesData.civilDioceses || [];
        const patriarchies = baptisteriesData.patriarchies || [];
        const provinces = baptisteriesData.provinces || [];
        const buildingCategories = baptisteriesData.buildingCategories || [];
        const settlementContexts = baptisteriesData.settlementContexts || [];

        const baptisteriesFormatted = baptisteriesList.map((baptistere) => {
            // Use of filter function here because datingCriteria is an array and not just a single value
            baptistere.datingCriteria = datingCriteria.filter((criteria) => baptistere.datingCriteria?.includes(criteria.id) && criteria.cid === language).map((criteria) => criteria.name);

            baptistere.region = regions.find(
                (region) => region.id === baptistere.regionId && region.cid === language
            )?.name;

            baptistere.ecclesiasticalDiocese = ecclesiasticalDioceses.find(
                (ecclesiasticalDiocese) =>
                    ecclesiasticalDiocese.id === baptistere.ecclesiasticalDioceseId &&
                    ecclesiasticalDiocese.cid === language
            )?.name;

            baptistere.civilDiocese = civilDioceses.find(
                (civilDiocese) =>
                    civilDiocese.id === baptistere.civilDioceseId &&
                    civilDiocese.cid === language
            )?.name;

            baptistere.patriarchy = patriarchies.find(
                (patriarchy) =>
                    patriarchy.id === baptistere.patriarchyId &&
                    patriarchy.cid === language
            )?.name;

            baptistere.province = provinces.find(
                (province) =>
                    province.id === baptistere.provinceId && province.cid === language
            )?.name;

            baptistere.buildingCategory = buildingCategories.find(
                (buildingCategory) =>
                    buildingCategory.id === baptistere.buildingCategoryId &&
                    buildingCategory.cid === language
            )?.name;

            baptistere.settlementContext = settlementContexts.find(
                (settlementContext) =>
                    settlementContext.id === baptistere.settlementContextId &&
                    settlementContext.cid === language
            )?.name;

            baptistere.maximumDepth = baptistere.maximumDepth !== "" && baptistere.maximumDepth !== null ?
                parseFloat(baptistere.maximumDepth.toString().replace(",", "."))
                : 0;
            baptistere.maximumPreservedDepth = baptistere.maximumPreservedDepth !== "" && baptistere.maximumPreservedDepth !== null ?
                parseFloat(baptistere.maximumPreservedDepth.toString().replace(",", "."))
                : 0;

            const plans = [];
            let i = 0;
            baptistere.imageURLs = [];
            baptistere.planUrls && baptistere.planUrls.map(u => {
                baptistere.imageURLs.push({ source: u, caption: baptistere.name, index: i });
                i++;
            });

            return baptistere;
        });

        dispatch({
            baptisteriesList: baptisteriesFormatted,
            datingCriteria,
            regions,
            ecclesiasticalDioceses,
            civilDioceses,
            patriarchies,
            provinces,
            buildingCategories,
            settlementContexts,
        });
    };

    const fetchBaptisteres = () => {
        axios
            .get("https://baptisteres.huma-num.fr/cache")
            .then((res) => {
                dispatch({ baptisteriesData: res.data });
            })
            .catch((e) => {
                console.error("error while fetching baptisteries from cache", e);
            });
    };

    return (
        <BaptistereContext.Provider
            value={{
                datingCriteria: state.datingCriteria,
                regions: state.regions,
                ecclesiasticalDioceses: state.ecclesiasticalDioceses,
                civilDioceses: state.civilDioceses,
                patriarchies: state.patriarchies,
                provinces: state.provinces,
                buildingCategories: state.buildingCategories,
                settlementContexts: state.settlementContexts,
                baptisteriesList: state.baptisteriesList,
                currentBaptistere: state.currentBaptistere,
                currentBaptisteres: state.currentBaptisteres,
                setCurrentFocusedBaptistere,
                setCurrentFocusedBaptisteres,
                detachBaptistere
            }}
        >
            {children}
        </BaptistereContext.Provider>
    );
};

export default BaptistereContextProvider;
