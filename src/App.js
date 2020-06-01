import React from "react";
import BaptistereContextProvider from "./contexts/BaptistereContext";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import GlobalContextProvider from "./contexts/GlobalContext";
import Baptistery from "./components/Baptistery";

function App() {
  return (
    <GlobalContextProvider>
      <BaptistereContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"}>
              <HomePage isOnCardView={true} />
            </Route>
            <Route path='/:baptisteryId' component={Baptistery} />
          </Switch>
        </BrowserRouter>
      </BaptistereContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
