import App from "../App";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";


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
    path: "/dashboard",
    element: <ProtectedRoute componente={<Dashboard />} />,
  },
];
