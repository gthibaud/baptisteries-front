import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Paper } from "@material-ui/core";
import l from "../constants/locales";
import { GlobalContext } from "../contexts/GlobalContext";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";
import Carousel, { Modal, ModalGateway } from "react-images";

const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: theme.spacing(0.6),
        padding: 42
    },
    line: {
        margin: theme.spacing(3, 0)
    },
    title: {
        marginBottom: theme.spacing(3)
    }
}));

const Baptistery = ({ onClose, open, currentBaptistere }) => {
    const { language } = useContext(GlobalContext);
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false);

    const toggleLightbox = (index) => {
        setLightBoxIsOpen(!lightBoxIsOpen);
        setSelectedIndex(index);
    }

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={handleClose}
        >
            <Paper elevation={0} className={classes.card}>
                <Typography variant={"h1"} className={classes.title}>{currentBaptistere.name}</Typography>

                {currentBaptistere.buildingCategory && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryBuildingCategory", language)} : ${currentBaptistere.buildingCategory
                            }`}
                    </Typography>
                )}

                {currentBaptistere.settlementContext && (
                    <Typography variant="body1">
                        {`${l("labelBaptisterySettlementContext", language)} : ${currentBaptistere.settlementContext
                            }`}
                    </Typography>
                )}

                <hr className={classes.line} />
                <Typography variant={"h4"}>{l("labelBaptisteryGeography", language)}</Typography>

                {currentBaptistere.region && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryRegion", language)} : ${currentBaptistere.region
                            }`}
                    </Typography>
                )}

                {currentBaptistere.civilDiocese && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryDioceseCivil", language)} : ${currentBaptistere.civilDiocese
                            }`}
                    </Typography>
                )}

                {currentBaptistere.patriarchy && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryPatriarchy", language)} : ${currentBaptistere.patriarchy
                            }`}
                    </Typography>
                )}

                {currentBaptistere.province && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryProvince", language)} : ${currentBaptistere.province
                            }`}
                    </Typography>
                )}

                {currentBaptistere.ecclesiasticalDiocese && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryDiocese", language)} : ${currentBaptistere.ecclesiasticalDiocese
                            }`}
                    </Typography>
                )}

                {currentBaptistere.latitude &&
                    currentBaptistere.longitude &&
                    currentBaptistere.coordinatesAccuracy !== undefined && (
                        <Typography variant="body1">
                            {`${l("labelBaptisteryCoordinates", language)} : Lat. ${currentBaptistere.latitude
                                } - Lon. ${currentBaptistere.longitude}`}
                        </Typography>
                    )}

                {currentBaptistere.coordinatesAccuracy !== undefined && (
                    <Typography variant="body1">
                        {`${l("labelLegendAccurency", language)} : 
                        ${l(`labelBaptisteryAccuracy${currentBaptistere.coordinatesAccuracy}`, language)}`}
                    </Typography>
                )}

                {currentBaptistere.recordReliability && (
                    <Typography variant="body1">
                        {`${l("labelReliability", language)} : ${currentBaptistere.recordReliability
                            }/3`}
                    </Typography>
                )}
                <hr className={classes.line} />
                <Typography variant={"h4"}>{l("labelLegendChronology", language)}</Typography>

                {currentBaptistere.startingYear && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryStartingYear", language)} : ${currentBaptistere.startingYear
                            }`}
                    </Typography>
                )}

                {currentBaptistere.finalYear && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryFinalYear", language)} : ${currentBaptistere.finalYear
                            }`}
                    </Typography>
                )}

             {   console.log("datation crrr", currentBaptistere.datingCriteria)}

                {currentBaptistere.datingCriteria && currentBaptistere.datingCriteria.length > 0 && currentBaptistere.datingCriteria[0] && (
                    <Typography variant="body1">
                        {`${l("labelDatationCriteria", language)} : ${currentBaptistere.datingCriteria.join(", ") + '.'
                            }`}
                    </Typography>
                )}

                {currentBaptistere.exclusivelyFromHistoricalSources && (
                    <>
                        <hr className={classes.line} />
                        <Typography variant={"h4"}>{l("labelLegendSource", language)}</Typography>
                        <Typography variant="body1">
                            {l("labelBaptisteryOnlyHistoricalSources", language)}.
                        </Typography>
                    </>)}
                <hr className={classes.line} />
                <Typography variant={"h4"}>{l("labelBaptisteryTechnicalSpecifications", language)}</Typography>

                {currentBaptistere.descriptionOfMainFontDimensions && (
                    <Typography variant="body1">
                        {`${l(
                            "labelBaptisteryDescriptionOfMainFontDimensions",
                            language
                        )} : ${currentBaptistere.descriptionOfMainFontDimensions}`}
                    </Typography>
                )}

                {currentBaptistere.maximumDepth !== "" && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryMaximumDepth", language)} : ${currentBaptistere.maximumDepth
                            } m`}
                    </Typography>
                )}

                {currentBaptistere.maximumPreservedDepth !== "" && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryMaximumPreservedDepth", language)} : ${currentBaptistere.maximumPreservedDepth
                            } m`}
                    </Typography>
                )}

                {currentBaptistere.numberOfAdditionalBasins !== undefined && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryNumberBasins", language)} : ${currentBaptistere.numberOfAdditionalBasins
                            }`}
                    </Typography>
                )}

                {currentBaptistere.adjoiningRoomsDescription && (
                    <Typography variant="body1">
                        {`${l("labelBaptisteryAdjoiningRoomsDescription", language)} : ${currentBaptistere.adjoiningRoomsDescription
                            }`}
                    </Typography>
                )}

                {currentBaptistere.bibliography && (
                    <>
                        <hr className={classes.line} />
                        <Typography variant={"h4"}>{l("labelBaptisteryBibliography", language)}</Typography>
                        <Typography variant="body1">
                            <ReactMarkdown linkTarget="_blank" source={currentBaptistere.bibliography} />
                        </Typography>
                    </>)}

                <hr className={classes.line} />
                <Typography variant={"h4"}>{l("labelBaptisteryPlans", language)}</Typography>
                {currentBaptistere.imageURLs && currentBaptistere.imageURLs.length > 0 ? (
                    <>
                        <Typography variant="body1">{l("labelClickToEnlarge", language)}</Typography>
                        <div className='gallery-grid'>
                            {currentBaptistere.imageURLs.map(j => (<>
                                <img
                                    onClick={() => toggleLightbox(j.index)}
                                    key={j.index}
                                    alt={j.caption}
                                    src={j.source}
                                    className='gallery-image'
                                />
                            </>
                            ))}
                        </div>
                        <ModalGateway>
                            {lightBoxIsOpen ? (
                                <Modal onClose={toggleLightbox}>
                                    <Carousel
                                        currentIndex={selectedIndex}
                                        views={currentBaptistere.imageURLs}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </>)
                    : <Typography variant="body1">{`${l("labelBaptisteryNotAvailable", language)}`}</Typography>}
            </Paper>
        </Dialog>
    );
};

export default Baptistery;