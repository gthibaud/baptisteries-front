import React from "react";
import {Paper, Grid, Typography} from "@material-ui/core";
import LanguagePicker from "./LanguagePicker";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import LogoHumaNum from "../images/humanum.png";
import LogoResmed from "../images/resmed.jpeg";
import LogoUMR from "../images/umr.jpg";
import LogoInvestissement from "../images/investissementdavenir.jpeg";
import LogoSorbonne from "../images/sorbonneUniversite.png";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    icon: {
        fontSize: "22px",
        color: "black",
    },
    marginRight: {
        paddingRight: "16px"
    },
    logo: {
        height: "40px",
        width: "auto"
    }
}));

export default function Header({pageTitle}) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid container justify={"space-between"} alignItems={"center"}>
                <Grid container item xs={4} alignContent={"center"} spacing={1}>
                    <Grid item>
                        <a href={"https://www.sorbonne-universite.fr/"} target={"_blank"}>
                            <img
                                alt={"universite paris-sorbonne"}
                                src={LogoSorbonne}
                                className={classes.logo}
                            />
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={"#"} target={"_blank"}>
                            <img
                                alt={"logoInvestissementAvenir"}
                                src={LogoInvestissement}
                                className={classes.logo}
                            />
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={"http://www.labex-resmed.fr/?lang=fr"} target={"_blank"}>
                            <img
                                alt={"logoResmed"}
                                src={LogoResmed}
                                className={classes.logo}
                            />
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={"https://www.orient-mediterranee.com/?lang=fr"} target={"_blank"}>
                            <img
                                alt={"logoUMR"}
                                src={LogoUMR}
                                className={classes.logo}
                            />
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={"https://www.huma-num.fr/"} target={"_blank"}>
                            <img
                                alt={"logoHumaNum"}
                                src={LogoHumaNum}
                                className={classes.logo}
                            />
                        </a>
                    </Grid>
                </Grid>
                <Grid xs={6} item>
                    <Typography variant={"h1"}>
                        {pageTitle}
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
                            <Link to={"/"} className={classes.marginRight}>
                                <i className={"fa fa-map-marked-alt " + classes.icon}/>
                            </Link>
                            <Link to={"/list"} className={classes.marginRight}>
                                <i className={"fa fa-list-ul " + classes.icon}/>
                            </Link>
                            <Link to={"/information"}>
                                <i className={"fa fa-info-circle " + classes.icon}/>
                            </Link>
                        </Grid>
                        <Grid item>
                            <LanguagePicker/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
