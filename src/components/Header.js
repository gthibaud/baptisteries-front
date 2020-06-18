import React, { useContext } from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import LanguagePicker from "./LanguagePicker";
import { makeStyles } from "@material-ui/core/styles";
import l from "../constants/locales";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import LogoHumaNum from "../images/humanum.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  icon: {
    fontSize: "22px",
    color: "black",
  },
  logoHumaNum: {
    height: "28px",
  },
}));

export default function Header({ isOnCardView }) {
  const classes = useStyles();
  const { language } = useContext(GlobalContext);

  return (
    <Paper className={classes.root}>
      <Grid container justify={"space-between"} alignItems={"center"}>
        <Grid item xs={2}>
          <img
            alt={"logoHumaNum"}
            src={LogoHumaNum}
            className={classes.logoHumaNum}
          />
        </Grid>
        <Grid item>
          <Typography variant={"h6"}>
            {isOnCardView
              ? l("labelHomePage", language)
              : l("labelListPage", language)}
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
                <Link to={"/list"}>
                  <i className={"fa fa-list-ul " + classes.icon} />
                </Link>
              ) : (
                <Link to={"/"}>
                  <i className={"fa fa-map-marked-alt " + classes.icon} />
                </Link>
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
