import React, { useContext } from "react";
import PageLayout from "./PageLayout";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import l from "../constants/locales";
import { GlobalContext } from "../contexts/GlobalContext";
import Typography from "@material-ui/core/Typography";
import { MenuBook } from "@material-ui/icons";
import { Link, animateScroll } from "react-scroll";
import ReactMarkdown from "react-markdown";
import breaks from 'remark-breaks';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    container: {
        maxWidth: "700px",
        padding: "42px 74px",
        marginLeft: "auto",
        marginRight: "auto",
        cursor: "default"
    },
    body: {
        lineHeight: "20px",
        marginBottom: "16px",
        textAlign: "justify",
        cursor: "default"
    },
    footNote: {
        fontSize: "0.7rem",
        lineHeight: "20px",
        marginBottom: "16px",
        textAlign: "justify"
    },
    title2: {
        color: "black",
        marginTop: "24px",
        marginBottom: "24px",
        fontWeight: "700",
        fontSize: "20px"
    },
    h1: {
        fontWeight: "bold",
        marginBottom: "24px"
    },
    line: {
        margin: theme.spacing(4, 0)
    },
    buttonContainer: {
        position: "fixed",
        bottom: "0",
        width: "100%",
        display: "flex",

    },
    menuButton: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "24px",
        width: "200px",
        boxShadow: "0px 0px 62px rgba(0,0,0,0.3)"
    },
    menuLink: {
        cursor: "pointer",
        textDecoration: "underline",
        color: "blue"
    },
    menuLi: {
        marginBottom: "12px"
    }
}));

