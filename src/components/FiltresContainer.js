import React, {useContext, useEffect, useReducer} from "react";
import {
    Button,
    Chip,
    FormControl,
    FormControlLabel,
    Grid,
    Paper,
    InputLabel,
    Select,
    TextField,
    Switch,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import {makeStyles} from "@material-ui/core/styles";
import {GlobalContext} from "../contexts/GlobalContext";
import {BaptistereContext} from "../contexts/BaptistereContext";
import l from "../constants/locales";
import {FilterContext} from "../contexts/FilterContext";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2, 3),
        marginBottom: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    container: {
        margin: theme.spacing(1),
    },
    button: {
        textTransform: "none",
    },
    chip: {
        marginRight: theme.spacing(1),
    },
}));

function stateReducer(state, action) {
    return {...state, ...action};
}

export default function FiltresContainer({nbResults}) {
    const classes = useStyles();
    const {language} = useContext(GlobalContext);
    const normalizedNbResults = `(${nbResults} ${l("labelResult", language)})`;

    const {
        filters,
        handleChange,
        handleChangeNumber,
        handleChangeToggle,
        cancelAllFilters,
        cancelFilter,
    } = useContext(FilterContext);
    const {regions, buildingCategories, settlementContexts} = useContext(
        BaptistereContext
    );

    const initState = {
        regionLabels: [],
        buildingLabels: [],
        settlementLabels: [],
    };

    const [state, dispatch] = useReducer(stateReducer, initState);

    useEffect(() => {
        loadLabels(language);
    }, [language, regions, buildingCategories, settlementContexts]);

    const loadLabels = (language) => {
        const newRegionsLabels = regions
            .filter((region) => region.cid === language)
            ?.map((res) => res.name);
        const newBuildingCategories = buildingCategories
            .filter((buildingCat) => buildingCat.cid === language)
            ?.map((res) => res.name);
        const newSettlementContexts = settlementContexts
            .filter((settlementCont) => settlementCont.cid === language)
            ?.map((res) => res.name);

        dispatch({
            regionLabels: newRegionsLabels,
            buildingLabels: newBuildingCategories,
            settlementLabels: newSettlementContexts,
        });
    };

    return (
        <Paper className={classes.root}>
            <Grid container>
                <Grid
                    className={classes.container}
                    container
                    item
                    xs={12}
                    justify={"space-between"}
                    alignItems={"center"}
                >
                    <Grid item>
                        <h3>{l("labelFilters", language)} {nbResults && nbResults > 0 && normalizedNbResults}</h3>

                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            endIcon={<CancelIcon/>}
                            onClick={cancelAllFilters}
                        >
                            {l("labelCancelResearch", language)}
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    {state.regionLabels && state.regionLabels.length > 0 && (
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="input-region">
                                {l("labelBaptisteryRegion", language)}
                            </InputLabel>
                            <Select
                                autoWidth={true}
                                native
                                value={filters.region}
                                onChange={handleChange}
                                label={l("labelBaptisteryRegion", language)}
                                inputProps={{
                                    name: "region",
                                    id: "input-region",
                                }}
                            >
                                <option aria-label="None" value=""/>
                                {state.regionLabels.map((region) => (
                                    <option key={region} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {state.buildingLabels && state.buildingLabels.length > 0 && (
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="input-building">
                                {l("labelBaptisteryBuildingCategory", language)}
                            </InputLabel>
                            <Select
                                autoWidth={true}
                                native
                                value={filters.buildingCategory}
                                onChange={handleChange}
                                label={l("labelBaptisteryBuildingCategory", language)}
                                inputProps={{
                                    name: "buildingCategory",
                                    id: "input-building",
                                }}
                            >
                                <option aria-label="None" value=""/>
                                {state.buildingLabels.map((building) => (
                                    <option key={building} value={building}>
                                        {building}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {state.settlementLabels && state.settlementLabels.length > 0 && (
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="input-settlement">
                                {l("labelBaptisterySettlementContext", language)}
                            </InputLabel>
                            <Select
                                autoWidth={true}
                                native
                                value={filters.settlementContext}
                                onChange={handleChange}
                                label={l("labelBaptisterySettlementContext", language)}
                                inputProps={{
                                    name: "settlementContext",
                                    id: "input-settlement",
                                }}
                            >
                                <option aria-label="None" value=""/>
                                {state.settlementLabels.map((settlement) => (
                                    <option key={settlement} value={settlement}>
                                        {settlement}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            value={filters.name}
                            onChange={handleChange}
                            variant={"outlined"}
                            label={l("labelBaptisteryName", language)}
                            inputProps={{
                                name: "name",
                                id: "input-name",
                            }}
                        />
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="input-coordinates-accuracy">
                            {l("labelBaptisteryCoordinatesAccuracy", language)}
                        </InputLabel>
                        <Select
                            autoWidth={true}
                            native
                            value={filters.coordinatesAccuracy}
                            onChange={handleChange}
                            label={l("labelBaptisteryCoordinatesAccuracy", language)}
                            inputProps={{
                                name: "coordinatesAccuracy",
                                id: "input-coordinates-accuracy",
                            }}
                        >
                            <option key={"accuracy-none"} aria-label="None" value=""/>
                            <option key={"accuracy-0"} value={0}>
                                {l("labelBaptisteryAccuracy0", language)}
                            </option>
                            <option key={"accuracy-1"} value={1}>
                                {l("labelBaptisteryAccuracy1", language)}
                            </option>
                            <option key={"accuracy-2"} value={2}>
                                {l("labelBaptisteryAccuracy2", language)}
                            </option>
                            <option key={"accuracy-3"} value={3}>
                                {l("labelBaptisteryAccuracy3", language)}
                            </option>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="input-reliability">
                            {l("labelBaptisteryRecordReliability", language)}
                        </InputLabel>
                        <Select
                            autoWidth={true}
                            native
                            value={filters.recordReliability}
                            onChange={handleChange}
                            label={l("labelBaptisteryRecordReliability", language)}
                            inputProps={{
                                name: "recordReliability",
                                id: "input-reliability",
                            }}
                        >
                            <option key={"reliability-none"} aria-label="None" value=""/>
                            <option key={"reliability-1"} value={1}>
                                {l("labelLegendReliability1", language)}
                            </option>
                            <option key={"reliability-2"} value={2}>
                                {l("labelLegendReliability2", language)}
                            </option>
                            <option key={"reliability-3"} value={3}>
                                {l("labelLegendReliability3", language)}
                            </option>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            value={filters.maximumDepth}
                            onChange={handleChangeNumber}
                            variant={"outlined"}
                            label={l("labelBaptisteryMaximumDepthMeters", language)}
                            inputProps={{
                                name: "maximumDepth",
                                id: "input-max-depth",
                                min: 0,
                            }}
                        />
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            value={filters.maximumPreservedDepth}
                            onChange={handleChangeNumber}
                            variant={"outlined"}
                            label={l("labelBaptisteryMaximumPreservedDepthMeters", language)}
                            inputProps={{
                                name: "maximumPreservedDepth",
                                id: "input-max-preserved-depth",
                                min: 0,
                            }}
                        />
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            value={filters.numberOfAdditionalBasins}
                            onChange={handleChangeNumber}
                            variant={"outlined"}
                            label={l("labelBaptisteryNumberBasins", language)}
                            inputProps={{
                                name: "numberOfAdditionalBasins",
                                id: "input-number-add-basins",
                                min: 0,
                            }}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={filters.exclusivelyFromHistoricalSources}
                                    onChange={handleChangeToggle}
                                    color="primary"
                                    name="exclusivelyFromHistoricalSources"
                                    inputProps={{id: "toggle-only-historical-sources"}}
                                />
                            }
                            label={`${l("labelBaptisteryOnlyHistoricalSources", language)}`}
                        />
                    </FormControl>
                </Grid>
                <Grid item className={classes.container}>
                    {Object.keys(filters).map((filter) => {
                        if (
                            filters[filter] !== "" &&
                            filter !== "exclusivelyFromHistoricalSources"
                        ) {
                            const label =
                                filter === "coordinatesAccuracy"
                                    ? l(`labelBaptisteryAccuracy${filters[filter]}`, language)
                                    : filter === "recordReliability"
                                    ? l(`labelLegendReliability${filters[filter]}`, language)
                                    : filters[filter];
                            return (
                                <Chip
                                    key={filter}
                                    className={classes.chip}
                                    label={label}
                                    clickable
                                    color="primary"
                                    onDelete={() => cancelFilter(filter)}
                                    onClick={() => cancelFilter(filter)}
                                    deleteIcon={<CancelIcon/>}
                                />
                            );
                        }
                    })}
                </Grid>
            </Grid>
        </Paper>
    );
}
