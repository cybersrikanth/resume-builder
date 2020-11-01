import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { Routable } from "../interface/Routable";
import { Home } from "../views/Home";
import { APP_ROUTES } from "./appRoutes";

export const Router = () => {
    const routes: Routable[] = [
        {
            path: APP_ROUTES.home,
            component: Home,
            exact: true,
        },
    ];
    return (
        <Switch>
            {routes.map((route) => (
                <Route {...route} />
            ))}
            <Redirect to={APP_ROUTES.home} />
        </Switch>
    );
};
