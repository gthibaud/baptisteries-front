const locales = {
    labelBaptisteryPreview: {
        fr: "Aperçu",
        en: "Preview",
        it: ""
    },
    labelBaptisteryDates: {
        fr: "Dates",
        en: "Dates",
        it: ""
    },
    labelBaptisteryProvince: {
        fr: "Province",
        en: "Province",
        it: ""
    },
    labelBaptisteryDiocese: {
        fr: "Diocèse religieux",
        en: "",
        it: ""
    },
    labelBaptisteryDiocesePatriarchial: {
        fr: "Diocèse patriarchal",
        en: "",
        it: ""
    },
    labelBaptisteryDioceseCivil: {
        fr: "Diocèse civil",
        en: "",
        it: ""
    },
    buttonMoreInformation : {
        fr: "Plus d'informations",
        en: "",
        it: ""
    },
    labelBaptisteryTechnicalSpecifications : {
        fr: "Spécifications techniques",
        en: "",
        it: ""
    },
    labelBaptisteryGeography : {
        fr: "Géographie",
        en: "",
        it: ""
    },
    labelBaptisteryPlans : {
        fr: "Plans techniques",
        en: "",
        it: ""
    },
    labelBaptisteryCoordinates : {
        fr: "Coordonées",
        en: "",
        it: ""
    },
    labelBaptisteryRegion : {
        fr: "Région",
        en: "",
        it: ""
    },
    labelBaptisteryNumberBasins : {
        fr: "Nombre de bassins additionnels",
        en: "",
        it: ""
    },
    labelBaptisteryMaximumDepth : {
        fr: "Profondeur maximale",
        en: "",
        it: ""
    },
    labelBaptisterymaximumPreservedDepth : {
        fr: "Profondeur maximale préservée",
        en: "",
        it: ""
    },
    labelBaptisterydescriptionOfMainFontDimensions : {
        fr: "Description des dimensions principales",
        en: "",
        it: ""
    },
    labelBaptisteryAdjoiningRoomsDescription : {
        fr: "Descriptions des pièces avoisinantes",
        en: "",
        it: ""
    },
    labelBaptisteryOnlyHistoricalSources : {
        fr: "Cette fiche a été constituée sur la base uniquement de sources historiques.",
        en: "",
        it: ""
    },
    labelBaptisteryNotAvailable : {
        fr: "Les plans techniques de cette fiche ne sont pas encore disponibles.",
        en: "",
        it: ""
    },
    labelBaptisteryAccuracy0 : {
        fr: "précision exacte",
        en: "",
        it: ""
    },
    labelBaptisteryAccuracy1 : {
        fr: "rayon < 500 mètres",
        en: "",
        it: ""
    },
    labelBaptisteryAccuracy2: {
        fr: "rayon ≃ 1 Km",
        en: "",
        it: ""
    },
    labelBaptisteryAccuracy3: {
        fr: "rayon ≃ 10 Km",
        en: "",
        it: ""
    },
    labelLegendTitle: {
        fr: "Légende",
        en: "",
        it: ""
    },
    labelLegendChronology: {
        fr: "Chronologie",
        en: "",
        it: ""
    },
    labelLegendFiability: {
        fr: "Fiabilité des données",
        en: "",
        it: ""
    },
    labelLegendAccurency: {
        fr: "Précision géographique",
        en: "",
        it: ""
    },
    labelLegendPreciseDate: {
        fr: "Date précise",
        en: "",
        it: ""
    },
    labelLegendPreciseInterval1: {
        fr: "201-400 (IIIe/IVe s.)",
        en: "",
        it: ""
    },
    labelLegendPreciseInterval2: {
        fr: "301-500 (IVe/Ve s.)",
        en: "",
        it: ""
    },
    labelLegendPreciseInterval3: {
        fr: "501-700 (VIe/VIIe s.)",
        en: "",
        it: ""
    },
    labelLegendPreciseInterval4: {
        fr: "incertaine",
        en: "",
        it: ""
    },
    labelLegendLow: {
        fr: "faible",
        en: "",
        it: ""
    },
    labelLegendMid: {
        fr: "moyenne",
        en: "",
        it: ""
    },
    labelLegendHigh: {
        fr: "certaine",
        en: "",
        it: ""
    }
}

const l = (value, langage) => {
    return locales[value][langage] || locales[value].en;
};

export default l;

// utilisation :
//       l('labelBaptisteryPreview', 'fr')