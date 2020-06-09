import React, { useContext } from "react";
import { BaptistereContext } from "../contexts/BaptistereContext";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import l from "../constants/locales";
import { GlobalContext } from "../contexts/GlobalContext";
import Baptistery from "./Baptistery";

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "white",
    borderRadius: theme.spacing(0.6),
    position: "absolute",
    width: "300px",
    top: theme.spacing(9.3),
    left: theme.spacing(2),
    zIndex: "1000",
    boxShadow: "0px 0px 8px RGBa(0, 0, 0, 0.25)",
    maxWidth: "100%",
    maxHeight: "85vh",
    overflow: "auto",
  },
  menuBox: {
    margin: "32px",
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
  const { currentBaptistere } = useContext(BaptistereContext);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return currentBaptistere.id ? (
    <div className={classes.menu}>
      <div className={classes.menuBox}>
        <div className={classes.baptistere}>
          <h3>{currentBaptistere.name}</h3>
          <h4>{l("labelBaptisteryPreview", language)}</h4>
          <p>{`${l("labelBaptisteryDates", language)} : ${
            currentBaptistere.startingYear
          } - ${currentBaptistere.finalYear}`}</p>
          <p>{`${l("labelBaptisteryProvince", language)} : ${
            currentBaptistere.province
          }`}</p>
          <p>{`${l("labelBaptisteryDiocese", language)} : ${
            currentBaptistere.ecclesiasticalDiocese
          }`}</p>
          <Button
            variant="contained"
            disableElevation
            className={classes.button}
            onClick={handleClickOpen}
          >
            {l("buttonMoreInformation", "fr")}
          </Button>
          <Baptistery
            open={open}
            onClose={handleClose}
            currentBaptistere={currentBaptistere}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default PointSummaryContainer;
