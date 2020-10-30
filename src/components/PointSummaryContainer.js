import React, { useContext } from "react";
import { BaptistereContext } from "../contexts/BaptistereContext";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import l from "../constants/locales";
import { GlobalContext } from "../contexts/GlobalContext";
import Baptistery from "./Baptistery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "white",
    borderRadius: theme.spacing(0.6),
    width: "300px",
    boxShadow: "0px 0px 8px RGBa(0, 0, 0, 0.25)",
    maxWidth: "100%",
    maxHeight: "85vh",
    overflow: "auto",
    marginBottom: "12px"
  },
  menuBox: {
    margin: "32px",
  },
  list: {
    top: "58px",
    zIndex: "1000",
    position: "absolute",
    padding: "16px",
    overflow: "auto",
    height: "calc(100vh - 194px)"
  },
  baptistere: {
    "& p": {
      marginTop: 0,
      marginBottom: "4px",
    },
  },
  smallNote: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#a3a3a3",
    marginBottom: 0,
  },
  button: {
    marginTop: 24,
    width: "100%",
    height: 42,
    textTransform: "none",
    fontSize: 17,
  },
}));

const PointSummaryContainer = () => {
  const { language } = useContext(GlobalContext);
  const { currentBaptisteres } = useContext(BaptistereContext);
  const classes = useStyles();

  const [openBaptistery, setOpen] = React.useState({ open: false, baptistery: "" });

  const handleClickOpen = (baptistereId) => {
    setOpen({ open: true, baptistery: baptistereId });
  };

  const handleClose = () => {
    setOpen({ open: false, baptistery: "" });
  };

  return currentBaptisteres.length > 0 ? (
    <div className={classes.list}>
      {currentBaptisteres.map(currentBaptistere => {
        return (<div className={classes.menu}>
          <div className={classes.menuBox}>
            <div className={classes.baptistere}>
              <Typography variant={"h3"}>{currentBaptistere.name}</Typography>
              <Typography variant={"h4"}>{l("labelBaptisteryPreview", language)}</Typography>
              <Typography variant={"body1"}>{`${l("labelBaptisteryDates", language)} : ${currentBaptistere.startingYear
                } - ${currentBaptistere.finalYear}`}</Typography>
              <Typography variant={"body1"}>{`${l("labelBaptisteryProvince", language)} : ${currentBaptistere.province
                }`}</Typography>
              <Typography variant={"body1"}>{`${l("labelBaptisteryDiocese", language)} : ${currentBaptistere.ecclesiasticalDiocese
                }`}</Typography>
              <Button
                variant="contained"
                disableElevation
                className={classes.button}
                onClick={() => handleClickOpen(currentBaptistere)}
              >
                {l("buttonMoreInformation", language)}
              </Button>
              <Baptistery
                open={openBaptistery.open}
                onClose={handleClose}
                currentBaptistere={openBaptistery.baptistery}
              />
            </div>
          </div>
        </div>)
      })}
    </div>
  ) : null;
};

export default PointSummaryContainer;