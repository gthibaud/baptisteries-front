import React, { useContext, useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../contexts/GlobalContext";
import "react-virtualized/styles.css";
import { AutoSizer, Column, Table } from "react-virtualized";
import { Paper, Typography } from "@material-ui/core";
import Baptistery from "./Baptistery";
import FiltresContainer from "./FiltresContainer";
import { FilterContext } from "../contexts/FilterContext";
import l from "../constants/locales";

const useStyles = makeStyles((theme) => ({
  body: {
    width: "100%",
    minHeight: "70vh",
  },
  bodyNoResult: {
    padding: theme.spacing(3),
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
    "&:hover": {
      cursor: "pointer",
    },
    "&.ReactVirtualized__Table__headerRow": {
      backgroundColor: "#f3f3f3",
      borderBottom: "none",
      "&:hover": {
        cursor: "auto",
      },
    },
  },
}));

function stateReducer(state, action) {
  return { ...state, ...action };
}

export default function ListContainer() {
  const classes = useStyles();
  const { baptisteriesFiltered } = useContext(FilterContext);
  const { language } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ baptisteries: [...baptisteriesFiltered] });
  }, [baptisteriesFiltered]);

  const [state, dispatch] = useReducer(stateReducer, {
    open: false,
    currentBaptistere: {},
    baptisteries: [...baptisteriesFiltered],
    currentSortBy: "name",
    currentSortDirection: undefined,
  });

  const handleClickOpen = (selectedBaptistere) => {
    dispatch({ open: true, currentBaptistere: selectedBaptistere });
  };

  const handleClose = () => {
    dispatch({ open: false, currentBaptistere: {} });
  };

  const nbBaptisteries = state.baptisteries ? state.baptisteries.length : 0;

  if (nbBaptisteries === 0)
    return (
      <>
        <FiltresContainer nbResults={baptisteriesFiltered.length} />
        <Paper className={classes.bodyNoResult}>
          <Typography variant={"body1"}>
            {l("labelNoResult", language)}
          </Typography>
        </Paper>
      </>
    );

  const getData = ({ index }) => state.baptisteries[index];

  const sort = ({ sortBy, sortDirection }) => {
    let sortedBaptisteries = state.baptisteries.sort((bapt1, bapt2) =>
      bapt1[sortBy] > bapt2[sortBy] ? 1 : bapt2[sortBy] > bapt1[sortBy] ? -1 : 0
    );

    if (sortDirection === "DESC") {
      sortedBaptisteries = sortedBaptisteries.reverse();
    }

    dispatch({
      baptisteries: sortedBaptisteries,
      currentSortBy: sortBy,
      currentSortDirection: sortDirection,
    });
  };

  return (
    <>
      <FiltresContainer nbResults={baptisteriesFiltered.length} />
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
              sort={sort}
              sortBy={state.currentSortBy}
              sortDirection={state.currentSortDirection}
              headerClassName={classes.header}
              rowClassName={classes.row}
              onRowClick={(row) => handleClickOpen(row.rowData)}
            >
              <Column
                className={classes.cell}
                label={l("labelBaptisteryName", language)}
                dataKey={"name"}
                headerClassName={classes.column}
              />
              <Column
                className={classes.cell}
                label={l("labelBaptisteryRegion", language)}
                dataKey={"region"}
                headerClassName={classes.column}
              />
              <Column
                className={classes.cell}
                label={l("labelBaptisteryProvince", language)}
                dataKey={"province"}
                headerClassName={classes.column}
              />
              <Column
                className={classes.cell}
                label={l("labelBaptisteryDiocese", language)}
                dataKey={"ecclesiasticalDiocese"}
                headerClassName={classes.column}
              />
              <Column
                className={classes.cell}
                label={l("labelBaptisteryPatriarchy", language)}
                dataKey={"patriarchy"}
                headerClassName={classes.column}
              />
              <Column
                className={classes.cell}
                label={l("labelBaptisterySettlementContext", language)}
                dataKey={"settlementContext"}
                headerClassName={classes.column}
              />
              <Column
                className={classes.cell}
                label={l("labelBaptisteryStartingYear", language)}
                dataKey={"startingYear"}
                headerClassName={classes.column}
              />

              <Column
                className={classes.cell}
                label={l("labelBaptisteryFinalYear", language)}
                dataKey={"finalYear"}
                headerClassName={classes.column}
              />
            </Table>
          )}
        </AutoSizer>
        <Baptistery
          open={state.open}
          onClose={handleClose}
          currentBaptistere={state.currentBaptistere}
        />
      </Paper>
    </>
  );
}
