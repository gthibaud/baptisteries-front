import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Paper } from "@material-ui/core";
import l from "../constants/locales";
import { GlobalContext } from "../contexts/GlobalContext";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: theme.spacing(0.6),
    padding: 42,
  },
}));

const Baptistery = ({ onClose, open, currentBaptistere }) => {
  const { language } = useContext(GlobalContext);
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  const capitalize = (str) => {
    str = str || "  ";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

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

        {currentBaptistere.region && (
          <p>
            {`${l("labelBaptisteryRegion", language)} : ${
              currentBaptistere.region
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

        {currentBaptistere.patriarchy && (
          <p>
            {`${l("labelBaptisteryPatriarchy", language)} : ${
              currentBaptistere.patriarchy
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

        {currentBaptistere.ecclesiasticalDiocese && (
          <p>
            {`${l("labelBaptisteryDiocese", language)} : ${
              currentBaptistere.ecclesiasticalDiocese
              }`}
          </p>
        )}

        {currentBaptistere.latitude &&
          currentBaptistere.longitude &&
          currentBaptistere.coordinatesAccuracy !== undefined && (
            <p>
              {`${l("labelBaptisteryCoordinates", language)} : Lat. ${
                currentBaptistere.latitude
                } - Lon. ${currentBaptistere.longitude} (${l(
                  `labelBaptisteryAccuracy${currentBaptistere.coordinatesAccuracy}`,
                  language
                )})`}
            </p>
          )}

        {currentBaptistere.recordReliability && (
          <p>
            {`${l("labelReliability", language)} : ${
              currentBaptistere.recordReliability
              }/3`}
          </p>
        )}

        {console.log(currentBaptistere)}

        <h4>{l("labelLegendChronology", language)}</h4>

        {currentBaptistere.startingYear && (
          <p>
            {`${l("labelBaptisteryStartingYear", language)} : ${
              currentBaptistere.startingYear
              }`}
          </p>
        )}

        {currentBaptistere.finalYear && (
          <p>
            {`${l("labelBaptisteryFinalYear", language)} : ${
              currentBaptistere.finalYear
              }`}
          </p>
        )}

        {/* TODO */}
        {currentBaptistere.datingCriteriaIds && currentBaptistere.datingCriteriaIds.size > 0 && (
          <p>
            {`${l("labelDatationCriteria", language)} : ${
              currentBaptistere.datingCriteriaIds
              }`}
          </p>
        )}

        {currentBaptistere.buildingCategory && (
          <p>
            {`${l("labelBaptisteryBuildingCategory", language)} : ${
              currentBaptistere.buildingCategory
              }`}
          </p>
        )}

        {currentBaptistere.settlementContext && (
          <p>
            {`${l("labelBaptisterySettlementContext", language)} : ${
              currentBaptistere.settlementContext
              }`}
          </p>
        )}

        {currentBaptistere.exclusivelyFromHistoricalSources && (
          <>
            <h4>{l("labelLegendSource", language)}</h4>
            <p>
              {l("labelBaptisteryOnlyHistoricalSources", language)}.
          </p>
          </>)}

        <h4>{l("labelBaptisteryTechnicalSpecifications", language)}</h4>

        {currentBaptistere.descriptionOfMainFontDimensions && (
          <p>
            {`${l(
              "labelBaptisterydescriptionOfMainFontDimensions",
              language
            )} : ${currentBaptistere.descriptionOfMainFontDimensions}`}
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
            {`${l("labelBaptisteryMaximumPreservedDepth", language)} : ${
              currentBaptistere.maximumPreservedDepth
              }`}
          </p>
        )}

        {currentBaptistere.numberOfAdditionalBasins !== undefined && (
          <p>
            {`${l("labelBaptisteryNumberBasins", language)} : ${
              currentBaptistere.numberOfAdditionalBasins
              }`}
          </p>
        )}

        {currentBaptistere.adjoiningRoomsDescription && (
          <p>
            {`${l("labelBaptisteryAdjoiningRoomsDescription", language)} : ${
              currentBaptistere.adjoiningRoomsDescription
              }`}
          </p>
        )}

        {/* {TODO bibliographie} */}

        <h4>{l("labelBaptisteryPlans", language)}</h4>
        <p>{`${l("labelBaptisteryNotAvailable", language)}`}</p>
      </Paper>
    </Dialog>
  );
};

export default Baptistery;
