import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import LanguagePicker from "./LanguagePicker";
import { makeStyles } from "@material-ui/core/styles";
import { labelHomePage, labelListPage } from "../constants/vocabulary";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  icon: {
    fontSize: "22px",
  },
}));

export default function Header({ isOnCardView }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify={"space-between"} alignItems={"center"}>
        <Grid item xs={2}>
          [Logo]
        </Grid>
        <Grid item>
          <Typography variant={"h6"}>
            {isOnCardView ? labelHomePage["fr"] : labelListPage["fr"]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            justify={"flex-end"}
            spacing={3}
            alignItems={"center"}
          >
            <Grid item>
              {isOnCardView ? (
                <i className={"fa fa-list-ul " + classes.icon} />
              ) : (
                <i className={"fa fa-map-marked-alt " + classes.icon} />
              )}
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
