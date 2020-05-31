import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import LanguagePicker from "./LanguagePicker";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

export default function Header({ isOnCardView }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid
        container
        justify={"space-between"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={2}>
          [Logo]
        </Grid>
        <Grid item xs={10}>
          <Grid container justify={"flex-end"} spacing={3}>
            <Grid item>
              <Typography variant={"body1"}>Carte</Typography>
            </Grid>
            <Grid item>
              <LanguagePicker />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
