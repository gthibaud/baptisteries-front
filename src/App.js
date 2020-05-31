import React from "react";
import BaptistereContextProvider from "./contexts/BaptistereContext";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <BaptistereContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"}>
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </BaptistereContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
