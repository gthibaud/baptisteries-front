import React from "react";
import BaptistereContextProvider from "./contexts/BaptistereContext";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import GlobalContextProvider from "./contexts/GlobalContext";
import Baptistery from "./components/Baptistery";
import ListPage from "./components/ListPage";
import FilterContextProvider from "./contexts/FilterContext";

function App() {
  return (
    <GlobalContextProvider>
      <BaptistereContextProvider>
        <FilterContextProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"}>
                <HomePage />
              </Route>
              <Route exact path={"/list"}>
                <ListPage />
              </Route>
              <Route path="/:baptisteryId" component={Baptistery} />
            </Switch>
          </BrowserRouter>
        </FilterContextProvider>
      </BaptistereContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
