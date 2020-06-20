import React, { createContext, useReducer } from "react";

export const FilterContext = createContext(null);

function stateReducer(state, action) {
  return { ...state, ...action };
}
const regexFloatPositiveNumber = new RegExp(/^[+]?\d+,?\d*$/);
const regexPositiveNumber = new RegExp(/^[+]?\d*$/);

export default function FilterContextProvider({ children }) {
  const initState = {
    region: "",
    buildingCategory: "",
    settlementContext: "",
    name: "",
    coordinatesAccuracy: "",
    recordReliability: "",
    maximumDepth: "",
    maximumPreservedDepth: "",
    exclusivelyFromHistoricalSources: false,
    numberOfAdditionalBasins: "",
  };

  const [filters, dispatch] = useReducer(stateReducer, initState);

  // Input fields that require a validation with a regex
  const numberInput = ["maximumDepth", "maximumPreservedDepth"];

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    dispatch({ [name]: value });
  };

  const handleChangeToggle = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    dispatch({ [name]: checked });
  };

  const handleChangeNumber = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    if (
      name === "numberOfAdditionalBasins" &&
      regexPositiveNumber.test(value)
    ) {
      dispatch({ [name]: value });
    } else if (
      value === "" ||
      (numberInput.includes(name) && regexFloatPositiveNumber.test(value))
    ) {
      dispatch({ [name]: value });
    }
  };

  // To cancel all filters
  const cancelAllFilters = () => dispatch(initState);

  // To cancel a specific filter
  const cancelFilter = (name) => {
    dispatch({ [name]: "" });
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        handleChange,
        handleChangeNumber,
        handleChangeToggle,
        cancelAllFilters,
        cancelFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
