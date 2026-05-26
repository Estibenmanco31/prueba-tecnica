import App from "../App";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router-dom";

export let routerApp = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/panel",
    element: <ProtectedRoute componente={<Dashboard />} />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];
