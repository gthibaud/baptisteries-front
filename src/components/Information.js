import React, {useContext} from "react";
import PageLayout from "./PageLayout";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import l from "../constants/locales";
import { GlobalContext } from "../contexts/GlobalContext";

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
        fontSize: "18px",
        lineHeight: "23px",
        marginBottom:"16px",
        textAlign: "justify"
    },
    title2: {
        color: "black",
        marginTop: "24px",
        marginBottom: "24px",
        fontWeight: "700",
        fontSize: "20px"
    },
    li: {
        fontSize: "18px",
        fontWeight: "500",
        marginBottom: "4px"
    },
    h1: {
        marginBottom: "24px"
    }
}));

export default function Information() {
    const classes = useStyles();
    const { language } = useContext(GlobalContext);

    return (
        <PageLayout pageType={"Info"}>
            <Container maxWidth={"xl"} className={classes.root}>
                <Card className={classes.container}>
                    <h1 className={classes.h1}>{l("infosTitle", language)}</h1>
                    <p className={classes.body}>{l("infosP1", language)}</p>
                    <p className={classes.body}>{l("infosP2", language)}</p>
                    <p className={classes.body}>{l("infosP3", language)}</p>
                    <h2 className={classes.title2}>{l("infosTitle2", language)}</h2>
                    <p className={classes.body}>{l("infosP4", language)}</p>
                    <ul>
                        <li className={classes.li}>{l("infosL1", language)}</li>
                        <li className={classes.li}>{l("infosL2", language)}</li>
                        <li className={classes.li}>{l("infosL3", language)}</li>
                        <li className={classes.li}>{l("infosL4", language)}</li>
                        <li className={classes.li}>{l("infosL5", language)}</li>
                        <li className={classes.li}>{l("infosL6", language)}</li>
                        <li className={classes.li}>{l("infosL7", language)}</li>
                        <li className={classes.li}>{l("infosL8", language)}</li>
                        <li className={classes.li}>{l("infosL9", language)}</li>
                        <li className={classes.li}>{l("infosL10", language)}</li>
                    </ul>
                    <p className={classes.body}>{l("infosP5", language)}</p>
                    <p className={classes.body}>{l("infosP6", language)}</p>
                    <p className={classes.body}>{l("infosP7", language)}</p>
                    <ul>
                        <li className={classes.li}>{l("infosL11", language)}</li>
                        <li className={classes.li}>{l("infosL12", language)}</li>
                        <li className={classes.li}>{l("infosL13", language)}</li>
                        <li className={classes.li}>{l("infosL14", language)}</li>
                        <li className={classes.li}>{l("infosL15", language)}</li>
                        <li className={classes.li}>{l("infosL16", language)}</li>
                        <li className={classes.li}>{l("infosL17", language)}</li>
                        <li className={classes.li}>{l("infosL18", language)}</li>
                        <li className={classes.li}>{l("infosL19", language)}</li>
                        <li className={classes.li}>{l("infosL20", language)}</li>
                        <li className={classes.li}>{l("infosL21", language)}</li>
                        <li className={classes.li}>{l("infosL22", language)}</li>
                    </ul>
                    <p className={classes.body}>{l("infosP8", language)}</p>
                    <h2 className={classes.title2}>{l("infosTitle3", language)}</h2>
                    <p className={classes.body}>{l("infosP9", language)}</p>
                    <p className={classes.body}>{l("infosP10", language)}</p>
                </Card>
            </Container>
        </PageLayout>
    );
}
