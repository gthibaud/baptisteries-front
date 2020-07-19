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
    let theme = createMuiTheme({});
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
