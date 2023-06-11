import AppMain from "./components/AppMain";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { APP_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Login />
  },

  {
    path: SIGNUP_ROUTE,
    element: <SignUp />
  }
]

export const privateRoutes = [
  {
    path: APP_ROUTE,
    element: <AppMain />
  }
]