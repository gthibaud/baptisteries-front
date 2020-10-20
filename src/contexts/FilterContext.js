import React, { createContext, useContext, useEffect, useReducer } from "react";
import { BaptistereContext } from "./BaptistereContext";

export const FilterContext = createContext(null);

function stateReducer(state, action) {
  return { ...state, ...action };
}
const regexFloatPositiveNumber = new RegExp(/^[+]?\d+,?\d*$/);
const regexPositiveNumber = new RegExp(/^[+]?\d*$/);

export default function FilterContextProvider({ children }) {
  const { baptisteriesList } = useContext(BaptistereContext);

  const initState = {
    filters: {
      region: "",
      buildingCategory: "",
      settlementContext: "",
      name: "",
      coordinatesAccuracy: "",
      recordReliability: "",
      years: [],
      maximumDepth: "",
      maximumPreservedDepth: "",
      exclusivelyFromHistoricalSources: false,
      numberOfAdditionalBasins: "",
    },
    dateRange: [],
    baptisteriesFiltered: baptisteriesList || [],
  };

  const [state, dispatch] = useReducer(stateReducer, initState);

  useEffect(() => {
    handleResearch();
  }, [state.filters]);

  useEffect(() => {
    dispatch({ baptisteriesFiltered: baptisteriesList });
    searchAndSaveMinMaxDate(baptisteriesList);
  }, [baptisteriesList]);

  // Save the min and max of the dates for dates filter
  const searchAndSaveMinMaxDate = (baptisteriesList) => {
    const minMax = baptisteriesList
      .map((baptistery) => ({
        startingYear: baptistery.startingYear,
        finalYear: baptistery.finalYear,
      }))
      .reduce((actualMinMax, newValuesToCheck) => {
        // Check for the min year
        actualMinMax[0] =
          actualMinMax[0] === undefined ||
          newValuesToCheck.startingYear < actualMinMax[0]
            ? newValuesToCheck.startingYear
            : actualMinMax[0];
        // Check for the max year
        actualMinMax[1] =
          actualMinMax[1] === undefined ||
          newValuesToCheck.finalYear > actualMinMax[1]
            ? newValuesToCheck.finalYear
            : actualMinMax[1];
        return actualMinMax;
      }, []);

    dispatch({
      dateRange: minMax,
      filters: { ...state.filters, years: minMax },
    });
  };

  // Input fields that require a number validation with a regex
  const numberInput = ["maximumDepth", "maximumPreservedDepth"];

  // Filters that does not have to be strictly equal (not an exact search but contains)
  const filterContainsString = [...numberInput, "name"];

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
    } else if (
      value === "" ||
      (numberInput.includes(name) && regexFloatPositiveNumber.test(value))
    ) {
      dispatch({ filters: { ...state.filters, [name]: value } });
    }
  };

  // Save slider filters
  const handleRangeNumber = (event, newValues) => {
    event.preventDefault();

    dispatch({ filters: { ...state.filters, ...newValues } });
  };

  // To cancel all filters
  const cancelAllFilters = () => {
    const actualRange = state.dateRange;
    dispatch({
      ...initState,
      dateRange: actualRange,
      filters: { years: actualRange },
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