export default function Information() {
    const classes = useStyles();
    const { language } = useContext(GlobalContext);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const content = `
Cette base de données numérique regroupe les baptistères paléochrétiens connus dans le bassin méditerranéen (IIIe – VIIe siècles), en mettant en valeur certains de leurs aspects topographiques, architecturaux, liturgiques et sociaux, pour une contextualisation historique plus ample des données archéologiques et du phénomène de l’initiation chrétienne dans les premiers siècles de son développement.
Ce projet est issu d’un travail de recherche doctoral conduit en cotutelle auprès de l’Université de Bologne (Italie) et de Sorbonne Université , et il s’inscrit dans le programme scientifique du LabEx RESMED « Religions et sociétés dans la Méditerranée » et de l’UMR 8167 Orient & Méditerranée, qui sont aussi responsables de son financement.

En plus de la longue durée des modèles d’habitat et des échanges, l’indicateur principal pour évaluer le dynamisme social et culturel d’un territoire dans le monde méditerranéen tardoantique est le développement de l’activité édilitaire chrétienne, pour lequel on peut envisager, dans les régions les plus aisées, la participation active des communautés locales.
Les édifices cultuels dans la Méditerranée et dans l’Europe continentale, occidentale aussi bien qu’orientale, ont été étudiés souvent à l’échelle régionale ou locale, souvent en privilégiant l’analyse du bâti religieux du point de vue de l’histoire de l’art et de l’architecture, et parfois de leur relation avec la ou les liturgies baptismales, ce qui a permis de produire des typologies formelles bien articulées. La liaison entre baptistères et société a été menée presque essentiellement d’un point de vue des processus de Christianisation et de l’organisation de la cura animarum. De plus, nombreuses études ont examiné les aspects sociaux liés ou dérivés du sacrement du baptême (par exemple, le statut social des catéchumènes, le rôle des parrains, etc.), mais aucune n'a tenté de combiner ces aspects avec la topographie et la structure des baptistères, laissant ainsi quelque peu dans l'ombre la signification de ces installations religieuses en tant que "mémoire sociale".

Une perspective d’analyse différente, développée au cours de ma recherche doctorale et centrée sur les aspects sociaux et culturels liés à la diffusion du baptême et à la topographie des baptistères, a montré comment l’étude globale de ce genre des structures permet d’ajouter des éléments de connaissance importants à l’égard des sociétés du pourtour de la Méditerranée dans la transition entre Antiquité et Moyen Âge. L’initiation chrétienne, avec l’imaginaire et les pratiques qui sont liés à cette cérémonie et qui en dérivent, s’est avérée être un élément fondamental de transformation sociale : en particulier, avec la normalisation du baptême des enfants, à partir de la seconde moitié du Ve siècle, le Christianisme agit comme un mouvement culturel promouvant l’uniformisation de l’identité collective, avec la progressive surimposition entre identité religieuse et identité sociale. Dans ce sens, à l’époque paléochrétienne les baptistères peuvent être considérés non seulement comme des marqueurs de l’activité pastorale, mais aussi comme une expression matérielle de l'appartenance et de la cohésion religieuse et sociale ; en fait, ils agissent comme des "semata", des signes matériels ou des monuments, investissant d'une certaine manière les processus de formation de l'identité religieuse et collective.

La base de données met à la disposition de la communauté scientifique internationale un patrimoine des notices topographiques et archéologiques sur un ample échantillonnage des baptistères dans le pourtour de la Méditerranée.
Ce patrimoine pourra être enrichi dans l’avenir aussi bien avec les nouvelles découvertes, que sur les axes spatial et chronologique, et, entre autres ressources, peut être un instrument utile pour une efficace contextualisation des dynamiques de transformation sociale et religieuse à niveau local et interrégional entre la fin de l’Antiquité et le Moyen Âge.

`;

    return (
        <PageLayout pageType={"Info"}>
            <div className={classes.buttonContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.menuButton}
                    onClick={handleClickOpen}
                    boxShadow={80}
                    startIcon={<MenuBook />}>
                    Menu
                </Button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{l("menuTitle", language)}</DialogTitle>
                <DialogContent>
                    <ul>
                        <li className={classes.menuLi}>
                            <Link
                                activeClass="active"
                                to={l("infosTitle", language)}
                                spy={true}
                                onClick={handleClose}
                                smooth={true}
                                offset={-70}
                                className={classes.menuLink}
                                duration={500}>
                                {l("infosTitle", language)}
                            </Link>
                        </li>
                        <li className={classes.menuLi}>
                            <Link
                                activeClass="active"
                                to={l("infosTitle2", language)}
                                spy={true}
                                onClick={handleClose}
                                smooth={true}
                                offset={-70}
                                className={classes.menuLink}
                                duration={500}>
                                {l("infosTitle2", language)}
                            </Link>
                        </li>
                        <li className={classes.menuLi}>
                            <Link
                                activeClass="active"
                                to={l("infosTitle3", language)}
                                spy={true}
                                onClick={handleClose}
                                smooth={true}
                                offset={-70}
                                className={classes.menuLink}
                                duration={500}>
                                {l("infosTitle3", language)}
                            </Link>
                        </li>
                        <li className={classes.menuLi}>
                            <Link
                                activeClass="active"
                                to={l("infosTitle4", language)}
                                spy={true}
                                onClick={handleClose}
                                smooth={true}
                                offset={-70}
                                className={classes.menuLink}
                                duration={500}>
                                {l("infosTitle4", language)}
                            </Link>
                        </li>
                    </ul>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        {l("actionClose", language)}
                    </Button>
                </DialogActions>
            </Dialog>
            <Container maxWidth={"xl"} className={classes.root}>
                <Card className={classes.container}>
                    <Typography variant={"h1"} className={classes.h1} id={l("infosTitle", language)}>{l("infosTitle", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>
                        <ReactMarkdown plugins={[breaks]} >
                            {l("infoContentP1", language)}
                        </ReactMarkdown>
                    </Typography>
                    <Typography variant={"h1"} className={classes.h1} id={l("infosTitle2", language)}>{l("infosTitle2", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>
                        <ReactMarkdown>
                            {l("infoContentP2", language)}
                        </ReactMarkdown>
                    </Typography>
                    <Typography variant={"h1"} className={classes.h1} id={l("infosTitle3", language)}>{l("infosTitle3", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>
                        <ReactMarkdown>
                            {l("infoContentP3", language)}
                        </ReactMarkdown>
                    </Typography>
                    <Typography variant={"h1"} className={classes.h1} id={l("infosTitle4", language)}>{l("infosTitle4", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>
                        <ReactMarkdown>
                            {l("infoContentP4", language)}
                        </ReactMarkdown>
                    </Typography>

                    {/* <Typography variant={"h1"} className={classes.h1} id={l("infosTitle", language)}>{l("infosTitle", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP1", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP2", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP3", language)}</Typography>
                    <Typography variant={"h2"} className={classes.title2} id={l("infosTitle2", language)}>{l("infosTitle2", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP4", language)}</Typography>
                    <ul>
                        <li><Typography variant={"body1"}>{l("infosL1", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL2", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL3", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL4", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL5", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL6", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL7", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL8", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL9", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL10", language)}</Typography>
                        </li>
                    </ul>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP5", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP6", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP7", language)}</Typography>
                    <ul>
                        <li><Typography variant={"body1"}>{l("infosL11", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL12", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL13", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL14", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL15", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL16", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL17", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL18", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL19", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL20", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL21", language)}</Typography>
                        </li>
                        <li><Typography variant={"body1"}>{l("infosL22", language)}</Typography>
                        </li>
                    </ul>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP8", language)}</Typography>
                    <Typography variant={"h2"} className={classes.title2} id={l("infosTitle3", language)}>{l("infosTitle3", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP9", language)}</Typography>
                    <Typography variant={"body1"} className={classes.body}>{l("infosP10", language)}</Typography> */}
                    <hr className={classes.line} />
                    <Typography variant={"body1"} className={classes.footNote}><ReactMarkdown>{l("footNote1", language)}</ReactMarkdown></Typography>
                    <Typography variant={"body1"} className={classes.footNote}><ReactMarkdown>{l("footNote2", language)}</ReactMarkdown></Typography>
                    <Typography variant={"body1"} className={classes.footNote}><ReactMarkdown>{l("footNote3", language)}</ReactMarkdown></Typography>
                </Card>
            </Container>
        </PageLayout>
    );
}
