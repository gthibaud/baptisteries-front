import React, { useContext, useReducer } from "react";
import { FormControl, Paper, InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../contexts/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 3),
    marginBottom: theme.spacing(2),
  },
}));

function stateReducer(state, action) {
  return { ...state, ...action };
}

export default function FiltresContainer() {
  const classes = useStyles();
  const { language } = useContext(GlobalContext);

  const initState = {
    region: "", // dropdown
    buildingCategory: "", // dropdown
    settlementContext: "", //dropdown
    name: "", // input libre
    coordinatesAccuracy: "", // 0, 1, 2, 3
    recordReliability: "", // 1, 2, 3
    maximumDepth: "", // double
    maximumPreservedDepth: "", // double
    exclusivelyFromHistoricalSources: "", // toggle ou checkbox
    numberOfAdditionalBasins: "", //integer
  };

  const [state, dispatch] = useReducer(stateReducer, initState);

  // To cancel all filters
  const cancelAllFilters = () => dispatch(initState);

  // To cancel a specific filter
  const cancelFilter = (event) => {
    const name = event.target.name;
    dispatch({ [name]: "" });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    dispatch({ [name]: event.target.value });
  };

  console.log();

  return (
    <Paper className={classes.root}>
      <h3>Filtres</h3>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            label="Age"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>
    </Paper>
  );
}
