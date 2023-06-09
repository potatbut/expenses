import AppMain from "./components/AppMain";
import Login from "./components/Login";
import { APP_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
]

export const privateRoutes = [
  {
    path: APP_ROUTE,
    Component: AppMain
  }
]