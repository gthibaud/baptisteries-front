import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});

export default function PageLayout({ children, isOnCardView }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header isOnCardView={isOnCardView} />
      {children}
      <Footer />
    </Box>
  );
}
