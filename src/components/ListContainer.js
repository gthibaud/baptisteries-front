import React, { useContext } from "react";
import { BaptistereContext } from "../contexts/BaptistereContext";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../contexts/GlobalContext";
import { locales } from "../constants/locales";
import "react-virtualized/styles.css";

import { AutoSizer, Column, Table } from "react-virtualized";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    width: "100%",
    height: "82vh",
  },
  cell: {
    display: "flex",
    flex: 1,
  },
  header: {
    width: "100%",
  },
  column: {
    textTransform: "none",
  },
  row: {
    padding: theme.spacing(0, 1),
    borderBottom: "solid 1px",
    borderBottomColor: "#90a4ae",
    "&.ReactVirtualized__Table__headerRow": {
      backgroundColor: "#f3f3f3",
      borderBottom: "none",
    },
  },
}));

export default function ListContainer() {
  const classes = useStyles();

  const { baptisteriesList } = useContext(BaptistereContext);
  const { language } = useContext(GlobalContext);
  const nbBaptisteries = baptisteriesList ? baptisteriesList.length : 0;

  if (nbBaptisteries === 0) return <></>;

  const getData = ({ index }) => baptisteriesList[index];

  return (
    <Paper className={classes.body}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            headerHeight={60}
            rowCount={nbBaptisteries}
            rowHeight={60}
            rowGetter={getData}
            headerClassName={classes.header}
            rowClassName={classes.row}
          >
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryName[language]}
              dataKey={"name"}
              headerClassName={classes.column}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryRegion[language]}
              dataKey={"region"}
              headerClassName={classes.column}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryProvince[language]}
              dataKey={"province"}
              headerClassName={classes.column}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryDiocese[language]}
              dataKey={"ecclesiasticalDiocese"}
              headerClassName={classes.column}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryPatriarchy[language]}
              dataKey={"patriarchy"}
              headerClassName={classes.column}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisterySettlementContext[language]}
              dataKey={"settlementContext"}
              headerClassName={classes.column}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryStartingYear[language]}
              dataKey={"startingYear"}
              headerClassName={classes.column}
            />

            <Column
              className={classes.cell}
              label={locales.labelBaptisteryFinalYear[language]}
              dataKey={"finalYear"}
              headerClassName={classes.column}
            />
          </Table>
        )}
      </AutoSizer>
    </Paper>
  );
}
