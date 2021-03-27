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
