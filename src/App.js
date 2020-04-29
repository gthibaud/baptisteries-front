import React from 'react';
import BaptistereContextProvider from './contexts/BaptistereContext';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
    return (
        <BaptistereContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </BaptistereContextProvider>
    );
}

export default App;