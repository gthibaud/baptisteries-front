import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 3),
  },
}));

export default function FiltresContainer() {
  const classes = useStyles();

  const initState = {
    region: "", // dropdown
    buildingCategory: "", // dropdown
    settlementContext: "", //dropdown
    name: "", // input libre
    coordinatesAccuracy: "", // 0, 1, 2, 3
    recordReliability: "",
    maximumDepth: "",
    maximumPreservedDepth: "",
    exclusivelyFromHistoricalSources: "",
  };

  // effacer tous les filtres

  const [state, setState] = React.useState(initState);

  // regionId, buildingCategoryId, settlementContextId, name, coordinatesAccuracy
  // recordReliability, maximumDepth, maximumPreservedDepth, exclusivelyFromHistoricalSources, numberOfAdditionalBasins

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Paper className={classes.root}>
      <h3>Filtres</h3>
    </Paper>
  );
}
