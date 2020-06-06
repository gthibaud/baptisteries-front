import React from "react";
import PageLayout from "./PageLayout";
import ListContainer from "./ListContainer";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export default function ListPage() {
  const classes = useStyles();

  return (
    <PageLayout isOnCardView={false}>
      <Container className={classes.root}>
        <ListContainer />
      </Container>
    </PageLayout>
  );
}
