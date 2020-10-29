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
    Slider,
    Switch,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import {makeStyles} from "@material-ui/core/styles";
import {GlobalContext} from "../contexts/GlobalContext";
import {BaptistereContext} from "../contexts/BaptistereContext";
import l from "../constants/locales";
import {FilterContext} from "../contexts/FilterContext";
import Typography from "@material-ui/core/Typography";
import {FiltresFormSelect} from "./FiltresFormSelect";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2, 3),
        marginBottom: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(0.2, 1),
        minWidth: 330,
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
    slider: {
        width: "90%"
    }
}));

function stateReducer(state, action) {
    return {...state, ...action};
}

export default function FiltresContainer({nbResults}) {
    const classes = useStyles();
    const {language} = useContext(GlobalContext);
    const normalizedNbResults = `(${nbResults} ${l("labelResult", language)})`;

    const {
        dateRange,
        maxDepthRange,
        maxPreservedDepthRange,
        filters,
        handleChange,
        handleChangeNumber,
        handleChangeToggle,
        handleRangeNumber,
        cancelAllFilters,
        cancelFilter,
    } = useContext(FilterContext);
    const {regions, buildingCategories, settlementContexts, ecclesiasticalDioceses, civilDioceses, patriarchies, provinces} = useContext(
        BaptistereContext
    );

    const initState = {
        regionLabels: [],
        buildingLabels: [],
        settlementLabels: [],
        ecclesiasticalDiocesesLabels: [],
        civilDiocesesLabels: [],
        patriarchiesLabels: [],
        provincesLabels: []
    };

    const filterChipNotDisplay = ["exclusivelyFromHistoricalSources", "years", "maximumDepth", "maximumPreservedDepth"];

    const [state, dispatch] = useReducer(stateReducer, initState);

    // To display custom marks under Slider components
    const dateMarks = [
        {value: dateRange[0], label: dateRange[0]},
        {value: dateRange[1], label: dateRange[1]}
    ];

    const maxDepthMarks = [{value: maxDepthRange[0], label: maxDepthRange[0]}, {
        value: maxDepthRange[1],
        label: maxDepthRange[1]
    }];

    const maxPreservedDepthMarks = [{
        value: maxPreservedDepthRange[0],
        label: maxPreservedDepthRange[0]
    }, {value: maxPreservedDepthRange[1], label: maxPreservedDepthRange[1]}];

    // Loads the correct labels for the dropdown lists (regarding the current language)
    useEffect(() => {
        loadLabels(language);
    }, [language, regions, buildingCategories, settlementContexts]);

    const loadLabels = (language) => {
        const newRegionsLabels = regions
            .filter((region) => region.cid === language)
            ?.map((res) => res.name);
        const newBuildingCategoriesLabels = buildingCategories
            .filter((buildingCat) => buildingCat.cid === language)
            ?.map((res) => res.name);
        const newSettlementContextsLabels = settlementContexts
            .filter((settlementCont) => settlementCont.cid === language)
            ?.map((res) => res.name);
        const newEcclesiasticalDiocesesLabels = ecclesiasticalDioceses
            .filter((eccleDiocese) => eccleDiocese.cid === language)
            ?.map((res) => res.name);
        const newCivilDiocesesLabels = civilDioceses
            .filter((civilDiocese) => civilDiocese.cid === language)
            ?.map((res) => res.name);
        const newPatriarchiesLabels = patriarchies
            .filter((patriarchy) => patriarchy.cid === language)
            ?.map((res) => res.name);
        const newProvincesLabels = provinces
            .filter((province) => province.cid === language)
            ?.map((res) => res.name);

        dispatch({
            regionLabels: newRegionsLabels,
            buildingLabels: newBuildingCategoriesLabels,
            settlementLabels: newSettlementContextsLabels,
            ecclesiasticalDiocesesLabels: newEcclesiasticalDiocesesLabels,
            civilDiocesesLabels: newCivilDiocesesLabels,
            patriarchiesLabels: newPatriarchiesLabels,
            provincesLabels: newProvincesLabels
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
                        <Typography
                            variant={"h3"}>{l("labelFilters", language)} {normalizedNbResults}</Typography>

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
                <Grid item container alignItems={"center"}>
                    {state.regionLabels && state.regionLabels.length > 0 &&
                    <FiltresFormSelect
                        className={classes.formControl}
                        label={"labelBaptisteryRegion"}
                        selectOptions={state.regionLabels}
                        inputProps={{name: "region", id: "input-region"}}
                        handleChange={handleChange}
                        initValue={filters.region}
                        language={language}
                    />}

                    {state.ecclesiasticalDiocesesLabels && state.ecclesiasticalDiocesesLabels.length > 0 &&
                    <FiltresFormSelect
                        className={classes.formControl}
                        label={"labelBaptisteryDiocese"}
                        selectOptions={state.ecclesiasticalDiocesesLabels}
                        inputProps={{name: "ecclesiasticalDiocese", id: "input-ecclesiastical-diocese"}}
                        handleChange={handleChange}
                        initValue={filters.ecclesiasticalDiocese}
                        language={language}
                    />}

                    {state.civilDiocesesLabels && state.civilDiocesesLabels.length > 0 &&
                    <FiltresFormSelect
                        className={classes.formControl}
                        label={"labelBaptisteryDioceseCivil"}
                        selectOptions={state.civilDiocesesLabels}
                        inputProps={{name: "civilDiocese", id: "input-civil-diocese"}}
                        handleChange={handleChange}
                        initValue={filters.civilDiocese}
                        language={language}
                    />}

                    {state.patriarchiesLabels && state.patriarchiesLabels.length > 0 &&
                    <FiltresFormSelect
                        className={classes.formControl}
                        label={"labelBaptisteryPatriarchy"}
                        selectOptions={state.patriarchiesLabels}
                        inputProps={{name: "patriarchy", id: "input-patriarchy"}}
                        handleChange={handleChange}
                        initValue={filters.patriarchy}
                        language={language}
                    />}

                    {state.provincesLabels && state.provincesLabels.length > 0 &&
                    <FiltresFormSelect
                        className={classes.formControl}
                        label={"labelBaptisteryProvince"}
                        selectOptions={state.provincesLabels}
                        inputProps={{name: "province", id: "input-province"}}
                        handleChange={handleChange}
                        initValue={filters.province}
                        language={language}
                    />}

                    {state.buildingLabels && state.buildingLabels.length > 0 &&
                    <FiltresFormSelect
                        className={classes.formControl}
                        label={"labelBaptisteryBuildingCategory"}
                        selectOptions={state.buildingLabels}
                        inputProps={{name: "buildingCategory", id: "input-building"}}
                        handleChange={handleChange}
                        initValue={filters.buildingCategory}
                        language={language}
                    />}

                    {state.settlementLabels && state.settlementLabels.length > 0 &&
                    <FiltresFormSelect
                        className={classes.formControl}
                        label={"labelBaptisterySettlementContext"}
                        selectOptions={state.settlementLabels}
                        inputProps={{name: "settlementContext", id: "input-settlement"}}
                        handleChange={handleChange}
                        initValue={filters.settlementContext}
                        language={language}
                    />}

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

                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            value={filters.descriptionOfMainFontDimensions}
                            onChange={handleChange}
                            variant={"outlined"}
                            label={l("labelBaptisteryDescriptionOfMainFontDimensions", language)}
                            inputProps={{
                                name: "descriptionOfMainFontDimensions",
                                id: "input-description",
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
                    <FormControl className={classes.formControl}>
                        <Typography variant={"body1"}>
                            {l("labelBaptisteryMaximumDepthMeters", language)}
                        </Typography>
                        <Slider
                            className={classes.slider}
                            value={[filters.maximumDepth[0], filters.maximumDepth[1]]}
                            aria-labelledby="max-depth-slider"
                            onChange={(event, newValues) => handleRangeNumber(event, "maximumDepth", newValues)}
                            getAriaValueText={(value) => value}
                            valueLabelDisplay={"auto"}
                            step={0.01}
                            marks={maxDepthMarks}
                            min={maxDepthRange[0]}
                            max={maxDepthRange[1]}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <Typography variant={"body1"}>
                            {l("labelBaptisteryMaximumPreservedDepthMeters", language)}
                        </Typography>
                        <Slider
                            className={classes.slider}
                            value={[filters.maximumPreservedDepth[0], filters.maximumPreservedDepth[1]]}
                            aria-labelledby="max-pres-depth-slider"
                            onChange={(event, newValues) => handleRangeNumber(event, "maximumPreservedDepth", newValues)}
                            getAriaValueText={(value) => value}
                            valueLabelDisplay={"auto"}
                            step={0.01}
                            marks={maxPreservedDepthMarks}
                            min={maxPreservedDepthRange[0]}
                            max={maxPreservedDepthRange[1]}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <Typography variant={"body1"}>
                            {l("labelLegendChronology", language)}
                        </Typography>
                        <Slider
                            className={classes.slider}
                            value={[filters.years[0], filters.years[1]]}
                            aria-labelledby="date-slider"
                            onChange={(event, newValues) => handleRangeNumber(event, "years", newValues)}
                            getAriaValueText={(value) => value}
                            valueLabelDisplay={"auto"}
                            marks={dateMarks}
                            min={dateRange[0]}
                            max={dateRange[1]}
                        />
                    </FormControl>

                </Grid>
                <Grid item container className={classes.container}>
                    {Object.keys(filters).map((filter) => {
                        if (
                            filters[filter] !== "" &&
                            !filterChipNotDisplay.includes(filter)
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
