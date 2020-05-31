import React from "react";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "auto",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper>Footer</Paper>
    </Box>
  );
}
