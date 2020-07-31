import React, {useContext} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {GlobalContext} from "../contexts/GlobalContext";
import l from "../constants/locales";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
});

export default function PageLayout({children, pageType}) {
    const classes = useStyles();
    const {language} = useContext(GlobalContext);

    const label = l(`label${pageType}Page`, language);

    return (
        <Box className={classes.root}>
            <Header pageTitle={label}/>
            {children}
            <Footer/>
        </Box>
    );
}
