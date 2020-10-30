import React, { createContext, useContext, useEffect, useReducer } from "react";
import { BaptistereContext } from "./BaptistereContext";

export const FilterContext = createContext(null);

function stateReducer(state, action) {
  return { ...state, ...action };
}
const regexPositiveNumber = new RegExp(/^[+]?\d*$/);

export default function FilterContextProvider({ children }) {
  const { baptisteriesList } = useContext(BaptistereContext);

  const initState = {
    filters: {
      region: "",
      ecclesiasticalDiocese: "",
      civilDiocese: "",
      patriarchy: "",
      province: "",
      buildingCategory: "",
      settlementContext: "",
      name: "",
      descriptionOfMainFontDimensions: "",
      coordinatesAccuracy: "",
      recordReliability: "",
      years: [],
      maximumDepth: [],
      maximumPreservedDepth: [],
      exclusivelyFromHistoricalSources: false,
      numberOfAdditionalBasins: "",
    },
    dateRange: [],
    maxDepthRange: [],
    maxPreservedDepthRange: [],
    baptisteriesFiltered: baptisteriesList || [],
  };

  const [state, dispatch] = useReducer(stateReducer, initState);

  useEffect(() => {
    handleResearch();
  }, [state.filters]);

  useEffect(() => {
    const minMaxDate = searchMinMaxFields(baptisteriesList, [
      "startingYear",
      "finalYear",
    ]);
    const minMaxDepth = searchMinMaxFields(baptisteriesList, [
      "maximumDepth",
      "maximumDepth",
    ]);
    const minMaxPreservedDepth = searchMinMaxFields(baptisteriesList, [
      "maximumPreservedDepth",
      "maximumPreservedDepth",
    ]);

    dispatch({
      baptisteriesFiltered: baptisteriesList,
      dateRange: minMaxDate,
      maxDepthRange: minMaxDepth,
      maxPreservedDepthRange: minMaxPreservedDepth,
      filters: {
        ...state.filters,
        years: minMaxDate,
        maximumDepth: minMaxDepth,
        maximumPreservedDepth: minMaxPreservedDepth,
      },
    });
  }, [baptisteriesList]);

  // Retrieve the min and max for the baptistery fields given
  const searchMinMaxFields = (baptisteriesList, fieldsToCheck) => {
    const minMax = baptisteriesList
      .map((baptistery) => ({
        firstField: baptistery[fieldsToCheck[0]],
        secondField: baptistery[fieldsToCheck[1]],
      }))
      .reduce((actualMinMax, newValuesToCheck) => {
        // Check for the min element
        actualMinMax[0] =
          actualMinMax[0] === undefined ||
          newValuesToCheck.firstField < actualMinMax[0]
            ? newValuesToCheck.firstField
            : actualMinMax[0];

        // Check for the max element
        actualMinMax[1] =
          actualMinMax[1] === undefined ||
          newValuesToCheck.secondField > actualMinMax[1]
            ? newValuesToCheck.secondField
            : actualMinMax[1];
        return actualMinMax;
      }, []);

    return minMax;
  };

  // Filters that does not have to be strictly equal (not an exact search but contains)
  const filterContainsString = ["name", "descriptionOfMainFontDimensions"];

  // Save string filters
  const handleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    dispatch({ filters: { ...state.filters, [name]: value } });
  };

  // Save boolean filters
  const handleChangeToggle = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    dispatch({ filters: { ...state.filters, [name]: checked } });
  };

  // Save number filters
  const handleChangeNumber = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    if (
      name === "numberOfAdditionalBasins" &&
      regexPositiveNumber.test(value)
    ) {
      dispatch({ filters: { ...state.filters, [name]: value } });
    } else if (value === "") {
      dispatch({ filters: { ...state.filters, [name]: value } });
    }
  };

  // Save range filters
  const handleRangeNumber = (event, label, newValues) => {
    event.preventDefault();

    dispatch({ filters: { ...state.filters, [label]: newValues } });
  };

  // To cancel all filters but keep the default range filters
  const cancelAllFilters = () => {
    const actualDateRange = state.dateRange;
    const actualMaxDepthRange = state.maxDepthRange;
    const actualMaxPresDepthRange = state.maxPreservedDepthRange;

    dispatch({
      ...initState,
      dateRange: actualDateRange,
      maxDepthRange: actualMaxDepthRange,
      maxPreservedDepthRange: actualMaxPresDepthRange,
      filters: {
        ...initState.filters,
        years: actualDateRange,
        maximumDepth: actualMaxDepthRange,
        maximumPreservedDepth: actualMaxPresDepthRange,
      },
    });
  };

  // To cancel a specific filter
  const cancelFilter = (name) => {
    if (name === "exclusivelyFromHistoricalSources") {
      dispatch({ filters: { ...state.filters, [name]: false } });
    } else {
      dispatch({ filters: { ...state.filters, [name]: "" } });
    }
  };

  const handleResearch = () => {
    const newBaptisteriesFiltered = baptisteriesList.filter((baptistery) => {
      return Object.keys(state.filters).every((filter) => {
        // If exclusivelyFromHistoricalSources is false, all the records match
        if (filter === "exclusivelyFromHistoricalSources") {
          if (state.filters[filter] === false) {
            return true;
          }
          return (
            baptistery[filter] !== undefined &&
            baptistery[filter] !== null &&
            baptistery[filter] === state.filters[filter]
          );
        }

        if (filter === "years") {
          return (
            baptistery.startingYear >= state.filters.years[0] &&
            baptistery.finalYear <= state.filters.years[1]
          );
        }

        if (filter === "maximumDepth") {
          const baptMaxDepth = baptistery.maximumDepth;
          return (
            baptMaxDepth >= state.filters.maximumDepth[0] &&
            baptMaxDepth <= state.filters.maximumDepth[1]
          );
        }

        if (filter === "maximumPreservedDepth") {
          const baptMaxPresDepth = baptistery.maximumPreservedDepth;
          return (
            baptMaxPresDepth >= state.filters.maximumPreservedDepth[0] &&
            baptMaxPresDepth <= state.filters.maximumPreservedDepth[1]
          );
        }

        // If the element does not have to be strictly equal (not an exact search)
        if (state.filters[filter] !== "") {
          if (filterContainsString.includes(filter)) {
            return (
              baptistery[filter] !== undefined &&
              baptistery[filter] !== null &&
              baptistery[filter]
                .toString()
                .toLowerCase()
                .includes(state.filters[filter].toLowerCase())
            );
          }

          // If the element must be strictly equal
          return (
            baptistery[filter] !== undefined &&
            baptistery[filter] !== null &&
            baptistery[filter].toString() === state.filters[filter] // Transform number in string for the comparison
          );
        }
        return true;
      });
    });

    dispatch({ baptisteriesFiltered: newBaptisteriesFiltered });
  };

  return (
    <FilterContext.Provider
      value={{
        filters: state.filters,
        baptisteriesFiltered: state.baptisteriesFiltered,
        dateRange: state.dateRange,
        maxDepthRange: state.maxDepthRange,
        maxPreservedDepthRange: state.maxPreservedDepthRange,
        handleChange,
        handleChangeNumber,
        handleChangeToggle,
        handleRangeNumber,
        cancelAllFilters,
        cancelFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
