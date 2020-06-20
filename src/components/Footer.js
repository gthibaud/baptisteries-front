import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginTop: "auto",
  },
  smallNote: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#a3a3a3",
    textDecoration: "none",
  },
  copyright: {
    fontWeight: 600,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify={"space-between"} alignItems={"center"}>
        <Grid item>
          <Typography className={classes.copyright} variant={"body1"}>
            © Lucia Orlandi - 2020
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body1"}>
            <a
              className={classes.smallNote}
              href={"https://www.luciaorlandi.it"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              luciaorlandi.it
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
