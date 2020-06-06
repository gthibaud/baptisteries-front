import React, { useContext } from "react";
import { BaptistereContext } from "../contexts/BaptistereContext";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../contexts/GlobalContext";
import { locales } from "../constants/locales";
import "react-virtualized/styles.css";

import { AutoSizer, Column, Table } from "react-virtualized";

const useStyles = makeStyles({
  body: {
    width: "100%",
    height: "82vh",
  },
  row: {
    display: "flex",
  },
  cell: {
    display: "flex",
    flex: 1,
  },
  headerLabel: {
    fontWeight: 600,
  },
});

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
    <div className={classes.body}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            headerHeight={45}
            rowCount={nbBaptisteries}
            rowHeight={45}
            rowGetter={getData}
          >
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryName[language]}
              dataKey={"name"}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryRegion[language]}
              dataKey={"region"}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryDioceseCivil[language]}
              dataKey={"civilDiocese"}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryStartingYear[language]}
              dataKey={"startingYear"}
            />
            <Column
              className={classes.cell}
              label={locales.labelBaptisteryFinalYear[language]}
              dataKey={"finalYear"}
            />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
}
