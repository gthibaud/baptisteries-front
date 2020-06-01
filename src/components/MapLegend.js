import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import l from '../constants/locales';
import { GlobalContext } from "../contexts/GlobalContext";
import Diamond from '../images/Diamond';
import Circle from '../images/Circle';
import Rectangle from '../images/Rectangle';
import Dot from '../images/Dot';

const useStyles = makeStyles((theme) => ({
    legend: {
        backgroundColor: "white",
        borderRadius: theme.spacing(0.6),
        position: "absolute",
        width: "300px",
        top: theme.spacing(9.3),
        right: theme.spacing(2),
        zIndex: "1000",
        boxShadow: "0px 0px 8px RGBa(0, 0, 0, 0.25)",
        maxWidth: "100%",
        maxHeight: "85vh",
        overflow: "auto",
        padding: 32,
    },
    legendItem: {
        display: "flex",
        justifyContent: "space-between"
    },
    colorRed: {
        width: 50,
        height: 20,
        backgroundColor: "#FF3A2F",
        marginBottom: "auto",
        marginTop: "auto"
    },
    colorGreen: {
        width: 50,
        height: 20,
        backgroundColor: "#33C759",
        marginBottom: "auto",
        marginTop: "auto"
    },
    colorFushia: {
        width: 50,
        height: 20,
        backgroundColor: "#CE3CE8",
        marginBottom: "auto",
        marginTop: "auto"
    },
    colorBlue: {
        width: 50,
        height: 20,
        backgroundColor: "#0079FF",
        marginBottom: "auto",
        marginTop: "auto"
    },
    colorGold: {
        width: 50,
        height: 20,
        backgroundColor: "#FFCC01",
        marginBottom: "auto",
        marginTop: "auto"
    },
    description: {
        marginTop: 2,
        marginBottom: 2
    },
    svg: {
        opacity: 0.8
    }
}));

const MapLegend = () => {
    const { language } = useContext(GlobalContext);
    const classes = useStyles();

    return (
        <div className={classes.legend}>
            <div className={classes.baptistere}>
                <h1>{l('labelLegendTitle', language)}</h1>
                <h4>{l('labelLegendChronology', language)}</h4>
                <div className={classes.legendItem}>
                    <div className={classes.colorRed} />
                    <p className={classes.description}>{l('labelLegendPreciseDate', language)}</p>
                </div>
                <div className={classes.legendItem}>
                    <div className={classes.colorBlue} />
                    <p className={classes.description}>{l('labelLegendPreciseInterval1', language)}</p>
                </div>
                <div className={classes.legendItem}>
                    <div className={classes.colorFushia} />
                    <p className={classes.description}>{l('labelLegendPreciseInterval2', language)}</p>
                </div>
                <div className={classes.legendItem}>
                    <div className={classes.colorGreen} />
                    <p className={classes.description}>{l('labelLegendPreciseInterval3', language)}</p>
                </div>
                <div className={classes.legendItem}>
                    <div className={classes.colorGold} />
                    <p className={classes.description}>{l('labelLegendPreciseInterval4', language)}</p>
                </div>
                <h4>{l('labelLegendFiability', language)}</h4>
                <div className={classes.legendItem}>
                    <Diamond color="true" size={24} className={classes.svg} />
                    <p className={classes.description}>{l('labelLegendLow', language)}</p>
                </div>
                <div className={classes.legendItem}>
                    <Circle color="true" size={24} className={classes.svg} />
                    <p className={classes.description}>{l('labelLegendMid', language)}</p>
                </div>
                <div className={classes.legendItem}>
                    <Rectangle color="true" size={24} className={classes.svg} />
                    <p className={classes.description}>{l('labelLegendHigh', language)}</p>
                </div>
                <h4>{l('labelLegendAccurency', language)}</h4>
                <div className={classes.legendItem}>
                    <p>TODO</p>
                </div>
            </div>
        </div>
    );
};

export default MapLegend;
