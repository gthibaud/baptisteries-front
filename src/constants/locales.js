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
    buttonMoreInformation : {
        fr: "Plus d'informations",
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