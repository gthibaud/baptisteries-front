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

  const fetchBaptisteres = () => {
    axios
      .get("http://localhost:3003/baptisteries-cache")
      .then((res) => {
        dispatch({ baptisteriesData: res.data });

        axios
          .get("http://localhost:3003/baptisteries-update")
          .then((res) => {
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
        regions: state.regions,
        buildingCategories: state.buildingCategories,
        settlementContexts: state.settlementContexts,
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
