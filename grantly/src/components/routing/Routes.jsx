import React from "react";
import LandingPage from "../landingpage/LandingPage";
import GrantContainer from "../grants/GrantContainer";
import RenderRoutes from "./RenderRoutes";
import { SuggestionForm } from "../suggestion/Suggestion";
import PrivateRoute from "./PrivateRoute";
import GrantTable from "../admin/GrantTable";
import About from "../about/About";
import UserSettings from "../../components/userProfile/userSettings";
const routes = [
  {
    key: "APP_ROOT",
    path: "/",
    exact: true,
    component: LandingPage
  },
  {
    key: "ABOUT",
    path: "/about",
    exact: true,
    component: About
  },
  {
    key: "USER_SETTINGS",
    path: "/settings",
    exact: true,
    component: UserSettings
  },
  {
    key: "GRANTS",
    path: "/grants",
    component: RenderRoutes,
    routes: [
      {
        path: "/grants",
        exact: true,
        key: "GRANTS_ROOT",
        component: GrantContainer
      },
      {
        path: "/grants/favorites",
        exact: true,
        key: "GRANTS_FAVORITES",
        component: GrantContainer
      }
    ]
  },
  {
    key: "SUGGESTION",
    path: "/suggestion",
    exact: true,
    key: "GRANTS_ROOT",
    component: GrantContainer
  },
  {
    path: "/grants/favorites",
    exact: true,
    component: PrivateRoute,
    renderComponent: {
      path: "/admin",
      exact: true,
      component: GrantTable
    }
  }
];

export default routes;
