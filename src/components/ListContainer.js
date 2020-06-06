import React, { useContext } from "react";
import { BaptistereContext } from "../contexts/BaptistereContext";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../contexts/GlobalContext";
import { locales } from "../constants/locales";
import "react-virtualized/styles.css";

import { AutoSizer, Column, Table } from "react-virtualized";
import Paper from "@material-ui/core/Paper";

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
    padding: theme.spacing(2),
    width: "100%",
  },
  column: {
    textTransform: "none",
  },
  row: {
    borderBottom: "solid black 1px",
  },
}));

export default function ListContainer() {
  const classes = useStyles();

  const { baptisteriesList } = useContext(BaptistereContext);
  const { language } = useContext(GlobalContext);
  const nbBaptisteries = baptisteriesList ? baptisteriesList.length : 0;

  if (nbBaptisteries === 0) return <></>;

  const baptisteriesInfo = baptisteriesList.map((baptistere) => {
    return {
      name: baptistere.name,
      region: baptistere.region,
      civilDiocese: baptistere.civilDiocese,
      startingYear: baptistere.startingYear,
      finalYear: baptistere.finalYear,
    };
  });

  const getData = ({ index }) => baptisteriesInfo[index];

  return (
    <Paper className={classes.body}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            headerHeight={80}
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
              label={locales.labelBaptisteryDioceseCivil[language]}
              dataKey={"civilDiocese"}
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
