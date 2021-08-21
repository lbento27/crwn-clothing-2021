import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
//Switch as soon as it find a match, path, route will exit and match with that one, the only that will render

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
