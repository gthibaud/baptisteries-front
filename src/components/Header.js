import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return <Paper className={classes.root}>Headeeeer</Paper>;
}
