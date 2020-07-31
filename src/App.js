import React from "react";
import BaptistereContextProvider from "./contexts/BaptistereContext";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import GlobalContextProvider from "./contexts/GlobalContext";
import ListPage from "./components/ListPage";
import FilterContextProvider from "./contexts/FilterContext";
import Information from "./components/Information";
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider,
} from "@material-ui/core/styles";

function App() {
    let theme = createMuiTheme({
        typography: {
            h1: {
                padding: 0,
                margin: 0,
                fontWeight: 500,
                fontSize: "1.3rem",
                color: "#0f0f0f"
            },
            h2: {
                padding: 0,
                margin: 0,
                marginBottom: "32px",
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "#a3a3a3"
            },
            h3: {
                marginTop: "16px",
                marginBottom: "4px",
                fontSize: "1.1rem",
                fontWeight: 700
            },
            h4: {
                color: "#a3a3a3",
                marginTop: "16px",
                marginBottom: "4px",
                fontSize: "1rem",
                fontWeight: 700
            },
            body1: {
                fontSize: "0.9rem",
                fontWeight: 400,
                marginTop: "8px",
                marginBottom: "8px"
            },
            body2: {
                fontSize: "0.9rem",
                fontWeight: 500,
                marginTop: "8px",
                marginBottom: "8px"
            }
        }
    });
    theme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={theme}>
            <GlobalContextProvider>
                <BaptistereContextProvider>
                    <FilterContextProvider>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path={"/"}>
                                    <HomePage/>
                                </Route>
                                <Route exact path={"/list"}>
                                    <ListPage/>
                                </Route>
                                <Route exact path={"/information"}>
                                    <Information/>
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </FilterContextProvider>
                </BaptistereContextProvider>
            </GlobalContextProvider>
        </ThemeProvider>
    );
}

export default App;
