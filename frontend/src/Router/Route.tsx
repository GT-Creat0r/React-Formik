import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Home/Login";
import RegistrationForm from "../Pages/Home/RegistrationForm";
import LandingPage from "../Pages/Home/LandingPage";

const router = createBrowserRouter([
  {
    path: "/landingPage",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "*",
    element: <Login />,
  },
]);

export default router;
