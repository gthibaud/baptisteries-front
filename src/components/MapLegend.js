import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import l from "../constants/locales";
import {GlobalContext} from "../contexts/GlobalContext";
import Diamond from "../images/Diamond";
import Circle from "../images/Circle";
import Rectangle from "../images/Rectangle";
import Dot from "../images/Dot";
import Halo from "../images/Halo";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    legendTitle: {
        fontWeight: 800
    },
    legend: {
        backgroundColor: "white",
        borderRadius: theme.spacing(0.6),
        position: "absolute",
        width: "260px",
        top: "65px",
        right: theme.spacing(1.2),
        zIndex: "1000",
        boxShadow: "0px 0px 8px RGBa(0, 0, 0, 0.25)",
        maxWidth: "100%",
        overflow: "auto",
        padding: 32,
        maxHeight: "calc(100% - 250px)"
    },
    legendItem: {
        display: "flex",
        justifyContent: "space-between",
    },
    colorRed: {
        width: 50,
        height: 20,
        backgroundColor: "#FF3A2F",
        marginBottom: "auto",
        marginTop: "auto",
    },
    colorGreen: {
        width: 50,
        height: 20,
        backgroundColor: "#33C759",
        marginBottom: "auto",
        marginTop: "auto",
    },
    colorFushia: {
        width: 50,
        height: 20,
        backgroundColor: "#CE3CE8",
        marginBottom: "auto",
        marginTop: "auto",
    },
    colorOrange: {
        width: 50,
        height: 20,
        backgroundColor: "rgb(240,156,56)",
        marginBottom: "auto",
        marginTop: "auto",
    },
    colorBlue: {
        width: 50,
        height: 20,
        backgroundColor: "#0079FF",
        marginBottom: "auto",
        marginTop: "auto",
    },
    colorGold: {
        width: 50,
        height: 20,
        backgroundColor: "#FFCC01",
        marginBottom: "auto",
        marginTop: "auto",
    },
    description: {
        marginTop: 2,
        marginBottom: 2,
        textAlign: "right",
    },
    svg: {
        opacity: 0.8,
    },
    dot: {
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: 24,
    }
}));

const MapLegend = () => {
    const {language} = useContext(GlobalContext);
    const classes = useStyles();

    return (
        <div className={classes.legend}>
            <div className={classes.containerBox}>
                <div className={classes.baptistere}>
                    <Typography className={classes.legendTitle}
                                variant={"h1"}>{l("labelLegendTitle", language)}</Typography>
                    <Typography variant={"h4"}>{l("labelLegendChronology", language)}</Typography>
                    <div className={classes.legendItem}>
                        <div className={classes.colorRed}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendPreciseDate", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <div className={classes.colorBlue}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendPreciseInterval1", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <div className={classes.colorFushia}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendPreciseInterval2", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <div className={classes.colorOrange}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendPreciseInterval5", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <div className={classes.colorGreen}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendPreciseInterval3", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <div className={classes.colorGold}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendPreciseInterval4", language)}
                        </Typography>
                    </div>
                    <Typography variant={"h4"}>{l("labelLegendSource", language)}</Typography>
                    <div className={classes.legendItem}>
                        <div className={classes.dot}>
                            <Dot color="true" size={12} className={classes.dot}/>
                        </div>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendOnlyHistoricalSources", language)}
                        </Typography>
                    </div>
                    <Typography variant={"h4"}>{l("labelBaptisteryRecordReliability", language)}</Typography>
                    <div className={classes.legendItem}>
                        <Diamond color="true" size={24} className={classes.svg}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendReliability1", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <Circle color="true" size={24} className={classes.svg}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendReliability2", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <Rectangle color="true" size={24} className={classes.svg}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelLegendReliability3", language)}
                        </Typography>
                    </div>
                    <Typography variant={"h4"}>{l("labelLegendAccurency", language)}</Typography>
                    <div className={classes.legendItem}>
                        <Halo type={0} className={classes.svg}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelBaptisteryAccuracy0", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <Halo type={1} className={classes.svg}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelBaptisteryAccuracy1", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <Halo type={2} className={classes.svg}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelBaptisteryAccuracy2", language)}
                        </Typography>
                    </div>
                    <div className={classes.legendItem}>
                        <Halo type={3} className={classes.svg}/>
                        <Typography variant={"body1"} className={classes.description}>
                            {l("labelBaptisteryAccuracy3", language)}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapLegend;
