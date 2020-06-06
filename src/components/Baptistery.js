import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BaptistereContext } from "../contexts/BaptistereContext";
import { Dialog, Paper } from "@material-ui/core";
import l from "../constants/locales";
import { GlobalContext } from "../contexts/GlobalContext";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: theme.spacing(0.6),
    padding: 42,
  },
}));

const Baptistery = (props) => {
  const { language } = useContext(GlobalContext);
  const { currentBaptistere } = useContext(BaptistereContext);
  const classes = useStyles();

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const capitalize = (str) => {
    str = str || "  ";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  console.log(currentBaptistere);

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      onClose={handleClose}
    >
      <Paper elevation={0} className={classes.card}>
        <h1>{currentBaptistere.name}</h1>
        {currentBaptistere.startingYear &&
          currentBaptistere.finalYear &&
          currentBaptistere.ecclesiasticalDiocese && (
            <h2>{`${
              currentBaptistere.buildingCategory
                ? `${capitalize(currentBaptistere.buildingCategory)},`
                : ""
            } ${currentBaptistere.startingYear}-${
              currentBaptistere.finalYear
            }, ${currentBaptistere.ecclesiasticalDiocese}.`}</h2>
          )}

        <h4>{l("labelBaptisteryGeography", language)}</h4>

        {currentBaptistere.latitude &&
          currentBaptistere.longitude &&
          currentBaptistere.coordinatesAccuracy !== undefined && (
            <p>
              {`${l("labelBaptisteryCoordinates", language)} : Lat. ${
                currentBaptistere.latitude
              } - Lon. ${currentBaptistere.longitude} (${l(
                `labelBaptisteryAccuracy${currentBaptistere.coordinatesAccuracy}`,
                language
              )}).`}
            </p>
          )}

        {currentBaptistere.region && (
          <p>
            {`${l("labelBaptisteryRegion", language)} : ${
              currentBaptistere.region
            }`}
          </p>
        )}

        {currentBaptistere.province && (
          <p>
            {`${l("labelBaptisteryProvince", language)} : ${
              currentBaptistere.province
            }`}
          </p>
        )}

        {currentBaptistere.civilDiocese && (
          <p>
            {`${l("labelBaptisteryDioceseCivil", language)} : ${
              currentBaptistere.civilDiocese
            }`}
          </p>
        )}

        {currentBaptistere.ecclesiasticalDiocese && (
          <p>
            {`${l("labelBaptisteryDiocese", language)} : ${
              currentBaptistere.ecclesiasticalDiocese
            }`}
          </p>
        )}

        {currentBaptistere.patriarchy && (
          <p>
            {`${l("labelBaptisteryPatriarchy", language)} : ${
              currentBaptistere.patriarchy
            }`}
          </p>
        )}

        <h4>{l("labelBaptisteryTechnicalSpecifications", language)}</h4>

        {currentBaptistere.numberOfAdditionalBasins !== undefined && (
          <p>
            {`${l("labelBaptisteryNumberBasins", language)} : ${
              currentBaptistere.numberOfAdditionalBasins
            }`}
          </p>
        )}

        {currentBaptistere.maximumDepth && (
          <p>
            {`${l("labelBaptisteryMaximumDepth", language)} : ${
              currentBaptistere.maximumDepth
            }`}
          </p>
        )}

        {currentBaptistere.maximumPreservedDepth && (
          <p>
            {`${l("labelBaptisterymaximumPreservedDepth", language)} : ${
              currentBaptistere.maximumPreservedDepth
            }`}
          </p>
        )}

        {currentBaptistere.descriptionOfMainFontDimensions && (
          <p>
            {`${l(
              "labelBaptisterydescriptionOfMainFontDimensions",
              language
            )} : ${currentBaptistere.descriptionOfMainFontDimensions}`}
          </p>
        )}

        {currentBaptistere.adjoiningRoomsDescription && (
          <p>
            {`${l("labelBaptisteryAdjoiningRoomsDescription", language)} : ${
              currentBaptistere.adjoiningRoomsDescription
            }`}
          </p>
        )}

        {currentBaptistere.exclusivelyFromHistoricalSources &&
          l("labelBaptisteryOnlyHistoricalSources", language)}

        <h4>{l("labelBaptisteryPlans", language)}</h4>
        <p>{`${l("labelBaptisteryNotAvailable", language)}`}</p>
      </Paper>
    </Dialog>
  );
};

export default Baptistery;
