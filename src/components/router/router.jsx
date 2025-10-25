import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import SkillDetails from "../pages/SkillDetails";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "../routes/PrivateRoute";
import SkillCategories from "../SkillCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/",
        element: <SkillCategories></SkillCategories>

      },
      {
        path: "/skills/:skillId",
        element: 
          
            <SkillDetails />
          
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;