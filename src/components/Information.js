import React, {useContext} from "react";
import PageLayout from "./PageLayout";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Card} from "@material-ui/core";
import l from "../constants/locales";
import {GlobalContext} from "../contexts/GlobalContext";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    container: {
        maxWidth: "700px",
        padding: "42px 74px",
        marginLeft: "auto",
        marginRight: "auto",
    },
    body: {
        lineHeight: "20px",
        marginBottom: "16px",
        textAlign: "justify"
    },
    footNote: {
        fontSize: "0.7rem",
        lineHeight: "20px",
        marginBottom: "16px",
        textAlign: "justify"
    },
    title2: {
        color: "black",
        marginTop: "24px",
        marginBottom: "24px",
        fontWeight: "700",
        fontSize: "20px"
    },
    h1: {
        fontWeight: "bold",
        marginBottom: "24px"
    },
    line: {
        margin: theme.spacing(4,0)
    }
}));

export default function Information() {
    const classes = useStyles();
    const {language} = useContext(GlobalContext);

    return (
        <PageLayout pageType={"Info"}>
            <Container maxWidth={"xl"} className={classes.root}>
                <Card className={classes.container}>
                    <Typography variant={"h1"} className={classes.h1}>{l("infosTitle", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP1", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP2", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP3", language)}</Typography>
                    <Typography variant={"h2"} className={classes.title2}>{l("infosTitle2", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP4", language)}</Typography>
                    <ul>
                        <li><Typography variant={"body1"}>{l("infosL1", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL2", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL3", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL4", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL5", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL6", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL7", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL8", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL9", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL10", language)}</Typography>
                        </li>
                    </ul>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP5", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP6", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP7", language)}</Typography>
                    <ul>
                        <li><Typography variant={"body1"}>{l("infosL11", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL12", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL13", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL14", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL15", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL16", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL17", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL18", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL19", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL20", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL21", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL22", language)}</Typography>
                        </li>
                    </ul>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP8", language)}</Typography>
                    <Typography variant={"h2"} className={classes.title2}>{l("infosTitle3", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP9", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP10", language)}</Typography>
                    <hr className={classes.line}/>
                    <Typography variant={"body1"} className={classes.footNote}>{l("footNote1", language)}</Typography>
                    <Typography variant={"body1"} className={classes.footNote}>{l("footNote2", language)}</Typography>
                    <Typography variant={"body1"} className={classes.footNote}>{l("footNote3", language)}</Typography>
                </Card>
            </Container>
        </PageLayout>
    );
}
