import { ProfilesPage } from "../pages/ProfilesPage/ProfilesPage";
import { MatchesPage } from "../pages/MatchesPage/MatchesPage";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage"
import React from "react";


import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <ProfilesPage />
        </Route>

        <Route exact path={"/matches"}>
          <MatchesPage/>
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>


  );
};