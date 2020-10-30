import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import frenchFlag from "../assets/fr.png";
import italianFlag from "../assets/it.png";
import greatBritainFlag from "../assets/gb.png";
import { makeStyles } from "@material-ui/core/styles";
import { Popper } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: 1001,
  },
  popperContent: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    boxShadow: "0px 8px 8px RGBa(0, 0, 0, 0.25)",
  },
  clickable: {
    cursor: "pointer",
  },
  img: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    cursor: "pointer",
  },
}));

const getLanguageImage = (language) => {
  switch (language) {
    case "it":
      return italianFlag;
    case "en":
      return greatBritainFlag;
    case "fr":
      return frenchFlag;
    default:
      return italianFlag;
  }
};

export default function LanguagePicker() {
  const { language, setLanguage } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const countryCodes = ["it", "en", "fr"];

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLanguageChange = (country) => {
    setLanguage(country);
    handleClose();
  };

  const countriesList = countryCodes.map((country) => {
    if (country !== language) {
      return (
        <div key={country + Math.random().toString(36).substring(7)} onClick={() => onLanguageChange(country)}>
          <img
            className={classes.img}
            alt={`${country}Flag`}
            src={getLanguageImage(country)}
          />
        </div>
      );
    }
    return <></>;
  });

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      <div className={classes.clickable} onClick={handleClick}>
        <img
          className={classes.img}
          alt={`${language}Flag`}
          src={getLanguageImage(language)}
        />
        <ExpandMoreIcon />
      </div>
      <Popper
        className={classes.popper}
        id={id}
        open={open}
        anchorEl={anchorEl}
      >
        <div className={classes.popperContent}>{countriesList}</div>
      </Popper>
    </React.Fragment>
  );
}
