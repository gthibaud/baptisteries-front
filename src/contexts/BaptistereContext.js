import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const BaptistereContext = createContext(null);

// Fuses the previous state object with the new elements
function stateReducer(state, action) {
  return { ...state, ...action };
}

const BaptistereContextProvider = ({ children }) => {
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
  }, [state.baptisteriesData]);

  // Sets the current baptistere that is focused and map
  const setCurrentFocusedBaptistere = (baptistere) => {
    dispatch({ currentBaptistere: baptistere });
  };

  // Resets the current baptistere that is focused on the map view
  const detachBaptistere = () => {
    dispatch({ currentBaptistere: {} });
  };

  // Updates the lists after data have changed
  const updateBaptisteriesList = () => {
    const { baptisteriesData } = state;

    const baptisteriesList = baptisteriesData.baptisteries || [];
    const regions = baptisteriesData.regions || [];
    const ecclesiasticalDioceses =
      baptisteriesData.ecclesiasticalDioceses || [];
    const civilDioceses = baptisteriesData.civilDioceses || [];
    const patriarchies = baptisteriesData.patriarchies || [];
    const provinces = baptisteriesData.provinces || [];
    const buildingCategories = baptisteriesData.buildingCategories || [];
    const settlementContexts = baptisteriesData.settlementContexts || [];

    const baptisteriesFormatted = baptisteriesList.map((baptistere) => {
      baptistere.region = regions.find(
        (region) => region.id === baptistere.regionId
      )?.name;
      baptistere.ecclesiasticalDiocese = ecclesiasticalDioceses.find(
        (ecclesiasticalDiocese) =>
          ecclesiasticalDiocese.id === baptistere.ecclesiasticalDioceseId
      )?.name;
      baptistere.civilDiocese = civilDioceses.find(
        (civilDiocese) => civilDiocese.id === baptistere.civilDioceseId
      )?.name;
      baptistere.patriarchy = patriarchies.find(
        (patriarchy) => patriarchy.id === baptistere.patriarchyId
      )?.name;
      baptistere.province = provinces.find(
        (province) => province.id === baptistere.provinceId
      )?.name;
      baptistere.buildingCategory = buildingCategories.find(
        (buildingCategory) =>
          buildingCategory.id === baptistere.buildingCategoryId
      )?.name;
      baptistere.settlementContext = settlementContexts.find(
        (settlementContext) =>
          settlementContext.id === baptistere.settlementContextId
      )?.name;
      return baptistere;
    });

    dispatch({
      baptisteriesList: baptisteriesFormatted,
      regions,
      ecclesiasticalDioceses,
      civilDioceses,
      patriarchies,
      provinces,
      buildingCategories,
      settlementContexts,
    });
  };

  // TODO : verify why these calls are fused + move this in a service file
  const fetchBaptisteres = () => {
    axios
      .get("http://localhost:3003/baptisteries-cache")
      .then((res) => {
        dispatch({ baptisteriesData: res.data });

        axios
          .get("http://localhost:3003/baptisteries-update")
          .then((res) => {
            // TODO marche pas
            if (res.data.status === "updated") {
              dispatch({ baptisteriesData: res.data.data });
            }
          })
          .catch((e) => {
            console.error("error while fetching baptisteries from cache", e);
          });
      })
      .catch((e) => {
        console.error("error while fetching baptisteries from cache", e);
      });
  };

  return (
    <BaptistereContext.Provider
      value={{
        baptisteriesList: state.baptisteriesList,
        currentBaptistere: state.currentBaptistere,
        setCurrentFocusedBaptistere,
        detachBaptistere,
      }}
    >
      {children}
    </BaptistereContext.Provider>
  );
};

export default BaptistereContextProvider;
