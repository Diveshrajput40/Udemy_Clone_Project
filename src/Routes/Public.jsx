import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default publicRoutes;
